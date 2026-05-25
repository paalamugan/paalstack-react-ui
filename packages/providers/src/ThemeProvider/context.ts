import type { ThemeContextState } from './types';

import { createContext } from '@/shared/utils';

export const [ThemeContextProvider, useTheme] = createContext<ThemeContextState>({
  name: 'ThemeContextProvider',
  hookName: 'useTheme',
  providerName: '<ThemeProvider />',
});
