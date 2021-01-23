import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from '@/utils/storybook-wrapper';
import Stack from '@/utils/storybook';

import Input from './Input';
import Form from './Form';

storiesOf('Components/Input', module)
  .add('appearance', () => (
    <Example title="Input appearance">
      <Stack>
        <Form onSubmit={(data) => console.log(data)}>
          <Input
            id="name"
            name="name"
            label="Name"
            defaultValue="Andres Acosta"
            helperText="Name is required"
          />
          <div className="my-2" />
          <Input
            id="email"
            name="email"
            label="Email"
            defaultValue="andres.acosta@gmail.com"
            required
          />
          <div className="my-2" />
          <Input
            id="birthday"
            name="birthday"
            label="Birthday"
            defaultValue="01/01/2020"
            helperText="Your birthday"
            disabled
          />
        </Form>
      </Stack>
    </Example>
  ))
  .add('with prefix/suffix/icon', () => (
    <Example title="Input appearance">
      <Stack>
        <div className="max-w-sm">
          <Form onSubmit={(data) => console.log(data)}>
            <Input
              id="name"
              name="name"
              label="Label"
              defaultValue="Value"
              prefix="$"
              suffix="Suf"
              icon="outlined-help"
            />
            <div className="my-2" />
            <Input
              id="name"
              name="name"
              label="Label"
              defaultValue="Value"
              prefix="Pre"
            />
            <div className="my-2" />
            <Input
              id="name"
              name="name"
              label="Label"
              defaultValue="Value"
              suffix="Suf"
            />
            <div className="my-2" />
            <Input
              id="name"
              name="name"
              label="Label"
              defaultValue="Value"
              icon="outlined-help"
            />
            <div className="my-2" />
            <Input
              id="name"
              name="name"
              label="Label"
              defaultValue="Value"
              prefix="Pre"
              icon="outlined-help"
            />
          </Form>
        </div>
      </Stack>
    </Example>
  ));
