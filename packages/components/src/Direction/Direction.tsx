'use client';

import type * as React from 'react';

import { DirectionProvider } from '@base-ui/react/direction-provider';

/**
 * Enables RTL behavior for Base UI components.
 *
 * Documentation: [Base UI Direction Provider](https://base-ui.com/react/utils/direction-provider)
 */
export { DirectionProvider, useDirection } from '@base-ui/react/direction-provider';

/**
 * Direction Component (Props API)
 *
 * A convenience wrapper that sets the reading direction for all Base UI components
 * underneath it via DirectionProvider. Perfect for RTL support, i18n layouts, and
 * localized applications.
 *
 * @example
 * // Props API — wrap any subtree to set text direction (defaults to 'ltr')
 * import { Direction } from '@paalstack/react-ui';
 *
 * <Direction direction="rtl">
 *   <Dialog>...</Dialog>
 *   <p>مرحبا بالعالم</p>
 * </Direction>
 *
 * @example
 * // Composition API — full control with the provider directly
 * import { DirectionProvider } from '@paalstack/react-ui';
 *
 * <DirectionProvider direction="rtl">
 *   <p>مرحبا بالعالم</p>
 * </DirectionProvider>
 */
function Direction({ direction = 'ltr', children, ...props }: DirectionProps) {
  return (
    <DirectionProvider data-slot="direction" data-qa="direction" direction={direction} {...props}>
      {children}
    </DirectionProvider>
  );
}
Direction.displayName = 'Direction';

export interface DirectionProps extends React.ComponentProps<typeof DirectionProvider> {
  /**
   * The reading direction of the text.
   * @default 'ltr'
   */
  direction?: 'ltr' | 'rtl';
}

export { Direction };
