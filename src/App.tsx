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
  const [focusedTileId, setFocusedTileId] = useState('games');
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
          <Text style={styles.brand}>BLUE<Text style={styles.brandAccent}>PLAY</Text></Text>
          <View style={styles.nav}>
            <Text style={styles.navActive}>HOME</Text>
            <Text style={styles.navItem}>YOUR SPACE</Text>
          </View>
          <Text style={styles.topTag}>MADE FOR THE BIG SCREEN</Text>
        </View>

        <View style={styles.hero}>
          <Text style={styles.eyebrow}>WELCOME TO YOUR WORLD</Text>
          <Text style={styles.heroTitle}>Everything you love.{ '\n' }All in one place.</Text>
          <Text style={styles.heroCopy}>
            A smarter home for your entertainment.
          </Text>
          <View style={styles.focusPill}>
            <View style={styles.pillDot} />
            <Text style={styles.focusText}>
              {focusedTile?.description || 'Choose a destination to get started'}
            </Text>
          </View>
        </View>

        <View style={styles.exploreHeader}>
          <View>
            <Text style={styles.sectionTitle}>EXPLORE BLUEPLAY</Text>
            <Text style={styles.sectionCopy}>Pick up where you want to go</Text>
          </View>
          <Text style={styles.remoteHint}>USE YOUR REMOTE TO NAVIGATE</Text>
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
          <Text style={styles.footerBrand}>BLUEPLAY</Text>
          <Text style={styles.footerCopy}>YOUR WORLD. YOUR PLAY.</Text>
          <Text style={styles.footerVersion}>A NEW WAY TO WATCH & PLAY</Text>
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
    backgroundColor: 'rgba(3, 10, 27, 0.60)',
  },
  blueGlow: {
    position: 'absolute',
    left: -180,
    top: 150,
    width: 700,
    height: 500,
    borderRadius: 350,
    backgroundColor: 'rgba(0, 116, 255, 0.13)',
  },
  page: {
    flex: 1,
    paddingHorizontal: 68,
    paddingTop: 30,
    paddingBottom: 22,
  },
  topBar: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: '900',
    letterSpacing: 3,
  },
  brandAccent: {
    color: '#36A5FF',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 34,
  },
  navActive: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
    borderBottomWidth: 2,
    borderBottomColor: '#36A5FF',
    paddingBottom: 8,
  },
  navItem: {
    color: '#9EB7D6',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 2,
  },
  topTag: {
    color: '#8DA8C9',
    fontSize: 12,
    letterSpacing: 2,
  },
  hero: {
    flex: 1.25,
    justifyContent: 'center',
    paddingTop: 16,
  },
  eyebrow: {
    color: '#62B8FF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 4,
    marginBottom: 14,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 54,
    lineHeight: 62,
    fontWeight: '900',
    letterSpacing: -1,
  },
  heroCopy: {
    color: '#C2D5EC',
    fontSize: 20,
    marginTop: 14,
  },
  focusPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: 'rgba(9, 31, 62, 0.78)',
    borderWidth: 1,
    borderColor: 'rgba(100, 173, 255, 0.35)',
  },
  pillDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#39A8FF',
    marginRight: 10,
  },
  focusText: {
    color: '#D9E9FB',
    fontSize: 14,
  },
  exploreHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 2,
  },
  sectionCopy: {
    color: '#9EB7D6',
    fontSize: 14,
    marginTop: 5,
  },
  remoteHint: {
    color: '#83A2C6',
    fontSize: 11,
    letterSpacing: 1.5,
    marginBottom: 3,
  },
  tileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 158,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 22,
  },
  footerBrand: {
    color: '#75BFFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
  },
  footerCopy: {
    color: '#A8BED9',
    fontSize: 11,
    letterSpacing: 2,
  },
  footerVersion: {
    color: '#718EAF',
    fontSize: 10,
    letterSpacing: 1.5,
  },
});
