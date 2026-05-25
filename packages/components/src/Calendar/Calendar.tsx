import { useEffect, useRef } from 'react';

import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import type { DayButton, Locale } from 'react-day-picker';
import type { ButtonProps } from '../Button/Button';

import { DayPicker, getDefaultClassNames } from 'react-day-picker';

import {
  LuChevronDown as ChevronDownIcon,
  LuChevronLeft as ChevronLeftIcon,
  LuChevronRight as ChevronRightIcon,
} from '@/icons/lu';
import { cn } from '@/shared/lib';

import { Button, buttonVariants } from '../Button/Button';

export type CalendarDayButtonProps = ComponentProps<typeof DayButton> & {
  // eslint-disable-next-line @typescript-eslint/ban-types
  color?: ButtonProps['color'] | (string & {});
  locale?: Partial<Locale>;
};

const CalendarDayButton = ({ className, day, modifiers, color, locale, ...props }: CalendarDayButtonProps) => {
  const defaultClassNames = getDefaultClassNames();

  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      data-qa="calendar-day-button"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-foreground [&>span]:text-xs [&>span]:opacity-70',
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
};
CalendarDayButton.displayName = 'CalendarDayButton';

export type CalendarProps = ComponentProps<typeof DayPicker> & {
  buttonVariant?: VariantProps<typeof buttonVariants>['variant'];
};

/**
 * Calendar Component
 *
 * A flexible calendar component built on react-day-picker for date selection.
 * Can be used standalone or as part of DatePicker and DateRangePicker components.
 *
 * @example
 * // Basic single date selection
 * import { Calendar } from '@paalstack/react-ui';
 *
 * const [date, setDate] = useState<Date>();
 *
 * <Calendar
 *   mode="single"
 *   selected={date}
 *   onSelect={setDate}
 * />
 *
 * @example
 * // Date range selection
 * import { DateRange } from 'react-day-picker';
 *
 * const [range, setRange] = useState<DateRange>();
 *
 * <Calendar
 *   mode="range"
 *   selected={range}
 *   onSelect={setRange}
 * />
 *
 * @example
 * // Multiple date selection
 * const [dates, setDates] = useState<Date[]>([]);
 *
 * <Calendar
 *   mode="multiple"
 *   selected={dates}
 *   onSelect={setDates}
 * />
 *
 * @example
 * // Disable past dates
 * <Calendar
 *   mode="single"
 *   selected={date}
 *   onSelect={setDate}
 *   fromDate={new Date()}
 * />
 *
 * @example
 * // Disable future dates
 * <Calendar
 *   mode="single"
 *   selected={date}
 *   onSelect={setDate}
 *   toDate={new Date()}
 * />
 *
 * @example
 * // With month and year dropdowns
 * <Calendar
 *   mode="single"
 *   selected={date}
 *   onSelect={setDate}
 *   captionLayout="dropdown-buttons"
 *   fromYear={2000}
 *   toYear={2030}
 * />
 *
 * @example
 * // Show multiple months
 * <Calendar
 *   mode="single"
 *   selected={date}
 *   onSelect={setDate}
 *   numberOfMonths={2}
 * />
 *
 * @example
 * // Disable specific dates
 * const disabledDates = [
 *   new Date(2024, 0, 1), // New Year
 *   new Date(2024, 11, 25), // Christmas
 * ];
 *
 * <Calendar
 *   mode="single"
 *   selected={date}
 *   onSelect={setDate}
 *   disabled={disabledDates}
 * />
 *
 * @example
 * // Disable days of week (e.g., weekends)
 * <Calendar
 *   mode="single"
 *   selected={date}
 *   onSelect={setDate}
 *   disabled={{ dayOfWeek: [0, 6] }} // Sunday and Saturday
 * />
 *
 * @example
 * // Custom modifiers for styling specific dates
 * <Calendar
 *   mode="single"
 *   selected={date}
 *   onSelect={setDate}
 *   modifiers={{
 *     booked: [new Date(2024, 5, 15), new Date(2024, 5, 20)],
 *     available: [new Date(2024, 5, 16), new Date(2024, 5, 17)],
 *   }}
 *   modifiersClassNames={{
 *     booked: 'bg-red-100 text-red-900',
 *     available: 'bg-green-100 text-green-900',
 *   }}
 * />
 *
 * @example
 * // Show week numbers
 * <Calendar
 *   mode="single"
 *   selected={date}
 *   onSelect={setDate}
 *   showWeekNumber
 * />
 *
 * @example
 * // Custom footer
 * <Calendar
 *   mode="single"
 *   selected={date}
 *   onSelect={setDate}
 *   footer={
 *     <div className="p-2 text-center text-sm">
 *       {date ? `Selected: ${date.toLocaleDateString()}` : 'Please select a date'}
 *     </div>
 *   }
 * />
 *
 * @example
 * // Booking calendar with availability
 * const bookedDates = [
 *   new Date(2024, 5, 10),
 *   new Date(2024, 5, 11),
 *   new Date(2024, 5, 15),
 * ];
 *
 * <Calendar
 *   mode="single"
 *   selected={date}
 *   onSelect={setDate}
 *   disabled={bookedDates}
 *   fromDate={new Date()}
 *   modifiers={{ booked: bookedDates }}
 *   modifiersClassNames={{ booked: 'line-through opacity-50' }}
 * />
 *
 * @example
 * // Event calendar
 * const eventDates = {
 *   meetings: [new Date(2024, 5, 10), new Date(2024, 5, 15)],
 *   deadlines: [new Date(2024, 5, 20), new Date(2024, 5, 25)],
 * };
 *
 * <Calendar
 *   mode="single"
 *   selected={date}
 *   onSelect={setDate}
 *   modifiers={eventDates}
 *   modifiersClassNames={{
 *     meetings: 'bg-blue-100 text-blue-900',
 *     deadlines: 'bg-red-100 text-red-900',
 *   }}
 * />
 *
 * @example
 * // Date range with min/max nights
 * const [range, setRange] = useState<DateRange>();
 *
 * <Calendar
 *   mode="range"
 *   selected={range}
 *   onSelect={setRange}
 *   fromDate={new Date()}
 *   min={3} // Minimum 3 nights
 *   max={14} // Maximum 14 nights
 * />
 */
