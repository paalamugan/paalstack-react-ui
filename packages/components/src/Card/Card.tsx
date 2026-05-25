import type { BoxPropsWithRef } from '@/layouts/Box';
import type { HeadingProps } from '@/layouts/Heading';
import type { TextProps } from '@/layouts/Text';
import type { ComponentWithAs } from '@/shared/types';
import type * as React from 'react';

import { Box } from '@/layouts/Box';
import { Heading } from '@/layouts/Heading';
import { Text } from '@/layouts/Text';
import { cn } from '@/shared/lib';

const CardRoot: React.FC<BoxPropsWithRef<'div', { size?: 'default' | 'sm' }>> = ({
  className,
  size = 'default',
  ...props
}) => (
  <Box
    data-slot="card"
    data-qa="card"
    data-size={size}
    className={cn(
      'group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl',
      className,
    )}
    {...props}
  />
);
CardRoot.displayName = 'CardRoot';

const CardHeader: React.FC<BoxPropsWithRef<'div'>> = ({ className, ...props }) => (
  <Box
    data-slot="card-header"
    data-qa="card-header"
    className={cn(
      'group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3',
      className,
    )}
    {...props}
  />
);
CardHeader.displayName = 'CardHeader';

const CardTitle: ComponentWithAs<'h3', HeadingProps> = ({ className, children, ...props }) => (
  <Heading
    as="h3"
    data-slot="card-title"
    data-qa="card-title"
    className={cn('text-base leading-snug font-medium group-data-[size=sm]/card:text-sm', className)}
    {...props}
  >
    {children}
  </Heading>
);
CardTitle.displayName = 'CardTitle';

const CardDescription: ComponentWithAs<'p', TextProps> = ({ className, children, ...props }) => (
  <Text
    data-slot="card-description"
    data-qa="card-description"
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  >
    {children}
  </Text>
);
CardDescription.displayName = 'CardDescription';

const CardAction: React.FC<BoxPropsWithRef<'div'>> = ({ className, ...props }) => (
  <Box
    data-slot="card-action"
    data-qa="card-action"
    className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
    {...props}
  />
);
CardAction.displayName = 'CardAction';

const CardContent: React.FC<BoxPropsWithRef<'div'>> = ({ className, ...props }) => (
  <Box
    data-slot="card-content"
    data-qa="card-content"
    className={cn('px-4 group-data-[size=sm]/card:px-3', className)}
    {...props}
  />
);
CardContent.displayName = 'CardContent';

const CardFooter: React.FC<BoxPropsWithRef<'div'>> = ({ className, ...props }) => (
  <Box
    data-slot="card-footer"
    data-qa="card-footer"
    className={cn('flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3', className)}
    {...props}
  />
);
CardFooter.displayName = 'CardFooter';

const isCardHeader = (
  header: unknown,
): header is { title: React.ReactNode; description?: React.ReactNode; className?: string } => {
  return !!header && typeof header === 'object' && 'title' in header;
};

export type CardProps = React.ComponentPropsWithoutRef<typeof CardRoot> & {
  /**
   * content for the card
   */
  children: React.ReactNode;
  /**
   * Optional header for the card
   */
  header?:
    | {
        /**
         * Optional title for the card header
         */
        title: React.ReactNode;
        /**
         * Optional description for the card header
         */
        description?: React.ReactNode;
        /**
         * Optional class name for the card header title
         */
        className?: string;
      }
    | React.ReactNode;
  /**
   * Optional class name for the card header
   */
  headerClassName?: string;

  /**
   * Optional class name for the card content
   */
  contentClassName?: string;
  /**
   * Optional action element rendered in the top-right of the header
   */
  action?: React.ReactNode;
  /**
   * Optional footer for the card
   */
  footer?: React.ReactNode;
  /**
   * Optional class name for the card footer
   */
  footerClassName?: string;

  headerProps?: React.ComponentPropsWithoutRef<typeof CardHeader>;
  contentProps?: React.ComponentPropsWithoutRef<typeof CardContent>;
  footerProps?: React.ComponentPropsWithoutRef<typeof CardFooter>;
  titleProps?: React.ComponentPropsWithoutRef<typeof CardTitle>;
  descriptionProps?: React.ComponentPropsWithoutRef<typeof CardDescription>;
  actionProps?: React.ComponentPropsWithoutRef<typeof CardAction>;
};

