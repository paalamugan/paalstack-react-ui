import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { CountryBasedFormatOptionKey } from '@/shared/lib';
import type { Locale } from 'date-fns';
import type { FormatIntlContextState, FormatIntlProviderProps } from './types';

import {
  CurrencyIntl,
  DateIntl,
  DEFAULT_COUNTRY_BASED_FORMAT_OPTIONS,
  DEFAULT_LOCAL_VALUE,
  getLocalCountryBasedFormat,
  getLocale,
  NumberIntl,
  t,
} from '@/shared/lib';

import { FormatIntlContextProvider } from './context';

/**
 * FormatIntlProvider Component
 *
 * Provides internationalization and formatting utilities for dates, numbers, and currencies.
 * Supports multiple locales, time zones, and country-specific formatting options.
 * Includes automatic locale loading and currency exchange rate management.
 *
 * @example
 * // Basic usage
 * import { FormatIntlProvider } from '@paalstack/react-ui';
 *
 * <FormatIntlProvider>
 *   <App />
 * </FormatIntlProvider>
 *
 * @example
 * // With default country format
 * <FormatIntlProvider countryBasedFormatKey="US">
 *   <App />
 * </FormatIntlProvider>
 *
 * @example
 * // With custom time zone
 * <FormatIntlProvider timeZone="America/New_York">
 *   <App />
 * </FormatIntlProvider>
 *
 * @example
 * // With custom date formats
 * <FormatIntlProvider
 *   dateFormat="MM/dd/yyyy"
 *   dateTimeFormat="MM/dd/yyyy HH:mm:ss"
 * >
 *   <App />
 * </FormatIntlProvider>
 *
 * @example
 * // With currency exchange rates
 * <FormatIntlProvider
 *   currencyExchange={{
 *     exchangeRate: 1.2,
 *     fromCurrency: 'USD',
 *     toCurrency: 'EUR'
 *   }}
 * >
 *   <App />
 * </FormatIntlProvider>
 *
 * @example
 * // Using formatters in components
 * import { useFormatIntl } from '@paalstack/react-ui';
 *
 * function MyComponent() {
 *   const { dateIntl, currencyIntl, numberIntl } = useFormatIntl();
 *
 *   return (
 *     <div>
 *       <p>Date: {dateIntl.format(new Date())}</p>
 *       <p>Currency: {currencyIntl.format(1234.56)}</p>
 *       <p>Number: {numberIntl.format(1234567.89)}</p>
 *     </div>
 *   );
 * }
 *
 * @example
 * // Format dates
 * const { dateIntl } = useFormatIntl();
 *
 * dateIntl.format(new Date()); // Format with locale
 * dateIntl.formatDistance(new Date(), addDays(new Date(), 3)); // "3 days"
 * dateIntl.formatRelative(new Date()); // "today at 10:30 AM"
 *
 * @example
 * // Format currency
 * const { currencyIntl } = useFormatIntl();
 *
 * currencyIntl.format(1234.56); // "$1,234.56" (based on locale)
 * currencyIntl.formatWithExchange(100); // Convert and format
 *
 * @example
 * // Format numbers
 * const { numberIntl } = useFormatIntl();
 *
 * numberIntl.format(1234567.89); // "1,234,567.89" (based on locale)
 * numberIntl.formatPercent(0.1234); // "12.34%"
 *
 * @example
 * // Translate messages
 * const { t } = useFormatIntl();
 *
 * t('welcome.message'); // Translated text
 * t('greeting', { name: 'John' }); // "Hello, John"
 *
 * @example
 * // Change country format dynamically
 * const { setCountryBasedFormatKey } = useFormatIntl();
 *
 * <select onChange={(e) => setCountryBasedFormatKey(e.target.value)}>
 *   <option value="US">United States</option>
 *   <option value="UK">United Kingdom</option>
 *   <option value="JP">Japan</option>
 * </select>
 *
 * @example
 * // Complete setup with custom formats
 * <FormatIntlProvider
 *   countryBasedFormatKey="US"
 *   timeZone="America/New_York"
 *   dateFormat="MM/dd/yyyy"
 *   dateTimeFormat="MM/dd/yyyy hh:mm a"
 *   countryBasedFormatOptions={{
 *     US: {
 *       locale: 'en-US',
 *       currency: 'USD',
 *       timeZone: 'America/New_York'
 *     },
 *     UK: {
 *       locale: 'en-GB',
 *       currency: 'GBP',
 *       timeZone: 'Europe/London'
 *     }
 *   }}
 * >
 *   <App />
 * </FormatIntlProvider>
 *
 * @tip Provides dateIntl, currencyIntl, numberIntl formatters
 * @tip Automatically handles locale loading and caching
 * @tip Supports dynamic currency exchange rates
 * @tip Time zone aware date formatting
 * @tip Use 'LOCAL' for automatic system locale detection
 * @tip Translation function (t) included for i18n
 */
