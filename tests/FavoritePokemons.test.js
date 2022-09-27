import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

describe('Test the Favorite Pokemons component', () => {
  test('If the message "No favorite pokemon found" appear on screen', () => {
    // access
    renderWithRouter(<FavoritePokemons />);

    const noFavoritePokemonMessage = screen.getByText('No favorite pokemon found');

    const favoritePokemonTitle = screen
      .getByRole('heading', { name: 'Favorite pokémons', level: 2 });

    // assert
    expect(noFavoritePokemonMessage).toBeInTheDocument();

    expect(favoritePokemonTitle).toBeInTheDocument();
  });
});
