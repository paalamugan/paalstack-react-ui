import type { ToasterProps } from 'sonner';

import { Toaster as SonnerToaster, toast } from 'sonner';

import {
  LuCircleCheck as CircleCheckIcon,
  LuInfo as InfoIcon,
  LuLoaderCircle as LoaderCircleIcon,
  LuOctagonX as OctagonXIcon,
  LuTriangleAlert as TriangleAlertIcon,
} from '@/icons/lu';

/**
 * Toaster Component
 *
 * A styled toast notification component built on top of the `sonner` library.
 * Provides pre-configured icons, theme-aware styling, and CSS custom property integration
 * for seamless integration with the design system.
 *
 * @example
 * // Basic usage in your app layout
 * import { Toaster } from '@paalstack/react-ui';
 *
 * <Toaster />
 *
 * @example
 * // With custom theme
 * <Toaster theme="dark" />
 *
 * @example
 * // With custom position
 * <Toaster position="top-center" />
 *
 * @example
 * // Expanded and rich colors
 * <Toaster expand richColors />
 *
 * @example
 * // Triggering toasts (import toast from sonner)
 * import { toast } from 'sonner';
 *
 * toast('Default notification');
 * toast.success('Operation completed!');
 * toast.error('Something went wrong');
 * toast.info('Here is some info');
 * toast.warning('Be careful!');
 * toast.loading('Processing...');
 *
 * @example
 * // Promise toast
 * toast.promise(fetchData(), {
 *   loading: 'Loading...',
 *   success: 'Data loaded!',
 *   error: 'Failed to load',
 * });
 */
const Toaster = (props: ToasterProps) => {
  return (
    <SonnerToaster
      data-slot="sonner-toaster"
      data-qa="sonner-toaster"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <LoaderCircleIcon className="size-4 animate-spin" />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: 'cn-toast',
        },
      }}
      {...props}
    />
  );
};
Toaster.displayName = 'Toaster';

export { Toaster, toast };
export type { ToasterProps };

/**
 * useToast hook
 *
 * A hook to get the toast function from the sonner library.
 *
 * @returns The toast function
 */
export const useToast = (): typeof toast => toast;
