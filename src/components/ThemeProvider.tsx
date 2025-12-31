import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {useTheme} from '../hooks';
import {updateSystemBarsForTheme} from '../utils/edgeToEdge';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const {isDark} = useTheme();

  useEffect(() => {
    // Update status bar based on theme
    StatusBar.setBarStyle(isDark ? 'light-content' : 'dark-content', true);
    
    // Update Android system bars (navigation bar) for edge-to-edge
    if (Platform.OS === 'android') {
      updateSystemBarsForTheme(isDark);
    }
  }, [isDark]);

  return <>{children}</>;
};
