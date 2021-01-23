import React from 'react';

import { SignUpForm } from '../../../components/forms';

const SignUp = () => (
  <div className="w-1/3 m-auto p-4 rounded bg-gray shadow-lg">
    <SignUpForm onSubmit={(data) => console.log('Sign up data>>>', data)} />
  </div>
);

export default SignUp;
