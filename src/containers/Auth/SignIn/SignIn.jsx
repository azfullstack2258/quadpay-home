import React from 'react';

import { SignInForm } from '../../../components/forms';

const SignIn = () => (
  <div className="w-1/3 m-auto p-4 rounded bg-gray shadow-lg">
    <SignInForm onSubmit={(data) => console.log('Sign in data>>>', data)} />
  </div>
);

export default SignIn;
