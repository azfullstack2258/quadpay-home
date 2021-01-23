import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App, { LocationDisplay } from './App';
import MESSAGES from './locales';

import 'mutationobserver-shim';
global.MutationObserver = window.MutationObserver;

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  history.push('/sign-in');
  const { container, getAllByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  fireEvent.click(getAllByText(/sign in/i)[1]);

  expect(container.innerHTML).toMatch('');
});

test('landing on a bad page shows 404 page', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  const { getByRole } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(getByRole('title')).toHaveTextContent(MESSAGES['pageNotFound.title']);
});

test('rendering a component that uses withRouter', () => {
  const history = createMemoryHistory();
  const route = '/sign-up';
  history.push(route);
  const { getByTestId } = render(
    <Router history={history}>
      <LocationDisplay />
    </Router>
  );
  expect(getByTestId('location-display')).toHaveTextContent(route);
});
