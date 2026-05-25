import * as React from 'react';

import type { OptionType } from '@/shared/types';
import type { PopoverModalContentProps } from '../Popover';

import { useCallbackRef } from '@/hooks/use-callback-ref';
import { RxCaretSort as CaretSortIcon, RxCross2 as XMarkIcon } from '@/icons/rx';
import { Box } from '@/layouts/Box';
import { Text } from '@/layouts/Text';
import { cn } from '@/shared/lib';
import { isAriaInvalid } from '@/shared/utils';

import { Badge } from '../Badge';
import { Button } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';
import { PopoverContent, PopoverRoot, PopoverTrigger } from '../Popover';
import { PopoverModalContent } from '../Popover/components';

export interface MultiSelectProps extends Omit<PopoverModalContentProps, 'options'> {
  /**
   * Whether the multiselect is open
   */
  open?: boolean;
  /**
   * @param open whether the multiselect is open
   * @returns void
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * List of items to be displayed in the combobox
   */
  options: Array<OptionType | string | number>;
  /**
   * List of selected values
   */
  selectedValues: string[] | undefined;
  /**
   * onChange handler for the multiselect
   */
  onSelectedValueChange: (selectedValues: string[]) => void;
  /**
   * id for the multiselect
   */
  id?: string;
  /**
   * Label for the multiselect
   */
  label?: React.ReactNode;

  /**
   * Props for the label
   */
  labelProps?: React.ComponentProps<typeof Label>;
  /**
   * Placeholder for the multiselect
   */
  placeholder?: string;
  /**
   * Props for the trigger button
   */
  triggerProps?: React.ComponentProps<typeof Button>;
  /**
   * Props for the content
   */
  contentProps?: React.ComponentProps<typeof PopoverContent>;
  /**
   * Whether the multiselect is inline
   */
  inline?: boolean;
  /**
   * Whether the multiselect is required
   */
  required?: boolean;
  /**
   * Whether the multiselect is disabled
   */
  disabled?: boolean;
  /**
   * Whether the multiselect is invalid
   */
  isInvalid?: boolean;
  /**
   * Error message for the multiselect
   */
  errorMessage?: string;
}