/**
 * Card Component
 *
 * A flexible card container component with optional header, footer, title, and description.
 *
 * @example
 * // Basic usage
 * import { Card } from '@paalstack/react-ui';
 *
 * <Card>
 *   <p>This is card content</p>
 * </Card>
 *
 * @example
 * // With header (title and description)
 * <Card
 *   header={{
 *     title: "Card Title",
 *     description: "This is a card description"
 *   }}
 * >
 *   <p>Card content goes here</p>
 * </Card>
 *
 * @example
 * // With footer
 * import { Button } from '@paalstack/react-ui';
 *
 * <Card
 *   header={{ title: "Confirm Action" }}
 *   footer={
 *     <>
 *       <Button variant="ghost">Cancel</Button>
 *       <Button>Confirm</Button>
 *     </>
 *   }
 * >
 *   <p>Are you sure you want to proceed?</p>
 * </Card>
 *
 * @example
 * // With custom header (not using title/description object)
 * <Card
 *   header={<div className="flex items-center gap-2"><Icon /> Custom Header</div>}
 * >
 *   <p>Card content</p>
 * </Card>
 *
 * @example
 * // Using composition with CardHeader, CardTitle, etc.
 * import { CardRoot, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@paalstack/react-ui';
 *
 * <CardRoot>
 *   <CardHeader>
 *     <CardTitle>Custom Card</CardTitle>
 *     <CardDescription>Full control over card structure</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <p>Content with full customization</p>
 *   </CardContent>
 *   <CardFooter>
 *     <Button>Action</Button>
 *   </CardFooter>
 * </CardRoot>
 *
 * @example
 * // With custom styling
 * <Card
 *   className="border-2 border-primary"
 *   headerClassName="bg-primary/10"
 *   contentClassName="p-8"
 *   footerClassName="justify-between"
 *   header={{ title: "Styled Card" }}
 *   footer={<Button>Action</Button>}
 * >
 *   <p>Custom styled card</p>
 * </Card>
 *
 * @example
 * // Complete example with all features
 * <Card
 *   header={{
 *     title: "User Profile",
 *     description: "Manage your account settings",
 *     className: "text-primary"
 *   }}
 *   footer={
 *     <>
 *       <Button variant="outline">Cancel</Button>
 *       <Button color="primary">Save Changes</Button>
 *     </>
 *   }
 * >
 *   <div className="space-y-4">
 *     <Input label="Name" defaultValue="John Doe" />
 *     <Input label="Email" type="email" defaultValue="john@example.com" />
 *   </div>
 * </Card>
 */
const Card: ComponentWithAs<'div', CardProps> = ({
  header,
  headerClassName,
  children,
  contentClassName,
  action,
  footer,
  footerClassName,
  headerProps,
  contentProps,
  footerProps,
  titleProps,
  descriptionProps,
  actionProps,
  ...props
}) => {
  return (
    <CardRoot {...props}>
      {(header || action) && (
        <CardHeader className={headerClassName} {...headerProps}>
          {isCardHeader(header) ? (
            <>
              {header.title && (
                <CardTitle className={header.className} {...titleProps}>
                  {header.title}
                </CardTitle>
              )}
              {header.description && <CardDescription {...descriptionProps}>{header.description}</CardDescription>}
            </>
          ) : (
            header
          )}
          {action && <CardAction {...actionProps}>{action}</CardAction>}
        </CardHeader>
      )}
      <CardContent className={contentClassName} {...contentProps}>
        {children}
      </CardContent>
      {footer && (
        <CardFooter className={cn('justify-end gap-3', footerClassName)} {...footerProps}>
          {footer}
        </CardFooter>
      )}
    </CardRoot>
  );
};
Card.displayName = 'Card';

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardRoot, CardTitle };
