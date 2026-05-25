# @paalstack/react-hooks

A collection of 60+ production-ready React hooks for state management, UI interactions, async operations, and browser APIs — built with TypeScript and zero UI dependencies.

## Docs

[Storybook → Hooks documentation](https://paalamugan.github.io/paalstack-react-ui/?path=/docs/hooks-state-management-usecallbackref--documentation)

## Installation

```bash
pnpm add @paalstack/react-hooks
# or
npm install @paalstack/react-hooks
# or
yarn add @paalstack/react-hooks
```

## Usage

```tsx
import { useToggle, useDebounce, useLocalStorage, useCounter } from '@paalstack/react-hooks';

function Example() {
  const [isOpen, toggle] = useToggle(false);
  const [search, setSearch] = useLocalStorage('search', '');
  const debouncedSearch = useDebounce(search, 300);
  const [count, { increment, decrement, reset }] = useCounter(0);

  return (/* ... */);
}
```

## Hook categories

| Category             | Examples                                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| **State management** | `useToggle`, `useCounter`, `usePrevious`, `useQueue`, `useSet`, `useMap`                       |
| **Side effects**     | `useDebounce`, `useThrottle`, `useInterval`, `useTimeout`                                      |
| **Browser / DOM**    | `useLocalStorage`, `useSessionStorage`, `useMediaQuery`, `useEventListener`, `useClickOutside` |
| **Async**            | `useAsync`, `useFetch`                                                                         |
| **Routing**          | `useSearchParams`, `useRouteParams`                                                            |
| **Lifecycle**        | `useMount`, `useUnmount`, `useUpdateEffect`, `useIsFirstRender`                                |
| **Ref utilities**    | `useCallbackRef`, `useLatestRef`, `useMergeRefs`                                               |
| **Miscellaneous**    | `useId`, `useCopyToClipboard`, `useElementSize`, `useWindowSize`                               |

## Requirements

| Peer dependency | Version |
| --------------- | ------- |
| `react`         | `>= 18` |
| `react-dom`     | `>= 18` |

## License

MIT © [Paalamugan](https://github.com/paalamugan)
