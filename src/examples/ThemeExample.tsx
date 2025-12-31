import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useTheme} from '../hooks';
import {ThemeToggle} from '../components/ThemeToggle';
import {ThemeSelector} from '../components/ThemeSelector';

export const ThemeExample = () => {
  const {colors, spacing, borderRadius, typography, isDark, themeMode} =
    useTheme();

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}
      contentContainerStyle={{padding: spacing.lg, gap: spacing.lg}}>
      <Text style={[typography.h1, {color: colors.text}]}>Theme Example</Text>

      <View
        style={[
          styles.section,
          {
            backgroundColor: colors.card,
            padding: spacing.md,
            borderRadius: borderRadius.md,
          },
        ]}>
        <Text style={[typography.h3, {color: colors.text, marginBottom: spacing.sm}]}>
          Current Theme
        </Text>
        <Text style={[typography.body, {color: colors.textSecondary}]}>
          Mode: {themeMode}
        </Text>
        <Text style={[typography.body, {color: colors.textSecondary}]}>
          Active: {isDark ? 'Dark' : 'Light'}
        </Text>
      </View>

      <View
        style={[
          styles.section,
          {
            backgroundColor: colors.card,
            padding: spacing.md,
            borderRadius: borderRadius.md,
          },
        ]}>
        <Text style={[typography.h3, {color: colors.text, marginBottom: spacing.sm}]}>
          Quick Toggle
        </Text>
        <ThemeToggle />
      </View>

      <View
        style={[
          styles.section,
          {backgroundColor: colors.card, borderRadius: borderRadius.md},
        ]}>
        <ThemeSelector />
      </View>

      <View
        style={[
          styles.section,
          {
            backgroundColor: colors.card,
            padding: spacing.md,
            borderRadius: borderRadius.md,
          },
        ]}>
        <Text style={[typography.h3, {color: colors.text, marginBottom: spacing.sm}]}>
          Color Palette
        </Text>
        <View style={{gap: spacing.sm}}>
          <ColorRow label="Primary" color={colors.primary} />
          <ColorRow label="Secondary" color={colors.secondary} />
          <ColorRow label="Success" color={colors.success} />
          <ColorRow label="Warning" color={colors.warning} />
          <ColorRow label="Error" color={colors.error} />
          <ColorRow label="Background" color={colors.background} />
          <ColorRow label="Surface" color={colors.surface} />
          <ColorRow label="Text" color={colors.text} />
        </View>
      </View>
    </ScrollView>
  );
};

const ColorRow = ({label, color}: {label: string; color: string}) => {
  const {colors, spacing, borderRadius} = useTheme();
  return (
    <View style={[styles.colorRow, {gap: spacing.sm}]}>
      <View
        style={[
          styles.colorBox,
          {
            backgroundColor: color,
            borderRadius: borderRadius.sm,
            borderWidth: 1,
            borderColor: colors.border,
          },
        ]}
      />
      <Text style={[styles.colorLabel, {color: colors.text}]}>{label}</Text>
      <Text style={[styles.colorValue, {color: colors.textSecondary}]}>
        {color}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  colorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorBox: {
    width: 40,
    height: 40,
  },
  colorLabel: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  colorValue: {
    fontSize: 12,
    fontFamily: 'monospace',
  },
});
