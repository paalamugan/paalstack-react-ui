import { useEffect, useMemo, useState } from 'react';

import type { ComponentWithAs, OptionType } from '@/shared/types';
import type { NativeCheckboxProps } from '../NativeCheckbox';

import { Stack } from '@/layouts/Stack';
import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';
import { NativeCheckbox } from '../NativeCheckbox';

export interface NativeCheckboxGroupProps extends Omit<NativeCheckboxProps, 'checked' | 'onCheckedChange'> {
  /**
   * The options for the checkbox group
   */
  options: Array<OptionType | string | number>;
  /**
   * The default values for the checkbox group
   */
  defaultValue?: string[];
  /**
   * The values for the checkbox group
   */
  value?: string[];
  /**
   * The label for the checkbox group
   */
  label?: string;
  /**
   * Props for the label
   */
  labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
  /**
   * The class name for the checkbox group label
   */
  labelClassName?: string;
  /**
   * Whether the checkbox group is vertical or horizontal.
   */
  inline?: boolean;
  /**
   * Callback when the checkbox group values change
   */
  onValuesChange?: (values: string[]) => void;
}

/**
 * NativeCheckboxGroup Component
 *
 * A group of checkboxes for selecting multiple options.
 * More convenient than managing individual NativeCheckbox components.
 *
 * @example
 * // Basic usage
 * import { NativeCheckboxGroup } from '@paalstack/react-ui';
 *
 * const [values, setValues] = useState<string[]>([]);
 *
 * <NativeCheckboxGroup
 *   label="Choose options"
 *   options={[
 *     { value: 'option1', label: 'Option 1', key: 'option1' },
 *     { value: 'option2', label: 'Option 2', key: 'option2' },
 *     { value: 'option3', label: 'Option 3', key: 'option3' },
 *   ]}
 *   value={values}
 *   onValuesChange={setValues}
 * />
 *
 * @example
 * // Controlled component
 * const [selected, setSelected] = useState<string[]>(['email', 'sms']);
 *
 * <NativeCheckboxGroup
 *   label="Notification Methods"
 *   options={[
 *     { value: 'email', label: 'Email', key: 'email' },
 *     { value: 'phone', label: 'Phone', key: 'phone' },
 *     { value: 'sms', label: 'SMS', key: 'sms' },
 *   ]}
 *   value={selected}
 *   onValuesChange={setSelected}
 * />
 *
 * @example
 * // Required field with validation
 * <NativeCheckboxGroup
 *   label="Select features"
 *   options={[
 *     { value: 'feature1', label: 'Feature 1', key: 'feature1' },
 *     { value: 'feature2', label: 'Feature 2', key: 'feature2' },
 *     { value: 'feature3', label: 'Feature 3', key: 'feature3' },
 *   ]}
 *   value={features}
 *   required
 *   isInvalid={features.length === 0}
 *   errorMessage="Please select at least one feature"
 * />
 *
 * @example
 * // Inline layout (horizontal)
 * <NativeCheckboxGroup
 *   label="Days of the week"
 *   options={[
 *     { value: 'mon', label: 'Monday', key: 'mon' },
 *     { value: 'tue', label: 'Tuesday', key: 'tue' },
 *     { value: 'wed', label: 'Wednesday', key: 'wed' },
 *   ]}
 *   value={days}
 *   inline
 * />
 *
 * @example
 * // With disabled options
 * <NativeCheckboxGroup
 *   label="Services"
 *   options={[
 *     { value: 'basic', label: 'Basic Service', key: 'basic' },
 *     { value: 'premium', label: 'Premium (Coming Soon)', key: 'premium', disabled: true },
 *     { value: 'enterprise', label: 'Enterprise (Contact Us)', key: 'enterprise', disabled: true },
 *   ]}
 *   value={services}
 * />
 *
 * @example
 * // Permissions form
 * <Card>
 *   <CardContent className="pt-6">
 *     <NativeCheckboxGroup
 *       label="User Permissions"
 *       options={[
 *         { value: 'read', label: 'Read', key: 'read' },
 *         { value: 'write', label: 'Write', key: 'write' },
 *         { value: 'delete', label: 'Delete', key: 'delete' },
 *         { value: 'admin', label: 'Admin', key: 'admin' },
 *       ]}
 *       value={permissions}
 *       required
 *     />
 *   </CardContent>
 * </Card>
 *
 * @example
 * // Form integration
 * const [formData, setFormData] = useState({
 *   interests: [] as string[],
 *   skills: [] as string[],
 * });
 *
 * <form onSubmit={handleSubmit}>
 *   <NativeCheckboxGroup
 *     label="Interests"
 *     options={[
 *       { value: 'sports', label: 'Sports', key: 'sports' },
 *       { value: 'music', label: 'Music', key: 'music' },
 *       { value: 'reading', label: 'Reading', key: 'reading' },
 *     ]}
 *     value={formData.interests}
 *     onValuesChange={(values) => setFormData({...formData, interests: values})}
 *     inline
 *   />
 *
 *   <NativeCheckboxGroup
 *     label="Skills"
 *     options={[
 *       { value: 'js', label: 'JavaScript', key: 'js' },
 *       { value: 'ts', label: 'TypeScript', key: 'ts' },
 *       { value: 'react', label: 'React', key: 'react' },
 *     ]}
 *     value={formData.skills}
 *     onValuesChange={(values) => setFormData({...formData, skills: values})}
 *     inline
 *   />
 *
 *   <Button type="submit">Submit</Button>
 * </form>
 *
 * @example
 * // Custom styling
 * <NativeCheckboxGroup
 *   label="Preferences"
 *   options={[
 *     { value: 'pref1', label: 'Preference 1', key: 'pref1' },
 *     { value: 'pref2', label: 'Preference 2', key: 'pref2' },
 *   ]}
 *   value={preferences}
 *   labelClassName="text-lg font-bold"
 *   wrapperClassName="bg-muted p-4 rounded"
 * />
 *
 * @tip Use CheckboxGroup component for more features like color variants and better composition
 * @tip NativeCheckboxGroup is a simpler alternative when you don't need advanced CheckboxGroup features
 */
