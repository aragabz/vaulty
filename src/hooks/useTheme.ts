import {useThemeStore} from '../store/themeStore';
import {createTheme, Theme} from '../theme';

export const useTheme = (): Theme & {
  toggleTheme: () => void;
  setThemeMode: (mode: 'light' | 'dark' | 'auto') => void;
  themeMode: 'light' | 'dark' | 'auto';
} => {
  const {isDark, toggleTheme, setThemeMode, themeMode} = useThemeStore();
  const theme = createTheme(isDark);

  return {
    ...theme,
    toggleTheme,
    setThemeMode,
    themeMode,
  };
};
