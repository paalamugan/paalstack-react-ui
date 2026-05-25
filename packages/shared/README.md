# @paalstack/react-shared

Shared utilities, types, constants, and helper functions used across all Paalstack React UI packages.

> **Note:** This is an internal package. It is not published to npm and is not intended for direct consumer use.

## Docs

[Storybook → Getting Started](https://paalamugan.github.io/paalstack-react-ui/)

## What's included

| Export        | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| `.` (default) | Main entry — re-exports all shared utilities                    |
| `./constants` | Shared constants used across packages                           |
| `./types`     | Shared TypeScript types and interfaces                          |
| `./utils`     | Utility functions (`cn`, date/number/currency formatters, etc.) |
| `./lib`       | Lower-level library helpers (HTTP client, logger, i18n, etc.)   |

## Key utilities

### `cn` — Class Name Utility

Merges Tailwind CSS class names using `clsx` + `tailwind-merge`, safely resolving conflicts.

```ts
import { cn } from '@paalstack/react-shared/utils';

cn('px-2 py-1', 'bg-red-500', { 'font-bold': true });
// → 'px-2 py-1 bg-red-500 font-bold'

cn('p-2', 'p-4');
// → 'p-4'
```

### `dateIntl` — Date Formatter

Timezone-aware date formatting built on `date-fns` and `date-fns-tz`.

```ts
import { dateIntl } from '@paalstack/react-shared/utils';

dateIntl.format('2024-06-15T10:30:00Z'); // → '15/06/2024'
dateIntl.formatDateTime('2024-06-15T10:30:00Z'); // → '15/06/2024 10:30 AM'
dateIntl.formatRelativeTime('2024-06-14T10:00:00Z'); // → 'yesterday at 10:00 AM'
```

### `numberIntl` — Number Formatter

Formats numbers using `Intl.NumberFormat`.

```ts
import { numberIntl } from '@paalstack/react-shared/utils';

numberIntl.format(1234567.89); // → '1,234,567.89'
numberIntl.format(1234567, { notation: 'compact' }); // → '1.2M'
```

### `currencyIntl` — Currency Formatter

Formats monetary values as locale-aware currency strings.

```ts
import { currencyIntl } from '@paalstack/react-shared/utils';

currencyIntl.format(1234.5); // → '$1,234.50'
currencyIntl.format(1234.5, 'EUR'); // → '€1,234.50'
```

## Requirements

| Peer dependency | Version  |
| --------------- | -------- |
| `react`         | `>= 18`  |
| `react-dom`     | `>= 18`  |
| `tailwindcss`   | `>= 4.x` |

## License

MIT © [Paalamugan](https://github.com/paalamugan)
