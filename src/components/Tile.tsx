import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export interface TileProps {
  label: string;
  icon: ImageSourcePropType;
  isFocused: boolean;
  onFocus: () => void;
  onBlur?: () => void;
  testID?: string;
  accessibilityLabel?: string;
  hasTVPreferredFocus?: boolean;
}

export const Tile = ({
  label,
  icon,
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
    <View style={[styles.iconFrame, isFocused && styles.iconFrameFocused]}>
      <Image source={icon} style={styles.icon} resizeMode="contain" accessible={false} />
    </View>
    <Text style={[styles.label, isFocused && styles.labelFocused]}>{label}</Text>
    <Text style={[styles.chevron, isFocused && styles.chevronFocused]}>›</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  tile: {
    width: 220,
    height: 148,
    borderRadius: 18,
    backgroundColor: 'rgba(10, 27, 52, 0.88)',
    borderWidth: 2,
    borderColor: 'rgba(118, 159, 207, 0.28)',
    paddingHorizontal: 17,
    paddingVertical: 13,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  focused: {
    borderColor: '#55B4FF',
    backgroundColor: 'rgba(15, 65, 117, 0.96)',
    transform: [{scale: 1.06}],
  },
  iconFrame: {
    width: 76,
    height: 76,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFrameFocused: {
    backgroundColor: 'rgba(68, 165, 255, 0.18)',
  },
  icon: {
    width: 48,
    height: 48,
  },
  label: {
    flex: 1,
    color: '#D7E5F5',
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 12,
  },
  labelFocused: {
    color: '#FFFFFF',
  },
  chevron: {
    color: '#7898BB',
    fontSize: 27,
    marginLeft: 3,
  },
  chevronFocused: {
    color: '#FFFFFF',
  },
});
