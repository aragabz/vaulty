import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '../hooks';
import {ThemeToggle} from '../components/ThemeToggle';
import {ThemeSelector} from '../components/ThemeSelector';

export const HomeScreen = () => {
  const {colors, spacing} = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <ScrollView 
        contentContainerStyle={[
          styles.content, 
          {
            gap: spacing.lg,
            paddingTop: insets.top + spacing.md,
            paddingBottom: insets.bottom + spacing.md,
            paddingLeft: insets.left + spacing.md,
            paddingRight: insets.right + spacing.md,
          }
        ]}
      >
        <Text style={[styles.title, {color: colors.text}]}>Home Screen</Text>
        
        <View style={[styles.card, {backgroundColor: colors.card, padding: spacing.md}]}>
          <Text style={[styles.cardTitle, {color: colors.text}]}>
            Quick Toggle
          </Text>
          <ThemeToggle />
        </View>

        <View style={[styles.card, {backgroundColor: colors.card}]}>
          <ThemeSelector />
        </View>

        <View style={[styles.card, {backgroundColor: colors.card, padding: spacing.md}]}>
          <Text style={[styles.cardTitle, {color: colors.text}]}>
            Theme Colors
          </Text>
          <View style={[styles.colorGrid, {gap: spacing.sm}]}>
            <ColorSwatch color={colors.primary} label="Primary" textColor={colors.text} />
            <ColorSwatch color={colors.secondary} label="Secondary" textColor={colors.text} />
            <ColorSwatch color={colors.success} label="Success" textColor={colors.text} />
            <ColorSwatch color={colors.error} label="Error" textColor={colors.text} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const ColorSwatch = ({
  color,
  label,
  textColor,
}: {
  color: string;
  label: string;
  textColor: string;
}) => (
  <View style={styles.colorSwatch}>
    <View style={[styles.colorBox, {backgroundColor: color}]} />
    <Text style={[styles.colorLabel, {color: textColor}]}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorSwatch: {
    alignItems: 'center',
    width: '25%',
  },
  colorBox: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginBottom: 4,
  },
  colorLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
});
