import * as React from 'react';

import type { SelectRootProps } from '@base-ui/react/select';
import type { SelectOption, SelectOptionGroupType } from './types';

import { Select as SelectPrimitive } from '@base-ui/react/select';

import { RxCheck as CheckIcon, RxChevronDown as ChevronDownIcon, RxChevronUp as ChevronUpIcon } from '@/icons/rx';
import { Box } from '@/layouts/Box';
import { Text } from '@/layouts/Text';
import { cn } from '@/shared/lib';
import { isAriaInvalid } from '@/shared/utils';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';
import { isSelectOptionGroup } from './helper';

const SelectRoot = <Value, Multiple extends boolean | undefined = false>({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root<Value, Multiple>>) => (
  <SelectPrimitive.Root<Value, Multiple> data-slot="select" {...props} />
);
SelectRoot.displayName = 'SelectRoot';

const SelectPortal = SelectPrimitive.Portal;

const SelectIcon = SelectPrimitive.Icon;

const SelectGroup = ({ className, ...props }: SelectPrimitive.Group.Props) => (
  <SelectPrimitive.Group data-slot="select-group" className={cn('scroll-my-1 p-1', className)} {...props} />
);
SelectGroup.displayName = 'SelectGroup';

const SelectValue = ({ className, ...props }: SelectPrimitive.Value.Props) => (
  <SelectPrimitive.Value data-slot="select-value" className={cn('flex flex-1 text-left', className)} {...props} />
);
SelectValue.displayName = 'SelectValue';

const SelectScrollUpButton = ({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) => (
  <SelectPrimitive.ScrollUpArrow
    data-slot="select-scroll-up-button"
    className={cn(
      "top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    {...props}
  >
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpArrow>
);
SelectScrollUpButton.displayName = 'SelectScrollUpButton';

const SelectScrollDownButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) => (
  <SelectPrimitive.ScrollDownArrow
    data-slot="select-scroll-down-button"
    className={cn(
      "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    {...props}
  >
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownArrow>
);
SelectScrollDownButton.displayName = 'SelectScrollDownButton';

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectPrimitive.Trigger.Props & { size?: 'sm' | 'default' }
>(({ className, size = 'default', children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    data-slot="select-trigger"
    data-size={size}
    data-qa="select-trigger"
    className={cn(
      "flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon
      render={
        <ChevronDownIcon data-qa="select-trigger-icon" className="pointer-events-none size-4 text-muted-foreground" />
      }
    />
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = 'SelectTrigger';

const SelectContent = ({
  className,
  children,
  side = 'bottom',
  sideOffset = 4,
  align = 'center',
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<SelectPrimitive.Positioner.Props, 'align' | 'alignOffset' | 'side' | 'sideOffset' | 'alignItemWithTrigger'>) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Positioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      alignItemWithTrigger={alignItemWithTrigger}
      className="isolate z-50"
    >
      <SelectPrimitive.Popup
        data-slot="select-content"
        data-align-trigger={alignItemWithTrigger}
        data-qa="select-content"
        className={cn(
          'relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
          className,
        )}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.List data-qa="select-viewport">{children}</SelectPrimitive.List>
        <SelectScrollDownButton />
      </SelectPrimitive.Popup>
    </SelectPrimitive.Positioner>
  </SelectPrimitive.Portal>
);
SelectContent.displayName = 'SelectContent';

const SelectLabel = ({ className, ...props }: SelectPrimitive.GroupLabel.Props) => (
  <SelectPrimitive.GroupLabel
    data-slot="select-label"
    data-qa="select-label"
    className={cn('px-1.5 py-1 text-xs text-muted-foreground', className)}
    {...props}
  />
);
SelectLabel.displayName = 'SelectLabel';

const SelectItem = ({ className, children, ...props }: SelectPrimitive.Item.Props) => (
  <SelectPrimitive.Item
    data-slot="select-item"
    data-qa="select-item"
    className={cn(
      "relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
      className,
    )}
    {...props}
  >
    <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap" data-qa="select-item-text">
      {children}
    </SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator
      render={
        <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
          <CheckIcon data-qa="select-item-indicator" className="pointer-events-none" />
        </span>
      }
    />
  </SelectPrimitive.Item>
);
SelectItem.displayName = 'SelectItem';

const SelectSeparator = ({ className, ...props }: SelectPrimitive.Separator.Props) => (
  <SelectPrimitive.Separator
    data-slot="select-separator"
    data-qa="select-separator"
    className={cn('pointer-events-none -mx-1 my-1 h-px bg-border', className)}
    {...props}
  />
);
SelectSeparator.displayName = 'SelectSeparator';

export interface SelectProps<TValue = string, Multiple extends boolean | undefined = false> extends SelectRootProps<
  TValue,
  Multiple
> {
  /**
   * The groups of options to display in the select.
   */
  options: SelectOption[];
  /**
   * The placeholder text to display when no option is selected.
   */
  placeholder?: React.ReactNode;
  /**
   * The label for the select.
   */
  label?: React.ReactNode;
  /**
   * The props for the label.
   */
  labelProps?: React.ComponentProps<typeof Label>;
  /**
   * The class name for the select.
   */
  className?: string;
  /**
   * The class name for the trigger select.
   */
  triggerClassName?: string;
  /**
   * The class name for the content select.
   */
  contentClassName?: string;
  /**
   * The id for the select.
   */
  id?: string;
  /**
   * Whether the select is required.
   */
  required?: boolean;
  /**
   * Whether the select is invalid.
   */
  'aria-invalid'?: boolean;
  /**
   * whether the select is invalid
   */
  isInvalid?: boolean;
  /**
   * blur event handler
   */
  onBlur?: () => void;
  /**
   * Optional inline for the select
   */
  inline?: boolean;
  /**
   * The error message for the checkbox
   */
  errorMessage?: string;
  /**
   * If options are not found, display this message.
   * @default 'No option found.'
   */
  noOptionsMessage?: React.ReactNode;
}

/**
 * Select Component
 *
 * A dropdown select component for choosing a single option from a list.
 * Supports grouped options, validation, labels, and custom styling.
 *
 * @example
 * // Basic usage
 * import { Select } from '@paalstack/react-ui';
 *
 * <Select
 *   options={['Option 1', 'Option 2', 'Option 3']}
 *   placeholder="Choose an option"
 * />
 *
 * @example
 * // With label
 * <Select
 *   label="Country"
 *   options={['USA', 'Canada', 'Mexico']}
 *   placeholder="Select a country"
 * />
 *
 * @example
 * // With object options
 * const options = [
 *   { value: 'react', label: 'React', key: 'react' },
 *   { value: 'vue', label: 'Vue.js', key: 'vue' },
 *   { value: 'angular', label: 'Angular', key: 'angular' },
 * ];
 *
 * <Select
 *   label="Framework"
 *   options={options}
 *   placeholder="Select a framework"
 * />
 *
 * @example
 * // Controlled select
 * const [value, setValue] = useState('');
 *
 * <Select
 *   label="Controlled Select"
 *   options={['Option 1', 'Option 2', 'Option 3']}
 *   value={value}
 *   onValueChange={setValue}
 * />
 *
 * @example
 * // Grouped options
 * const groupedOptions = [
 *   {
 *     label: 'Fruits',
 *     options: [
 *       { value: 'apple', label: 'Apple', key: 'apple' },
 *       { value: 'banana', label: 'Banana', key: 'banana' },
 *     ]
 *   },
 *   {
 *     label: 'Vegetables',
 *     options: [
 *       { value: 'carrot', label: 'Carrot', key: 'carrot' },
 *       { value: 'broccoli', label: 'Broccoli', key: 'broccoli' },
 *     ]
 *   }
 * ];
 *
 * <Select
 *   label="Food"
 *   options={groupedOptions}
 *   placeholder="Select food"
 * />
 *
 * @example
 * // With validation
 * <Select
 *   label="Required Field"
 *   options={['Option 1', 'Option 2']}
 *   required
 *   isInvalid
 *   errorMessage="Please select an option"
 * />
 *
 * @example
 * // Disabled options
 * const options = [
 *   { value: '1', label: 'Available', key: '1' },
 *   { value: '2', label: 'Not Available', key: '2', disabled: true },
 *   { value: '3', label: 'Available', key: '3' },
 * ];
 *
 * <Select options={options} placeholder="Select option" />
 *
 * @example
 * // Inline layout
 * <Select
 *   label="Status"
 *   options={['Active', 'Inactive']}
 *   inline
 * />
 *
 * @example
 * // With custom no options message
 * <Select
 *   options={[]}
 *   noOptionsMessage="No items available"
 * />
 *
 * @example
 * // With custom styling
 * <Select
 *   label="Styled Select"
 *   options={['Option 1', 'Option 2']}
 *   className="mb-4"
 *   triggerClassName="border-2 border-primary"
 *   contentClassName="shadow-lg"
 * />
 *
 * @example
 * // Complete form example
 * const [formData, setFormData] = useState({ role: '' });
 *
 * <form onSubmit={(e) => { e.preventDefault(); console.log(formData); }}>
 *   <Select
 *     label="Role"
 *     options={[
 *       { value: 'admin', label: 'Administrator', key: 'admin' },
 *       { value: 'user', label: 'User', key: 'user' },
 *       { value: 'guest', label: 'Guest', key: 'guest' },
 *     ]}
 *     value={formData.role}
 *     onValueChange={(value) => setFormData({ ...formData, role: value })}
 *     required
 *   />
 *   <button type="submit">Submit</button>
 * </form>
 */
type SelectTriggerRef = React.ElementRef<typeof SelectPrimitive.Trigger>;

const SelectForwardRef = React.forwardRef<SelectTriggerRef, SelectProps<unknown, boolean | undefined>>(function Select(
  {
    placeholder = 'Select',
    label,
    triggerClassName,
    contentClassName,
    options,
    id,
    required,
    onBlur,
    isInvalid: invalid,
    inline,
    className,
    errorMessage,
    noOptionsMessage = 'No option found.',
    labelProps,
    ...props
  },
  ref,
) {
  const labelId = id ? id : label ? label.toString().toLowerCase().replace(/\s/g, '-') : undefined;

  const isInvalid = invalid ?? isAriaInvalid(props['aria-invalid']);

  const groups: SelectOptionGroupType[] = React.useMemo(() => {
    const groupArray: SelectOptionGroupType[] = [];
    options.forEach((option) => {
      if (typeof option === 'string' || typeof option === 'number') {
        if (!groupArray.length) {
          groupArray.push({ options: [] });
        }
        if (option) {
          groupArray[0].options.push({ key: option.toString(), label: option.toString(), value: option.toString() });
        }
      } else if (isSelectOptionGroup(option)) {
        groupArray.push(option);
      } else {
        if (!groupArray.length) {
          groupArray.push({ options: [] });
        }
        groupArray[0].options.push(option);
      }
    });
    return groupArray;
  }, [options]);

  const items = React.useMemo(() => {
    return groups.reduce(
      (acc, group) => {
        group.options.forEach((option) => {
          acc[option.value] = option.label;
        });
        return acc;
      },
      {} as Record<string, React.ReactNode>,
    );
  }, [groups]);

  return (
    <>
      <Box
        className={cn(
          'flex w-full flex-col gap-2',
          {
            'flex-row items-center': inline,
          },
          className,
        )}
        data-qa="select-container"
      >
        {label && (
          <Label htmlFor={labelId} required={required} data-qa="select-label" isInvalid={isInvalid} {...labelProps}>
            {label}
          </Label>
        )}
        <SelectRoot items={items} data-slot="select" data-qa="select" required={required} {...props}>
          <SelectTrigger
            ref={ref}
            className={cn(
              'w-full',
              {
                'border-danger text-danger focus-visible:ring-danger/40': isInvalid,
              },
              triggerClassName,
            )}
            id={labelId}
            onBlur={onBlur}
            data-qa="select-trigger"
            aria-invalid={isInvalid}
          >
            <SelectValue data-qa="select-value" placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className={contentClassName}>
            {!groups.length ? (
              <Text className="px-3 py-1 text-center text-sm text-gray-500" data-qa="select-no-options-message">
                {noOptionsMessage}
              </Text>
            ) : (
              groups.map((group, index) => (
                <React.Fragment key={`${group.label || ''}${index.toString()}`}>
                  <SelectGroup data-qa="select-group">
                    {group.label && <SelectLabel data-qa="select-group-label">{group.label}</SelectLabel>}
                    {group.options.map((option) => (
                      <SelectItem
                        key={option.key || option.value}
                        className={cn('cursor-pointer', option.className)}
                        value={option.value}
                        disabled={option.disabled}
                        data-qa="select-group-item"
                      >
                        {option.labelContent || option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  {index !== groups.length - 1 && <SelectSeparator data-qa="select-separator" />}
                </React.Fragment>
              ))
            )}
          </SelectContent>
        </SelectRoot>
      </Box>
      {isInvalid && <ErrorMessage data-qa="select-error-message" message={errorMessage} />}
    </>
  );
});

SelectForwardRef.displayName = 'Select';

const Select = SelectForwardRef as <TValue, Multiple extends boolean | undefined = false>(
  props: SelectProps<TValue, Multiple> & React.RefAttributes<SelectTriggerRef>,
) => React.ReactElement | null;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
