import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../pages/blog/Blog';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Blog/i);
  expect(linkElement).toBeInTheDocument();
});
