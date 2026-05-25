import { useMemo, useState } from 'react';

import type { ComboboxValueType } from '@/components/Combobox';
import type { CountryBasedFormatOptionKey, CurrencyCode, TimeZone } from '@/shared/lib';
import type { Meta, StoryFn } from '@storybook/react';

import { addDays } from 'date-fns';

import { Button } from '@/components/Button';
import { Combobox } from '@/components/Combobox';
import { NumberInput } from '@/components/NumberInput';
import { Select } from '@/components/Select';
import { ToggleGroup } from '@/components/ToggleGroup';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  TypographyLI,
  TypographySmall,
  TypographyStrong,
  TypographyTable,
  TypographyTBody,
  TypographyTD,
  TypographyTH,
  TypographyTHead,
  TypographyTR,
  TypographyUL,
  VStack,
} from '@/layouts/index';
import { CURRENCY_CODES, TIME_ZONE_LISTS } from '@/shared/lib';

import { toast } from '../ToastProvider';
import { useFormatIntl } from './context';
import { FormatIntlProvider } from './FormatIntlProvider';

const meta = {
  title: 'Providers/FormatIntlProvider',
  component: FormatIntlProvider,
} satisfies Meta<typeof FormatIntlProvider>;

export default meta;

export function DateFormatter() {
  const App = () => {
    const { dateIntl, setTimeZone, timeZone, setCountryBasedFormatKey, countryBasedFormatKeys, countryBasedFormatKey } =
      useFormatIntl();
    const currentDate = new Date();
    const add2Days = addDays(currentDate, 2);
    const tableColumns = [
      {
        id: 'dateFormat',
        label: 'Date Format',
      },
      {
        id: 'dateTimeFormat',
        label: 'Date Time Format',
      },
      {
        id: 'locale',
        label: 'Locale',
      },
      {
        id: 'timeZone',
        label: 'Time Zone',
      },
    ];
    const result: Record<string, string> = {
      dateFormat: dateIntl.dateFormat,
      dateTimeFormat: dateIntl.dateTimeFormat,
      timeZone: dateIntl.timeZone || 'undefined',
      locale: dateIntl.locale?.code?.toString() || 'undefined',
    };

    return (
      <Stack>
        <Heading as="h2">Date Formatter</Heading>

        <HStack className="justify-between gap-12">
          <Select
            label="Select a Country"
            value={countryBasedFormatKey}
            options={countryBasedFormatKeys}
            onValueChange={(value) => {
              setCountryBasedFormatKey(value as CountryBasedFormatOptionKey);
            }}
          />
          <ToggleGroup
            label="Timezone"
            type="single"
            value={timeZone}
            onValueChange={(value) => {
              setTimeZone(value as TimeZone);
            }}
            items={[
              { content: 'LOCAL', value: 'LOCAL' },
              { content: 'UTC', value: 'UTC' },
              { content: 'America/Los_Angeles', value: 'America/Los_Angeles' },
            ]}
          />
        </HStack>
        <Heading as="h5" className="mt-5">
          Format Value
        </Heading>
        <TypographyTable>
          <TypographyTHead>
            <TypographyTR className="m-0 border-t border-slate-300 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
              {tableColumns.map((column) => (
                <TypographyTH
                  key={column.id}
                  className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right"
                >
                  {column.label}
                </TypographyTH>
              ))}
            </TypographyTR>
          </TypographyTHead>
          <TypographyTBody>
            <TypographyTR className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
              {tableColumns.map((column) => (
                <TypographyTD
                  key={column.id}
                  className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right"
                >
                  {result[column.id]}
                </TypographyTD>
              ))}
            </TypographyTR>
          </TypographyTBody>
        </TypographyTable>
        <VStack>
          <TypographyUL>
            <TypographyLI>
              <TypographyStrong>Override Default Format With (MMMM d, yyyy HH:mm)</TypographyStrong>(Today) -{' '}
              {dateIntl.format(currentDate, { dateFormat: 'MMMM d, yyyy HH:mm' })}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Format Date</TypographyStrong>(Today) - {dateIntl.formatDate(currentDate)}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Format Date Time</TypographyStrong>(Today) - {dateIntl.formatDateTime(currentDate)}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Format Relative Time</TypographyStrong>(Today) -{' '}
              {dateIntl.formatRelativeTime(currentDate)}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Given</TypographyStrong>(Today) - {dateIntl.formatDateTime(dateIntl.given(currentDate))}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Past</TypographyStrong>(Past Day from today) -{' '}
              {dateIntl.formatDateTime(dateIntl.past())}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Now</TypographyStrong>(Current Date) - {dateIntl.formatDateTime(dateIntl.now())}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Future</TypographyStrong>(Future Day from today) -{' '}
              {dateIntl.formatDateTime(dateIntl.future())}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>IsValid</TypographyStrong> - {dateIntl.isValid(currentDate).toString()}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>IsSameDay</TypographyStrong> - {dateIntl.isSameDay(currentDate, new Date()).toString()}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Range</TypographyStrong>(MinDate - {currentDate.toLocaleDateString()}, MaxDate:{' '}
              {add2Days.toLocaleDateString()}) - {dateIntl.formatDateTime(dateIntl.range(currentDate, add2Days))}.{' '}
              <TypographySmall color="gray">
                (Generates a random date within the specified range and returns it as a string representation.)
              </TypographySmall>
            </TypographyLI>
          </TypographyUL>
        </VStack>
      </Stack>
    );
  };
  return (
    <FormatIntlProvider>
      <App />
    </FormatIntlProvider>
  );
}

