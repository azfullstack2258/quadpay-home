import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from '@/utils/storybook-wrapper';
import Stack from '@/utils/storybook';

import Link from './Link';

storiesOf('Components/Link', module).add('appearance', () => (
  <Example title="Link appearance">
    <Stack>
      <Link to="#" onClick={() => console.log('Link clicked')}>
        Link
      </Link>
    </Stack>
  </Example>
));
