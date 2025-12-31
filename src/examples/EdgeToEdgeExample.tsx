import React from 'react';
import {View, Text, StyleSheet, ScrollView, Platform} from 'react-native';
import {useTheme, useEdgeToEdge} from '../hooks';

export const EdgeToEdgeExample = () => {
  const {colors, spacing, typography} = useTheme();
  const {insets, top, bottom, left, right} = useEdgeToEdge();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {/* Header with top inset */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: colors.primary,
            paddingTop: top + spacing.md,
            paddingHorizontal: spacing.md,
            paddingBottom: spacing.md,
          },
        ]}>
        <Text style={[typography.h2, {color: '#FFFFFF'}]}>
          Edge-to-Edge Example
        </Text>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          padding: spacing.md,
          paddingBottom: bottom + spacing.md,
        }}>
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.card,
              padding: spacing.md,
              marginBottom: spacing.md,
            },
          ]}>
          <Text style={[typography.h3, {color: colors.text, marginBottom: spacing.sm}]}>
            Safe Area Insets
          </Text>
          <Text style={[typography.body, {color: colors.textSecondary}]}>
            Platform: {Platform.OS}
          </Text>
          <Text style={[typography.body, {color: colors.textSecondary}]}>
            Top: {top}px
          </Text>
          <Text style={[typography.body, {color: colors.textSecondary}]}>
            Bottom: {bottom}px
          </Text>
          <Text style={[typography.body, {color: colors.textSecondary}]}>
            Left: {left}px
          </Text>
          <Text style={[typography.body, {color: colors.textSecondary}]}>
            Right: {right}px
          </Text>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.card,
              padding: spacing.md,
              marginBottom: spacing.md,
            },
          ]}>
          <Text style={[typography.h3, {color: colors.text, marginBottom: spacing.sm}]}>
            Edge-to-Edge Benefits
          </Text>
          <Text style={[typography.body, {color: colors.textSecondary, marginBottom: spacing.sm}]}>
            ✓ Content extends behind system bars
          </Text>
          <Text style={[typography.body, {color: colors.textSecondary, marginBottom: spacing.sm}]}>
            ✓ Immersive full-screen experience
          </Text>
          <Text style={[typography.body, {color: colors.textSecondary, marginBottom: spacing.sm}]}>
            ✓ Modern Android design guidelines
          </Text>
          <Text style={[typography.body, {color: colors.textSecondary}]}>
            ✓ Automatic theme-aware system bars
          </Text>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.success,
              padding: spacing.md,
            },
          ]}>
          <Text style={[typography.body, {color: '#FFFFFF'}]}>
            This content respects safe area insets and won't be hidden by system
            bars or notches!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  content: {
    flex: 1,
  },
  card: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
