# @paalstack/react-test-utils

Testing utilities for Paalstack React UI components — custom render helpers, shared test suites, browser API mocks, accessibility helpers, and focus utilities.

> **Note:** This is an internal package intended for use within the Paalstack React UI monorepo test suite.

## Docs

[Storybook → Getting Started](https://paalamugan.github.io/paalstack-react-ui/)

## Installation

```bash
pnpm add -D @paalstack/react-test-utils
# or
npm install --save-dev @paalstack/react-test-utils
```

## Usage

### Custom `render`

A pre-configured `render` wrapper that includes all required providers (`ThemeProvider`, etc.) so you don't need to set them up in every test.

```tsx
import { Button } from '@paalstack/react-components';
import { render, screen } from '@paalstack/react-test-utils';

test('renders a button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});
```

### Accessibility testing

```ts
import { testA11y } from '@paalstack/react-test-utils';
import { Button } from '@paalstack/react-components';

test('has no accessibility violations', async () => {
  await testA11y(<Button>Submit</Button>);
});
```

### Shared test suites

Reusable test assertions for common component contracts:

```tsx
import { Button } from '@paalstack/react-components';
import { itSupportsRef } from '@paalstack/react-test-utils/tests';

describe('Button', () => {
  itSupportsRef(Button, { children: 'Click' }, HTMLButtonElement);
});
```

### Browser API mocks

```ts
import { mockLocalStorage, mockMatchMedia, mockSessionStorage } from '@paalstack/react-test-utils';

beforeEach(() => {
  mockLocalStorage();
  mockMatchMedia();
});
```

### Hook testing

```ts
import { useToggle } from '@paalstack/react-hooks';
import { renderHook } from '@paalstack/react-test-utils';

test('useToggle', () => {
  const { result } = renderHook(() => useToggle(false));
  expect(result.current[0]).toBe(false);
});
```

## What's included

| Module          | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| `render`        | Custom render with all providers pre-configured                    |
| `hooks`         | `renderHook` and act helpers                                       |
| `accessibility` | `testA11y` — runs `jest-axe` accessibility assertions              |
| `focus`         | Focus-related test utilities                                       |
| `utils`         | Miscellaneous test helpers                                         |
| `mocks`         | Browser API mocks (localStorage, sessionStorage, matchMedia, etc.) |
| `tests`         | Shared reusable test suites (e.g. `itSupportsRef`)                 |

## License

MIT © [Paalamugan](https://github.com/paalamugan)
