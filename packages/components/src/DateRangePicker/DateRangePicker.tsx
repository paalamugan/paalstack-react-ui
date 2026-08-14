import * as React from 'react';

import type { DateRange } from 'react-day-picker';
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

export type DateRangePreset = {
  /**
   * Label for the preset picker.
   */
  label: string;

  /**
   * an integer, when added to today, represents start of date range
   */
  from: number;

  /**
   * an integer, when added to today, represents end of date range
   */
  to: number;
};

export interface DateRangePickerProps {
  /**
   * The selected date.
   */
  dateRange?: DateRange;
  /**
   * Callback when the selected date changes.
   */
  onDateRangeChange?: (date: DateRange | undefined) => void;
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
   * Number of months to show in the calendar
   */
  numberOfMonths?: number;
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
  presets?: DateRangePreset[];
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
   * Parent class name for the date range picker
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
  /**
   * Additional props for the popover root component.
   */
  popoverProps?: React.ComponentProps<typeof PopoverRoot>;
  /**
   * Additional props for the popover trigger component.
   */
  popoverTriggerProps?: React.ComponentProps<typeof PopoverTrigger>;
  /**
   * Additional props for the popover content component.
   */
  popoverContentProps?: React.ComponentProps<typeof PopoverContent>;
  /**
   * Additional props for the preset calendar component.
   */
  presetCalendarProps?: React.ComponentProps<typeof PresetCalendar>;
}

const DELIMITER = '::';
const PresetCalendar: React.FC<
  Pick<
    DateRangePickerProps,
    'presets' | 'presetPlaceholder' | 'dateRange' | 'onDateRangeChange' | 'numberOfMonths' | 'calendarProps'
  >
