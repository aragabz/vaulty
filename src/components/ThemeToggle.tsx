import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {useTheme} from '../hooks';

export const ThemeToggle = () => {
  const {colors, spacing, borderRadius, toggleTheme, isDark, themeMode} =
    useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: colors.surface,
            borderColor: colors.border,
            padding: spacing.md,
            borderRadius: borderRadius.md,
          },
        ]}
        onPress={toggleTheme}>
        <Text style={[styles.text, {color: colors.text}]}>
          {isDark ? '🌙' : '☀️'} {themeMode === 'auto' ? 'Auto' : isDark ? 'Dark' : 'Light'} Mode
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
