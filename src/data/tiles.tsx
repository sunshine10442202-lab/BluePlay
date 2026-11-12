export interface TileData {
  id: string;
  label: string;
  accessibilityLabel: string;
  description: string;
  logo: string;
}

export const tiles: TileData[] = [
  {id: 'youtube', label: 'YouTube', accessibilityLabel: 'YouTube', description: 'Watch videos on YouTube', logo: '▶'},
  {id: 'jiohotstar', label: 'JioHotstar', accessibilityLabel: 'JioHotstar', description: 'Stream on JioHotstar', logo: 'J'},
  {id: 'netflix', label: 'Netflix', accessibilityLabel: 'Netflix', description: 'Watch Netflix', logo: 'N'},
  {id: 'prime-video', label: 'Prime Video', accessibilityLabel: 'Prime Video', description: 'Watch Prime Video', logo: 'prime'},
  {id: 'bitchord', label: 'Bitchord', accessibilityLabel: 'Bitchord', description: 'Open Bitchord', logo: 'B'},
  {id: 'netmirror', label: 'NetMirror', accessibilityLabel: 'NetMirror', description: 'Open NetMirror', logo: 'N'},
  {id: 'anifam', label: 'AniFam', accessibilityLabel: 'AniFam', description: 'Open AniFam', logo: 'A'},
  {id: 'xbox-cloud', label: 'Xbox Cloud Gaming', accessibilityLabel: 'Xbox Cloud Gaming', description: 'Play with Xbox Cloud Gaming', logo: 'X'},
  {id: 'settings', label: 'Settings', accessibilityLabel: 'Settings', description: 'Device settings', logo: '⚙'},
  {id: 'downloader', label: 'Downloader', accessibilityLabel: 'Downloader', description: 'Open Downloader', logo: '↓'},
  {id: 'crunchyroll', label: 'Crunchyroll', accessibilityLabel: 'Crunchyroll', description: 'Watch Crunchyroll', logo: 'CR'},
  {id: 'ppsspp', label: 'PPSSPP', accessibilityLabel: 'PPSSPP', description: 'Play PSP games with PPSSPP', logo: 'P'},
];
