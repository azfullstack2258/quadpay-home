import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from '@/utils/storybook-wrapper';
import Stack from '@/utils/storybook';

import LoadingSpinner from './LoadingSpinner';

storiesOf('Components/Loading', module).add('apperance', () => (
  <Example title="Loading spinner appearance">
    <Stack>
      <LoadingSpinner />
      <LoadingSpinner color="gray" />
      <LoadingSpinner size="100px" color="secondary" />
      <LoadingSpinner size="100px" color="red" />
    </Stack>
  </Example>
));
