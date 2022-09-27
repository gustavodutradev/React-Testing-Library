import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Test component App', () => {
  test('If nav links Home, About and Favorites are on screen', () => {
    // access
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const favoritesLink = screen.getByRole('link', { name: 'Favorite Pokémons' });

    // assert
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
  });

  test('If user click on Home link, user is redirected to Home page', () => {
    // access
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });

    // assert if Home Link are on screen
    expect(homeLink).toBeInTheDocument();

    // assert if the actual location is Home Page
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');

    // act
    userEvent.click(homeLink);

    // assert if after user click on Home Link, the actual location is Home Page
    expect(pathname).toBe('/');
  });

  test('If user click on About link, user is redirected to About page', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'About' });

    // assert if About link are on screen
    expect(aboutLink).toBeInTheDocument();

    // act
    userEvent.click(aboutLink);

    // assert if after user click on About link, the actual location is About page
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('If user click on Favorites link, user is redirected to Favorites page', () => {
    const { history } = renderWithRouter(<App />);
    const favoritesLink = screen.getByRole('link', { name: 'Favorite Pokémons' });

    // assert if Favorites link are on screen
    expect(favoritesLink).toBeInTheDocument();

    // act
    userEvent.click(favoritesLink);

    // assert if after user click on Favorites link, the actual location is Favorites page
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('If user is redirected do Not Found page if the path is not valid', () => {
    const { history } = renderWithRouter(<App />);

    // act
    history.push('/xablau');

    // assert
    const pikachuImg = screen
      .getByAltText(/Pikachu crying/i);
    expect(pikachuImg).toBeInTheDocument();
  });
});
