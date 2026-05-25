import { useMemo } from 'react';

import type { BoxProps, BoxPropsWithRef } from '@/layouts/Box';
import type { FlexProps } from '@/layouts/Flex';
import type { TextProps } from '@/layouts/Text';
import type { ComponentWithAs } from '@/shared/types';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import type { LabelProps } from '../Label';

import { cva } from 'class-variance-authority';

import { Box } from '@/layouts/Box';
import { Flex } from '@/layouts/Flex';
import { Text } from '@/layouts/Text';
import { cn } from '@/shared/lib';
import { forwardRef, Slot } from '@/shared/utils';

import { Label } from '../Label';
import { Separator } from '../Separator';

const fieldVariants = cva('data-[invalid=true]:text-destructive gap-2 group/field flex w-full', {
  variants: {
    orientation: {
      vertical: 'flex-col *:w-full [&>.sr-only]:w-auto',
      horizontal:
        'flex-row items-center *:data-[slot=field-label]:flex-none has-[>[data-slot=field-content]]:items-baseline has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
      responsive:
        'flex-col *:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:*:data-[slot=field-label]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

const fieldLegendVariants = cva('mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base', {
  variants: {
    variant: {
      legend: 'text-base',
      label: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'legend',
  },
});

/**
 * Field Component Family
 *
 * A comprehensive set of components for building accessible, composable form fields.
 * Combines labels, controls, descriptions, and error messages with proper semantics.
 *
 * @example
 * // Basic field with label and description
 * import { Field, FieldLabel, FieldDescription } from '@paalstack/react-ui';
 * import { Input } from '@paalstack/react-ui';
 *
 * <Field>
 *   <FieldLabel htmlFor="username">Username</FieldLabel>
 *   <Input id="username" placeholder="Enter username" />
 *   <FieldDescription>Choose a unique username for your account.</FieldDescription>
 * </Field>
 *
 * @example
 * // Field with validation error
 * <Field data-invalid>
 *   <FieldLabel htmlFor="email">Email</FieldLabel>
 *   <Input id="email" type="email" aria-invalid />
 *   <FieldError>Please enter a valid email address.</FieldError>
 * </Field>
 *
 * @example
 * // Horizontal field layout (label beside control)
 * import { Switch } from '@paalstack/react-ui';
 *
 * <Field orientation="horizontal">
 *   <Switch id="newsletter" />
 *   <FieldLabel htmlFor="newsletter">Subscribe to newsletter</FieldLabel>
 * </Field>
 *
 * @example
 * // Field with label and description beside control
 * import { Checkbox } from '@paalstack/react-ui';
 *
 * <Field orientation="horizontal">
 *   <Checkbox id="terms" />
 *   <FieldContent>
 *     <FieldLabel htmlFor="terms">Accept terms and conditions</FieldLabel>
 *     <FieldDescription>You must accept the terms to continue.</FieldDescription>
 *   </FieldContent>
 * </Field>
 *
 * @example
 * // FieldSet with multiple fields
 * <FieldSet>
 *   <FieldLegend>Profile Information</FieldLegend>
 *   <FieldDescription>Fill in your profile details below.</FieldDescription>
 *   <FieldGroup>
 *     <Field>
 *       <FieldLabel htmlFor="name">Full Name</FieldLabel>
 *       <Input id="name" />
 *     </Field>
 *     <Field>
 *       <FieldLabel htmlFor="email">Email</FieldLabel>
 *       <Input id="email" type="email" />
 *     </Field>
 *   </FieldGroup>
 * </FieldSet>
 *
 * @example
 * // Responsive field layout (changes based on container size)
 * <FieldGroup className="@container/field-group">
 *   <Field orientation="responsive">
 *     <FieldLabel htmlFor="name">Name</FieldLabel>
 *     <FieldContent>
 *       <Input id="name" />
 *       <FieldDescription>Provide your full name for identification.</FieldDescription>
 *     </FieldContent>
 *   </Field>
 * </FieldGroup>
 *
 * @example
 * // Field group with separator
 * <FieldGroup>
 *   <Field>
 *     <FieldLabel htmlFor="email">Email notifications</FieldLabel>
 *     <Checkbox id="email" />
 *   </Field>
 *   <FieldSeparator />
 *   <Field>
 *     <FieldLabel htmlFor="sms">SMS notifications</FieldLabel>
 *     <Checkbox id="sms" />
 *   </Field>
 * </FieldGroup>
 *
 * @example
 * // Select field
 * import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@paalstack/react-ui';
 *
 * <Field>
 *   <FieldLabel htmlFor="department">Department</FieldLabel>
 *   <Select>
 *     <SelectTrigger id="department">
 *       <SelectValue placeholder="Choose department" />
 *     </SelectTrigger>
 *     <SelectContent>
 *       <SelectItem value="eng">Engineering</SelectItem>
 *       <SelectItem value="sales">Sales</SelectItem>
 *     </SelectContent>
 *   </Select>
 *   <FieldDescription>Select your department or area of work.</FieldDescription>
 * </Field>
 *
 * @example
 * // Textarea field
 * import { Textarea } from '@paalstack/react-ui';
 *
 * <Field>
 *   <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
 *   <Textarea id="feedback" rows={4} />
 *   <FieldDescription>Share your thoughts about our service.</FieldDescription>
 * </Field>
 *
 * @example
 * // Radio group field
 * import { RadioGroup, RadioGroupItem } from '@paalstack/react-ui';
 *
 * <Field>
 *   <FieldLabel>Subscription Plan</FieldLabel>
 *   <RadioGroup defaultValue="monthly">
 *     <Field orientation="horizontal">
 *       <RadioGroupItem value="monthly" id="monthly" />
 *       <FieldLabel htmlFor="monthly">Monthly ($9.99/month)</FieldLabel>
 *     </Field>
 *     <Field orientation="horizontal">
 *       <RadioGroupItem value="yearly" id="yearly" />
 *       <FieldLabel htmlFor="yearly">Yearly ($99.99/year)</FieldLabel>
 *     </Field>
 *   </RadioGroup>
 *   <FieldDescription>Yearly plans offer significant savings.</FieldDescription>
 * </Field>
 *
 * @example
 * // Checkbox group field
 * <FieldSet>
 *   <FieldLegend variant="label">Desktop Items</FieldLegend>
 *   <FieldDescription>Select items to show on desktop.</FieldDescription>
 *   <FieldGroup>
 *     <Field orientation="horizontal">
 *       <Checkbox id="hardDisks" />
 *       <FieldLabel htmlFor="hardDisks">Hard disks</FieldLabel>
 *     </Field>
 *     <Field orientation="horizontal">
 *       <Checkbox id="external" />
 *       <FieldLabel htmlFor="external">External disks</FieldLabel>
 *     </Field>
 *     <Field orientation="horizontal">
 *       <Checkbox id="cds" />
 *       <FieldLabel htmlFor="cds">CDs, DVDs, and iPods</FieldLabel>
 *     </Field>
 *   </FieldGroup>
 * </FieldSet>
 *
 * @example
 * // Field with multiple errors (from react-hook-form)
 * const { formState: { errors } } = useForm();
 *
 * <Field data-invalid>
 *   <FieldLabel htmlFor="password">Password</FieldLabel>
 *   <Input id="password" type="password" aria-invalid />
 *   <FieldError errors={errors.password} />
 * </Field>
 *
 * @example
 * // Separator with text
 * <FieldGroup>
 *   <Field>
 *     <FieldLabel htmlFor="email">Email</FieldLabel>
 *     <Input id="email" type="email" />
 *   </Field>
 *   <FieldSeparator>Or continue with</FieldSeparator>
 *   <Button variant="outline">Sign in with Google</Button>
 * </FieldGroup>
 *
 * @tip Use FieldSet and FieldLegend to group related fields semantically
 * @tip Use orientation="horizontal" for compact layouts like switches and checkboxes
 * @tip Use orientation="responsive" for fields that adapt to container width
 * @tip Add data-invalid to Field to style the entire field as invalid
 * @tip Use FieldContent to group control and description when label is beside control
 * @tip Always provide htmlFor on FieldLabel to associate with the control
 * @tip Use FieldError with the errors prop for automatic error list rendering
 * @tip Add @container/field-group class to FieldGroup for responsive orientations
 * @tip Use FieldSeparator to divide sections within a FieldGroup
 * @tip Keep FieldDescription text concise and helpful
 */
const FieldSet = ({ className, ...props }: BoxPropsWithRef<'fieldset'>) => (
  <Box
    as="fieldset"
    className={cn(
      'flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3',
      className,
    )}
    data-slot="field-set"
    data-qa="field-set"
    {...props}
  />
);

FieldSet.displayName = 'FieldSet';

export interface FieldLegendProps extends BoxProps, VariantProps<typeof fieldLegendVariants> {}

const FieldLegend = ({ className, variant, children, ...props }: BoxPropsWithRef<'legend', FieldLegendProps>) => (
  <Box
    as="legend"
    className={cn(fieldLegendVariants({ variant }), className)}
    data-slot="field-legend"
    data-variant={variant}
    data-qa="field-legend"
    {...props}
  >
    {children}
  </Box>
);

FieldLegend.displayName = 'FieldLegend';

const FieldGroup = ({ className, ...props }: BoxPropsWithRef<'div'>) => (
  <Box
    className={cn(
      'group/field-group group/field-group @container/field-group flex w-full flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4',
      className,
    )}
    data-slot="field-group"
    data-qa="field-group"
    {...props}
  />
);
FieldGroup.displayName = 'FieldGroup';

export interface FieldRootProps extends BoxPropsWithRef<'div', VariantProps<typeof fieldVariants>> {
  'data-invalid'?: boolean;
}

const FieldRoot = ({ className, orientation, ...props }: FieldRootProps) => (
  <Box
    role="group"
    className={cn(fieldVariants({ orientation }), className)}
    data-slot="field"
    data-orientation={orientation}
    data-qa="field"
    {...props}
  />
);
FieldRoot.displayName = 'FieldRoot';

const FieldContent = ({ className, ...props }: BoxPropsWithRef<'div', FlexProps>) => (
  <Flex
    className={cn('group/field-content flex flex-1 flex-col gap-0.5 leading-snug', className)}
    data-slot="field-content"
    data-qa="field-content"
    {...props}
  />
);
FieldContent.displayName = 'FieldContent';

export interface FieldLabelProps extends LabelProps {
  asChild?: boolean;
}

const FieldLabel = ({ className, asChild, children, ...props }: FieldLabelProps) => {
  const Comp = asChild ? Slot : Label;
  return (
    <Comp
      className={cn(
        'group/field-label peer/field-label flex w-fit leading-snug group-data-disabled/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10',
        'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col',
        className,
      )}
      data-slot="field-label"
      data-qa="field-label"
      {...props}
    >
      {children}
    </Comp>
  );
};
FieldLabel.displayName = 'FieldLabel';

const FieldTitle = ({ className, children, ...props }: BoxPropsWithRef<'p', TextProps>) => (
  <Text
    className={cn(
      'flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-disabled/field:opacity-50',
      className,
    )}
    data-slot="field-label"
    data-qa="field-title"
    {...props}
  >
    {children}
  </Text>
);
FieldTitle.displayName = 'FieldTitle';

const FieldDescription = ({ className, children, ...props }: BoxPropsWithRef<'p', TextProps>) => (
  <Text
    className={cn(
      'text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-[orientation=horizontal]/field:text-balance [[data-variant=legend]+&]:-mt-1.5',
      'last:mt-0 nth-last-2:-mt-1',
      '[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
      className,
    )}
    data-slot="field-description"
    data-qa="field-description"
    {...props}
  >
    {children}
  </Text>
);
FieldDescription.displayName = 'FieldDescription';

const FieldSeparator = ({
  className,
  children,
  separatorProps,
  ...props
}: BoxPropsWithRef<
  'div',
  {
    separatorProps?: React.ComponentProps<typeof Separator>;
  }
>) => (
  <Box
    data-slot="field-separator"
    data-content={!!children}
    className={cn('relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2', className)}
    data-qa="field-separator"
    {...props}
  >
    <Separator {...separatorProps} className={cn('absolute inset-0 top-1/2', separatorProps?.className)} />
    {children && (
      <span
        className="relative mx-auto block w-fit bg-background px-2 text-muted-foreground"
        data-slot="field-separator-content"
      >
        {children}
      </span>
    )}
  </Box>
);
FieldSeparator.displayName = 'FieldSeparator';

export interface FieldErrorProps extends Omit<TextProps, 'children'> {
  errors?: Array<{ message?: string } | undefined>;
  issues?: Array<{ message: string }>;
}

const FieldError = ({ className, children, errors, issues, ...props }: BoxPropsWithRef<'div', FieldErrorProps>) => {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    // Handle Standard Schema issues (Zod, Valibot, ArkType)
    if (issues && issues.length > 0) {
      if (issues.length === 1) {
        return issues[0].message;
      }
      return (
        <ul className="ml-4 flex list-disc flex-col gap-1">
          {issues.map((issue, index) => (
            <li key={index}>{issue.message}</li>
          ))}
        </ul>
      );
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];

    if (uniqueErrors?.length === 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map((error, index) => error?.message && <li key={index}>{error.message}</li>)}
      </ul>
    );
  }, [children, errors, issues]);

  if (!content) {
    return null;
  }

  return (
    <Box
      role="alert"
      data-slot="field-error"
      data-qa="field-error"
      className={cn('text-sm font-normal text-destructive', className)}
      {...props}
    >
      {content}
    </Box>
  );
};
FieldError.displayName = 'FieldError';

export interface FieldProps extends Omit<FieldRootProps, 'title' | 'content'> {
  /** Label for the field (renders FieldLabel) */
  label?: React.ReactNode;
  /** Description or hint (renders FieldDescription) */
  description?: React.ReactNode;
  /** Custom error content (renders FieldError with children) */
  error?: React.ReactNode;
  /** Validation errors for FieldError (e.g. from react-hook-form) */
  errors?: Array<{ message?: string } | undefined>;
  /** Schema issues for FieldError (e.g. Zod, Valibot) */
  issues?: Array<{ message: string }>;
  /** Props for FieldLabel */
  labelProps?: React.ComponentPropsWithoutRef<typeof FieldLabel>;
  /** Props for FieldDescription */
  descriptionProps?: React.ComponentPropsWithoutRef<typeof FieldDescription>;
  /** Props for FieldError */
  errorProps?: React.ComponentPropsWithoutRef<typeof FieldError>;
  /** Props for FieldContent (used in horizontal layout) */
  contentProps?: React.ComponentPropsWithoutRef<typeof FieldContent>;
}

/**
 * Single-component Field that composes label, description, error, and control via props.
 * Use FieldRoot with FieldLabel, FieldContent, etc. when you need full control (e.g. custom order, FieldSet).
 *
 * @example
 * // Basic field with label, control, and description
 * import { Field, Input } from '@paalstack/react-ui';
 *
 * <Field
 *   label="Username"
 *   description="Choose a unique username for your account."
 *   labelProps={{ htmlFor: 'username' }}
 * >
 *   <Input id="username" placeholder="Enter username" />
 * </Field>
 *
 * @example
 * // Field with validation error
 * <Field
 *   label="Email"
 *   labelProps={{ htmlFor: 'email' }}
 *   error="Please enter a valid email address."
 *   data-invalid
 * >
 *   <Input id="email" type="email" aria-invalid />
 * </Field>
 *
 * @example
 * // Field with multiple errors (e.g. from react-hook-form)
 * <Field
 *   label="Password"
 *   labelProps={{ htmlFor: 'password' }}
 *   errors={[
 *     { message: 'Password must be at least 8 characters' },
 *     { message: 'Password must contain a number' },
 *   ]}
 *   data-invalid
 * >
 *   <Input id="password" type="password" aria-invalid />
 * </Field>
 *
 * @example
 * // Horizontal layout (e.g. switch or checkbox)
 * import { Switch } from '@paalstack/react-ui';
 *
 * <Field
 *   orientation="horizontal"
 *   label="Subscribe to newsletter"
 *   labelProps={{ htmlFor: 'newsletter' }}
 * >
 *   <Switch id="newsletter" />
 * </Field>
 *
 * @example
 * // Horizontal with description
 * <Field
 *   orientation="horizontal"
 *   label="Accept terms and conditions"
 *   description="You must accept the terms to continue."
 *   labelProps={{ htmlFor: 'terms' }}
 * >
 *   <Checkbox id="terms" />
 * </Field>
 */
const Field: ComponentWithAs<'div', FieldProps> = forwardRef<FieldProps, 'div'>(
  (
    {
      className,
      orientation = 'vertical',
      label,
      description,
      error,
      errors,
      issues,
      labelProps,
      descriptionProps,
      errorProps,
      contentProps,
      children,
      ...props
    },
    ref,
  ) => {
    const hasError = !!error || (errors?.length ?? 0) > 0 || (issues?.length ?? 0) > 0;
    const hasLabelOrDescription = !!label || !!description;

    if (!hasLabelOrDescription) {
      return (
        <FieldRoot ref={ref} className={className} orientation={orientation} {...props}>
          {children}
        </FieldRoot>
      );
    }

    return (
      <FieldRoot ref={ref} className={className} orientation={orientation} {...props}>
        {!!label && <FieldLabel {...labelProps}>{label}</FieldLabel>}
        <FieldContent {...contentProps}>
          {children}
          {!!description && (
            <FieldDescription {...descriptionProps} className={cn('pt-1', descriptionProps?.className)}>
              {description}
            </FieldDescription>
          )}
          {hasError && (
            <FieldError {...errorProps} errors={errors} issues={issues}>
              {error}
            </FieldError>
          )}
        </FieldContent>
      </FieldRoot>
    );
  },
);
Field.displayName = 'Field';

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldRoot,
  FieldSeparator,
  FieldSet,
  FieldTitle,
};
