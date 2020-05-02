import getLogger from 'shared/utils/getLogger';
import prettify from 'shared/utils/prettify';

import { fetchUserDetails } from './authenticationRepository';
import {
  getValidatedUser,
  pickQueriedUser,
  getJWTToken,
  checkUserAuthentication,
  checkRateLimitForUser,
} from './authenticationDomainService';

const logger = getLogger(module);

export const loginUser = async (
  user,
  { userFields, authenticatedUserDetailsFields, username, password },
) => {
  logger.info(
    `Called #login with User: ${prettify(user)}, Data: ${prettify({
      userFields,
      authenticatedUserDetailsFields,
      username,
    })}`,
  );

  const userDetails = await fetchUserDetails({
    username,
  });

  logger.info(`Received user details: ${prettify(userDetails)}}`);

  const validatedUser = getValidatedUser(userDetails, { password });

  const queriedUser = pickQueriedUser(validatedUser, {
    userFields,
    authenticatedUserDetailsFields,
  });

  logger.info(`Queried user: ${prettify(queriedUser)}}`);

  const token = getJWTToken(queriedUser);

  return {
    token,
    user: queriedUser,
  };
};

export const isUserAuthenticated = (user) => {
  logger.info(`Called #isUserAuthenticated with User: ${prettify(user)}`);

  return checkUserAuthentication(user);
};

export const checkRateLimit = (user, { ipAddress }) => {
  logger.info(
    `Called #checkRateLimit with User: ${prettify(user)}, Data: ${prettify({
      ipAddress,
    })}`,
  );

  return checkRateLimitForUser(user, { ipAddress });
};
