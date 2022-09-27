import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Test pokemon Card', () => {
  test('If pokemons info are on screen', () => {
    // access
    renderWithRouter(<App />);
    const pokeName = screen.getByTestId('pokemon-name');
    const pokeType = screen.getByTestId('pokemon-type');
    const pokeWeight = screen.getByTestId('pokemon-weight');
    const pokeImg = screen.getByAltText(/sprite/i);

    // assert
    expect(pokeName).toBeInTheDocument();
    expect(pokeName).toHaveTextContent('Pikachu');

    expect(pokeType).toBeInTheDocument();
    expect(pokeType).toHaveTextContent('Electric');

    expect(pokeWeight).toBeInTheDocument();
    expect(pokeWeight).toHaveTextContent('Average weight: 6.0 kg');

    expect(pokeImg).toBeInTheDocument();
    expect(pokeImg.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('If pokemon card has a nav link to details', () => {
    // access
    const { history } = renderWithRouter(<App />);
    const pokeDetailsLink = screen.getByRole('link', { name: /more details/i });

    // assert
    expect(pokeDetailsLink).toBeInTheDocument();
    expect(pokeDetailsLink.href).toBe('http://localhost/pokemons/25');

    // act
    userEvent.click(pokeDetailsLink);

    // assert
    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemons/25');

    // access
    const favCheckBox = screen.getByLabelText('Pokémon favoritado?');

    // assert
    expect(favCheckBox).toBeInTheDocument();

    // act
    userEvent.click(favCheckBox);

    // assert
    const starIcon = screen.getByRole('img', { name: /marked as favorite/i });
    expect(starIcon).toBeInTheDocument();
    expect(starIcon.src).toBe('http://localhost/star-icon.svg');
  });
});
