import _pick from 'lodash/fp/pick';
import _pathOr from 'lodash/fp/pathOr';
import _intersection from 'lodash/fp/intersection';
import jwt from 'jsonwebtoken';
import { RateLimiter } from 'limiter';

import { UNAUTHENTICATED, SERVICE_UNAVAILABLE } from 'shared/appConstants';

import CustomGraphQLError from 'shared/utils/CustomGraphQLError';

const isPasswordMatching = (validatedUser, password) =>
  _pathOr(null, 'birth_year', validatedUser) === password;
export const getValidatedUser = (userDetails, { password }) => {
  const validatedUser = _pathOr(null, '[0]', userDetails);

  if (!isPasswordMatching(validatedUser, password)) {
    throw new CustomGraphQLError(
      'Invalid username or password',
      UNAUTHENTICATED.code,
    );
  }

  return validatedUser;
};

export const pickQueriedUser = (
  user,
  { userFields, authenticatedUserDetailsFields },
) => _pick(_intersection(userFields, authenticatedUserDetailsFields), user);

export const getJWTToken = user =>
  jwt.sign({ user }, process.env.JWT_APP_SECRET);

export const getUserUsingAuthorizationHeader = authorizationHeader => {
  try {
    const token = authorizationHeader.replace('Bearer ', '');

    const { user } = jwt.verify(token, process.env.JWT_APP_SECRET);

    return user;
  } catch {
    return null;
  }
};

export const checkUserAuthentication = user => {
  const isUserAuthenticated = !!user;

  if (!isUserAuthenticated) {
    throw new CustomGraphQLError('Not authenticated', UNAUTHENTICATED.code);
  }

  return isUserAuthenticated;
};

// NOTE: Please use lru/timeout based cache.
const cache = new Map();
const removeTokens = limiter => limiter.tryRemoveTokens(1);
const shouldSkipRateLimiterForUser = user => user.name === process.env.GOD_USER;
export const checkRateLimitForUser = (user, { ipAddress }) => {
  if (shouldSkipRateLimiterForUser(user)) {
    return;
  }

  const cachedLimiter = cache.get(ipAddress);

  if (cachedLimiter) {
    if (cachedLimiter.getTokensRemaining() < 1) {
      throw new CustomGraphQLError(
        'Too many requests. Please wait few minutes before sending new requests.',
        SERVICE_UNAVAILABLE.code,
      );
    }

    removeTokens(cachedLimiter);

    return;
  }

  const limiter = new RateLimiter(
    Number(process.env.RATE_LIMIT_TOKENS_PER_INTERVAL) || 0,
    process.env.RATE_LIMIT_INTERVAL,
  );

  cache.set(ipAddress, limiter);

  removeTokens(limiter);
};
