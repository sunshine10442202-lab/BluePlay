export interface TileData {
  id: string;
  label: string;
  accessibilityLabel: string;
  description: string;
  logo: string;
}

export const tiles: TileData[] = [
  {id: 'youtube', label: 'YouTube', accessibilityLabel: 'YouTube', description: 'Watch videos on YouTube', logo: '▶ YouTube'},
  {id: 'jiohotstar', label: 'JioHotstar', accessibilityLabel: 'JioHotstar', description: 'Stream on JioHotstar', logo: 'JioHotstar'},
  {id: 'netflix', label: 'Netflix', accessibilityLabel: 'Netflix', description: 'Watch Netflix', logo: 'NETFLIX'},
  {id: 'prime-video', label: 'Prime Video', accessibilityLabel: 'Prime Video', description: 'Watch Prime Video', logo: 'prime video'},
  {id: 'bitchord', label: 'Bitchord', accessibilityLabel: 'Bitchord', description: 'Open Bitchord', logo: 'Bitchord'},
  {id: 'netmirror', label: 'NetMirror', accessibilityLabel: 'NetMirror', description: 'Open NetMirror', logo: 'NetMirror'},
  {id: 'anifam', label: 'AniFam', accessibilityLabel: 'AniFam', description: 'Open AniFam', logo: 'AniFam'},
  {id: 'xbox-cloud', label: 'Xbox Cloud Gaming', accessibilityLabel: 'Xbox Cloud Gaming', description: 'Play with Xbox Cloud Gaming', logo: 'XBOX'},
  {id: 'settings', label: 'Settings', accessibilityLabel: 'Settings', description: 'Device settings', logo: '⚙'},
  {id: 'downloader', label: 'Downloader', accessibilityLabel: 'Downloader', description: 'Open Downloader', logo: '↓'},
  {id: 'crunchyroll', label: 'Crunchyroll', accessibilityLabel: 'Crunchyroll', description: 'Watch Crunchyroll', logo: 'Crunchyroll'},
  {id: 'ppsspp', label: 'PPSSPP', accessibilityLabel: 'PPSSPP', description: 'Play PSP games with PPSSPP', logo: 'PPSSPP'},
  {id: 'jiotv', label: 'JioTV', accessibilityLabel: 'JioTV', description: 'Watch live TV on JioTV', logo: 'JioTV'},
  {id: 'browser', label: 'Browser', accessibilityLabel: 'Browser', description: 'Browse the web', logo: 'BROWSER'},
  {id: 'z5', label: 'Z5', accessibilityLabel: 'Z5', description: 'Open Z5', logo: 'Z5'},
  {id: 'xstream', label: 'Xstream', accessibilityLabel: 'Xstream', description: 'Watch on Xstream', logo: 'Xstream'},
  {id: 'sunnxt', label: 'Sun NXT', accessibilityLabel: 'Sun NXT', description: 'Watch Sun NXT', logo: 'SUN NXT'},
  {id: 'red-ball-4', label: 'Red Ball 4', accessibilityLabel: 'Red Ball 4', description: 'Play Red Ball 4', logo: '🔴 4'},
];