> = ({ presets, dateRange, onDateRangeChange, presetPlaceholder = 'Select', numberOfMonths, calendarProps }) => (
  <>
    <SelectRoot
      onValueChange={(value) => {
        const today = new Date();
        const dateRanges = (value as string).split(DELIMITER);
        onDateRangeChange?.({
          from: addDays(today, parseInt(dateRanges[0] ?? '0')),
          to: addDays(today, parseInt(dateRanges[1] ?? '0')),
        });
      }}
      data-qa="date-picker-preset-root"
    >
      <SelectTrigger data-qa="date-picker-preset-trigger">
        <SelectValue placeholder={presetPlaceholder} data-qa="date-picker-preset-placeholder" />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false} data-qa="date-picker-preset">
        {(presets || []).map((preset) => {
          const value = `${preset.from}${DELIMITER}${preset.to}`;
          return (
            <SelectItem key={value} value={value} data-qa="date-picker-preset-item">
              {preset.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </SelectRoot>
    <Box className="rounded-md border">
      <Calendar
        data-qa="date-picker-range-calendar"
        mode="range"
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={onDateRangeChange}
        numberOfMonths={numberOfMonths}
        {...calendarProps}
      />
    </Box>
  </>
);

/**
 * DateRangePicker Component
 *
 * A date range picker component for selecting start and end dates with calendar and preset support.
 * Perfect for booking systems, date filtering, reporting periods, and scheduling.
 *
 * @example
 * // Basic usage
 * import { DateRangePicker } from '@paalstack/react-ui';
 * import { DateRange } from 'react-day-picker';
 *
 * const [dateRange, setDateRange] = useState<DateRange>();
 *
 * <DateRangePicker
 *   dateRange={dateRange}
 *   onDateRangeChange={setDateRange}
 * />
 *
 * @example
 * // With label
 * <DateRangePicker
 *   label="Select Date Range"
 *   dateRange={dateRange}
 *   onDateRangeChange={setDateRange}
 *   placeholder="Pick date range"
 * />
 *
 * @example
 * // Required field with validation
 * <DateRangePicker
 *   label="Event Duration"
 *   dateRange={dateRange}
 *   onDateRangeChange={setDateRange}
 *   required
 *   isInvalid={!dateRange?.from || !dateRange?.to}
 *   errorMessage="Please select both start and end dates"
 * />
 *
 * @example
 * // With presets (quick select common ranges)
 * <DateRangePicker
 *   label="Report Period"
 *   dateRange={dateRange}
 *   onDateRangeChange={setDateRange}
 *   presets={[
 *     { label: 'Today', from: 0, to: 0 },
 *     { label: 'Last 7 days', from: -7, to: 0 },
 *     { label: 'Last 30 days', from: -30, to: 0 },
 *     { label: 'Last 90 days', from: -90, to: 0 },
 *   ]}
 *   presetPlaceholder="Quick select"
 * />
 *
 * @example
 * // Disabled state
 * <DateRangePicker
 *   label="Fixed Date Range"
 *   dateRange={fixedRange}
 *   disabled
 * />
 */
export const DateRangePicker = React.forwardRef<HTMLButtonElement, DateRangePickerProps>(
  (
    {
      dateRange: range,
      onDateRangeChange: onRangeChange,
      label,
      placeholder = 'Pick a date range',
      numberOfMonths = 2,
      dateFormat = 'MMM dd, yyyy',
      presetPlaceholder,
      presets,
      className,
      wrapperClassName,
      isInvalid: invalid,
      required,
      id,
      errorMessage,
      disabled,
      calendarProps,
      popoverProps,
      popoverTriggerProps,
      popoverContentProps,
      presetCalendarProps,
      ...props
    },
    ref,
  ) => {
    const isInvalid = invalid ?? isAriaInvalid(props['aria-invalid']);
    const labelId = id || label?.toLowerCase().replace(/\s/g, '-');
    const [date, setDate] = React.useState<DateRange | undefined>(undefined);

    React.useEffect(() => {
      setDate(range);
    }, [range]);

    const onSelect = React.useCallback(
      (range: DateRange | undefined) => {
        setDate(range);
        onRangeChange?.(range);
      },
      [onRangeChange],
    );

    const isPreset = presets && presets.length > 0;
    const hasDate = !!(date?.from || date?.to);

    return (
      <>
        <Box className={cn('flex flex-1 flex-col gap-2', wrapperClassName)} data-qa="date-range-picker">
          {label && (
            <Label htmlFor={labelId} required={required} isInvalid={isInvalid} data-qa="date-range-picker-label">
              {label}
            </Label>
          )}
          <Box className={cn('grid gap-2', className)}>
            <PopoverRoot {...popoverProps}>
              <PopoverTrigger
                render={
                  <Button
                    data-qa="date-range-picker-button"
                    type="button"
                    variant="outline"
                    disabled={disabled}
                    data-empty={!hasDate}
                    className={cn(
                      'min-w-75 justify-between px-2.5 text-left font-normal data-[empty=true]:text-muted-foreground',
                      {
                        'border-danger hover:bg-background focus:ring-danger/40': isInvalid,
                      },
                    )}
                    ref={ref}
                    id={labelId}
                    {...props}
                  >
                    <Box as="span" className="flex items-center gap-2">
                      <CalendarIcon data-icon="inline-start" className="size-4" data-qa="date-range-picker-icon" />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, dateFormat)} - {format(date.to, dateFormat)}
                          </>
                        ) : (
                          format(date.from, dateFormat)
                        )
                      ) : (
                        <Box as="span" data-qa="date-range-picker-placeholder">
                          {placeholder}
                        </Box>
                      )}
                    </Box>
                    <ChevronDownIcon data-icon="inline-end" className="size-4 opacity-50" />
                  </Button>
                }
                {...popoverTriggerProps}
              />
              <PopoverContent
                className={cn('min-w-full', isPreset ? 'flex w-auto flex-col space-y-2 p-2' : 'w-auto p-0')}
                align="start"
                data-qa="date-range-picker-popover"
                {...popoverContentProps}
              >
                {isPreset ? (
                  <PresetCalendar
                    presets={presets}
                    dateRange={date}
                    onDateRangeChange={onSelect}
                    presetPlaceholder={presetPlaceholder}
                    numberOfMonths={numberOfMonths}
                    {...presetCalendarProps}
                  />
                ) : (
                  <Calendar
                    data-qa="date-range-picker-calendar"
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={onSelect}
                    numberOfMonths={numberOfMonths}
                    {...calendarProps}
                  />
                )}
              </PopoverContent>
            </PopoverRoot>
          </Box>
        </Box>
        {isInvalid && <ErrorMessage data-qa="date-range-picker-error-message" message={errorMessage} />}
      </>
    );
  },
);
