import React from 'react';
import _noop from 'lodash/fp/noop';

const AuthenticationContext = React.createContext({
  isAuthenticated: false,
  userDetails: undefined,
  addAuthenticationDetails: _noop,
  removeAuthenticationDetails: _noop,
});

export default AuthenticationContext;