export const FormatIntlProvider = ({
  children,
  countryBasedFormatKey: defaultCountryBasedFormatKey = 'LOCAL',
  timeZone: defaultTimeZone,
  dateFormat: defaultDateFormat,
  dateTimeFormat: defaultDateTimeFormat,
  currencyExchange: defaultCurrencyExchange,
  countryBasedFormatOptions,
}: FormatIntlProviderProps) => {
  const [countryBasedFormatKey, setCountryBasedFormatKey] = useState(defaultCountryBasedFormatKey);
  const [locale, setLocale] = useState<Locale>();
  const localeCacheRef = useRef<Record<string, Locale | undefined>>({});
  const [currencyExchange, setCurrencyExchange] = useState({
    ...defaultCurrencyExchange,
  });

  useEffect(() => {
    setCountryBasedFormatKey(defaultCountryBasedFormatKey);
  }, [defaultCountryBasedFormatKey]);

  const countryFormatIntlOptions = useMemo<Partial<CountryBasedFormatOptions>>(() => {
    return {
      ...DEFAULT_COUNTRY_BASED_FORMAT_OPTIONS,
      ...countryBasedFormatOptions,
    };
  }, [countryBasedFormatOptions]);

  const selectedCountryFormat = useMemo(() => {
    const localFormat = getLocalCountryBasedFormat();
    if (!countryBasedFormatKey || countryBasedFormatKey === 'LOCAL') {
      return {
        ...localFormat,
        dateFormat: defaultDateFormat || localFormat.dateFormat,
        dateTimeFormat: defaultDateTimeFormat || localFormat.dateTimeFormat,
        timeZone: defaultTimeZone || countryBasedFormatKey === 'LOCAL' ? 'LOCAL' : localFormat.timeZone,
      };
    }

    const option = countryFormatIntlOptions[countryBasedFormatKey];
    return {
      ...option,
      dateFormat: option?.dateFormat || defaultDateFormat || localFormat.dateFormat,
      dateTimeFormat: option?.dateTimeFormat || defaultDateTimeFormat || localFormat.dateTimeFormat,
      locale: option?.locale || localFormat.locale,
      currency: option?.currency || localFormat.currency,
      timeZone: option?.timeZone || localFormat.timeZone,
    };
  }, [countryBasedFormatKey, defaultDateFormat, defaultDateTimeFormat, defaultTimeZone, countryFormatIntlOptions]);

  const [timeZone, setTimeZone] = useState(() => selectedCountryFormat.timeZone);

  useEffect(() => {
    setTimeZone(selectedCountryFormat.timeZone);
  }, [selectedCountryFormat.timeZone]);

  useEffect(() => {
    if (!defaultTimeZone) return;
    setTimeZone(defaultTimeZone);
  }, [defaultTimeZone]);

  useEffect(() => {
    const fetchLocale = async () => {
      if (!selectedCountryFormat) return;
      const localeValue = selectedCountryFormat.locale;
      if (!localeValue) return;
      if (localeCacheRef.current[localeValue]) {
        return setLocale(localeCacheRef.current[localeValue]);
      }
      const locale = await getLocale(selectedCountryFormat.locale);
      localeCacheRef.current[localeValue] = locale;
      setLocale(locale);
    };
    fetchLocale();
  }, [selectedCountryFormat]);

  const onChangeCountryCode: FormatIntlContextState['setCountryBasedFormatKey'] = useCallback(
    (value) => {
      if (!value || !countryFormatIntlOptions[value]) return setCountryBasedFormatKey(DEFAULT_LOCAL_VALUE);
      setCountryBasedFormatKey(value);
    },
    [countryFormatIntlOptions],
  );

  const onChangeCurrencyExchange: FormatIntlContextState['updateCurrencyExchange'] = useCallback((value) => {
    setCurrencyExchange((state) => {
      return {
        ...state,
        ...value,
      };
    });
  }, []);

  const onChangeTimezone: FormatIntlContextState['setTimeZone'] = useCallback((value) => {
    setTimeZone(value ? value : 'LOCAL');
  }, []);

  const dateIntl = useMemo(() => {
    return new DateIntl({ ...selectedCountryFormat, locale, timeZone: timeZone });
  }, [locale, selectedCountryFormat, timeZone]);

  const currencyIntl = useMemo(() => {
    return new CurrencyIntl({
      currency: selectedCountryFormat.currency,
      locale: locale?.code,
      ...currencyExchange,
    });
  }, [selectedCountryFormat.currency, currencyExchange, locale?.code]);

  const numberIntl = useMemo(() => {
    return new NumberIntl({ locale: locale?.code });
  }, [locale?.code]);

  const translate: FormatIntlContextState['t'] = useCallback(
    (message, values, localeCode) => {
      return t(message, values, localeCode || locale?.code);
    },
    [locale?.code],
  );

  const countryBasedFormatKeys = useMemo(() => {
    return Object.keys(countryFormatIntlOptions).filter(Boolean) as CountryBasedFormatOptionKey[];
  }, [countryFormatIntlOptions]);

  return (
    <FormatIntlContextProvider
      value={{
        dateIntl,
        currencyIntl,
        numberIntl,
        t: translate,
        countryBasedFormatKeys,
        countryBasedFormatKey,
        setCountryBasedFormatKey: onChangeCountryCode,
        timeZone,
        setTimeZone: onChangeTimezone,
        updateCurrencyExchange: onChangeCurrencyExchange,
        currencyExchange,
      }}
    >
      {children}
    </FormatIntlContextProvider>
  );
};
