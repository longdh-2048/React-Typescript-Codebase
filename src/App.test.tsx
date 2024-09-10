import React from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Vite + React', async () => {
  render(<App />);
  expect(screen.getByText('Vite + React')).toBeDefined();
});
