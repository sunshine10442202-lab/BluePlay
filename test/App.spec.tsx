import 'react-native';
import {render} from '@testing-library/react-native';
import * as React from 'react';

import {App} from '../src/App';

describe('App', () => {
  it('renders the BluePlay home screen', () => {
    const screen = render(<App />);

    expect(screen.getByText('BLUEPLAY')).toBeTruthy();
    expect(screen.getByText('WELCOME TO YOUR WORLD')).toBeTruthy();
    expect(screen.getByText('Everything you love.')).toBeTruthy();
  });

  it('renders the main launcher tiles', () => {
    const screen = render(<App />);

    expect(screen.getByTestId('tile-games')).toBeTruthy();
    expect(screen.getByTestId('tile-apps')).toBeTruthy();
    expect(screen.getByTestId('tile-media')).toBeTruthy();
    expect(screen.getByTestId('tile-favourites')).toBeTruthy();
  });
});
