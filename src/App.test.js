import { render, screen } from '@testing-library/react';
import App from './App';

test('tewsting to see if pokemon is there', () => {
  render(<App />);
  const linkElement = screen.getByText(/films/i);
  expect(linkElement).toBeInTheDocument();
});
