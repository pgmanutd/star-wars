import React, { memo } from 'react';

import Title from 'shared/components/Title';

import LoginForm from 'features/LoginForm';

const Login = () => {
  return (
    <section data-testid="Login" className="text-center">
      <Title size="small">Star Wars Login</Title>
      <LoginForm />
    </section>
  );
};

export default memo(Login);
