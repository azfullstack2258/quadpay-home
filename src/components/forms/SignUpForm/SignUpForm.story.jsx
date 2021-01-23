import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from '@/utils/storybook-wrapper';
import Stack from '@/utils/storybook';

import SignUpForm from './SignUpForm';

storiesOf('Forms/SignUpForm', module).add('appearance', () => (
  <Example title="Sign up form appearance">
    <Stack>
      <div className="w-1/3 m-auto p-4 rounded bg-gray shadow-lg">
        <SignUpForm onSubmit={(data) => console.log('Sign up data>>>', data)} />
      </div>
    </Stack>
  </Example>
));
