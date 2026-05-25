import React from 'react';

import type { CalendarProps } from '../Calendar';

import { addDays, format } from 'date-fns';

import { RxCalendar as CalendarIcon, RxChevronDown as ChevronDownIcon } from '@/icons/rx';
import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { isAriaInvalid } from '@/shared/utils';

import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';
import { PopoverContent, PopoverRoot, PopoverTrigger } from '../Popover';
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValue } from '../Select';

export interface DatePickerProps {
  /**
   * The selected date.
   */
  date?: Date | string;
  /**
   * Callback when the selected date changes.
   */
  onDateChange?: (date: Date | undefined) => void;
  /**
   * Additional class names to apply to the date picker.
   */
  className?: string;
  /**
   * Label for the date picker.
   */
  label?: string;
  /**
   * Placeholder text for the date picker.
   */
  placeholder?: string;
  /**
   * Date format to use
   */
  dateFormat?: string;
  /**
   * Placeholder text for the presets.
   */
  presetPlaceholder?: string;
  /**
   * Preset values to show.
   * value is the number of days to add to the current date.
   */
  presets?: {
    label: string;
    value: number;
  }[];
  /**
   * required or not
   */
  required?: boolean;
  /**
   * Whether the checkbox is invalid.
   */
  'aria-invalid'?: boolean;
  /**
   * whether the checkbox is invalid
   */
  isInvalid?: boolean;

  /**
   *  id for the date picker
   */
  id?: string;
  /**
   * The error message for the checkbox
   */
  errorMessage?: string;
  /**
   * Parent class name for the date picker
   */
  wrapperClassName?: string;
  /**
   * Whether the date picker is disabled or not
   */
  disabled?: boolean;
  /**
   * Additional props for the calendar component.
   */
  calendarProps?: Omit<CalendarProps, 'mode' | 'selected' | 'onSelect'>;
}

const PresetCalendar: React.FC<
  Pick<DatePickerProps, 'presets' | 'presetPlaceholder' | 'date' | 'onDateChange' | 'calendarProps'>