export function CurrencyFormatter() {
  const App = () => {
    const {
      setCountryBasedFormatKey,
      currencyIntl,
      currencyExchange,
      countryBasedFormatKeys,
      updateCurrencyExchange,
      countryBasedFormatKey,
    } = useFormatIntl();
    const [isConverting, setIsConverting] = useState(false);
    const [convertedCurrency, setConvertedCurrency] = useState<number>();

    const onConvert = async () => {
      try {
        setIsConverting(true);
        const result = await currencyIntl.convert(2000);
        setConvertedCurrency(result);
      } catch (err) {
        toast.error((err as Error).message);
      } finally {
        setIsConverting(false);
      }
    };

    return (
      <Stack>
        <Heading as="h2" className="mb-4">
          Currency Formatter
        </Heading>

        <HStack className="justify-between gap-12">
          <Select
            label="Select a Country"
            value={countryBasedFormatKey}
            options={countryBasedFormatKeys}
            onValueChange={(value) => {
              setCountryBasedFormatKey(value as CountryBasedFormatOptionKey);
            }}
          />
        </HStack>

        <VStack>
          <TypographyUL>
            <TypographyLI>
              Currency - <TypographyStrong>{currencyIntl.currency}</TypographyStrong>
            </TypographyLI>
            <TypographyLI>
              Amount - <TypographyStrong>{currencyIntl.format(2000)}</TypographyStrong>
            </TypographyLI>
          </TypographyUL>
        </VStack>

        {/** TODO: Hide the below content, because functionality is not completed yet */}
        <Box hidden>
          <Stack className="gap-4">
            <Heading as="h5" className="mt-5">
              Convert Currency
            </Heading>
            <Flex className="items-end gap-4">
              <Select
                label="From"
                value="USD"
                options={CURRENCY_CODES}
                onValueChange={(value) => {
                  updateCurrencyExchange({ from: value as CurrencyCode });
                }}
              />
              <Select
                label="To"
                value="INR"
                options={CURRENCY_CODES}
                onValueChange={(value) => {
                  updateCurrencyExchange({ to: value as CurrencyCode });
                }}
              />
              <Button onClick={onConvert} isLoading={isConverting}>
                Convert
              </Button>
            </Flex>
            <Text>
              Converted Currency from <TypographyStrong>{currencyExchange.from}</TypographyStrong> to{' '}
              <TypographyStrong>{currencyExchange.to}</TypographyStrong> -{' '}
              <TypographyStrong>{convertedCurrency || 'N/A'}</TypographyStrong>
            </Text>
          </Stack>
        </Box>
      </Stack>
    );
  };
  return (
    <FormatIntlProvider>
      <App />
    </FormatIntlProvider>
  );
}

