import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Link from '../Link';

describe('<Link />', () => {
  it('should render a prop', () => {
    const { container, getByText, findByTestId } = render(
      <Router>
        <Link to="#">Link</Link>
      </Router>
    );

    expect(container).toMatchSnapshot();

    const linkElement = getByText(/link/i);
    expect(linkElement).toBeInTheDocument();
  });
});
