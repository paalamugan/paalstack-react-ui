import * as React from 'react';

import type { OptionType } from '@/shared/types';

import { RxChevronDown as ChevronDownIcon } from '@/icons/rx';
import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { isAriaInvalid } from '@/shared/utils';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';

export interface NativeSelectOptionGroupType {
  /** Group label shown as an optgroup header */
  label?: string;
  /** Options within this group */
  options: OptionType[];
}

export interface NativeSelectRootProps extends Omit<React.ComponentProps<'select'>, 'size'> {
  size?: 'sm' | 'default';
  wrapperClassName?: string;
}

const isNativeSelectGroup = (
  option: OptionType | NativeSelectOptionGroupType | string | number,
): option is NativeSelectOptionGroupType =>
  typeof option === 'object' && option !== null && 'options' in option && Array.isArray(option.options);

/**
 * NativeSelectRoot — Composition API primitive
 *
 * A styled native HTML `<select>` element. Use `NativeSelectOption` and
 * `NativeSelectOptGroup` as children to build the option list manually.
 *
 * @example
 * // Basic
 * import { NativeSelectRoot, NativeSelectOption } from '@paalstack/react-ui';
 *
 * <NativeSelectRoot>
 *   <NativeSelectOption value="">Select a fruit</NativeSelectOption>
 *   <NativeSelectOption value="apple">Apple</NativeSelectOption>
 *   <NativeSelectOption value="banana">Banana</NativeSelectOption>
 * </NativeSelectRoot>
 *
 * @example
 * // With groups
 * <NativeSelectRoot>
 *   <NativeSelectOption value="">Select department</NativeSelectOption>
 *   <NativeSelectOptGroup label="Engineering">
 *     <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
 *     <NativeSelectOption value="backend">Backend</NativeSelectOption>
 *   </NativeSelectOptGroup>
 * </NativeSelectRoot>
 *
 * @example
 * // Small size
 * <NativeSelectRoot size="sm">
 *   <NativeSelectOption value="apple">Apple</NativeSelectOption>
 * </NativeSelectRoot>
 *
 * @example
 * // Controlled
 * const [value, setValue] = useState('');
 *
 * <NativeSelectRoot value={value} onChange={(e) => setValue(e.target.value)}>
 *   <NativeSelectOption value="">Select option</NativeSelectOption>
 *   <NativeSelectOption value="option1">Option 1</NativeSelectOption>
 * </NativeSelectRoot>
 *
 * @tip Use NativeSelectRoot for native browser behavior and better performance
 * @tip Use NativeSelect (Props API) for quick setup with a label and validation
 * @tip NativeSelectRoot is ideal for mobile-optimized dropdowns
 * @tip Always provide a default "Select…" option
 * @tip Use aria-invalid for validation states
 * @tip The size prop supports 'sm' and 'default' (default: 'default')
 */
const NativeSelectRoot = React.forwardRef<HTMLSelectElement, NativeSelectRootProps>(
  ({ className, size = 'default', wrapperClassName, ...props }, ref) => {
    return (
      <Box
        className={cn('group/native-select relative w-fit has-[select:disabled]:opacity-50', wrapperClassName)}
        data-slot="native-select-wrapper"
        data-qa="native-select-wrapper"
        data-size={size}
      >
        <select
          ref={ref}
          data-slot="native-select"
          data-qa="native-select"
          data-size={size}
          className={cn(
            'h-8 w-full min-w-0 appearance-none rounded-lg border border-input bg-transparent py-1 pr-8 pl-2.5 text-sm transition-colors outline-none select-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[size=sm]:py-0.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
            className,
          )}
          {...props}
        />
        <ChevronDownIcon
          className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground select-none"
          aria-hidden="true"
          data-slot="native-select-icon"
          data-qa="native-select-icon"
        />
      </Box>
    );
  },
);
NativeSelectRoot.displayName = 'NativeSelectRoot';

const NativeSelectOption = ({ ...props }: React.ComponentProps<'option'>) => {
  return <option data-slot="native-select-option" data-qa="native-select-option" {...props} />;
};

const NativeSelectOptGroup = ({ className, ...props }: React.ComponentProps<'optgroup'>) => {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      data-qa="native-select-optgroup"
      className={cn(className)}
      {...props}
    />
  );
};

