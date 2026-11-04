import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  Pressable,
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
}: TileProps) => {
  return (
    <Pressable
      style={[styles.tile, isFocused && styles.focused]}
      onFocus={onFocus}
      onBlur={onBlur}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      hasTVPreferredFocus={hasTVPreferredFocus}>
      <View style={styles.imageContainer}>
        <Image
          source={icon}
          style={styles.icon}
          resizeMode="contain"
          accessible={false}
        />
      </View>

      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: 220,
    height: 150,
    borderRadius: 16,
    backgroundColor: '#111C32',
    borderWidth: 2,
    borderColor: '#263B5D',
    padding: 12,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  focused: {
    borderColor: '#16A8FF',
    backgroundColor: '#163B68',
    transform: [{scale: 1.08}],
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 65,
    height: 65,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});