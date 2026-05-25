import type { ComponentWithAs } from '@/shared/types';
import type { VariantProps } from 'class-variance-authority';
import type { BoxProps } from '../Box';

import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { Box } from '../Box';

const paperVariants = cva('bg-background text-foreground', {
  variants: {
    shadow: {
      default: 'shadow-sm',
      sm: 'shadow-xs',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl',
      inner: 'shadow-inner',
      none: 'shadow-none',
    },
  },
  defaultVariants: {
    shadow: 'default',
  },
});

interface PaperProps extends BoxProps, VariantProps<typeof paperVariants> {
  /**
   * If true, the paper will have a border
   */
  withBorder?: boolean;
  /**
   * The shadow of the paper
   * @default 'default'
   */
  shadow?: VariantProps<typeof paperVariants>['shadow'];
}

/**
 * Paper Component
 *
 * A surface container component with background, shadow, and optional border.
 * Perfect for cards, panels, and elevated content.
 *
 * @example
 * // Basic paper
 * import { Paper } from '@paalstack/react-ui';
 *
 * <Paper className="p-6">
 *   <h3>Paper Content</h3>
 *   <p>Some content here</p>
 * </Paper>
 *
 * @example
 * // With border
 * <Paper withBorder className="p-6">
 *   Content with border
 * </Paper>
 *
 * @example
 * // Different shadow sizes
 * <Paper shadow="sm" className="p-4">Small shadow</Paper>
 * <Paper shadow="md" className="p-4">Medium shadow</Paper>
 * <Paper shadow="lg" className="p-4">Large shadow</Paper>
 * <Paper shadow="xl" className="p-4">Extra large shadow</Paper>
 *
 * @example
 * // Card with shadow
 * <Paper shadow="lg" className="p-6 rounded-lg">
 *   <Heading as="h3">Card Title</Heading>
 *   <Text>Card description text</Text>
 *   <Button className="mt-4">Learn More</Button>
 * </Paper>
 *
 * @example
 * // Inset shadow
 * <Paper shadow="inner" className="p-6">
 *   Content with inset shadow
 * </Paper>
 *
 * @example
 * // No shadow
 * <Paper shadow="none" withBorder className="p-4">
 *   Just border, no shadow
 * </Paper>
 *
 * @example
 * // Dashboard panel
 * <Paper shadow="md" withBorder className="p-6 rounded-xl">
 *   <Heading as="h4" className="mb-4">Statistics</Heading>
 *   <Grid className="grid-cols-2 gap-4">
 *     <div>Metric 1</div>
 *     <div>Metric 2</div>
 *   </Grid>
 * </Paper>
 *
 * @example
 * // Pricing card
 * <Paper shadow="xl" className="p-8 rounded-2xl">
 *   <Heading as="h3">Pro Plan</Heading>
 *   <Text className="text-3xl font-bold mt-4">$29/mo</Text>
 *   <VStack className="gap-2 mt-6">
 *     <Text>Feature 1</Text>
 *     <Text>Feature 2</Text>
 *   </VStack>
 *   <Button className="w-full mt-6">Subscribe</Button>
 * </Paper>
 *
 * @tip Default shadow is 'default' (shadow-sm)
 * @tip Use withBorder prop to add border
 * @tip Ideal for cards, panels, and elevated surfaces
 * @tip Combine with rounded-* classes for corners
 */
export const Paper: ComponentWithAs<'div', PaperProps> = forwardRef<PaperProps, 'div'>(
  ({ withBorder, shadow, className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(paperVariants({ shadow }), withBorder ? 'border border-border' : '', className)}
        data-qa="paper"
        {...props}
      />
    );
  },
);
