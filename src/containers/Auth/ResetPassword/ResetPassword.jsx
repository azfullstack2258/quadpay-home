import React from 'react';

import { ResetPasswordForm } from '../../../components/forms';

const ResetPassword = () => (
  <div className="w-1/3 m-auto p-4 rounded bg-gray shadow-lg">
    <ResetPasswordForm
      onSubmit={(data) => console.log('Reset password data>>>', data)}
    />
  </div>
);

export default ResetPassword;
