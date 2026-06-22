import React from 'react';

import type { ColorVariant } from '@/shared/constants';
import type { OptionType } from '@/shared/types';
import type { ReactNode } from 'react';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { isAriaInvalid } from '@/shared/utils';

import { Checkbox } from '../Checkbox';
import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';

export interface CheckboxGroupProps {
  /** options for the checkbox group */
  options: Array<OptionType | string | number>;
  /** selectedValues for the checkbox group */
  selectedValues: string[] | undefined;
  /** Callback when the checkbox value changes */
  onSelectedValueChange: (selectedValues: string[]) => void;
  /** Label for the checkbox */
  label?: ReactNode;
  /** Props for the label */
  labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
  /**
   * The class name for the label
   */
  labelClassName?: string;
  /**
   * Whether the checkbox group is inline or not
   */
  inline?: boolean;
  /** Variant of the checkbox */
  variant?: ColorVariant;
  /**
   * Whether the checkbox is swapped to the right or not
   */
  swapRight?: boolean;
  /**
   * The class name for the checkbox group
   */
  className?: string;
  /**
   * Whether the checkbox group is required
   */
  required?: boolean;
  /**
   * Whether the checkbox group is invalid.
   */
  'aria-invalid'?: boolean;
  /**
   * whether the checkbox group is invalid
   */
  isInvalid?: boolean;
  /**
   * The error message for the checkbox
   */
  errorMessage?: string;
}

/**
 * CheckboxGroup Component
 *
 * A group of checkboxes that allows users to select multiple options.
 * More convenient than managing individual Checkbox components.
 *
 * @example
 * // Basic usage
 * import { CheckboxGroup } from '@paalstack/react-ui';
 *
 * const [selected, setSelected] = useState<string[]>([]);
 *
 * <CheckboxGroup
 *   options={['Option 1', 'Option 2', 'Option 3']}
 *   selectedValues={selected}
 *   onSelectedValueChange={setSelected}
 * />
 *
 * @example
 * // With label
 * <CheckboxGroup
 *   label="Select your interests"
 *   options={['Reading', 'Sports', 'Music', 'Travel', 'Cooking']}
 *   selectedValues={interests}
 *   onSelectedValueChange={setInterests}
 * />
 *
 * @example
 * // With object options
 * const hobbies = [
 *   { value: 'reading', label: 'Reading', key: 'reading' },
 *   { value: 'sports', label: 'Sports', key: 'sports' },
 *   { value: 'music', label: 'Music', key: 'music' },
 * ];
 *
 * <CheckboxGroup
 *   label="Hobbies"
 *   options={hobbies}
 *   selectedValues={selectedHobbies}
 *   onSelectedValueChange={setSelectedHobbies}
 * />
 *
 * @example
 * // Required field with validation
 * <CheckboxGroup
 *   label="Terms and Conditions"
 *   options={[
 *     'I agree to the Terms of Service',
 *     'I agree to the Privacy Policy',
 *     'I agree to receive marketing emails'
 *   ]}
 *   selectedValues={agreements}
 *   onSelectedValueChange={setAgreements}
 *   required
 *   isInvalid={agreements.length < 2}
 *   errorMessage="You must agree to Terms and Privacy Policy"
 * />
 *
 * @example
 * // Inline layout (horizontal)
 * <CheckboxGroup
 *   label="Days available"
 *   options={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
 *   selectedValues={days}
 *   onSelectedValueChange={setDays}
 *   inline
 * />
 *
 * @example
 * // Different color variants
 * <CheckboxGroup
 *   label="Features"
 *   options={['Feature 1', 'Feature 2', 'Feature 3']}
 *   selectedValues={features}
 *   onSelectedValueChange={setFeatures}
 *   variant="success"
 * />
 *
 * @example
 * // Permissions selector
 * const permissions = [
 *   { value: 'read', label: 'Read', key: 'read' },
 *   { value: 'write', label: 'Write', key: 'write' },
 *   { value: 'delete', label: 'Delete', key: 'delete' },
 *   { value: 'admin', label: 'Admin Access', key: 'admin' },
 * ];
 *
 * <CheckboxGroup
 *   label="User Permissions"
 *   options={permissions}
 *   selectedValues={userPermissions}
 *   onSelectedValueChange={setUserPermissions}
 *   required
 * />
 *
 * @example
 * // With disabled options
 * const features = [
 *   { value: 'basic', label: 'Basic Features', key: 'basic' },
 *   { value: 'advanced', label: 'Advanced Features (Premium)', key: 'advanced', disabled: true },
 *   { value: 'pro', label: 'Pro Features (Premium)', key: 'pro', disabled: true },
 * ];
 *
 * <CheckboxGroup
 *   label="Features"
 *   options={features}
 *   selectedValues={selectedFeatures}
 *   onSelectedValueChange={setSelectedFeatures}
 * />
 *
 * @example
 * // Swap checkboxes to right
 * <CheckboxGroup
 *   label="Preferences"
 *   options={['Email notifications', 'SMS notifications', 'Push notifications']}
 *   selectedValues={notificationPrefs}
 *   onSelectedValueChange={setNotificationPrefs}
 *   swapRight
 * />
 *
 * @example
 * // Newsletter preferences
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Email Preferences</CardTitle>
 *   </CardHeader>
 *   <CardContent>
 *     <CheckboxGroup
 *       label="Subscribe to:"
 *       options={[
 *         'Weekly Newsletter',
 *         'Product Updates',
 *         'Special Offers',
 *         'Partner Communications'
 *       ]}
 *       selectedValues={subscriptions}
 *       onSelectedValueChange={setSubscriptions}
 *     />
 *   </CardContent>
 * </Card>
 *
 * @example
 * // Dietary restrictions
 * <CheckboxGroup
 *   label="Dietary Restrictions"
 *   options={[
 *     'Vegetarian',
 *     'Vegan',
 *     'Gluten-Free',
 *     'Dairy-Free',
 *     'Nut Allergy'
 *   ]}
 *   selectedValues={restrictions}
 *   onSelectedValueChange={setRestrictions}
 * />
 *
 * @example
 * // Form integration
 * const [formData, setFormData] = useState({
 *   skills: [],
 *   languages: [],
 * });
 *
 * <form onSubmit={handleSubmit}>
 *   <CheckboxGroup
 *     label="Skills"
 *     options={['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python']}
 *     selectedValues={formData.skills}
 *     onSelectedValueChange={(vals) => setFormData({...formData, skills: vals})}
 *     required
 *   />
 *
 *   <CheckboxGroup
 *     label="Languages"
 *     options={['English', 'Spanish', 'French', 'German', 'Chinese']}
 *     selectedValues={formData.languages}
 *     onSelectedValueChange={(vals) => setFormData({...formData, languages: vals})}
 *     inline
 *   />
 *
 *   <Button type="submit">Submit</Button>
 * </form>
 *
 * @example
 * // Product filters
 * <CheckboxGroup
 *   label="Filter by category"
 *   options={[
 *     'Electronics',
 *     'Clothing',
 *     'Home & Garden',
 *     'Sports',
 *     'Books'
 *   ]}
 *   selectedValues={categoryFilters}
 *   onSelectedValueChange={setCategoryFilters}
 *   inline
 * />
 *
 * @example
 * // Custom styling
 * <CheckboxGroup
 *   label="Options"
 *   options={options}
 *   selectedValues={selected}
 *   onSelectedValueChange={setSelected}
 *   labelClassName="text-lg font-bold"
 *   className="gap-4"
 * />
 *
 * @example
 * // Survey question
 * <CheckboxGroup
 *   label="Which of the following apply to you? (Select all that apply)"
 *   options={[
 *     'I am currently employed',
 *     'I am looking for new opportunities',
 *     'I am open to freelance work',
 *     'I am interested in remote positions'
 *   ]}
 *   selectedValues={surveyAnswers}
 *   onSelectedValueChange={setSurveyAnswers}
 * />
 */