export interface NativeSelectProps extends NativeSelectRootProps {
  /**
   * Flat or grouped options to render automatically.
   * - Plain strings/numbers are turned into `<option>` elements.
   * - `{ value, label, disabled? }` objects become `<option>` elements.
   * - `{ label?, options[] }` objects become `<optgroup>` elements.
   */
  options: Array<OptionType | NativeSelectOptionGroupType | string | number>;
  /** Optional label rendered above (or beside, when `inline`) the select */
  label?: React.ReactNode;
  /** Placeholder option shown as the first, disabled entry */
  placeholder?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Marks the field as invalid (mirrors `aria-invalid`) */
  isInvalid?: boolean;
  /** Error message displayed below the select when invalid */
  errorMessage?: string;
  /** Renders the label and select side-by-side */
  inline?: boolean;
  /** Props forwarded to the inner `<Label>` element */
  labelProps?: Omit<React.ComponentPropsWithoutRef<typeof Label>, 'children'>;
  /** Callback fired with the new string value on every change */
  onValueChange?: (value: string) => void;
}

/**
 * NativeSelect (Props API)
 *
 * A convenience wrapper around `NativeSelectRoot` that renders a label, the
 * native `<select>` element and an error message from a structured `options`
 * array. Use `NativeSelectRoot` directly for full composition control.
 *
 * @example
 * // Basic usage
 * import { NativeSelect } from '@paalstack/react-ui';
 *
 * <NativeSelect
 *   label="Fruit"
 *   placeholder="Select a fruit"
 *   options={['Apple', 'Banana', 'Blueberry']}
 *   onValueChange={(v) => console.log(v)}
 * />
 *
 * @example
 * // With object options
 * <NativeSelect
 *   label="Framework"
 *   options={[
 *     { value: 'react', label: 'React', key: 'react' },
 *     { value: 'vue', label: 'Vue', key: 'vue' },
 *   ]}
 *   onValueChange={setFramework}
 * />
 *
 * @example
 * // With grouped options
 * <NativeSelect
 *   label="Department"
 *   options={[
 *     { label: 'Engineering', options: [
 *       { value: 'fe', label: 'Frontend', key: 'fe' },
 *       { value: 'be', label: 'Backend', key: 'be' },
 *     ]},
 *     { label: 'Sales', options: [
 *       { value: 'rep', label: 'Sales Rep', key: 'rep' },
 *     ]},
 *   ]}
 *   onValueChange={setDepartment}
 * />
 *
 * @example
 * // With validation
 * <NativeSelect
 *   label="Country"
 *   required
 *   isInvalid={!country}
 *   errorMessage="Please select a country"
 *   options={['USA', 'Canada', 'UK']}
 *   onValueChange={setCountry}
 * />
 *
 * @example
 * // Inline label
 * <NativeSelect
 *   label="Priority"
 *   inline
 *   options={['Low', 'Medium', 'High']}
 *   onValueChange={setPriority}
 * />
 */
const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    {
      label,
      options,
      placeholder,
      required,
      isInvalid: invalid,
      errorMessage,
      inline,
      labelProps,
      onValueChange,
      id,
      onChange,
      ...selectProps
    },
    ref,
  ) => {
    const isInvalid = isAriaInvalid(selectProps['aria-invalid']) || invalid;
    const labelId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s/g, '-') : undefined);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onValueChange?.(e.target.value);
      onChange?.(e);
    };

    return (
      <>
        <Box
          className={cn('flex w-full flex-col gap-2', { 'flex-row items-center gap-3': inline })}
          data-qa="native-select-field"
        >
          {label && (
            <Label
              htmlFor={labelId}
              required={required}
              className={cn({ 'shrink-0': inline })}
              data-qa="native-select-field-label"
              {...labelProps}
            >
              {label}
            </Label>
          )}
          <NativeSelectRoot
            ref={ref}
            id={labelId}
            required={required}
            aria-invalid={isInvalid || undefined}
            className=""
            wrapperClassName={inline ? 'flex-1' : 'w-full'}
            onChange={handleChange}
            {...selectProps}
          >
            {placeholder && (
              <NativeSelectOption value="" disabled>
                {placeholder}
              </NativeSelectOption>
            )}
            {options.map((option, index) => {
              if (isNativeSelectGroup(option)) {
                return (
                  <NativeSelectOptGroup key={option.label ?? index} label={option.label}>
                    {option.options.map((o) => (
                      <NativeSelectOption key={o.key ?? o.value} value={o.value} disabled={o.disabled}>
                        {o.label}
                      </NativeSelectOption>
                    ))}
                  </NativeSelectOptGroup>
                );
              }
              if (typeof option === 'string' || typeof option === 'number') {
                return (
                  <NativeSelectOption key={option} value={option.toString()}>
                    {option}
                  </NativeSelectOption>
                );
              }
              return (
                <NativeSelectOption key={option.key ?? option.value} value={option.value} disabled={option.disabled}>
                  {option.label}
                </NativeSelectOption>
              );
            })}
          </NativeSelectRoot>
        </Box>
        {isInvalid && <ErrorMessage data-qa="native-select-field-error" message={errorMessage} />}
      </>
    );
  },
);
NativeSelect.displayName = 'NativeSelect';

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption, NativeSelectRoot };
