import { checkRateLimit } from '../authenticationService';

const rateLimiter = (obj, args, { user, req }) =>
  checkRateLimit(user, { ipAddress: req.ip });

export default rateLimiter;
