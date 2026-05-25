import type { BoxProps } from '@/layouts/Box';
import type { ComponentWithAs } from '@/shared/types';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

const Kbd = ({ className, ...props }: React.ComponentProps<'kbd'>) => (
  <kbd
    data-slot="kbd"
    data-qa="kbd"
    className={cn(
      "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 [&_svg:not([class*='size-'])]:size-3",
      className,
    )}
    {...props}
  />
);
Kbd.displayName = 'Kbd';

const KbdGroup: ComponentWithAs<'kbd', BoxProps> = ({ className, ...props }) => (
  <Box
    as="kbd"
    data-slot="kbd-group"
    data-qa="kbd-group"
    className={cn('inline-flex items-center gap-1', className)}
    {...props}
  />
);
KbdGroup.displayName = 'KbdGroup';

export { Kbd, KbdGroup };