export const CheckboxGroup = React.forwardRef<React.ElementRef<'div'>, CheckboxGroupProps>(
  (
    {
      label,
      options,
      selectedValues = [],
      onSelectedValueChange,
      variant,
      inline,
      swapRight,
      className,
      labelClassName,
      labelProps,
      required,
      isInvalid: invalid,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const isInvalid = invalid ?? isAriaInvalid(props['aria-invalid']);
    const localOptions = React.useMemo<OptionType[]>(() => {
      return options.map((option) => {
        if (typeof option === 'string' || typeof option === 'number') {
          return { label: option.toString(), value: option.toString(), key: option.toString() };
        }
        return option;
      });
    }, [options]);

    return (
      <>
        <Box className="grid gap-4">
          {label && (
            <Label required={required} className={labelClassName} data-qa="checkbox-group-label" {...labelProps}>
              {label}
            </Label>
          )}
          <Box
            className={cn(
              'grid gap-3',
              {
                'auto-cols-max grid-flow-col gap-4': inline,
              },
              className,
            )}
            ref={ref}
            data-qa="checkbox-group
          "
          >
            {localOptions.map((option: OptionType) => (
              <Checkbox
                key={option.key || option.value}
                variant={variant}
                id={option.key || option.value}
                checked={selectedValues?.includes(option.value)}
                swapRight={swapRight}
                className={option.className}
                labelClassName="font-normal"
                label={option.labelContent || option.label}
                disabled={option.disabled}
                isInvalid={isInvalid}
                onCheckedChange={(checked) => {
                  return checked
                    ? onSelectedValueChange([...selectedValues, option.value])
                    : onSelectedValueChange(selectedValues?.filter((value) => value !== option.value));
                }}
                data-qa={`checkbox-group-${option.key || option.value}`}
              />
            ))}
          </Box>
        </Box>
        {isInvalid && <ErrorMessage data-qa="checkbox-group-error-message" message={errorMessage} />}
      </>
    );
  },
);
CheckboxGroup.displayName = 'CheckboxGroup';
