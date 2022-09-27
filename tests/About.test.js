import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Test About component', () => {
  test('If pokedéx infos are on screen', () => {
    // access
    renderWithRouter(<About />);
    const aboutTitle = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    const firstP = screen.getByText(/This application simulates a Pokédex/i);
    const secondP = screen.getByText(/One can filter Pokémons by type/i);
    const aboutImg = screen.getByAltText('Pokédex');

    // assert
    expect(aboutTitle).toBeInTheDocument();
    expect(firstP).toBeInTheDocument();
    expect(secondP).toBeInTheDocument();
    expect(aboutImg.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
