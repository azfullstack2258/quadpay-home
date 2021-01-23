import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from '../../../utils/storybook-wrapper';
import Stack from '../../../utils/storybook';

import Button from './Button';

storiesOf('Components/Button', module)
  .add('appearance', () => (
    <Example title="Button appearance">
      <Stack>
        <Button type="primary" caption="Primary button" />
        <Button type="secondary" caption="Secondary button" />
        <Button type="neutral" caption="Neutral button" />
        <Button type="flat" caption="Flat button" />
        <Button type="primary" caption="Disabled button" disabled />
      </Stack>
    </Example>
  ))
  .add('with icon', () => (
    <Example title="Button appearance">
      <Stack>
        <Button type="primary" caption="Primary button" icon="temple" />
        <Button type="secondary" caption="Secondary button" icon="temple" />
        <Button type="neutral" caption="Neutral button" icon="temple" />
        <Button type="flat" caption="Flat button" icon="temple" />
        <Button
          type="primary"
          caption="Disabled button"
          icon="temple"
          disabled
        />
      </Stack>
    </Example>
  ));
