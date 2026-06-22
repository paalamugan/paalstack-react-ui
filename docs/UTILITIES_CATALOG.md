# Utilities Catalog

Utilities from `@paalstack/react-shared` (available via `@paalstack/react-ui` and sub-paths `@paalstack/react-shared/utils`, `@paalstack/react-shared/lib`).

## General Helpers

| Function | Purpose | Parameters | Return | Example |
|----------|---------|------------|--------|---------|
| `cn(...inputs)` | Merge Tailwind classes | ClassValue[] | string | `cn('p-4', className)` |
| `objectFilter(obj, fn)` | Filter object entries | object, predicate | Dict | Filter defined props |
| `filterUndefined(obj)` | Remove undefined/null keys | Dict | Dict | Clean props object |
| `isDefinedValue(v)` | Not null/undefined check | unknown | boolean | Guard before render |
| `result(obj, key, default)` | Deep get with dot path | object, string, T? | T | `result(data, 'user.name')` |
| `debounce(fn, wait, immediate?)` | Debounce function | fn, ms, bool? | debounced fn | Search input handler |
| `jsonParser<T>(value)` | Safe JSON.parse | unknown | T \| null | Parse localStorage |
| `getRandomBoxColors(count)` | Random theme colors | number | BoxColorVariant[] | Storybook demos |
| `disableStorybookArgTypes(keys)` | Hide Storybook controls | string[] | Dict | Stories only |

## String

| Function | Purpose | Parameters | Return |
|----------|---------|------------|--------|
| `upperFirst(s)` | Capitalize first char | string | string |
| `lowerFirst(s)` | Lowercase first char | string | string |
| `randomId(prefix?)` | Unique ID string | string? | string |

## Number

| Function | Purpose | Parameters | Return |
|----------|---------|------------|--------|
| `clamp(value, min, max)` | Bound number | number, number, number | number |
| `range(start, end, step?)` | Number array range | number, number, number? | number[] |
| `isPositiveInteger(v, startFrom?)` | Validate positive int | unknown, number? | boolean |
| `isPositiveFloat(v, startFrom?)` | Validate positive float | unknown, number? | boolean |

## Validation

| Function | Purpose |
|----------|---------|
| `isAriaInvalid(value)` | Checks aria-invalid truthy values |

## Browser / DOM

| Function | Purpose |
|----------|---------|
| `getTabbables(container)` | List focusable elements |
| `assignRef(ref, value)` | Assign to ref callback/object |
| `forwardRef` | Polymorphic forwardRef helper |
| `Slot` | Radix-style slot composition |
| `createContext` | Typed context factory |
| `patchConsoleError()` | Suppress known console noise in tests |

## Storage
Use hooks: `useLocalStorage`, `useSessionStorage` from `@paalstack/react-hooks`.

## API / HTTP (`@paalstack/react-shared/lib`)

| Export | Purpose |
|--------|---------|
| `HttpClient` | Axios-based HTTP client |
| `AxiosClient` | Axios adapter |
| `HttpError` | Typed HTTP error |
| `ErrorHandlerRegistry` | Pluggable error handlers |
| `InternalErrorCode` | Error code enum |

## Formatting (`@paalstack/react-shared/lib`)

| Export | Purpose |
|--------|---------|
| `formatDate` | Locale date formatting |
| `formatNumber` | Number formatting |
| `formatCurrency` | Currency formatting |
| `translate` | ICU message formatting |
| `TIME_ZONES` | Timezone constants |

## Date
date-fns + date-fns-tz used internally in DatePicker/Calendar and format lib.

## React Utilities

| Export | Purpose | Source |
|--------|---------|--------|
| `forwardRef` | Polymorphic forwardRef with `as` prop | `utils/forward-ref.ts` |
| `Slot` | Merge props onto child element | `utils/slot.tsx` |
| `createContext` | Context factory with provider + hook | `utils/create-context.ts` |
| `createContextContainer` | Context container pattern | `utils/create-context-container.tsx` |

## DOM

| Function | Purpose |
|----------|---------|
| `getTabbables(container)` | Returns focusable/tabbable elements within container |
| `isElement(el)` | Type guard for Element | 
| `getOwnerDocument(node)` | Safe document lookup |

## Logger (`shared/lib/logger`)

| Export | Purpose |
|--------|---------|
| `ConsoleLogger` | Console-based ILogger implementation |
| `MockLogger` | Test/no-op logger |
| `ILogger` | Logger interface |

## Currency Converter

| Export | Purpose |
|--------|---------|
| `CurrencyConverter` | Exchange rate conversion |
| `CURRENCY_CODES` | Supported currency constants |

## Format Functions (via FormatIntlProvider or direct import)

| Function | Purpose |
|----------|---------|
| `formatDate(value, options)` | Locale-aware date formatting |
| `formatDateTime(value, options)` | Date + time formatting |
| `formatRelativeDate(value, options)` | Relative time (e.g. "2 hours ago") |
| `formatNumber(value, options)` | Locale number formatting |
| `formatCurrency(value, options)` | Currency formatting |
| `translate(message, values, locale)` | ICU MessageFormat translation |
| `getLocalCountryBasedFormat(country)` | Country-specific format defaults |

## Edge Cases
- `jsonParser` returns `null` on invalid JSON (never throws).
- `debounce` uses NodeJS.Timeout — clear on unmount in components via `useDebouncedValue` hook instead.
- `cn()` requires `tailwindcss >= 4` peer for correct merge semantics.
- `shallowEqual` used internally for `useShallowEffect` dependency comparison.
