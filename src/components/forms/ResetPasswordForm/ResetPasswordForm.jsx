import React from 'react';
import { object, string } from 'yup';

import MESSAGES from '../../../locales';
import { Form, Input, Link, Button } from '../../_shared';

const ResetPasswordSchema = object().shape({
  email: string()
    .max(200, MESSAGES['email.invalid'])
    .email(MESSAGES['email.invalid'])
    .required(MESSAGES['email.presence']),
});

const ResetPasswordForm = (props) => {
  return (
    <Form schema={ResetPasswordSchema} onSubmit={props.onSubmit}>
      <h3 className="mb-6 text-2xl text-center">
        {MESSAGES['resetPassword.title']}
      </h3>

      <Input
        id="email"
        name="email"
        label={MESSAGES['form.email']}
        type="email"
        autoComplete="off"
        required
      />
      <div className="flex flex-col mt-6">
        <Button
          type="primary"
          caption={MESSAGES['resetPassword.action.reset']}
        />
        <Link className="m-auto mt-4" to="/sign-in">
          {MESSAGES['form.action.returnToSignIn']}
        </Link>
      </div>
    </Form>
  );
};

export default ResetPasswordForm;
