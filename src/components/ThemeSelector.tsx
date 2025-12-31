import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '../hooks';
import type {ThemeMode} from '../store/themeStore';

export const ThemeSelector = () => {
  const {colors, spacing, borderRadius, setThemeMode, themeMode} = useTheme();

  const options: {mode: ThemeMode; label: string; icon: string}[] = [
    {mode: 'light', label: 'Light', icon: '☀️'},
    {mode: 'dark', label: 'Dark', icon: '🌙'},
    {mode: 'auto', label: 'Auto', icon: '🔄'},
  ];

  return (
    <View style={[styles.container, {gap: spacing.sm}]}>
      <Text style={[styles.title, {color: colors.text}]}>Theme Mode</Text>
      <View style={[styles.optionsContainer, {gap: spacing.sm}]}>
        {options.map(option => (
          <TouchableOpacity
            key={option.mode}
            style={[
              styles.option,
              {
                backgroundColor:
                  themeMode === option.mode ? colors.primary : colors.surface,
                borderColor: colors.border,
                padding: spacing.md,
                borderRadius: borderRadius.md,
              },
            ]}
            onPress={() => setThemeMode(option.mode)}>
            <Text style={styles.icon}>{option.icon}</Text>
            <Text
              style={[
                styles.label,
                {
                  color:
                    themeMode === option.mode ? '#FFFFFF' : colors.text,
                },
              ]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
  },
  option: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
  },
  icon: {
    fontSize: 24,
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
});
