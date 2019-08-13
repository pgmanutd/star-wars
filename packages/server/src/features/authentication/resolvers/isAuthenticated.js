import { isUserAuthenticated } from '../authenticationService';

const isAuthenticated = (obj, args, { user }) => isUserAuthenticated(user);

export default isAuthenticated;
