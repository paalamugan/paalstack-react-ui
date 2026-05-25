import { forwardRef } from 'react';

import type { FC } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */

export const createContextContainer = <T,>(
  Component: FC<T>,
  Provider: React.FC<React.PropsWithChildren>,
  providerProps?: Record<string, unknown>,
) => {
  const Container = forwardRef<unknown, T>((props, ref) => (
    <Provider {...providerProps}>
      <Component {...(props as any)} ref={ref} />
    </Provider>
  ));

  Container.displayName = Component.displayName;
  (Container as any).extend = (Component as any).extend;
  (Container as any).classes = (Component as any).classes;
  return Container;
};