> = ({ presets, date, onDateChange, presetPlaceholder = 'Select', calendarProps }) => {
  const selectedDate = typeof date === 'string' ? new Date(date) : date;
  return (
    <>
      <SelectRoot
        data-qa="date-picker-preset-root"
        onValueChange={(value) => onDateChange?.(addDays(new Date(), parseInt(value as string)))}
      >
        <SelectTrigger data-qa="date-picker-preset-trigger">
          <SelectValue placeholder={presetPlaceholder} data-qa="date-picker-preset-placeholder" />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={false} data-qa="date-picker-preset">
          {(presets || []).map((preset) => (
            <SelectItem key={preset.value} value={`${preset.value}`} data-qa="date-picker-preset-item">
              {preset.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
      <Box className="rounded-md border">
        <Calendar
          data-qa="date-picker-single-calendar"
          mode="single"
          selected={selectedDate}
          onSelect={onDateChange}
          {...calendarProps}
        />
      </Box>
    </>
  );
};

/**
 * DatePicker Component
 *
 * A date picker component with calendar, presets, and validation support.
 * Perfect for booking forms, scheduling, date filtering, and any date input needs.
 *
 * @example
 * // Basic usage
 * import { DatePicker } from '@paalstack/react-ui';
 *
 * const [date, setDate] = useState<Date>();
 *
 * <DatePicker date={date} onDateChange={setDate} />
 *
 * @example
 * // With label
 * <DatePicker
 *   label="Select Date"
 *   date={date}
 *   onDateChange={setDate}
 *   placeholder="Choose a date"
 * />
 *
 * @example
 * // Required field with validation
 * <DatePicker
 *   label="Birth Date"
 *   date={date}
 *   onDateChange={setDate}
 *   required
 *   isInvalid={!date}
 *   errorMessage="Birth date is required"
 * />
 *
 * @example
 * // With date presets (quick select)
 * <DatePicker
 *   label="Due Date"
 *   date={date}
 *   onDateChange={setDate}
 *   presets={[
 *     { label: 'Today', value: 0 },
 *     { label: 'Tomorrow', value: 1 },
 *     { label: 'In 3 days', value: 3 },
 *     { label: 'In 7 days', value: 7 },
 *     { label: 'In 14 days', value: 14 },
 *   ]}
 *   presetPlaceholder="Quick select"
 * />
 *
 * @example
 * // Custom date format
 * <DatePicker
 *   date={date}
 *   onDateChange={setDate}
 *   dateFormat="MM/dd/yyyy" // Default is "PPP" (e.g., "April 29th, 2023")
 * />
 *
 * @example
 * // Disabled state
 * <DatePicker
 *   label="Disabled Date Picker"
 *   date={date}
 *   disabled
 * />
 */
export const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      date: value,
      onDateChange: onValueChange,
      label,
      className,
      wrapperClassName,
      placeholder = 'Pick a date',
      dateFormat = 'PPP',
      presetPlaceholder,
      presets,
      isInvalid: invalid,
      required,
      id,
      errorMessage,
      disabled,
      calendarProps,
      ...props
    },
    ref,
  ) => {
    const isInvalid = isAriaInvalid(props['aria-invalid']) || invalid;
    const selectedDate = React.useMemo(() => (typeof value === 'string' ? new Date(value) : value), [value]);
    const [date, setDate] = React.useState<Date | undefined>(selectedDate);
    const labelId = id || label?.toLowerCase().replace(/\s/g, '-');

    React.useEffect(() => {
      if (selectedDate) {
        setDate(selectedDate);
      }
    }, [selectedDate]);

    const onSelect = React.useCallback(
      (date: Date | undefined) => {
        setDate(date);
        onValueChange?.(date ? new Date(date) : undefined);
      },
      [onValueChange],
    );

    const isPreset = presets && presets.length > 0;

    return (
      <>
        <Box className={cn('flex flex-1 flex-col gap-2', wrapperClassName)} data-qa="date-picker">
          {label && (
            <Label htmlFor={labelId} required={required} isInvalid={isInvalid} data-qa="date-picker-label">
              {label}
            </Label>
          )}
          <PopoverRoot>
            <PopoverTrigger
              render={
                <Button
                  data-qa="date-picker-button"
                  {...props}
                  type="button"
                  variant="outline"
                  disabled={disabled}
                  data-empty={!date}
                  className={cn(
                    'min-w-[240px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground',
                    {
                      'border-danger text-danger hover:bg-background hover:text-danger focus:ring-danger/40': isInvalid,
                    },
                    className,
                  )}
                  ref={ref}
                  id={labelId}
                >
                  <Box as="span" className="flex items-center gap-2">
                    <CalendarIcon className="size-4" data-qa="date-picker-icon" />
                    {date ? (
                      format(date, dateFormat)
                    ) : (
                      <Box as="span" data-qa="date-picker-placeholder">
                        {placeholder}
                      </Box>
                    )}
                  </Box>
                  <ChevronDownIcon data-icon="inline-end" className="size-4 opacity-50" />
                </Button>
              }
            />
            <PopoverContent
              className={cn('min-w-full', isPreset ? 'flex w-auto flex-col space-y-2 p-2' : 'w-auto p-0')}
              align="start"
              data-qa="date-picker-popover"
            >
              {isPreset ? (
                <PresetCalendar
                  presets={presets}
                  date={date}
                  onDateChange={onSelect}
                  presetPlaceholder={presetPlaceholder}
                  calendarProps={calendarProps}
                />
              ) : (
                <Calendar
                  data-qa="date-picker-single-calendar"
                  defaultMonth={date}
                  {...calendarProps}
                  mode="single"
                  selected={date}
                  onSelect={onSelect}
                />
              )}
            </PopoverContent>
          </PopoverRoot>
        </Box>
        {isInvalid && <ErrorMessage data-qa="date-picker-error-message" message={errorMessage} />}
      </>
    );
  },
);
