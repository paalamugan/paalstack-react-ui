import type { VariantProps } from 'class-variance-authority';

import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib';

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted data-[state=on]:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border border-input bg-transparent hover:bg-muted',
      },
      size: {
        default: 'h-8 min-w-8 px-2',
        sm: 'h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-1.5 text-[0.8rem]',
        lg: 'h-9 min-w-9 px-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ToggleProps extends TogglePrimitive.Props, VariantProps<typeof toggleVariants> {}
/**
 * Toggle Component
 *
 * A two-state button that can be either on or off.
 * Perfect for toolbar buttons, formatting controls, and toggleable options.
 *
 * @example
 * // Basic usage
 * import { Toggle } from '@paalstack/react-ui';
 *
 * <Toggle pressed={pressed} onPressedChange={setPressed}>
 *   Toggle Me
 * </Toggle>
 *
 * @example
 * // With icon
 * <Toggle pressed={bold} onPressedChange={setBold} aria-label="Toggle bold">
 *   <BoldIcon />
 * </Toggle>
 *
 * @example
 * // Outline variant
 * <Toggle variant="outline">Outline</Toggle>
 *
 * @example
 * // Different sizes
 * <Toggle size="sm">Small</Toggle>
 * <Toggle size="default">Default</Toggle>
 * <Toggle size="lg">Large</Toggle>
 *
 * @example
 * // Disabled state
 * <Toggle disabled pressed>Disabled</Toggle>
 */
const Toggle = ({ className, variant = 'default', size = 'default', ...props }: ToggleProps) => (
  <TogglePrimitive
    data-slot="toggle"
    data-qa="toggle"
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
);
Toggle.displayName = 'Toggle';

export { Toggle, toggleVariants };