const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  locale,
  formatters,
  components,
  ...props
}: CalendarProps) => {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'group/calendar bg-background p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString(locale?.code, { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn('relative flex flex-col gap-4 md:flex-row', defaultClassNames.months),
        month: cn('flex w-full flex-col gap-4', defaultClassNames.month),
        nav: cn('absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1', defaultClassNames.nav),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) p-0 select-none aria-disabled:opacity-50',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) p-0 select-none aria-disabled:opacity-50',
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          'flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)',
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          'flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium',
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          'cn-calendar-dropdown-root relative rounded-(--cell-radius)',
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn('absolute inset-0 bg-popover opacity-0', defaultClassNames.dropdown),
        caption_label: cn(
          'font-medium select-none',
          captionLayout === 'label'
            ? 'text-sm'
            : 'cn-calendar-caption-label flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground',
          defaultClassNames.caption_label,
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none',
          defaultClassNames.weekday,
        ),
        week: cn('mt-2 flex w-full', defaultClassNames.week),
        week_number_header: cn('w-(--cell-size) select-none', defaultClassNames.week_number_header),
        week_number: cn('text-[0.8rem] text-muted-foreground select-none', defaultClassNames.week_number),
        day: cn(
          'group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)',
          props.showWeekNumber
            ? '[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)'
            : '[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)',
          defaultClassNames.day,
        ),
        range_start: cn(
          'relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-muted',
          defaultClassNames.range_start,
        ),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn(
          'relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:left-0 after:w-4 after:bg-muted',
          defaultClassNames.range_end,
        ),
        today: cn(
          'rounded-(--cell-radius) bg-muted text-foreground data-[selected=true]:rounded-none',
          defaultClassNames.today,
        ),
        outside: cn('text-muted-foreground aria-selected:text-muted-foreground', defaultClassNames.outside),
        disabled: cn('text-muted-foreground opacity-50', defaultClassNames.disabled),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return <ChevronLeftIcon className={cn('cn-rtl-flip size-4', className)} {...props} />;
          }

          if (orientation === 'right') {
            return <ChevronRightIcon className={cn('cn-rtl-flip size-4', className)} {...props} />;
          }

          return <ChevronDownIcon className={cn('size-4', className)} {...props} />;
        },
        DayButton: ({ ...props }) => <CalendarDayButton locale={locale} {...props} />,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">{children}</div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
};
Calendar.displayName = 'Calendar';

export { Calendar, CalendarDayButton };