export function NumberFormatter() {
  const App = () => {
    const { setCountryBasedFormatKey, numberIntl, countryBasedFormatKeys, countryBasedFormatKey } = useFormatIntl();
    const [value, setValue] = useState('');

    return (
      <Stack>
        <Heading as="h2" className="mb-4">
          Number Formatter
        </Heading>

        <VStack className="gap-4">
          <Select
            label="Select a Country"
            value={countryBasedFormatKey}
            options={countryBasedFormatKeys}
            onValueChange={(value) => {
              setCountryBasedFormatKey(value as CountryBasedFormatOptionKey);
            }}
          />
          <NumberInput
            label="Enter a Number"
            placeholder="Enter a Number"
            value={value}
            onValueChange={(updateValue) => setValue(updateValue.toString())}
          />
        </VStack>

        <Text className="mt-4">
          <TypographyStrong>Formatted Number</TypographyStrong> - {numberIntl.format(value)}
        </Text>
      </Stack>
    );
  };
  return (
    <FormatIntlProvider>
      <App />
    </FormatIntlProvider>
  );
}

export function TranslateText() {
  const App = () => {
    const { t } = useFormatIntl();
    const localeMessages = {
      US: {
        text1: 'My name is {name}.',
        text2: 'At {1,time,::jmm} on {1,date,::dMMMM}, there was {2} apes on planet{0,number,integer}.',
        text3: 'Today is: {now, date, ::yyyyMMdd}',
        text4: `You have {numPhotos, plural, =0 {no photos.} =1 {one photo.} other {# photos.}}`,
      },
      ES: {
        text1: 'Mi nombre es {name}.',
        text2: 'A las {1,time,::jmm} del {1,date,::dMMMM}, había {2} en el planeta{0,number,integer}.',
        text3: 'Hoy es: {now, date, ::yyyyMMdd}',
        text4: `Tienes {numPhotos, plural, =0 {no photos.} =1 {one photo.} other {# photos.}}`,
      },
      FR: {
        text1: "Je m'appelle {name}.",
        text2: 'À {1,time,::jmm} le {1,date,::dMMMM}, il y avait {2} sur la planète{0,number,integer}.',
        text3: "Aujourd'hui est: {now, date, ::yyyyMMdd}",
        text4: `Vous avez {numPhotos, plural, =0 {no photos.} =1 {one photo.} other {# photos.}}`,
      },
    };
    const [locale, setLocale] = useState<keyof typeof localeMessages>('US');

    return (
      <Stack>
        <Heading as="h2" className="mb-4">
          Translate
        </Heading>

        <VStack className="gap-4">
          <Select
            label="Select a Language"
            value={locale}
            options={[
              {
                label: 'USA',
                value: 'US',
              },
              {
                label: 'Spain',
                value: 'ES',
              },
              {
                label: 'France',
                value: 'FR',
              },
            ]}
            onValueChange={(value) => {
              setLocale(value as keyof typeof localeMessages);
            }}
          />
        </VStack>

        <Stack className="mt-4 gap-4">
          <Text>
            <TypographyStrong>Translated Text</TypographyStrong> -{' '}
            {t(localeMessages[locale].text1, { name: 'Paala' }, locale)}
          </Text>
          <Text>
            <TypographyStrong>Translated Text</TypographyStrong> -{' '}
            {t(localeMessages[locale].text2, { 1: new Date(), 2: 'two', 0: '6' }, locale)}
          </Text>
          <Text>
            <TypographyStrong>Translated Text</TypographyStrong> -{' '}
            {t(
              localeMessages[locale].text3,
              {
                now: new Date(),
              },
              locale,
            )}
          </Text>
          <Text>
            <TypographyStrong>Translated Text</TypographyStrong> -{' '}
            {t(localeMessages[locale].text4, { numPhotos: 100 }, locale)}
          </Text>
        </Stack>
      </Stack>
    );
  };
  return (
    <FormatIntlProvider>
      <App />
    </FormatIntlProvider>
  );
}

declare global {
  interface CountryBasedFormatOptions {
    FR: CountryBasedFormat;
    ES: CountryBasedFormat;
  }
}

