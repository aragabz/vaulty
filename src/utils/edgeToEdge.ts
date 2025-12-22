import {SystemBars} from 'react-native-edge-to-edge';

/**
 * Enable edge-to-edge display mode
 * This allows your app to draw behind system bars
 */
export const enableEdgeToEdge = () => {
  // Set system bars style: 'light' | 'dark' | 'auto'
  SystemBars.setStyle('light');
  
  // Show/hide system bars
  SystemBars.setHidden(false);
};

/**
 * Set system bars to dark style
 */
export const setDarkSystemBars = () => {
  SystemBars.setStyle('dark');
};

/**
 * Set system bars to light style
 */
export const setLightSystemBars = () => {
  SystemBars.setStyle('light');
};

/**
 * Set system bars to auto (follows system theme)
 */
export const setAutoSystemBars = () => {
  SystemBars.setStyle('auto');
};
