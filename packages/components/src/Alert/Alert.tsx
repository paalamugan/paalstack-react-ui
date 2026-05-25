import * as React from 'react';

import type { BoxPropsWithRef } from '@/layouts/Box';
import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';

import { RxCross2 as SolidCloseIcon } from '@/icons/rx';
import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

import { IconButton } from '../IconButton';

const alertVariants = cva(
  'relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      colorVariant: {
        default: 'bg-card text-card-foreground *:data-[slot=alert-description]:text-muted-foreground',
        primary: 'border-primary/50 text-primary dark:border-primary [&>svg]:text-primary',
        secondary:
          'border-secondary-foreground/50 text-secondary-foreground dark:border-secondary-foreground [&>svg]:text-secondary-foreground',
        tertiary: 'border-tertiary/50 text-tertiary dark:border-tertiary [&>svg]:text-tertiary',
        info: 'border-info/50 text-info dark:border-info [&>svg]:text-info',
        success: 'border-success/50 text-success dark:border-success [&>svg]:text-success',
        warning: 'border-warning/50 text-warning dark:border-warning [&>svg]:text-warning',
        danger: 'border-danger/50 text-danger dark:border-danger [&>svg]:text-danger',
        destructive:
          'bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current',
      },
      softBackground: {
        primary:
          'border-primary-soft/30 bg-primary-soft/30 text-primary [&>svg]:text-primary *:data-[slot=alert-description]:text-primary/90',
        secondary:
          'border-secondary-soft/30 bg-secondary-soft/30 text-secondary-foreground [&>svg]:text-secondary-foreground *:data-[slot=alert-description]:text-secondary-foreground',
        tertiary:
          'border-tertiary-soft/30 bg-tertiary-soft/30 text-tertiary [&>svg]:text-tertiary *:data-[slot=alert-description]:text-tertiary',
        info: 'border-info-soft/30 bg-info-soft/30 text-info [&>svg]:text-info *:data-[slot=alert-description]:text-info',
        success:
          'border-success-soft/30 bg-success-soft/30 text-success [&>svg]:text-success *:data-[slot=alert-description]:text-success',
        warning:
          'border-warning-soft bg-warning-soft text-warning [&>svg]:text-warning *:data-[slot=alert-description]:text-warning',
        danger:
          'border-danger-soft/30 bg-danger-soft/30 text-danger [&>svg]:text-danger *:data-[slot=alert-description]:text-danger',
      },
      solidBackground: {
        primary:
          'border-primary bg-primary text-primary-foreground [&>svg]:text-primary-foreground *:data-[slot=alert-description]:text-primary-foreground',
        secondary:
          'border-secondary bg-secondary text-secondary-foreground [&>svg]:text-secondary-foreground *:data-[slot=alert-description]:text-secondary-foreground',
        tertiary:
          'border-tertiary bg-tertiary text-tertiary-foreground [&>svg]:text-tertiary-foreground *:data-[slot=alert-description]:text-tertiary-foreground',
        info: 'border-info bg-info text-info-foreground [&>svg]:text-info-foreground *:data-[slot=alert-description]:text-info-foreground',
        success:
          'border-success bg-success text-success-foreground [&>svg]:text-success-foreground *:data-[slot=alert-description]:text-success-foreground',
        warning:
          'border-warning bg-warning text-warning-foreground [&>svg]:text-warning-foreground *:data-[slot=alert-description]:text-warning-foreground',
        danger:
          'border-danger bg-danger text-danger-foreground [&>svg]:text-danger-foreground *:data-[slot=alert-description]:text-danger-foreground',
      },
    },
    defaultVariants: {
      colorVariant: 'default',
    },
  },
);

const AlertRoot = ({
  className,
  colorVariant,
  softBackground,
  solidBackground,
  ...props
}: BoxPropsWithRef<'div'> & VariantProps<typeof alertVariants>) => (
  <Box
    data-slot="alert"
    role="alert"
    data-qa="alert"
    className={cn(alertVariants({ colorVariant, softBackground, solidBackground }), className)}
    {...props}
  />
);
AlertRoot.displayName = 'AlertRoot';

