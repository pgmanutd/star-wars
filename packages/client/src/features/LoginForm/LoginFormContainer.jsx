import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import _compose from 'lodash/fp/compose';

import routePaths from 'shared/settings/routePaths';

import { AuthenticationContext } from 'shared/context/authentication';

import LoginForm from './LoginForm';

const propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  staticContext: PropTypes.object,
};

const defaultProps = {
  staticContext: null,
};

const LoginFormContainer = ({
  match,
  location,
  history,
  staticContext,
  ...rest
}) => {
  const {
    isAuthenticated,
    addAuthenticationDetails,
    removeAuthenticationDetails,
  } = useContext(AuthenticationContext);

  return isAuthenticated ? (
    <Redirect
      to={{
        pathname: routePaths.home,
        state: { from: location },
      }}
    />
  ) : (
    <LoginForm
      {...rest}
      onLoginSuccess={addAuthenticationDetails}
      onLoginError={removeAuthenticationDetails}
    />
  );
};

LoginFormContainer.propTypes = propTypes;
LoginFormContainer.defaultProps = defaultProps;

export default _compose(memo, withRouter)(LoginFormContainer);
