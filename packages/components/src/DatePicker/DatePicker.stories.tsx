/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import type { DateRange } from 'react-day-picker';

import { addDays, format } from 'date-fns';

import { RxCalendar as CalendarIcon, RxChevronDown as ChevronDownIcon } from '@/icons/rx';
import { Box } from '@/layouts/Box';
import { Text } from '@/layouts/Text';

import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Input } from '../Input';
import { InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupRoot } from '../InputGroup';
import { Label } from '../Label';
import { PopoverContent, PopoverRoot, PopoverTrigger } from '../Popover';
import { DatePicker } from './DatePicker';

// ─── Props API Stories ───────────────────────────────────────────────────────

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    date: {
      control: {
        type: 'date',
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof DatePicker>;
type CompositionStory = StoryObj;

// ─── Props API ───────────────────────────────────────────────────────────────

export const Basic: Story = {
  args: {
    calendarProps: {
      captionLayout: 'dropdown',
    },
  },
};

export const WithValue: Story = {
  args: {
    date: new Date(),
    calendarProps: {
      captionLayout: 'dropdown',
    },
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: 'Select a date',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Select a date',
  },
};

export const WithInvalidWithoutMessage: Story = {
  args: {
    ...WithLabel.args,
    isInvalid: true,
  },
};

export const WithErrorMessage: Story = {
  args: { ...WithInvalidWithoutMessage.args, errorMessage: 'This field is required.' },
};

export const WithCustomDateFormat: Story = {
  args: {
    ...WithValue.args,
    dateFormat: 'MM/dd/yyyy',
  },
};

export const WithRequired: Story = {
  args: {
    ...WithValue.args,
    ...WithLabel.args,
    required: true,
  },
};

export const WithInvalid: Story = {
  args: {
    ...WithRequired.args,
    isInvalid: true,
  },
};

export const WithDatePresets: Story = {
  args: {
    presets: [
      { label: 'Yesterday', value: -1 },
      { label: 'Today', value: 0 },
      { label: 'Tomorrow', value: 1 },
      { label: 'In 7 days', value: 7 },
      { label: 'In a month', value: 30 },
      { label: 'Last 7 days', value: -7 },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Date Picker',
    date: new Date(),
    disabled: true,
  },
};

// ─── Composition API Stories ─────────────────────────────────────────────────

export const CompositionBasic: CompositionStory = {
  name: 'Composition API / Basic',
  render: () => {
    const [date, setDate] = useState<Date>();

    return (
      <Box className="flex flex-col gap-2">
        <Label htmlFor="comp-basic">Date</Label>
        <PopoverRoot>
          <PopoverTrigger
            render={
              <Button
                variant="outline"
                id="comp-basic"
                data-empty={!date}
                className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
              />
            }
          >
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
            <ChevronDownIcon data-icon="inline-end" />
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={date} />
          </PopoverContent>
        </PopoverRoot>
      </Box>
    );
  },
};

export const CompositionRangePicker: CompositionStory = {
  name: 'Composition API / Range Picker',
  render: () => {
    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(new Date().getFullYear(), 0, 20),
      to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
    });

    return (
      <Box className="flex flex-col gap-2">
        <Label htmlFor="comp-range">Date Picker Range</Label>
        <PopoverRoot>
          <PopoverTrigger
            render={
              <Button
                variant="outline"
                id="comp-range"
                data-empty={!date?.from}
                className="w-[280px] justify-start px-2.5 text-left font-normal data-[empty=true]:text-muted-foreground"
              />
            }
          >
            <CalendarIcon data-icon="inline-start" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2} />
          </PopoverContent>
        </PopoverRoot>
      </Box>
    );
  },
};

export const CompositionDateOfBirth: CompositionStory = {
  name: 'Composition API / Date of Birth',
  render: () => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
      <Box className="flex flex-col gap-2">
        <Label htmlFor="comp-dob">Date of birth</Label>
        <PopoverRoot open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button
                variant="outline"
                id="comp-dob"
                data-empty={!date}
                className="w-44 justify-start font-normal data-[empty=true]:text-muted-foreground"
              />
            }
          >
            {date ? date.toLocaleDateString() : 'Select date'}
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              defaultMonth={date}
              captionLayout="dropdown"
              onSelect={(d) => {
                setDate(d);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </PopoverRoot>
      </Box>
    );
  },
};

