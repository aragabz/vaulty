import {Platform} from 'react-native';
import {SystemBars} from 'react-native-edge-to-edge';

/**
 * Enable edge-to-edge display mode
 * This allows your app to draw behind system bars
 */
export const enableEdgeToEdge = () => {
  if (Platform.OS === 'android') {
    // Set system bars to auto mode (follows theme)
    SystemBars.setStyle('auto');
    
    // Ensure system bars are visible
    SystemBars.setHidden(false);
  }
};

/**
 * Set system bars to dark style (light icons/text)
 * Use when background is dark
 */
export const setDarkSystemBars = () => {
  if (Platform.OS === 'android') {
    SystemBars.setStyle('dark');
  }
};

/**
 * Set system bars to light style (dark icons/text)
 * Use when background is light
 */
export const setLightSystemBars = () => {
  if (Platform.OS === 'android') {
    SystemBars.setStyle('light');
  }
};

/**
 * Set system bars to auto (follows system theme)
 */
export const setAutoSystemBars = () => {
  if (Platform.OS === 'android') {
    SystemBars.setStyle('auto');
  }
};

/**
 * Update system bars based on theme
 * @param isDark - Whether the current theme is dark
 */
export const updateSystemBarsForTheme = (isDark: boolean) => {
  if (Platform.OS === 'android') {
    // When theme is dark, use dark style (light icons)
    // When theme is light, use light style (dark icons)
    SystemBars.setStyle(isDark ? 'dark' : 'light');
  }
};
