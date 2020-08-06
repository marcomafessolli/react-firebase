import * as React from 'react';

import {Login as LoginComponent} from '../components/login/login'

const Login: React.FC = () => {
  return (
    <>
      <h1>Login:</h1>
      <LoginComponent/>
    </>
  );
}

export { Login };