export const CustomCountryBasedFormatOptions: StoryFn<typeof FormatIntlProvider> = (args) => {
  const App = () => {
    const { dateIntl, timeZone, setTimeZone, setCountryBasedFormatKey, countryBasedFormatKey, countryBasedFormatKeys } =
      useFormatIntl();
    const currentDate = new Date();
    const add2Days = addDays(currentDate, 2);
    const tableColumns = [
      {
        id: 'dateFormat',
        label: 'Date Format',
      },
      {
        id: 'dateTimeFormat',
        label: 'Date Time Format',
      },
      {
        id: 'locale',
        label: 'Locale',
      },
      {
        id: 'timeZone',
        label: 'Time Zone',
      },
    ];
    const result: Record<string, string> = {
      dateFormat: dateIntl.dateFormat,
      dateTimeFormat: dateIntl.dateTimeFormat,
      timeZone: dateIntl.timeZone || 'undefined',
      locale: dateIntl.locale?.code?.toString() || 'undefined',
    };
    const timeZoneValue: ComboboxValueType | null = useMemo(() => {
      if (!timeZone) return null;
      return {
        label: timeZone,
        value: timeZone,
      };
    }, [timeZone]);

    const handleTimeZoneChange = (value: ComboboxValueType | null) => {
      if (!value) return setTimeZone(undefined);
      setTimeZone(value.value as TimeZone);
    };

    return (
      <Stack>
        <Heading as="h2">Date Formatter</Heading>

        <HStack className="justify-between gap-12">
          <Select
            label="Select a Country"
            value={countryBasedFormatKey}
            options={countryBasedFormatKeys}
            onValueChange={(value) => {
              setCountryBasedFormatKey(value as CountryBasedFormatOptionKey);
            }}
          />
          <Combobox
            label="Select a TimeZone"
            className="w-1/2"
            value={timeZoneValue}
            options={[...TIME_ZONE_LISTS]}
            onValueChange={handleTimeZoneChange}
          />
        </HStack>
        <Heading as="h5" className="mt-5">
          Format Value
        </Heading>
        <TypographyTable>
          <TypographyTHead>
            <TypographyTR className="m-0 border-t border-slate-300 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
              {tableColumns.map((column) => (
                <TypographyTH
                  key={column.id}
                  className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right"
                >
                  {column.label}
                </TypographyTH>
              ))}
            </TypographyTR>
          </TypographyTHead>
          <TypographyTBody>
            <TypographyTR className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
              {tableColumns.map((column) => (
                <TypographyTD
                  key={column.id}
                  className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right"
                >
                  {result[column.id]}
                </TypographyTD>
              ))}
            </TypographyTR>
          </TypographyTBody>
        </TypographyTable>
        <VStack>
          <TypographyUL>
            <TypographyLI>
              <TypographyStrong>Override Default Format</TypographyStrong>(Today) -
              {dateIntl.format(currentDate, { dateFormat: 'dd/MM/yyyy HH:mm:ss a' })}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Format Date</TypographyStrong>(Today) - {dateIntl.formatDate(currentDate)}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Format Date Time</TypographyStrong>(Today) - {dateIntl.formatDateTime(currentDate)}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Format Relative Time</TypographyStrong>(Today) -{' '}
              {dateIntl.formatRelativeTime(currentDate)}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Given</TypographyStrong>(Today) - {dateIntl.formatDateTime(dateIntl.given(currentDate))}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Past</TypographyStrong>(Past Day from today) -{' '}
              {dateIntl.formatDateTime(dateIntl.past())}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Now</TypographyStrong>(Current Date) - {dateIntl.formatDateTime(dateIntl.now())}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Future</TypographyStrong>(Future Day from today) -{' '}
              {dateIntl.formatDateTime(dateIntl.future())}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>IsValid</TypographyStrong> - {dateIntl.isValid(currentDate).toString()}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>IsSameDay</TypographyStrong> - {dateIntl.isSameDay(currentDate, new Date()).toString()}
            </TypographyLI>
            <TypographyLI>
              <TypographyStrong>Range</TypographyStrong>(MinDate - {currentDate.toLocaleDateString()}, MaxDate:{' '}
              {add2Days.toLocaleDateString()}) - {dateIntl.formatDateTime(dateIntl.range(currentDate, add2Days))}
            </TypographyLI>
          </TypographyUL>
        </VStack>
      </Stack>
    );
  };

  return (
    <FormatIntlProvider {...args}>
      <App />
    </FormatIntlProvider>
  );
};

CustomCountryBasedFormatOptions.args = {
  dateFormat: 'dd/MM/yyyy',
  dateTimeFormat: 'dd/MM/yyyy HH:mm:ss',
  countryBasedFormatKey: 'FR',
  countryBasedFormatOptions: {
    FR: {
      locale: 'fr',
      currency: 'EUR',
      timeZone: 'CET',
    },
    ES: {
      locale: 'es',
      currency: 'EUR',
      timeZone: 'CET',
    },
  },
};
