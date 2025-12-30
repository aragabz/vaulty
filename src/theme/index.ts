import {colors} from '../constants';

export const theme = {
  colors,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999,
  },
  typography: {
    h1: {fontSize: 32, fontWeight: 'bold' as const},
    h2: {fontSize: 24, fontWeight: 'bold' as const},
    h3: {fontSize: 20, fontWeight: '600' as const},
    body: {fontSize: 16, fontWeight: 'normal' as const},
    caption: {fontSize: 12, fontWeight: 'normal' as const},
  },
};

export type Theme = typeof theme;
