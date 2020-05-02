import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routePaths from 'shared/settings/routePaths';

import PrivateRoute from 'features/PrivateRoute';

import Login from 'pages/Login';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

import {
  AuthenticationContext,
  useAuthenticationContext,
} from 'shared/context/authentication';

const App = (props) => {
  const authenticationContextValue = useAuthenticationContext();

  return (
    <div data-testid="App" className="container-fluid" {...props}>
      <div className="row justify-content-center">
        <main className="col-10 py-md-3 pl-md-5 bd-content" role="main">
          <AuthenticationContext.Provider value={authenticationContextValue}>
            <Router>
              <Switch>
                <Route path={routePaths.login} exact component={Login} />
                <PrivateRoute path={routePaths.home} exact component={Home} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </AuthenticationContext.Provider>
        </main>
      </div>
    </div>
  );
};

export default memo(App);
