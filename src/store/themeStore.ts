import {create} from 'zustand';
import {persist, createJSONStorage, StateStorage} from 'zustand/middleware';
import {storage} from '../utils/storage';
import {Appearance} from 'react-native';

// Custom MMKV storage adapter for Zustand
const mmkvStorage: StateStorage = {
  getItem: (name: string) => {
    return storage.getString(name) ?? null;
  },
  setItem: (name: string, value: string) => {
    storage.setString(name, value);
  },
  removeItem: (name: string) => {
    storage.remove(name);
  },
};

export type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeState {
  themeMode: ThemeMode;
  isDark: boolean;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  updateSystemTheme: () => void;
}

const getSystemTheme = (): boolean => {
  return Appearance.getColorScheme() === 'dark';
};

const resolveIsDark = (mode: ThemeMode): boolean => {
  if (mode === 'auto') {
    return getSystemTheme();
  }
  return mode === 'dark';
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      themeMode: 'auto',
      isDark: getSystemTheme(),

      setThemeMode: mode =>
        set({
          themeMode: mode,
          isDark: resolveIsDark(mode),
        }),

      toggleTheme: () => {
        const currentMode = get().themeMode;
        const newMode = currentMode === 'light' ? 'dark' : 'light';
        set({
          themeMode: newMode,
          isDark: newMode === 'dark',
        });
      },

      updateSystemTheme: () => {
        const mode = get().themeMode;
        if (mode === 'auto') {
          set({isDark: getSystemTheme()});
        }
      },
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);

// Listen to system theme changes
Appearance.addChangeListener(() => {
  useThemeStore.getState().updateSystemTheme();
});
