# Types Catalog

## Shared Types (`packages/shared/src/types`)

| Name | Definition | Purpose | Usage |
|------|------------|---------|-------|
| `Dict<T>` | `Record<string, T>` | Generic object map | Metadata, options |
| `OptionType` | interface with label, value, key?, disabled? | Select/combobox options | `Select`, `MultiSelect` |
| `OptionGroupType` | label + items[] | Grouped options | `Select` groups |
| `Merge<T,P>` | P & Omit<T, keyof P> | Type merge utility | Component props |
| `LiteralUnion<T,U>` | T \| (U & { _?: never }) | Autocomplete-friendly unions | Variant props |
| `Booleanish` | boolean \| 'true' \| 'false' | HTML boolean attrs | ARIA props |
| `StringOrNumber` | string \| number | Flexible IDs/values | Pagination |
| `EventKeys` | Keyboard key union | Hotkey/shortcut hooks | `useHotkeys` |
| `TailwindBoxVariants` | VariantProps<tailwindBoxVariants> | Box color/size props | `Box`, layouts |
| `ComponentWithAs` | Polymorphic component type | `as` prop typing | `Box`, `Button` |
| `TailwindStyledComponentProps` | bg, textColor, borderColor, fontSize | Layout styling props | All layout components |

## Color Constants (`packages/shared/src/constants/colors.ts`)

| Name | Purpose |
|------|---------|
| `COLOR_VARIANTS` | Semantic colors: primary, secondary, danger, etc. |
| `TAILWIND_COLOR_VARIANTS` | Tailwind palette names |
| `ALL_COLOR_VARIANTS` | Combined color union |
| `BOX_COLOR_VARIANTS` | Box bg/text/border colors |
| `FONT_SIZE_VARIANTS` | Typography size tokens |
| `tailwindBoxVariants` | CVA for Box styling |

## Component Props (representative)

| Name | Related |
|------|---------|
| `ButtonProps` | Button, IconButton |
| `AlertProps` | Alert |
| `UseDisclosureOptions` / `UseDisclosureReturn` | useDisclosure |
| `ThemeProviderProps` | ThemeProvider |
| `DataTableProps` | DataTable |

## HTTP Types

| Name | Purpose |
|------|---------|
| `IHttpClient` | HTTP client interface |
| `IAxiosClient` | Axios-specific interface |
| `ResourceNotFoundException` | 404 exception class |
| `InternalServerException` | 500 exception class |

## Format Types

| Name | Purpose |
|------|---------|
| `BaseDateType` | `string \| Date \| number` input for formatters |
| `IDateOptions` | dateFormat, dateTimeFormat, timeZone, locale, fallback |
| `FormatOptions` | Partial date/number/currency format config |
| `CurrencyExchange` | Currency converter options |
| `TimeZone` | Timezone string union from time-zones.ts |

## Provider Types

| Name | Definition | Purpose |
|------|------------|---------|
| `Theme` | `'dark' \| 'light' \| 'system'` | Theme mode |
| `ThemeContextState` | theme, setTheme, toggleTheme, isDark, isLight, isSystem | useTheme return |
| `ThemeProviderProps` | defaultTheme, storageKey, toasterProps, children | ThemeProvider |
| `NextThemeProviderProps` | extends ThemeProviderProps + next-themes options | Next.js apps |
| `FormatIntlProviderProps` | locale, currency, date/number formats | i18n provider |
| `FormatIntlContextState` | formatDate, formatCurrency, translate, etc. | useFormatIntl return |
| `ToastProviderProps` | extends sonner ToasterProps | Toast container |
| `ToasterProps` | position, theme, richColors, etc. | Sonner config |

## Component Variant Types

| Name | Related |
|------|---------|
| `ButtonVariant` | solid, outline, ghost, soft, link, surface |
| `AllColorVariant` | Semantic + Tailwind color names |
| `FontSizeVariant` | xs through 9xl |

Inspect `packages/shared/src/lib/http/types.ts` and component `*Props` interfaces for full definitions.
