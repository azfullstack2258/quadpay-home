import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

describe('<Button />', () => {
  it('should render a prop', () => {
    const { container, getByText } = render(
      <Button type="primary" caption="Primary button" />
    );

    expect(container).toMatchSnapshot();
    expect(container.firstChild.classList.contains('btn-primary')).toBe(true);

    const buttonElement = getByText(/primary button/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
