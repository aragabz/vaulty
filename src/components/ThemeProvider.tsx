import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from '../hooks';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const {isDark} = useTheme();

  useEffect(() => {
    // Update status bar based on theme
    StatusBar.setBarStyle(isDark ? 'light-content' : 'dark-content', true);
  }, [isDark]);

  return <>{children}</>;
};
