import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

const buttonName = 'Próximo pokémon';
const filtersLength = 7;

describe('Test Pokedex', () => {
  test('If pokedex contain the text "Encountered pokémons"', () => {
    // access
    renderWithRouter(<App />);
    const mainTitle = screen
      .getByRole('heading', { name: 'Encountered pokémons', level: 2 });
    const nextPokemonButton = screen.getByRole('button', { name: buttonName });

    // assert
    expect(mainTitle).toBeInTheDocument();
    expect(nextPokemonButton).toBeInTheDocument();
  });

  test('If user click on button, the next pokemon appear on screen', () => {
    // access
    renderWithRouter(<App />);
    const nextPokemonButton = screen.getByRole('button', { name: buttonName });

    // act
    userEvent.click(nextPokemonButton);

    // assert
    const charmander = screen.getByText('Charmander');
    expect(charmander).toBeInTheDocument();

    // act
    userEvent.click(nextPokemonButton);

    // assert
    const caterpie = screen.getByText('Caterpie');
    expect(caterpie).toBeInTheDocument();

    // act
    userEvent.click(nextPokemonButton);

    // assert
    const Ekans = screen.getByText('Ekans');
    expect(Ekans).toBeInTheDocument();

    // act
    userEvent.click(nextPokemonButton);

    // assert
    const alakazam = screen.getByText('Alakazam');
    expect(alakazam).toBeInTheDocument();

    // act
    userEvent.click(nextPokemonButton);

    // assert
    const mew = screen.getByText('Mew');
    expect(mew).toBeInTheDocument();

    // act
    userEvent.click(nextPokemonButton);

    // assert
    const rapidash = screen.getByText('Rapidash');
    expect(rapidash).toBeInTheDocument();

    // act
    userEvent.click(nextPokemonButton);

    // assert
    const snorlax = screen.getByText('Snorlax');
    expect(snorlax).toBeInTheDocument();

    // act
    userEvent.click(nextPokemonButton);

    // assert
    const dragonair = screen.getByText('Dragonair');
    expect(dragonair).toBeInTheDocument();

    // act
    userEvent.click(nextPokemonButton);

    // assert
    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
  });

  test('If has just one pokemon on screen', () => {
    // access
    renderWithRouter(<App />);
    const pokemonName = screen.getAllByTestId('pokemon-name');
    const nextPokemonButton = screen.getByRole('button', { name: buttonName });

    // assert
    expect(pokemonName.length).toBe(1);

    // act
    userEvent.click(nextPokemonButton);

    // assert
    expect(pokemonName.length).toBe(1);
  });

  test('If pokedex has 7 filter buttons', () => {
    // access
    renderWithRouter(<App />);
    const filterButtons = screen.getAllByTestId('pokemon-type-button');

    // assert
    expect(filterButtons.length).toBe(filtersLength);
  });

  test('If user can click on All button', () => {
    // access
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: 'All' });

    // act
    userEvent.click(allButton);

    // assert
    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
  });

  test('If filter buttons has correct name', () => {
    // access
    renderWithRouter(<App />);
    const nextPokemonButton = screen.getByRole('button', { name: buttonName });
    const electricButton = screen.getByRole('button', { name: 'Electric' });
    const fireButton = screen.getByRole('button', { name: 'Fire' });
    const bugButton = screen.getByRole('button', { name: 'Bug' });
    const poisonButton = screen.getByRole('button', { name: 'Poison' });
    const psychicButton = screen.getByRole('button', { name: 'Psychic' });
    const normalButton = screen.getByRole('button', { name: 'Normal' });
    const dragonButton = screen.getByRole('button', { name: 'Dragon' });

    // act
    userEvent.click(electricButton);
    // assert
    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
    expect(nextPokemonButton).toBeDisabled();

    // act
    userEvent.click(fireButton);
    // assert
    const charmander = screen.getByText('Charmander');
    expect(charmander).toBeInTheDocument();
    expect(nextPokemonButton).toBeEnabled();

    // act
    userEvent.click(bugButton);
    // assert
    const caterpie = screen.getByText('Caterpie');
    expect(caterpie).toBeInTheDocument();
    expect(nextPokemonButton).toBeDisabled();

    // act
    userEvent.click(poisonButton);
    // assert
    const ekans = screen.getByText('Ekans');
    expect(ekans).toBeInTheDocument();
    expect(nextPokemonButton).toBeDisabled();

    // act
    userEvent.click(psychicButton);
    // assert
    const alakazam = screen.getByText('Alakazam');
    expect(alakazam).toBeInTheDocument();
    expect(nextPokemonButton).toBeEnabled();

    // act
    userEvent.click(normalButton);
    // assert
    const snorlax = screen.getByText('Snorlax');
    expect(snorlax).toBeInTheDocument();
    expect(nextPokemonButton).toBeDisabled();

    // act
    userEvent.click(dragonButton);
    // assert
    const dragonair = screen.getByText('Dragonair');
    expect(dragonair).toBeInTheDocument();
    expect(nextPokemonButton).toBeDisabled();
  });
});