export const NativeCheckboxGroup: ComponentWithAs<'label', NativeCheckboxGroupProps> = forwardRef<
  NativeCheckboxGroupProps,
  'label'
>(
  (
    {
      options,
      label,
      defaultValue,
      value: localValue,
      onValuesChange,
      required,
      isInvalid,
      labelClassName,
      errorMessage,
      id,
      disabled,
      inline,
      labelProps,
      ...props
    },
    ref,
  ) => {
    const [values, setValues] = useState<string[]>(localValue ?? defaultValue ?? []);

    useEffect(() => {
      if (localValue) {
        setValues(localValue);
      }
    }, [localValue]);

    const localOptions = useMemo<OptionType[]>(() => {
      return options.map((option) => {
        if (typeof option === 'string' || typeof option === 'number') {
          return { label: option.toString(), value: option.toString(), key: option.toString() };
        }
        return option;
      });
    }, [options]);

    const onChangeHandle = (optionValue: string, checked: boolean) => {
      const newValues = checked ? [...values, optionValue] : values.filter((v) => v !== optionValue);
      setValues(newValues);
      onValuesChange?.(newValues);
    };

    return (
      <>
        <Stack className="gap-4">
          {label && (
            <Label
              text={label}
              id={id}
              ref={ref}
              required={required}
              className={labelClassName}
              disabled={disabled}
              data-qa="checkbox-group-label"
              {...labelProps}
            />
          )}
          <Stack
            className={cn('inline-flex', {
              'flex-row gap-3': inline,
            })}
          >
            {localOptions.map((option) => (
              <NativeCheckbox
                data-qa="checkbox-group-item"
                {...props}
                key={option.key || option.value}
                id={option.key || option.value}
                className={cn(props.className, option.className)}
                name={option.value}
                value={option.value}
                label={option.labelContent || option.label}
                onCheckedChange={(checked) => onChangeHandle(option.value, checked)}
                checked={values.includes(option.value)}
                isInvalid={isInvalid}
                disabled={option.disabled ?? disabled}
              />
            ))}
          </Stack>
        </Stack>
        {isInvalid && <ErrorMessage data-qa="checkbox-group-error-message" message={errorMessage} />}
      </>
    );
  },
);
