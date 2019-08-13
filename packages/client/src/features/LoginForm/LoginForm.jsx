import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import _isEmpty from 'lodash/fp/isEmpty';
import _compose from 'lodash/fp/compose';

import { LOGIN_USER } from './graphql/mutations';

const getValueFromEvent = event => event.target.value;

const propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
  onLoginError: PropTypes.func.isRequired,
};

const LoginForm = ({ onLoginSuccess, onLoginError, ...rest }) => {
  // TODO: Move field and button onChange/disabled logic to a custom hook
  // for eg. useCustomForm which will encapsulate disabled and
  // onChange logic along with #event.target.value
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: onLoginSuccess,
  });

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      loginUser({ variables: { username, password } }).catch(onLoginError);
    },
    [loginUser, onLoginError, password, username],
  );

  const handleUsernameChange = useCallback(
    _compose(setUsername, getValueFromEvent),
    [],
  );

  const handlePasswordChange = useCallback(
    _compose(setPassword, getValueFromEvent),
    [],
  );

  const isInputDisabled = loading;
  const isSubmitDisabled =
    loading || _isEmpty(username.trim()) || _isEmpty(password.trim());

  return (
    <form
      data-testid="LoginForm"
      className="jumbotron w-50 mx-auto"
      {...rest}
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          name="username"
          disabled={isInputDisabled}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          name="password"
          disabled={isInputDisabled}
          onChange={handlePasswordChange}
        />
      </div>
      {error && <p className="text-danger">Invalid username or password</p>}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={isSubmitDisabled}
      >
        {loading ? (
          <>
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            />
            Logging...
          </>
        ) : (
          'Login'
        )}
      </button>
    </form>
  );
};

LoginForm.propTypes = propTypes;

export default memo(LoginForm);
