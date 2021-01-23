import React from 'react';
import { object, string } from 'yup';

import MESSAGES from '../../../locales';
import { Form, Input, Link, Button } from '../../_shared';

const SignUpSchema = object().shape({
  name: string().required(MESSAGES['name.presence']),
  email: string()
    .max(200, MESSAGES['email.invalid'])
    .email(MESSAGES['email.invalid'])
    .required(MESSAGES['email.presence']),
  password: string()
    .required(MESSAGES['password.presence'])
    .min(16, MESSAGES['password.minLength']),
});

const SignUpForm = (props) => {
  return (
    <Form schema={SignUpSchema} onSubmit={props.onSubmit}>
      <h3 className="mb-6 text-2xl text-center">{MESSAGES['signUp.title']}</h3>
      <Input
        id="name"
        name="name"
        label={MESSAGES['form.name']}
        type="text"
        autoComplete="off"
        required
      />
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
        <Button
          className="mb-3"
          type="primary"
          caption={MESSAGES['signUp.action.signUp']}
        />
        <Link className="m-auto mt-3" to="/sign-in">
          {MESSAGES['form.action.returnToSignIn']}
        </Link>
      </div>
    </Form>
  );
};

export default SignUpForm;
