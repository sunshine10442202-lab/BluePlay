
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from 'react-native';
import {TVFocusGuideView} from '@amazon-devices/react-native-kepler';
import {Tile} from './components/Tile';
import {tiles} from './data/tiles';

export const App = () => {
  const [focusedTileId, setFocusedTileId] = useState('games');

  const focusedTile = tiles.find(t => t.id === focusedTileId);

  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
      resizeMode="cover">

      <View style={styles.overlay} />

      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.logo}>BLUE<Text style={styles.logoBlue}>PLAY</Text></Text>
          <Text style={styles.topLabel}>YOUR GAMING UNIVERSE</Text>
        </View>

        <View style={styles.header}>
          <Text style={styles.welcome}>WELCOME TO</Text>
          <Text style={styles.title}>BLUEPLAY</Text>
          <Text style={styles.subtitle}>
            {focusedTile?.description || 'Your entertainment. Your world.'}
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>EXPLORE</Text>
          <Text style={styles.sectionSubtitle}>
            Choose your destination
          </Text>
        </View>

        <TVFocusGuideView style={styles.tileRow}>
          {tiles.map(tile => (
            <Tile
              key={tile.id}
              label={tile.label}
              icon={tile.icon}
              isFocused={focusedTileId === tile.id}
              onFocus={() => setFocusedTileId(tile.id)}
              testID={`tile-${tile.id}`}
              accessibilityLabel={tile.accessibilityLabel}
              hasTVPreferredFocus={tile.id === 'games'}
            />
          ))}
        </TVFocusGuideView>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            BLUEPLAY  •  MADE FOR YOUR TV
          </Text>
          <Text style={styles.footerText}>
            Use your remote to navigate
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#050B18',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(3, 10, 27, 0.78)',
  },
  container: {
    flex: 1,
    paddingHorizontal: 64,
    paddingVertical: 28,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 3,
  },
  logoBlue: {
    color: '#16A8FF',
  },
  topLabel: {
    color: '#8CAACB',
    fontSize: 14,
    letterSpacing: 3,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
  },
  welcome: {
    color: '#8CAACB',
    fontSize: 20,
    letterSpacing: 5,
    fontWeight: '600',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 68,
    fontWeight: '900',
    letterSpacing: 5,
  },
  subtitle: {
    color: '#B8D2EC',
    fontSize: 22,
    marginTop: 12,
  },
  sectionHeader: {
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  sectionSubtitle: {
    color: '#8CAACB',
    fontSize: 16,
    marginTop: 5,
  },
  tileRow: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  footerText: {
    color: '#7794B5',
    fontSize: 13,
    letterSpacing: 1,
  },
});