import 'react-native';
import {render} from '@testing-library/react-native';
import * as React from 'react';

import {App} from '../src/App';

describe('App', () => {
  it('renders the direct app launcher without category folders or top-left branding', () => {
    const screen = render(<App />);

    expect(screen.getByText('Your apps')).toBeTruthy();
    expect(screen.queryByText('BLUEPLAY')).toBeNull();
    expect(screen.queryByText('EXPLORE BLUEPLAY')).toBeNull();
    expect(screen.queryByText('Games')).toBeNull();
    expect(screen.queryByText('Apps')).toBeNull();
    expect(screen.queryByText('Media')).toBeNull();
    expect(screen.queryByText('Favourites')).toBeNull();
  });

  it('renders all requested app tiles directly on the home screen', () => {
    const screen = render(<App />);

    [
      'YouTube',
      'JioHotstar',
      'Netflix',
      'Prime Video',
      'Bitchord',
      'NetMirror',
      'AniFam',
      'Xbox Cloud Gaming',
      'Settings',
      'Downloader',
      'Crunchyroll',
      'PPSSPP',
    ].forEach(label => expect(screen.getByText(label)).toBeTruthy());
  });

  it('starts focus on YouTube', () => {
    const screen = render(<App />);
    expect(screen.getByTestId('tile-youtube')).toBeTruthy();
  });
});