const AlertTitle = ({ className, ...props }: BoxPropsWithRef<'div'>) => (
  <Box
    data-slot="alert-title"
    data-qa="alert-title"
    className={cn('col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight', className)}
    {...props}
  />
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = ({ className, ...props }: BoxPropsWithRef<'div'>) => (
  <Box
    data-slot="alert-description"
    data-qa="alert-description"
    className={cn('col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
);
AlertDescription.displayName = 'AlertDescription';

export interface AlertProps extends Omit<React.ComponentProps<typeof AlertRoot>, 'title'> {
  /** Title for the alert */
  title?: React.ReactNode;
  /** Props for the alert title */
  titleProps?: React.ComponentProps<typeof AlertTitle>;
  /** Description for the alert */
  description?: React.ReactNode;
  /** Props for the alert description */
  descriptionProps?: React.ComponentProps<typeof AlertDescription>;
  /**
   * Icon for the alert
   */
  icon?: React.ReactNode;
  /**
   * Whether the alert is dismissible or not
   */
  dismissible?: boolean;
  /** onDismiss functions call when the alert is dismissed */
  onDismiss?: () => void;
}

/**
 * Alert Component
 *
 * Alerts are used to communicate a state that affects a system, feature, or page.
 * Supports multiple color variants, backgrounds (soft/solid), icons, and dismissible functionality.
 *
 * @example
 * // Basic usage
 * import { Alert } from '@paalstack/react-ui';
 *
 * <Alert title="Info" description="This is an informational alert" />
 *
 * @example
 * // Different color variants
 * <Alert colorVariant="primary" title="Primary Alert" description="Primary color variant" />
 * <Alert colorVariant="success" title="Success" description="Operation completed successfully" />
 * <Alert colorVariant="warning" title="Warning" description="Please be cautious" />
 * <Alert colorVariant="danger" title="Error" description="Something went wrong" />
 * <Alert colorVariant="info" title="Information" description="Helpful information" />
 *
 * @example
 * // With soft background
 * <Alert softBackground="primary" title="Soft Primary" description="Soft background variant" />
 * <Alert softBackground="success" title="Soft Success" description="Success with soft background" />
 * <Alert softBackground="warning" title="Soft Warning" description="Warning with soft background" />
 *
 * @example
 * // With solid background
 * <Alert solidBackground="primary" title="Solid Primary" description="Solid background variant" />
 * <Alert solidBackground="danger" title="Solid Danger" description="Error with solid background" />
 *
 * @example
 * // With icon
 * import { FiInfo, FiCheckCircle, FiAlertTriangle, FiXCircle } from '@paalstack/react-icons/fi';
 *
 * <Alert
 *   colorVariant="info"
 *   icon={<FiInfo className="size-5" />}
 *   title="With Icon"
 *   description="Alert with custom icon"
 * />
 *
 * <Alert
 *   colorVariant="success"
 *   icon={<FiCheckCircle className="size-5" />}
 *   title="Success"
 *   description="Task completed successfully"
 * />
 *
 * @example
 * // Dismissible alert
 * <Alert
 *   title="Dismissible Alert"
 *   description="You can close this alert"
 *   dismissible
 *   onDismiss={() => console.log('Alert dismissed')}
 * />
 *
 * @example
 * // Without description (title only)
 * <Alert colorVariant="warning" title="Quick warning message" />
 *
 * @example
 * // Without title (description only)
 * <Alert colorVariant="info" description="Just a description without title" />
 *
 * @example
 * // Complete example with all features
 * import { FiAlertCircle } from '@paalstack/react-icons/fi';
 *
 * <Alert
 *   softBackground="warning"
 *   icon={<FiAlertCircle className="size-5" />}
 *   title="Payment Required"
 *   description="Your subscription will expire in 3 days. Please update your payment method."
 *   dismissible
 *   onDismiss={() => handleDismiss()}
 * />
 *
 * @example
 * // Using composition with AlertRoot, AlertTitle, AlertDescription
 * import { AlertRoot, AlertTitle, AlertDescription } from '@paalstack/react-ui';
 *
 * <AlertRoot colorVariant="success">
 *   <AlertTitle>Success!</AlertTitle>
 *   <AlertDescription>Your changes have been saved.</AlertDescription>
 * </AlertRoot>
 */
const Alert = ({
  title,
  icon,
  dismissible,
  onDismiss,
  description,
  titleProps,
  descriptionProps,
  ...props
}: AlertProps) => {
  const [isDismissed, setIsDismissed] = React.useState(false);
  const onDismissAlert = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  if (isDismissed) return null;

  return (
    <AlertRoot {...props}>
      {icon}
      {(title || description) && (
        <>
          {title && <AlertTitle {...titleProps}>{title}</AlertTitle>}
          {description && <AlertDescription {...descriptionProps}>{description}</AlertDescription>}
        </>
      )}
      {dismissible && (
        <IconButton
          className="absolute top-2.5 right-2"
          onClick={onDismissAlert}
          icon={<SolidCloseIcon className="size-4" />}
          data-qa="alert-dismiss"
        />
      )}
    </AlertRoot>
  );
};
Alert.displayName = 'Alert';

export { Alert, AlertDescription, AlertRoot, AlertTitle };
