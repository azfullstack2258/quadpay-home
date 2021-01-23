import React from 'react';
import { object, string } from 'yup';

import MESSAGES from '../../../locales';
import { Form, Input, Link, Button } from '../../_shared';

const SignInSchema = object().shape({
  email: string()
    .max(200, MESSAGES['email.invalid'])
    .email(MESSAGES['email.invalid'])
    .required(MESSAGES['email.presence']),
  password: string().required(MESSAGES['password.presence']),
});

const SignInForm = (props) => {
  return (
    <Form schema={SignInSchema} onSubmit={props.onSubmit}>
      <h3 className="mb-6 text-2xl text-center">{MESSAGES['signIn.title']}</h3>

      <Input
        id="email"
        name="email"
        label={MESSAGES['form.email']}
        type="email"
        autoComplete="off"
        required
      />
      <Input
        id="password"
        name="password"
        label={MESSAGES['form.password']}
        type="password"
        required
      />
      <div className="flex flex-col mt-6">
        <Button type="primary" caption={MESSAGES['signIn.action.signIn']} />
        <Link className="m-auto mt-4" to="/sign-up">
          {MESSAGES['signIn.action.signUp']}
        </Link>
        <Link className="m-auto mt-2" to="/reset-password">
          {MESSAGES['signIn.action.resetPassword']}
        </Link>
      </div>
    </Form>
  );
};

export default SignInForm;
