import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
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
    accessibilityLabel={accessibilityLabel}
    accessibilityRole="button"
    hasTVPreferredFocus={hasTVPreferredFocus}>
    <View style={[styles.logoFrame, isFocused && styles.logoFrameFocused]}>
      <Text style={styles.logo}>{logo}</Text>
    </View>
    <Text style={[styles.label, isFocused && styles.labelFocused]} numberOfLines={1}>
      {label}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  tile: {
    width: '15.6%',
    minWidth: 190,
    height: 184,
    borderRadius: 20,
    backgroundColor: 'rgba(8, 22, 43, 0.84)',
    borderWidth: 2,
    borderColor: 'rgba(180, 207, 239, 0.22)',
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  focused: {
    borderColor: '#55B4FF',
    backgroundColor: 'rgba(18, 65, 115, 0.96)',
    shadowColor: '#168BFF',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.95,
    shadowRadius: 18,
    elevation: 12,
    transform: [{scale: 1.055}],
  },
  logoFrame: {
    width: 88,
    height: 88,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoFrameFocused: {
    backgroundColor: 'rgba(78, 174, 255, 0.22)',
    borderColor: 'rgba(255, 255, 255, 0.65)',
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: '900',
    letterSpacing: -1,
  },
  label: {
    color: '#DCEBFA',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 13,
    maxWidth: '100%',
  },
  labelFocused: {
    color: '#FFFFFF',
  },
});
