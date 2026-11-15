import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

export interface TileProps {
  label: string;
  logo: string;
  isFocused: boolean;
  onFocus: () => void;
  onBlur?: () => void;
  testID?: string;
  accessibilityLabel?: string;
  hasTVPreferredFocus?: boolean;
}

export const Tile = ({
  label,
  logo,
  isFocused,
  onFocus,
  onBlur,
  testID,
  accessibilityLabel,
  hasTVPreferredFocus,
}: TileProps) => (
  <Pressable
    style={[styles.tile, isFocused && styles.focused]}
    onFocus={onFocus}
    onBlur={onBlur}
    testID={testID}
    accessibilityLabel={accessibilityLabel || label}
    accessibilityRole="button"
    hasTVPreferredFocus={hasTVPreferredFocus}>
    <Text
      style={[
        styles.logo,
        logo.length > 11 && styles.longLogo,
        logo.length > 7 && logo.length <= 11 && styles.mediumLogo,
        isFocused && styles.logoFocused,
      ]}
      numberOfLines={2}
      adjustsFontSizeToFit>
      {logo}
    </Text>
    <Text style={[styles.label, isFocused && styles.labelFocused]} numberOfLines={1}>
      {label}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  tile: {
    width: '15.6%',
    minWidth: 0,
    height: 148,
    borderRadius: 23,
    backgroundColor: 'rgba(5, 10, 24, 0.88)',
    borderWidth: 1.5,
    borderColor: 'rgba(145, 194, 255, 0.34)',
    paddingHorizontal: 9,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  focused: {
    borderColor: '#50D9FF',
    borderWidth: 3,
    backgroundColor: 'rgba(5, 35, 83, 0.96)',
    shadowColor: '#18BFFF',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 19,
    elevation: 14,
    transform: [{scale: 1.045}],
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: -0.8,
    textAlign: 'center',
    width: '100%',
    minHeight: 42,
    textAlignVertical: 'center',
  },
  mediumLogo: {
    fontSize: 22,
    letterSpacing: -0.5,
  },
  longLogo: {
    fontSize: 17,
    letterSpacing: -0.2,
  },
  logoFocused: {
    color: '#FFFFFF',
  },
  label: {
    color: '#DCEBFA',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 9,
    maxWidth: '100%',
    textAlign: 'center',
  },
  labelFocused: {
    color: '#FFFFFF',
  },
});
