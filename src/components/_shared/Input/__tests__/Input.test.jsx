import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import Input from '../Input';
import Form from '../Form';
import 'mutationobserver-shim';
global.MutationObserver = window.MutationObserver;

const getById = queryByAttribute.bind(null, 'id');

describe('<Input />', () => {
  it('should render a prop', async () => {
    const id = 'testId';
    const { container } = render(
      <Form>
        <Input
          id={id}
          name="email"
          label="Email"
          defaultValue="abc@gmail.com"
          prefix="pre"
          suffix="suf"
          icon="outlined-help"
        />
      </Form>
    );

    expect(container).toMatchSnapshot();

    const inputElement = getById(container, id);
    expect(inputElement.classList.contains('has-prefix')).toBe(true);
    expect(inputElement).toBeInTheDocument();
  });
});
