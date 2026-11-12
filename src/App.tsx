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

  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.tint} />
      <View style={styles.blueGlow} />

      <View style={styles.page}>
        <View style={styles.topBar}>
          <Text style={styles.topTag}>MADE FOR THE BIG SCREEN</Text>
        </View>

        <View style={styles.headingRow}>
          <View>
            <Text style={styles.heading}>Your apps</Text>
            <Text style={styles.subheading}>Everything you enjoy, all in one place.</Text>
          </View>
          <View style={styles.focusPill}>
            <View style={styles.pillDot} />
            <Text style={styles.focusText}>
              {focusedTile?.description || 'Choose an app'}
            </Text>
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

        <View style={styles.remoteHintRow}>
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
    backgroundColor: 'rgba(3, 10, 27, 0.48)',
  },
  blueGlow: {
    position: 'absolute',
    left: -180,
    top: 150,
    width: 700,
    height: 500,
    borderRadius: 350,
    backgroundColor: 'rgba(0, 116, 255, 0.16)',
  },
  page: {
    flex: 1,
    paddingHorizontal: 68,
    paddingTop: 34,
    paddingBottom: 28,
  },
  topBar: {
    height: 42,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  topTag: {
    color: '#B7D2F1',
    fontSize: 12,
    letterSpacing: 2,
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 26,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  subheading: {
    color: '#C2D5EC',
    fontSize: 17,
    marginTop: 6,
  },
  focusPill: {
    maxWidth: 420,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: 'rgba(9, 31, 62, 0.82)',
    borderWidth: 1,
    borderColor: 'rgba(100, 173, 255, 0.42)',
  },
  pillDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#39A8FF',
    marginRight: 10,
  },
  focusText: {
    color: '#E5F1FF',
    fontSize: 14,
  },
  tileGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    rowGap: 22,
  },
  remoteHintRow: {
    alignItems: 'flex-end',
    marginTop: 18,
  },
  remoteHint: {
    color: '#A7C1E0',
    fontSize: 11,
    letterSpacing: 1.5,
  },
});
