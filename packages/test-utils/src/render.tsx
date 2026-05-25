import '@testing-library/jest-dom';

import type { ThemeProviderProps } from '@/providers/ThemeProvider';
import type { RenderOptions, RenderResult } from '@testing-library/react';
import type * as React from 'react';

import { act, render as rtlRender } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { ThemeProvider } from '@/providers/ThemeProvider';

const ThemeProviderWrapper = (props: ThemeProviderProps) => <ThemeProvider {...props} />;

export interface ThemeRenderOptions extends RenderOptions {
  withThemeProvider?: boolean;
}

export type RenderFunction = (
  ui: React.ReactNode,
  options?: ThemeRenderOptions,
) => ReturnType<typeof rtlRender> & { user: ReturnType<typeof userEvent.setup> };

export const render: RenderFunction = (
  ui: React.ReactNode,
  { withThemeProvider, ...options }: ThemeRenderOptions = {
    withThemeProvider: true,
  },
) => {
  const user = userEvent.setup();

  if (withThemeProvider) {
    options.wrapper = ThemeProviderWrapper;
  }

  const result = rtlRender(<>{ui}</>, options);

  return { user, ...result };
};

export const renderWithAct = async (ui: React.ReactNode) => {
  let result: RenderResult | null = null;
  await act(async () => {
    result = render(ui);
  });
  return result!;
};