/**
 * MultiSelect Component
 *
 * A multi-select dropdown component that allows users to select multiple options from a list.
 * Displays selected items as badges with individual remove buttons.
 *
 @example
 * // Basic usage
 * import { MultiSelect } from '@paalstack/react-ui';

 * const [selected, setSelected] = useState<string[]>([]);
 *
 * <MultiSelect
 *   label="Select Options"
 *   options={['Option 1', 'Option 2', 'Option 3']}
 *   selectedValues={selected}
 *   onSelectedValueChange={setSelected}
 * />
 *
 * @example
 * // With object options
 * const options = [
 *   { value: 'react', label: 'React', key: 'react' },
 *   { value: 'vue', label: 'Vue.js', key: 'vue' },
 *   { value: 'angular', label: 'Angular', key: 'angular' },
 *   { value: 'svelte', label: 'Svelte', key: 'svelte' },
 * ];
 *
 * <MultiSelect
 *   label="Frameworks"
 *   options={options}
 *   selectedValues={selectedFrameworks}
 *   onSelectedValueChange={setSelectedFrameworks}
 *   placeholder="Select frameworks"
 * />
 *
 * @example
 * // Required field with validation
 * <MultiSelect
 *   label="Tags"
 *   options={['React', 'TypeScript', 'Node.js', 'MongoDB']}
 *   selectedValues={tags}
 *   onSelectedValueChange={setTags}
 *   required
 *   isInvalid={tags.length === 0}
 *   errorMessage="Please select at least one tag"
 * />
 *
 * @example
 * // Skills selector
 * const skills = ['JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java'];
 *
 * <MultiSelect
 *   label="Your Skills"
 *   options={skills}
 *   selectedValues={selectedSkills}
 *   onSelectedValueChange={setSelectedSkills}
 *   placeholder="Select your skills"
 * />
 *
 * @example
 * // Team member assignment
 * const teamMembers = [
 *   { value: '1', label: 'John Doe', key: '1' },
 *   { value: '2', label: 'Jane Smith', key: '2' },
 *   { value: '3', label: 'Bob Johnson', key: '3' },
 *   { value: '4', label: 'Alice Williams', key: '4' },
 * ];
 *
 * <MultiSelect
 *   label="Assign Team Members"
 *   options={teamMembers}
 *   selectedValues={assignedMembers}
 *   onSelectedValueChange={setAssignedMembers}
 *   placeholder="Select team members"
 * />
 *
 * @example
 * // Category filter
 * const categories = ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books', 'Toys'];
 *
 * <MultiSelect
 *   label="Filter by Category"
 *   options={categories}
 *   selectedValues={selectedCategories}
 *   onSelectedValueChange={setSelectedCategories}
 *   placeholder="All categories"
 * />
 *
 * @example
 * // Project tags with custom styling
 * <MultiSelect
 *   label="Project Tags"
 *   options={['Frontend', 'Backend', 'DevOps', 'UI/UX', 'Testing']}
 *   selectedValues={projectTags}
 *   onSelectedValueChange={setProjectTags}
 *   triggerClassName="min-h-[60px]"
 *   placeholder="Add tags to your project"
 * />
 *
 * @example
 * // Email recipients selector
 * const contacts = [
 *   { value: 'john@example.com', label: 'John Doe (john@example.com)', key: '1' },
 *   { value: 'jane@example.com', label: 'Jane Smith (jane@example.com)', key: '2' },
 *   { value: 'bob@example.com', label: 'Bob Johnson (bob@example.com)', key: '3' },
 * ];
 *
 * <MultiSelect
 *   label="To"
 *   options={contacts}
 *   selectedValues={recipients}
 *   onSelectedValueChange={setRecipients}
 *   placeholder="Select recipients"
 * />
 *
 * @example
 * // Disabled state
 * <MultiSelect
 *   label="Locked Selection"
 *   options={['Option 1', 'Option 2', 'Option 3']}
 *   selectedValues={['Option 1', 'Option 2']}
 *   onSelectedValueChange={() => {}}
 *   disabled
 * />
 *
 * @example
 * // Form integration
 * const [formData, setFormData] = useState({
 *   interests: [],
 * });
 *
 * const interests = ['Reading', 'Sports', 'Music', 'Travel', 'Cooking', 'Gaming'];
 *
 * <form onSubmit={handleSubmit}>
 *   <MultiSelect
 *     label="Interests"
 *     options={interests}
 *     selectedValues={formData.interests}
 *     onSelectedValueChange={(values) => setFormData({...formData, interests: values})}
 *     placeholder="Select your interests"
 *     required
 *   />
 *   <Button type="submit">Save Preferences</Button>
 * </form>
 *
 * @example
 * // Permissions selector with validation
 * const permissions = ['Read', 'Write', 'Delete', 'Admin', 'Share'];
 *
 * <MultiSelect
 *   label="User Permissions"
 *   options={permissions}
 *   selectedValues={userPermissions}
 *   onSelectedValueChange={setUserPermissions}
 *   isInvalid={userPermissions.length === 0}
 *   errorMessage="User must have at least one permission"
 *   required
 * />
 *
 * @example
 * // Language selector
 * const languages = [
 *   { value: 'en', label: 'English', key: 'en' },
 *   { value: 'es', label: 'Spanish', key: 'es' },
 *   { value: 'fr', label: 'French', key: 'fr' },
 *   { value: 'de', label: 'German', key: 'de' },
 *   { value: 'ja', label: 'Japanese', key: 'ja' },
 * ];
 *
 * <MultiSelect
 *   label="Preferred Languages"
 *   options={languages}
 *   selectedValues={preferredLanguages}
 *   onSelectedValueChange={setPreferredLanguages}
 *   placeholder="Select languages you speak"
 * />
 *
 * @example
 * // Inline layout
 * <MultiSelect
 *   label="Tags"
 *   options={['Tag 1', 'Tag 2', 'Tag 3']}
 *   selectedValues={tags}
 *   onSelectedValueChange={setTags}
 *   inline
 * />
 */
