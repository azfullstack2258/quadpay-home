import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from '@/utils/storybook-wrapper';
import Stack from '@/utils/storybook';

import SignInForm from './SignInForm';

storiesOf('Forms/SignInForm', module).add('appearance', () => (
  <Example title="Sign in form appearance">
    <Stack>
      <div className="w-1/3 m-auto p-4 rounded bg-gray shadow-lg">
        <SignInForm onSubmit={(data) => console.log('Sign in data>>>', data)} />
      </div>
    </Stack>
  </Example>
));
