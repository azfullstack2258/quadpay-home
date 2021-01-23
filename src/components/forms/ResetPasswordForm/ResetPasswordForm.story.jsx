import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from '@/utils/storybook-wrapper';
import Stack from '@/utils/storybook';

import ResetPasswordForm from './ResetPasswordForm';

storiesOf('Forms/ResetPasswordForm', module).add('appearance', () => (
  <Example title="Reset password form appearance">
    <Stack>
      <div className="w-1/3 m-auto p-4 rounded bg-gray shadow-lg">
        <ResetPasswordForm
          onSubmit={(data) => console.log('Reset password data>>>', data)}
        />
      </div>
    </Stack>
  </Example>
));
