import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TVFocusGuideView} from '@amazon-devices/react-native-kepler';
import {Tile} from './components/Tile';
import {tiles} from './data/tiles';

export const App = () => {
  const [focusedTileId, setFocusedTileId] = useState('youtube');
  const focusedTile = tiles.find(tile => tile.id === focusedTileId);
  const currentTime = new Date().toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.tint} />
      <View style={styles.page}>
        <View style={styles.topBar}>
          <View style={styles.topActions}>
            <Text style={styles.topIcon} accessibilityLabel="Search">⌕</Text>
            <View style={styles.separator} />
            <Text style={styles.topIcon} accessibilityLabel="Settings">⚙</Text>
            <View style={styles.separator} />
            <Text style={styles.clock}>{currentTime}</Text>
          </View>
        </View>

        <TVFocusGuideView style={styles.tileGrid}>
          {tiles.map(tile => (
            <Tile
              key={tile.id}
              label={tile.label}
              logo={tile.logo}
              isFocused={focusedTileId === tile.id}
              onFocus={() => setFocusedTileId(tile.id)}
              testID={`tile-${tile.id}`}
              accessibilityLabel={tile.accessibilityLabel}
              hasTVPreferredFocus={tile.id === 'youtube'}
            />
          ))}
        </TVFocusGuideView>

        <View style={styles.bottomBar}>
          <Text style={styles.nowPlaying}>
            {focusedTile?.description || 'Choose an app'}
          </Text>
          <Text style={styles.remoteHint}>USE YOUR REMOTE TO NAVIGATE</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#061226',
  },
  tint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(2, 8, 28, 0.28)',
  },
  page: {
    flex: 1,
    paddingHorizontal: 54,
    paddingTop: 22,
    paddingBottom: 20,
  },
  topBar: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  topActions: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
  },
  topIcon: {
    color: '#FFFFFF',
    fontSize: 31,
    fontWeight: '600',
    paddingHorizontal: 16,
  },
  separator: {
    width: 1,
    height: 27,
    backgroundColor: 'rgba(255,255,255,0.72)',
  },
  clock: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '700',
    marginLeft: 18,
    minWidth: 92,
    textAlign: 'right',
  },
  tileGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    rowGap: 24,
  },
  bottomBar: {
    minHeight: 32,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nowPlaying: {
    color: '#D8E9FF',
    fontSize: 13,
    fontWeight: '600',
  },
  remoteHint: {
    color: '#D8E9FF',
    fontSize: 11,
    letterSpacing: 1.2,
  },
});
