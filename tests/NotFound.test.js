import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Test Not Found component', () => {
  test('If the page contains an error message and a Pikachu crying image', () => {
    // access
    renderWithRouter(<NotFound />);
    const errorMessage = screen.getByText(/Page requested not found/i);
    const pikachuImg = screen.getByAltText(/Pikachu crying/i);

    // assert
    expect(errorMessage).toBeInTheDocument();
    expect(pikachuImg.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
