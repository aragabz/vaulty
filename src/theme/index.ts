export const lightColors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  background: '#FFFFFF',
  surface: '#F2F2F7',
  card: '#FFFFFF',
  text: '#000000',
  textSecondary: '#8E8E93',
  border: '#C6C6C8',
  shadow: '#000000',
};

export const darkColors = {
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  success: '#30D158',
  warning: '#FF9F0A',
  error: '#FF453A',
  background: '#000000',
  surface: '#1C1C1E',
  card: '#2C2C2E',
  text: '#FFFFFF',
  textSecondary: '#8E8E93',
  border: '#38383A',
  shadow: '#000000',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const typography = {
  h1: {fontSize: 32, fontWeight: 'bold' as const},
  h2: {fontSize: 24, fontWeight: 'bold' as const},
  h3: {fontSize: 20, fontWeight: '600' as const},
  body: {fontSize: 16, fontWeight: 'normal' as const},
  bodySmall: {fontSize: 14, fontWeight: 'normal' as const},
  caption: {fontSize: 12, fontWeight: 'normal' as const},
};

export const createTheme = (isDark: boolean) => ({
  colors: isDark ? darkColors : lightColors,
  spacing,
  borderRadius,
  typography,
  isDark,
});

export type Theme = ReturnType<typeof createTheme>;
export type ThemeColors = typeof lightColors;
