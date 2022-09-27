import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Test Pokemon Details component', () => {
  test('If pokemon detailed infos are on screen', () => {
    // access
    const { history } = renderWithRouter(<App />);
    const pokeDetailsLink = screen.getByRole('link', { name: 'More details' });

    // assert
    expect(pokeDetailsLink).toBeInTheDocument();

    // act
    userEvent.click(pokeDetailsLink);

    // assert
    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemons/25');

    // access
    const detailsTitle = screen.getByRole('heading', { name: /details/i, level: 2 });
    const summaryTitle = screen.getByRole('heading', { name: /summary/i, level: 2 });
    const detailsParagraph = screen.getByText(/this intelligent pokémon/i);

    // assert
    expect(pokeDetailsLink).not.toBeInTheDocument();
    expect(detailsTitle).toBeInTheDocument();
    expect(summaryTitle).toBeInTheDocument();
    expect(detailsParagraph).toBeInTheDocument();

    // access
    const gameLocationsTitle = screen
      .getByRole('heading', { name: /game locations/i, level: 2 });
    const alt = 'Pikachu location';
    const mapImgs = screen.getAllByAltText('Pikachu location');

    // assert
    expect(gameLocationsTitle).toBeInTheDocument();
    expect(mapImgs[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(mapImgs[0].alt).toBe(alt);
    expect(mapImgs[1].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(mapImgs[1].alt).toBe(alt);

    // access
    const favCheckBox = screen.getByLabelText('Pokémon favoritado?');

    // assert
    expect(favCheckBox).toBeInTheDocument();

    // act
    userEvent.click(favCheckBox);

    // assert
    expect(favCheckBox).toBeChecked();

    // act
    userEvent.click(favCheckBox);

    // assert
    expect(favCheckBox).not.toBeChecked();
  });
});
