import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import _compose from 'lodash/fp/compose';

import routePaths from 'shared/settings/routePaths';

import { AuthenticationContext } from 'shared/context/authentication';

import { CHECK_USER_AUTHENTICATION } from './graphql/queries';

const propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, removeAuthenticationDetails } = useContext(
    AuthenticationContext,
  );

  const { loading } = useQuery(CHECK_USER_AUTHENTICATION, {
    onError: removeAuthenticationDetails,
  });

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: routePaths.login,
              /* eslint-disable-next-line react/prop-types */
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = propTypes;

export default _compose(memo, withRouter)(PrivateRoute);
