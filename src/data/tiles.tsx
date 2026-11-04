import {ImageSourcePropType} from "react-native";

export interface TileData {
  id: string;
  label: string;
  accessibilityLabel: string;
  description?: string;
  icon: ImageSourcePropType;
}

export const tiles: TileData[] = [
  {
    id: 'games',
    label: 'Games',
    accessibilityLabel: 'Games',
    description: 'Explore your favourite games',
    icon: require('../assets/home.png'),
  },
  {
    id: 'apps',
    label: 'Apps',
    accessibilityLabel: 'Apps',
    description: 'Your favourite applications',
    icon: require('../assets/get-started.png'),
  },
  {
    id: 'media',
    label: 'Media',
    accessibilityLabel: 'Media',
    description: 'Movies, music and entertainment',
    icon: require('../assets/learn-more.png'),
  },
  {
    id: 'favourites',
    label: 'Favourites',
    accessibilityLabel: 'Favourites',
    description: 'Your favourite games and apps',
    icon: require('../assets/debug.png'),
  },
];