import 'react-native';
import {render} from '@testing-library/react-native';
import * as React from 'react';

import {App} from '../src/App';

describe('App', () => {
  it('renders the Apple TV-style home screen without category folders', () => {
    const screen = render(<App />);

    expect(screen.getByText('YouTube')).toBeTruthy();
    expect(screen.getByText('USE YOUR REMOTE TO NAVIGATE')).toBeTruthy();
    expect(screen.queryByText('Your apps')).toBeNull();
    expect(screen.queryByText('Games')).toBeNull();
    expect(screen.queryByText('Apps')).toBeNull();
    expect(screen.queryByText('Media')).toBeNull();
    expect(screen.queryByText('Favourites')).toBeNull();
  });

  it('renders all 18 requested app tiles directly on the home screen', () => {
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
      'JioTV',
      'Browser',
      'Z5',
      'Xstream',
      'Sun NXT',
      'Red Ball 4',
   ].forEach(label => expect(screen.getByText(label)).toBeTruthy());
   })

  it('starts focus on YouTube', () => {
    const screen = render(<App />);
    expect(screen.getByTestId('tile-youtube')).toBeTruthy();
  });
});