export const CompositionWithInput: CompositionStory = {
  name: 'Composition API / Input',
  render: () => {
    const formatDate = (d: Date | undefined) => {
      if (!d) return '';
      return d.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
    };
    const isValidDate = (d: Date | undefined) => d && !isNaN(d.getTime());

    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(new Date('2025-06-01'));
    const [month, setMonth] = useState<Date | undefined>(date);
    const [value, setValue] = useState(formatDate(date));

    return (
      <Box className="flex w-48 flex-col gap-2">
        <Label htmlFor="comp-input">Subscription Date</Label>
        <InputGroupRoot>
          <InputGroupInput
            id="comp-input"
            value={value}
            placeholder="June 01, 2025"
            onChange={(e) => {
              const d = new Date(e.target.value);
              setValue(e.target.value);
              if (isValidDate(d)) {
                setDate(d);
                setMonth(d);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setOpen(true);
              }
            }}
          />
          <InputGroupAddon align="inline-end">
            <PopoverRoot open={open} onOpenChange={setOpen}>
              <PopoverTrigger render={<InputGroupButton variant="ghost" size="icon-xs" aria-label="Select date" />}>
                <CalendarIcon />
                <span className="sr-only">Select date</span>
              </PopoverTrigger>
              <PopoverContent className="w-auto overflow-hidden p-0" align="end" alignOffset={-8} sideOffset={10}>
                <Calendar
                  mode="single"
                  selected={date}
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={(d) => {
                    setDate(d);
                    setValue(formatDate(d));
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </PopoverRoot>
          </InputGroupAddon>
        </InputGroupRoot>
      </Box>
    );
  },
};

export const CompositionTimePicker: CompositionStory = {
  name: 'Composition API / Time Picker',
  render: () => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
      <Box className="mx-auto flex max-w-xs flex-row gap-4">
        <Box className="flex flex-col gap-2">
          <Label htmlFor="comp-time-date">Date</Label>
          <PopoverRoot open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              render={
                <Button
                  variant="outline"
                  id="comp-time-date"
                  data-empty={!date}
                  className="w-32 justify-between font-normal data-[empty=true]:text-muted-foreground"
                />
              }
            >
              {date ? format(date, 'PPP') : 'Select date'}
              <ChevronDownIcon data-icon="inline-end" />
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                defaultMonth={date}
                onSelect={(d) => {
                  setDate(d);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </PopoverRoot>
        </Box>
        <Box className="flex w-32 flex-col gap-2">
          <Label htmlFor="comp-time-input">Time</Label>
          <Input
            type="time"
            id="comp-time-input"
            step="1"
            defaultValue="10:30:00"
            className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          />
        </Box>
      </Box>
    );
  },
};

export const CompositionNaturalLanguage: CompositionStory = {
  name: 'Composition API / Natural Language',
  render: () => {
    const formatDateStr = (d: Date | undefined) => {
      if (!d) return '';
      return d.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
    };

    const parseNaturalDate = (text: string): Date | null => {
      const lower = text.toLowerCase().trim();
      const today = new Date();
      if (lower === 'today') return today;
      if (lower === 'tomorrow') return addDays(today, 1);
      if (lower === 'yesterday') return addDays(today, -1);
      const inMatch = lower.match(/^in (\d+) days?$/);
      if (inMatch) return addDays(today, parseInt(inMatch[1]));
      const agoMatch = lower.match(/^(\d+) days? ago$/);
      if (agoMatch) return addDays(today, -parseInt(agoMatch[1]));
      if (lower === 'next week') return addDays(today, 7);
      if (lower === 'last week') return addDays(today, -7);
      if (lower === 'next month') return addDays(today, 30);
      const parsed = new Date(text);
      return isNaN(parsed.getTime()) ? null : parsed;
    };

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('In 2 days');
    const [date, setDate] = useState<Date | undefined>(() => parseNaturalDate('In 2 days') ?? undefined);

    return (
      <Box className="mx-auto flex max-w-xs flex-col gap-2">
        <Label htmlFor="comp-natural">Schedule Date</Label>
        <InputGroupRoot>
          <InputGroupInput
            id="comp-natural"
            value={value}
            placeholder="Tomorrow or next week"
            onChange={(e) => {
              setValue(e.target.value);
              const parsed = parseNaturalDate(e.target.value);
              if (parsed) setDate(parsed);
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setOpen(true);
              }
            }}
          />
          <InputGroupAddon align="inline-end">
            <PopoverRoot open={open} onOpenChange={setOpen}>
              <PopoverTrigger render={<InputGroupButton variant="ghost" size="icon-xs" aria-label="Select date" />}>
                <CalendarIcon />
                <span className="sr-only">Select date</span>
              </PopoverTrigger>
              <PopoverContent className="w-auto overflow-hidden p-0" align="end" sideOffset={8}>
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  defaultMonth={date}
                  onSelect={(d) => {
                    setDate(d);
                    setValue(formatDateStr(d));
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </PopoverRoot>
          </InputGroupAddon>
        </InputGroupRoot>
        <Text className="px-1 text-sm text-muted-foreground">
          Your post will be published on{' '}
          <Text as="span" className="font-medium">
            {formatDateStr(date)}
          </Text>
          .
        </Text>
      </Box>
    );
  },
};

export const CompositionControlled: CompositionStory = {
  name: 'Composition API / Controlled',
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Box className="flex flex-col gap-4">
        <Box className="flex flex-col gap-2">
          <Label htmlFor="comp-controlled">Selected Date</Label>
          <PopoverRoot>
            <PopoverTrigger
              render={
                <Button
                  variant="outline"
                  id="comp-controlled"
                  data-empty={!date}
                  className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                />
              }
            >
              {date ? format(date, 'PPP') : <span>Pick a date</span>}
              <ChevronDownIcon data-icon="inline-end" />
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={date} />
            </PopoverContent>
          </PopoverRoot>
        </Box>
        <Text className="text-sm text-muted-foreground">
          {date ? (
            <>
              You selected:{' '}
              <Text as="span" className="font-medium text-foreground">
                {format(date, 'PPP')}
              </Text>
            </>
          ) : (
            'No date selected.'
          )}
        </Text>
      </Box>
    );
  },
};
