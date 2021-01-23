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
import SignInForm from '../SignInForm';

const getById = queryByAttribute.bind(null, 'id');

const mockSubmission = jest.fn((data) => {
  return Promise.resolve(data);
});

describe('Sign in form', () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <SignInForm onSubmit={mockSubmission} />
      </BrowserRouter>
    );

  it('should display required error when value is invalid', async () => {
    renderComponent();

    const elementsWithText = screen.getAllByText(
      MESSAGES['signIn.action.signIn']
    );
    userEvent.click(elementsWithText[elementsWithText.length - 1]);

    waitFor(() => expect(mockSubmission).not.toBeCalled());
  });

  it('must enter a password', async () => {
    renderComponent();

    const elementsWithText = screen.getAllByText(
      MESSAGES['signIn.action.signIn']
    );
    userEvent.click(elementsWithText[elementsWithText.length - 1]);

    userEvent.tab();
    const result = await screen.findByText(MESSAGES['password.presence']);
    expect(result).toBeTruthy();
  });

  it('must enter a valid email', async () => {
    const { container } = renderComponent();

    userEvent.type(getById(container, 'email'), 'foo');
    const elementsWithText = screen.getAllByText(
      MESSAGES['signIn.action.signIn']
    );
    userEvent.click(elementsWithText[elementsWithText.length - 1]);

    userEvent.tab();
    const result = await screen.findByText(MESSAGES['email.invalid']);
    expect(result).toBeTruthy();
  });
});
