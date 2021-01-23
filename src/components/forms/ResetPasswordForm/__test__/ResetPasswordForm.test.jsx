import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  render,
  screen,
  waitFor,
  queryByAttribute,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MESSAGES from '../../../../locales';
import ResetPasswordForm from '../ResetPasswordForm';

const getById = queryByAttribute.bind(null, 'id');

const mockSubmission = jest.fn((data) => {
  return Promise.resolve(data);
});

describe('Reset password form', () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <ResetPasswordForm onSubmit={mockSubmission} />
      </BrowserRouter>
    );

  it('should display required error when value is invalid', async () => {
    renderComponent();
    userEvent.click(screen.getByText(MESSAGES['resetPassword.action.reset']));

    waitFor(() => expect(mockSubmission).not.toBeCalled());
  });
  it('must enter a valid email', async () => {
    const { container } = renderComponent();

    userEvent.type(getById(container, 'email'), 'foo');
    userEvent.click(screen.getByText(MESSAGES['resetPassword.action.reset']));

    userEvent.tab();
    const result = await screen.findByText(MESSAGES['email.invalid']);
    expect(result).toBeTruthy();
  });
});