export const MultiSelect = React.forwardRef<React.ElementRef<'button'>, MultiSelectProps>(
  (
    {
      label,
      labelProps,
      options,
      placeholder = 'Select',
      selectedValues = [],
      onSelectedValueChange,
      onBlur,
      triggerProps,
      contentProps,
      required,
      disabled,
      isInvalid: invalid,
      inline,
      id,
      errorMessage,
      open: defaultOpen = false,
      onOpenChange,
      ...popoverModalContentProps
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(defaultOpen);
    const onSelectedValueChangeRef = useCallbackRef(onSelectedValueChange);
    const isInvalid = isAriaInvalid(popoverModalContentProps['aria-invalid']) ?? invalid;
    const labelId = id || label?.toString().toLowerCase().replace(/\s/g, '-') || '';

    React.useEffect(() => {
      setOpen(defaultOpen);
    }, [defaultOpen]);

    React.useEffect(() => {
      if (selectedValues.length === 0) {
        onSelectedValueChangeRef([]);
      }
    }, [selectedValues.length, onSelectedValueChangeRef]);

    const localOptions = React.useMemo(() => {
      return options.map((option) => {
        if (typeof option === 'string' || typeof option === 'number') {
          return {
            key: option.toString(),
            value: option.toString(),
            label: option.toString(),
          };
        }
        return option;
      });
    }, [options]);

    const labelMapping = React.useMemo(() => {
      const mapping: Record<string, string> = {};
      localOptions.forEach((option) => {
        mapping[option.value] = option.label;
      });
      return mapping;
    }, [localOptions]);

    const handleUnselect = (item: string) => {
      onSelectedValueChange(selectedValues.filter((i) => i !== item));
    };

    const onOpenChangeHandle = (open: boolean) => {
      setOpen(open);
      onOpenChange?.(open);
    };

    return (
      <>
        <Box
          className={cn('flex w-full flex-col gap-2', {
            'flex-row items-center': inline,
          })}
          data-qa="multi-select-container"
        >
          {label && (
            <Label
              data-qa={`multi-select-label-${labelId}`}
              htmlFor={labelId}
              required={required}
              {...labelProps}
              className={cn('shrink-0', labelProps?.className)}
            >
              {label}
            </Label>
          )}
          <Box className={cn({ 'min-w-0 flex-1': inline })}>
            <PopoverRoot modal open={open} onOpenChange={onOpenChangeHandle}>
              <PopoverTrigger
                render={
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    disabled={disabled}
                    ref={ref}
                    id={labelId}
                    data-qa={`multi-select-${labelId}`}
                    {...triggerProps}
                    aria-invalid={isInvalid}
                    className={cn(
                      'h-8 w-full justify-between py-2 hover:bg-background active:translate-y-0',
                      triggerProps?.className,
                      {
                        'h-full': selectedValues.length > 1,
                        'text-muted-foreground hover:text-muted-foreground': !selectedValues.length,
                      },
                    )}
                  >
                    {selectedValues.length ? (
                      <Box className="flex flex-wrap gap-2">
                        {selectedValues.map(
                          (item) =>
                            labelMapping[item] && (
                              <Badge variant="secondary" key={item} data-qa={`multi-select-badge-${item}`}>
                                {labelMapping[item]}
                                <span
                                  className="rounded-full text-muted-foreground ring-offset-background outline-hidden hover:rounded-full hover:bg-muted-foreground/40 hover:text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                      handleUnselect(item);
                                      setOpen(false);
                                    }
                                  }}
                                  onMouseDown={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                  }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleUnselect(item);
                                    setOpen(false);
                                  }}
                                >
                                  <XMarkIcon className="size-3" data-qa={`multi-select-badge-close-${item}`} />
                                </span>
                              </Badge>
                            ),
                        )}
                      </Box>
                    ) : (
                      <Text className="text-sm font-normal" data-qa="multi-select-placeholder">
                        {placeholder}
                      </Text>
                    )}
                    <CaretSortIcon className="ml-auto size-4 shrink-0 opacity-50" data-qa="multi-select-caret" />
                  </Button>
                }
              />
              <PopoverContent
                align="start"
                data-qa="multi-select-popover-content"
                {...contentProps}
                className={cn('w-(--anchor-width) p-0', contentProps?.className)}
              >
                <PopoverModalContent
                  options={localOptions}
                  onValueChange={(value) => {
                    onSelectedValueChange(
                      selectedValues.includes(value)
                        ? selectedValues.filter((item) => item !== value)
                        : [...selectedValues, value],
                    );
                    setOpen(true);
                  }}
                  isMulti
                  checkIconClassName={(value) => (selectedValues.includes(value) ? 'opacity-100' : 'opacity-0')}
                  {...popoverModalContentProps}
                />
              </PopoverContent>
            </PopoverRoot>
          </Box>
        </Box>
        {isInvalid && <ErrorMessage data-qa="multi-select-error-message" message={errorMessage} />}
      </>
    );
  },
);
