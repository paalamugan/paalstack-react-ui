# Hooks Catalog

72 hooks in `@paalstack/react-hooks`.

| Hook | Purpose |
|------|---------|
| `useAsRef` | Syncs a ref with a value on every render (callback ref pattern). |
| `useCallbackRef` | Returns a stable callback ref that always invokes the latest callback. |
| `useClickOutside` | Detects clicks outside a referenced element. |
| `useClipboard` | Copy text to clipboard with success/error state. |
| `useColorScheme` | Reads and tracks preferred color scheme (light/dark). |
| `useConst` | Returns a constant value that never changes across renders. |
| `useControllableProp` | Controlled/uncontrolled state pattern for components. |
| `useCounter` | Increment/decrement/reset counter state. |
| `useDebouncedState` | State value debounced on update. |
| `useDebouncedValue` | Debounced mirror of a value prop. |
| `useDisclosure` | Open/close toggle with ARIA button/disclosure props. |
| `useDocumentTitle` | Sets document.title reactively. |
| `useDocumentVisibility` | Tracks Page Visibility API state. |
| `useElementSize` | Measures element width/height via @zag-js/element-size. |
| `useEventListener` | Attaches DOM event listeners with cleanup. |
| `useEyeDropper` | Browser EyeDropper API wrapper. |
| `useFavicon` | Dynamically changes favicon. |
| `useFetcher` | React Router fetcher wrapper for mutations. |
| `useFocusOnPointerDown` | Focuses element on pointer down. |
| `useFocusReturn` | Returns focus to trigger when overlay closes. |
| `useFocusTrap` | Traps keyboard focus within a container. |
| `useFocusWithin` | Detects focus within a subtree. |
| `useForceUpdate` | Forces component re-render. |
| `useFullscreen` | Fullscreen API toggle. |
| `useHash` | Syncs state with URL hash fragment. |
| `useHeadroom` | Hide/show header on scroll direction. |
| `useHotkeys` | Global keyboard shortcut registration. |
| `useHover` | Tracks hover state on an element. |
| `useId` | Stable unique ID generation (SSR-safe). |
| `useIdle` | Detects user idle/inactivity. |
| `useInputState` | Controlled input state with onChange handler. |
| `useIntersection` | Intersection Observer wrapper. |
| `useInterval` | Declarative setInterval with cleanup. |
| `useIsomorphicEffect` | useLayoutEffect on client, useEffect on server. |
| `useLatestRef` | Ref always holding the latest value. |
| `useLatestValue` | Returns latest value without triggering effects. |
| `useLazyQueryFetcher` | Deferred React Router query fetcher. |
| `useLazyRef` | Lazy-initialized ref (runs initializer once). |
| `useListState` | Array state with append/remove/reorder helpers. |
| `useLocalNavigate` | React Router navigate scoped to local context. |
| `useLocalStorage` | Persisted state in localStorage with sync. |
| `useLogger` | Returns configured logger instance. |
| `useMediaQuery` | Matches CSS media query strings. |
| `useMergedRef` | Combines multiple refs into one callback ref. |
| `useMouse` | Tracks mouse position relative to element/window. |
| `useMove` | Drag/move gesture tracking. |
| `useNetwork` | Online/offline and connection quality. |
| `useOs` | Detects operating system from user agent. |
| `usePageLeave` | Detects mouse leaving viewport (exit intent). |
| `usePagination` | Page index, range, and navigation helpers. |
| `usePrevious` | Returns previous render value. |
| `useQueryFetcher` | React Router query fetcher for data loading. |
| `useQueue` | FIFO queue state management. |
| `useReducedMotion` | Respects prefers-reduced-motion. |
| `useResizeObserver` | Observes element size changes. |
| `useScrollIntoView` | Animated scroll element into viewport. |
| `useScrollLock` | Locks body scroll when overlay open. |
| `useSearchParams` | React Router search params read/write. |
| `useSessionStorage` | Persisted state in sessionStorage. |
| `useSetState` | Partial state updates (object merge). |
| `useShallowEffect` | useEffect with shallow dependency compare. |
| `useShortcut` | Single keyboard shortcut handler. |
| `useSizes` | Element size measurement hook. |
| `useSubscription` | Subscribe to Observable-like sources. |
| `useTextSelection` | Tracks text selection within element. |
| `useTimeout` | Declarative setTimeout with cleanup. |
| `useToggle` | Boolean toggle state. |
| `useUpdateEffect` | useEffect that skips first mount. |
| `useValidatedState` | State with validation rules. |
| `useViewportSize` | Window inner width/height tracking. |
| `useWindowEvent` | window.addEventListener wrapper. |
| `useWindowScroll` | Window scroll position tracking. |

---

## useAsRef

### Purpose
Syncs a ref with a value on every render (callback ref pattern).

### Parameters
`UseAsRefOptions` — see `packages/hooks/src/use-as-ref/use-as-ref.ts`

Signature: `useAsRef(handler)`

### Return Value
`ReturnType<typeof useAsRef>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useAsRef } from '@paalstack/react-hooks';

function Demo() {
  const result = useAsRef();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Syncs a ref with a value on every render (callback ref pattern).

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useCallbackRef

### Purpose
Returns a stable callback ref that always invokes the latest callback.

### Parameters
`UseCallbackRefOptions` — see `packages/hooks/src/use-callback-ref/use-callback-ref.ts`

Signature: `useCallbackRef(See source)`

### Return Value
`ReturnType<typeof useCallbackRef>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. Uses useCallbackRef for latest callback refs. 

### Usage Example
```tsx
import { useCallbackRef } from '@paalstack/react-hooks';

function Demo() {
  const result = useCallbackRef();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Returns a stable callback ref that always invokes the latest callback.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useClickOutside

### Purpose
Detects clicks outside a referenced element.

### Parameters
`UseClickOutsideOptions` — see `packages/hooks/src/use-click-outside/use-click-outside.ts`

Signature: `useClickOutside(See source)`

### Return Value
`ReturnType<typeof useClickOutside>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. Uses useCallbackRef for latest callback refs. 

### Usage Example
```tsx
import { useClickOutside } from '@paalstack/react-hooks';

function Demo() {
  const result = useClickOutside();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Detects clicks outside a referenced element.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useClipboard

### Purpose
Copy text to clipboard with success/error state.

### Parameters
`UseClipboardOptions` — see `packages/hooks/src/use-clipboard/use-clipboard.ts`

Signature: `useClipboard(See source)`

### Return Value
`ReturnType<typeof useClipboard>`

### Internal Logic Summary


### Usage Example
```tsx
import { useClipboard } from '@paalstack/react-hooks';

function Demo() {
  const result = useClipboard();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Copy text to clipboard with success/error state.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useColorScheme

### Purpose
Reads and tracks preferred color scheme (light/dark).

### Parameters
`UseColorSchemeOptions` — see `packages/hooks/src/use-color-scheme/use-color-scheme.ts`

Signature: `useColorScheme(See source)`

### Return Value
`ReturnType<typeof useColorScheme>`

### Internal Logic Summary


### Usage Example
```tsx
import { useColorScheme } from '@paalstack/react-hooks';

function Demo() {
  const result = useColorScheme();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Reads and tracks preferred color scheme (light/dark).

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useConst

### Purpose
Returns a constant value that never changes across renders.

### Parameters
`UseConstOptions` — see `packages/hooks/src/use-const/use-const.ts`

Signature: `useConst(init: T | InitFn<T>)`

### Return Value
`ReturnType<typeof useConst>`

### Internal Logic Summary


### Usage Example
```tsx
import { useConst } from '@paalstack/react-hooks';

function Demo() {
  const result = useConst();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Returns a constant value that never changes across renders.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useControllableProp

### Purpose
Controlled/uncontrolled state pattern for components.

### Parameters
`UseControllablePropOptions` — see `packages/hooks/src/use-controllable/use-controllable.ts`

Signature: `useControllableProp(See source)`

### Return Value
`ReturnType<typeof useControllableProp>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Uses useCallbackRef for latest callback refs. 

### Usage Example
```tsx
import { useControllableProp } from '@paalstack/react-hooks';

function Demo() {
  const result = useControllableProp();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Controlled/uncontrolled state pattern for components.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useCounter

### Purpose
Increment/decrement/reset counter state.

### Parameters
`UseCounterOptions` — see `packages/hooks/src/use-counter/use-counter.ts`

Signature: `useCounter(See source)`

### Return Value
`ReturnType<typeof useCounter>`

### Internal Logic Summary


### Usage Example
```tsx
import { useCounter } from '@paalstack/react-hooks';

function Demo() {
  const result = useCounter();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Increment/decrement/reset counter state.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useDebouncedState

### Purpose
State value debounced on update.

### Parameters
`UseDebouncedStateOptions` — see `packages/hooks/src/use-debounced-state/use-debounced-state.tsx`

Signature: `useDebouncedState(See source)`

### Return Value
`ReturnType<typeof useDebouncedState>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useDebouncedState } from '@paalstack/react-hooks';

function Demo() {
  const result = useDebouncedState();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
State value debounced on update.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
useDebouncedState, useDebouncedValue

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useDebouncedValue

### Purpose
Debounced mirror of a value prop.

### Parameters
`UseDebouncedValueOptions` — see `packages/hooks/src/use-debounced-value/use-debounced-value.ts`

Signature: `useDebouncedValue(See source)`

### Return Value
`ReturnType<typeof useDebouncedValue>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useDebouncedValue } from '@paalstack/react-hooks';

function Demo() {
  const result = useDebouncedValue();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Debounced mirror of a value prop.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
useDebouncedState, useDebouncedValue

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useDisclosure

### Purpose
Open/close toggle with ARIA button/disclosure props.

### Parameters
`UseDisclosureOptions` — see `packages/hooks/src/use-disclosure/use-disclosure.ts`

Signature: `useDisclosure(See source)`

### Return Value
`UseDisclosureReturn`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Uses useCallbackRef for latest callback refs. 

### Usage Example
```tsx
import { useDisclosure } from '@paalstack/react-hooks';

function Demo() {
  const result = useDisclosure();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Open/close toggle with ARIA button/disclosure props.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useDocumentTitle

### Purpose
Sets document.title reactively.

### Parameters
`UseDocumentTitleOptions` — see `packages/hooks/src/use-document-title/use-document-title.ts`

Signature: `useDocumentTitle(See source)`

### Return Value
`ReturnType<typeof useDocumentTitle>`

### Internal Logic Summary


### Usage Example
```tsx
import { useDocumentTitle } from '@paalstack/react-hooks';

function Demo() {
  const result = useDocumentTitle();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Sets document.title reactively.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useDocumentVisibility

### Purpose
Tracks Page Visibility API state.

### Parameters
`UseDocumentVisibilityOptions` — see `packages/hooks/src/use-document-visibility/use-document-visibility.ts`

Signature: `useDocumentVisibility(See source)`

### Return Value
`ReturnType<typeof useDocumentVisibility>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useDocumentVisibility } from '@paalstack/react-hooks';

function Demo() {
  const result = useDocumentVisibility();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Tracks Page Visibility API state.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useElementSize

### Purpose
Measures element width/height via @zag-js/element-size.

### Parameters
`UseElementSizeOptions` — see `packages/hooks/src/use-element-size/use-element-size.ts`

Signature: `useElementSize(See source)`

### Return Value
`ReturnType<typeof useElementSize>`

### Internal Logic Summary


### Usage Example
```tsx
import { useElementSize } from '@paalstack/react-hooks';

function Demo() {
  const result = useElementSize();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Measures element width/height via @zag-js/element-size.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useEventListener

### Purpose
Attaches DOM event listeners with cleanup.

### Parameters
`UseEventListenerOptions` — see `packages/hooks/src/use-event-listener/use-event-listener.ts`

Signature: `useEventListener(See source)`

### Return Value
`ReturnType<typeof useEventListener>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. Uses useCallbackRef for latest callback refs. 

### Usage Example
```tsx
import { useEventListener } from '@paalstack/react-hooks';

function Demo() {
  const result = useEventListener();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Attaches DOM event listeners with cleanup.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useEyeDropper

### Purpose
Browser EyeDropper API wrapper.

### Parameters
`UseEyeDropperOptions` — see `packages/hooks/src/use-eye-dropper/use-eye-dropper.ts`

Signature: `useEyeDropper(See source)`

### Return Value
`EyeDropperOpenReturnType`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. 

### Usage Example
```tsx
import { useEyeDropper } from '@paalstack/react-hooks';

function Demo() {
  const result = useEyeDropper();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Browser EyeDropper API wrapper.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useFavicon

### Purpose
Dynamically changes favicon.

### Parameters
`UseFaviconOptions` — see `packages/hooks/src/use-favicon/use-favicon.ts`

Signature: `useFavicon(See source)`

### Return Value
`ReturnType<typeof useFavicon>`

### Internal Logic Summary


### Usage Example
```tsx
import { useFavicon } from '@paalstack/react-hooks';

function Demo() {
  const result = useFavicon();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Dynamically changes favicon.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useFetcher

### Purpose
React Router fetcher wrapper for mutations.

### Parameters
`UseFetcherOptions` — see `packages/hooks/src/use-fetcher/use-fetcher.ts`

Signature: `useFetcher(See source)`

### Return Value
`ReturnType<typeof useFetcher>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useFetcher } from '@paalstack/react-hooks';

function Demo() {
  const result = useFetcher();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
React Router fetcher wrapper for mutations.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useFocusOnPointerDown

### Purpose
Focuses element on pointer down.

### Parameters
`UseFocusOnMouseDownOptions` — see `packages/hooks/src/use-focus-on-pointer-down/use-focus-on-pointer-down.ts`

Signature: `useFocusOnPointerDown(See source)`

### Return Value
`ReturnType<typeof useFocusOnPointerDown>`

### Internal Logic Summary


### Usage Example
```tsx
import { useFocusOnPointerDown } from '@paalstack/react-hooks';

function Demo() {
  const result = useFocusOnPointerDown();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Focuses element on pointer down.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
useFocusTrap, useFocusReturn, useFocusWithin

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useFocusReturn

### Purpose
Returns focus to trigger when overlay closes.

### Parameters
`UseFocusReturnOptions` — see `packages/hooks/src/use-focus-return/use-focus-return.ts`

Signature: `useFocusReturn(See source)`

### Return Value
`useFocusReturn`

### Internal Logic Summary


### Usage Example
```tsx
import { useFocusReturn } from '@paalstack/react-hooks';

function Demo() {
  const result = useFocusReturn();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Returns focus to trigger when overlay closes.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
useFocusTrap, useFocusReturn, useFocusWithin

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useFocusTrap

### Purpose
Traps keyboard focus within a container.

### Parameters
`UseFocusTrapOptions` — see `packages/hooks/src/use-focus-trap/use-focus-trap.ts`

Signature: `useFocusTrap(See source)`

### Return Value
`ReturnType<typeof useFocusTrap>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useFocusTrap } from '@paalstack/react-hooks';

function Demo() {
  const result = useFocusTrap();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Traps keyboard focus within a container.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
useFocusTrap, useFocusReturn, useFocusWithin

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useFocusWithin

### Purpose
Detects focus within a subtree.

### Parameters
`UseFocusWithinOptions` — see `packages/hooks/src/use-focus-within/use-focus-within.ts`

Signature: `useFocusWithin(See source)`

### Return Value
`ReturnType<typeof useFocusWithin>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useFocusWithin } from '@paalstack/react-hooks';

function Demo() {
  const result = useFocusWithin();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Detects focus within a subtree.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
useFocusTrap, useFocusReturn, useFocusWithin

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useForceUpdate

### Purpose
Forces component re-render.

### Parameters
`UseForceUpdateOptions` — see `packages/hooks/src/use-force-update/use-force-update.ts`

Signature: `useForceUpdate(See source)`

### Return Value
`ReturnType<typeof useForceUpdate>`

### Internal Logic Summary


### Usage Example
```tsx
import { useForceUpdate } from '@paalstack/react-hooks';

function Demo() {
  const result = useForceUpdate();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Forces component re-render.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useFullscreen

### Purpose
Fullscreen API toggle.

### Parameters
`UseFullscreenOptions` — see `packages/hooks/src/use-fullscreen/use-fullscreen.ts`

Signature: `useFullscreen(See source)`

### Return Value
`ReturnType<typeof useFullscreen>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useFullscreen } from '@paalstack/react-hooks';

function Demo() {
  const result = useFullscreen();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Fullscreen API toggle.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useHash

### Purpose
Syncs state with URL hash fragment.

### Parameters
`UseHashOptions` — see `packages/hooks/src/use-hash/use-hash.ts`

Signature: `useHash(See source)`

### Return Value
`ReturnType<typeof useHash>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useHash } from '@paalstack/react-hooks';

function Demo() {
  const result = useHash();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Syncs state with URL hash fragment.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useHeadroom

### Purpose
Hide/show header on scroll direction.

### Parameters
`UseHeadroomOptions` — see `packages/hooks/src/use-headroom/use-headroom.ts`

Signature: `useHeadroom({ fixedAt = 0, onPin, onFix, onRelease }: UseHeadroomInput = {})`

### Return Value
`ReturnType<typeof useHeadroom>`

### Internal Logic Summary


### Usage Example
```tsx
import { useHeadroom } from '@paalstack/react-hooks';

function Demo() {
  const result = useHeadroom();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Hide/show header on scroll direction.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useHotkeys

### Purpose
Global keyboard shortcut registration.

### Parameters
`HotkeyItemOptions` — see `packages/hooks/src/use-hotkeys/use-hotkeys.ts`

Signature: `useHotkeys(See source)`

### Return Value
`ReturnType<typeof useHotkeys>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useHotkeys } from '@paalstack/react-hooks';

function Demo() {
  const result = useHotkeys();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Global keyboard shortcut registration.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useHover

### Purpose
Tracks hover state on an element.

### Parameters
`UseHoverOptions` — see `packages/hooks/src/use-hover/use-hover.ts`

Signature: `useHover(See source)`

### Return Value
`ReturnType<typeof useHover>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useHover } from '@paalstack/react-hooks';

function Demo() {
  const result = useHover();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Tracks hover state on an element.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useId

### Purpose
Stable unique ID generation (SSR-safe).

### Parameters
`UseIdOptions` — see `packages/hooks/src/use-id/use-id.ts`

Signature: `useId(staticId)`

### Return Value
`ReturnType<typeof useId>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. 

### Usage Example
```tsx
import { useId } from '@paalstack/react-hooks';

function Demo() {
  const result = useId();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Stable unique ID generation (SSR-safe).

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useIdle

### Purpose
Detects user idle/inactivity.

### Parameters
`UseIdleOptions` — see `packages/hooks/src/use-idle/use-idle.ts`

Signature: `useIdle(See source)`

### Return Value
`ReturnType<typeof useIdle>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useIdle } from '@paalstack/react-hooks';

function Demo() {
  const result = useIdle();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Detects user idle/inactivity.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useInputState

### Purpose
Controlled input state with onChange handler.

### Parameters
`UseInputStateOptions` — see `packages/hooks/src/use-input-state/use-input-state.ts`

Signature: `useInputState(See source)`

### Return Value
`ReturnType<typeof useInputState>`

### Internal Logic Summary


### Usage Example
```tsx
import { useInputState } from '@paalstack/react-hooks';

function Demo() {
  const result = useInputState();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Controlled input state with onChange handler.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useIntersection

### Purpose
Intersection Observer wrapper.

### Parameters
`UseIntersectionOptions` — see `packages/hooks/src/use-intersection/use-intersection.ts`

Signature: `useIntersection(See source)`

### Return Value
`ReturnType<typeof useIntersection>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useIntersection } from '@paalstack/react-hooks';

function Demo() {
  const result = useIntersection();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Intersection Observer wrapper.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useInterval

### Purpose
Declarative setInterval with cleanup.

### Parameters
`UseIntervalOptions` — see `packages/hooks/src/use-interval/use-interval.ts`

Signature: `useInterval(See source)`

### Return Value
`ReturnType<typeof useInterval>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. Uses useCallbackRef for latest callback refs. 

### Usage Example
```tsx
import { useInterval } from '@paalstack/react-hooks';

function Demo() {
  const result = useInterval();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Declarative setInterval with cleanup.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useIsomorphicEffect

### Purpose
useLayoutEffect on client, useEffect on server.

### Parameters
`UseIsomorphicEffectOptions` — see `packages/hooks/src/use-isomorphic-effect/use-isomorphic-effect.ts`

Signature: `useIsomorphicEffect(See source)`

### Return Value
`ReturnType<typeof useIsomorphicEffect>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useIsomorphicEffect } from '@paalstack/react-hooks';

function Demo() {
  const result = useIsomorphicEffect();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
useLayoutEffect on client, useEffect on server.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useLatestRef

### Purpose
Ref always holding the latest value.

### Parameters
`UseLatestRefOptions` — see `packages/hooks/src/use-latest-ref/use-latest-ref.ts`

Signature: `useLatestRef(See source)`

### Return Value
`ReturnType<typeof useLatestRef>`

### Internal Logic Summary


### Usage Example
```tsx
import { useLatestRef } from '@paalstack/react-hooks';

function Demo() {
  const result = useLatestRef();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Ref always holding the latest value.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useLatestValue

### Purpose
Returns latest value without triggering effects.

### Parameters
`UseLatestValueOptions` — see `packages/hooks/src/use-latest-value/use-latest-value.ts`

Signature: `useLatestValue(See source)`

### Return Value
`ReturnType<typeof useLatestValue>`

### Internal Logic Summary


### Usage Example
```tsx
import { useLatestValue } from '@paalstack/react-hooks';

function Demo() {
  const result = useLatestValue();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Returns latest value without triggering effects.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useLazyQueryFetcher

### Purpose
Deferred React Router query fetcher.

### Parameters
`UseLazyQueryFetcherOptions` — see `packages/hooks/src/use-lazy-query-fetcher/use-lazy-query-fetcher.ts`

Signature: `useLazyQueryFetcher(See source)`

### Return Value
`ReturnType<typeof useLazyQueryFetcher>`

### Internal Logic Summary


### Usage Example
```tsx
import { useLazyQueryFetcher } from '@paalstack/react-hooks';

function Demo() {
  const result = useLazyQueryFetcher();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Deferred React Router query fetcher.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useLazyRef

### Purpose
Lazy-initialized ref (runs initializer once).

### Parameters
`UseLazyRefOptions` — see `packages/hooks/src/use-lazy-ref/use-lazy-ref.ts`

Signature: `useLazyRef(()`

### Return Value
`ReturnType<typeof useLazyRef>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useLazyRef } from '@paalstack/react-hooks';

function Demo() {
  const result = useLazyRef();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Lazy-initialized ref (runs initializer once).

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useListState

### Purpose
Array state with append/remove/reorder helpers.

### Parameters
`UseListStateOptions` — see `packages/hooks/src/use-list-state/use-list-state.ts`

Signature: `useListState(See source)`

### Return Value
`ReturnType<typeof useListState>`

### Internal Logic Summary


### Usage Example
```tsx
import { useListState } from '@paalstack/react-hooks';

function Demo() {
  const result = useListState();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Array state with append/remove/reorder helpers.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useLocalNavigate

### Purpose
React Router navigate scoped to local context.

### Parameters
`UseLocalNavigateOptions` — see `packages/hooks/src/use-local-navigate/use-local-navigate.ts`

Signature: `useLocalNavigate(See source)`

### Return Value
`ReturnType<typeof useLocalNavigate>`

### Internal Logic Summary


### Usage Example
```tsx
import { useLocalNavigate } from '@paalstack/react-hooks';

function Demo() {
  const result = useLocalNavigate();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
React Router navigate scoped to local context.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useLocalStorage

### Purpose
Persisted state in localStorage with sync.

### Parameters
`UseLocalStorageOptions` — see `packages/hooks/src/use-local-storage/use-local-storage.ts`

Signature: `useLocalStorage(See source)`

### Return Value
`ReturnType<typeof useLocalStorage>`

### Internal Logic Summary
Persists to localStorage. 

### Usage Example
```tsx
import { useLocalStorage } from '@paalstack/react-hooks';

function Demo() {
  const result = useLocalStorage();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Persisted state in localStorage with sync.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
useLocalStorage, useSessionStorage

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useLogger

### Purpose
Returns configured logger instance.

### Parameters
`UseLoggerOptions` — see `packages/hooks/src/use-logger/use-logger.ts`

Signature: `useLogger(See source)`

### Return Value
`ReturnType<typeof useLogger>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useLogger } from '@paalstack/react-hooks';

function Demo() {
  const result = useLogger();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Returns configured logger instance.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useMediaQuery

### Purpose
Matches CSS media query strings.

### Parameters
`UseMediaQueryOptions` — see `packages/hooks/src/use-media-query/use-media-query.ts`

Signature: `useMediaQuery(See source)`

### Return Value
`ReturnType<typeof useMediaQuery>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useMediaQuery } from '@paalstack/react-hooks';

function Demo() {
  const result = useMediaQuery();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Matches CSS media query strings.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useMergedRef

### Purpose
Combines multiple refs into one callback ref.

### Parameters
`UseMergedRefOptions` — see `packages/hooks/src/use-merged-ref/use-merged-ref.ts`

Signature: `useMergedRef(See source)`

### Return Value
`ReturnType<typeof useMergedRef>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. 

### Usage Example
```tsx
import { useMergedRef } from '@paalstack/react-hooks';

function Demo() {
  const result = useMergedRef();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Combines multiple refs into one callback ref.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useMouse

### Purpose
Tracks mouse position relative to element/window.

### Parameters
`UseMouseOptions` — see `packages/hooks/src/use-mouse/use-mouse.ts`

Signature: `useMouse(See source)`

### Return Value
`ReturnType<typeof useMouse>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useMouse } from '@paalstack/react-hooks';

function Demo() {
  const result = useMouse();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Tracks mouse position relative to element/window.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useMove

### Purpose
Drag/move gesture tracking.

### Parameters
`UseMoveOptions` — see `packages/hooks/src/use-move/use-move.ts`

Signature: `useMove(event)`

### Return Value
`ReturnType<typeof useMove>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useMove } from '@paalstack/react-hooks';

function Demo() {
  const result = useMove();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Drag/move gesture tracking.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useNetwork

### Purpose
Online/offline and connection quality.

### Parameters
`UseNetworkOptions` — see `packages/hooks/src/use-network/use-network.ts`

Signature: `useNetwork(See source)`

### Return Value
`ReturnType<typeof useNetwork>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useNetwork } from '@paalstack/react-hooks';

function Demo() {
  const result = useNetwork();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Online/offline and connection quality.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useOs

### Purpose
Detects operating system from user agent.

### Parameters
`UseOsOptions` — see `packages/hooks/src/use-os/use-os.ts`

Signature: `useOs(See source)`

### Return Value
`ReturnType<typeof useOs>`

### Internal Logic Summary


### Usage Example
```tsx
import { useOs } from '@paalstack/react-hooks';

function Demo() {
  const result = useOs();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Detects operating system from user agent.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## usePageLeave

### Purpose
Detects mouse leaving viewport (exit intent).

### Parameters
`UsePageLeaveOptions` — see `packages/hooks/src/use-page-leave/use-page-leave.ts`

Signature: `usePageLeave(See source)`

### Return Value
`ReturnType<typeof usePageLeave>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. Uses useCallbackRef for latest callback refs. 

### Usage Example
```tsx
import { usePageLeave } from '@paalstack/react-hooks';

function Demo() {
  const result = usePageLeave();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Detects mouse leaving viewport (exit intent).

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## usePagination

### Purpose
Page index, range, and navigation helpers.

### Parameters
`UsePaginationOptions` — see `packages/hooks/src/use-pagination/use-pagination.ts`

Signature: `usePagination(See source)`

### Return Value
`ReturnType<typeof usePagination>`

### Internal Logic Summary


### Usage Example
```tsx
import { usePagination } from '@paalstack/react-hooks';

function Demo() {
  const result = usePagination();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Page index, range, and navigation helpers.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## usePrevious

### Purpose
Returns previous render value.

### Parameters
`UsePreviousOptions` — see `packages/hooks/src/use-previous/use-previous.ts`

Signature: `usePrevious(See source)`

### Return Value
`ReturnType<typeof usePrevious>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { usePrevious } from '@paalstack/react-hooks';

function Demo() {
  const result = usePrevious();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Returns previous render value.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useQueryFetcher

### Purpose
React Router query fetcher for data loading.

### Parameters
`UseQueryFetcherOptions` — see `packages/hooks/src/use-query-fetcher/use-query-fetcher.ts`

Signature: `useQueryFetcher(See source)`

### Return Value
`ReturnType<typeof useQueryFetcher>`

### Internal Logic Summary


### Usage Example
```tsx
import { useQueryFetcher } from '@paalstack/react-hooks';

function Demo() {
  const result = useQueryFetcher();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
React Router query fetcher for data loading.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useQueue

### Purpose
FIFO queue state management.

### Parameters
`UseQueueOptions` — see `packages/hooks/src/use-queue/use-queue.ts`

Signature: `useQueue(See source)`

### Return Value
`ReturnType<typeof useQueue>`

### Internal Logic Summary


### Usage Example
```tsx
import { useQueue } from '@paalstack/react-hooks';

function Demo() {
  const result = useQueue();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
FIFO queue state management.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useReducedMotion

### Purpose
Respects prefers-reduced-motion.

### Parameters
`UseReducedMotionOptions` — see `packages/hooks/src/use-reduced-motion/use-reduced-motion.ts`

Signature: `useReducedMotion(See source)`

### Return Value
`ReturnType<typeof useReducedMotion>`

### Internal Logic Summary


### Usage Example
```tsx
import { useReducedMotion } from '@paalstack/react-hooks';

function Demo() {
  const result = useReducedMotion();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Respects prefers-reduced-motion.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useResizeObserver

### Purpose
Observes element size changes.

### Parameters
`UseResizeObserverOptions` — see `packages/hooks/src/use-resize-observer/use-resize-observer.ts`

Signature: `useResizeObserver(See source)`

### Return Value
`ReturnType<typeof useResizeObserver>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useResizeObserver } from '@paalstack/react-hooks';

function Demo() {
  const result = useResizeObserver();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Observes element size changes.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useScrollIntoView

### Purpose
Animated scroll element into viewport.

### Parameters
`UseScrollIntoViewOptions` — see `packages/hooks/src/use-scroll-into-view/use-scroll-into-view.ts`

Signature: `useScrollIntoView(See source)`

### Return Value
`ReturnType<typeof useScrollIntoView>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useScrollIntoView } from '@paalstack/react-hooks';

function Demo() {
  const result = useScrollIntoView();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Animated scroll element into viewport.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useScrollLock

### Purpose
Locks body scroll when overlay open.

### Parameters
`UseScrollLockOptions` — see `packages/hooks/src/use-scroll-lock/use-scroll-lock.ts`

Signature: `useScrollLock(See source)`

### Return Value
`ReturnType<typeof useScrollLock>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useScrollLock } from '@paalstack/react-hooks';

function Demo() {
  const result = useScrollLock();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Locks body scroll when overlay open.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useSearchParams

### Purpose
React Router search params read/write.

### Parameters
`UseSearchParamsOptions` — see `packages/hooks/src/use-search-params/use-search-params.ts`

Signature: `useSearchParams(See source)`

### Return Value
`ReturnType<typeof useSearchParams>`

### Internal Logic Summary


### Usage Example
```tsx
import { useSearchParams } from '@paalstack/react-hooks';

function Demo() {
  const result = useSearchParams();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
React Router search params read/write.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useSessionStorage

### Purpose
Persisted state in sessionStorage.

### Parameters
`UseSessionStorageOptions` — see `packages/hooks/src/use-session-storage/use-session-storage.ts`

Signature: `useSessionStorage(See source)`

### Return Value
`ReturnType<typeof useSessionStorage>`

### Internal Logic Summary


### Usage Example
```tsx
import { useSessionStorage } from '@paalstack/react-hooks';

function Demo() {
  const result = useSessionStorage();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Persisted state in sessionStorage.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
useLocalStorage, useSessionStorage

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useSetState

### Purpose
Partial state updates (object merge).

### Parameters
`UseSetStateOptions` — see `packages/hooks/src/use-set-state/use-set-state.ts`

Signature: `useSetState(See source)`

### Return Value
`ReturnType<typeof useSetState>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. 

### Usage Example
```tsx
import { useSetState } from '@paalstack/react-hooks';

function Demo() {
  const result = useSetState();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Partial state updates (object merge).

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useShallowEffect

### Purpose
useEffect with shallow dependency compare.

### Parameters
`UseShallowEffectOptions` — see `packages/hooks/src/use-shallow-effect/use-shallow-effect.ts`

Signature: `useShallowEffect(See source)`

### Return Value
`ReturnType<typeof useShallowEffect>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useShallowEffect } from '@paalstack/react-hooks';

function Demo() {
  const result = useShallowEffect();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
useEffect with shallow dependency compare.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useShortcut

### Purpose
Single keyboard shortcut handler.

### Parameters
`UseShortcutOptions` — see `packages/hooks/src/use-shortcut/use-shortcut.ts`

Signature: `useShortcut(See source)`

### Return Value
`ReturnType<typeof useShortcut>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useShortcut } from '@paalstack/react-hooks';

function Demo() {
  const result = useShortcut();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Single keyboard shortcut handler.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useSizes

### Purpose
Element size measurement hook.

### Parameters
`UseSizesOptions` — see `packages/hooks/src/use-size/use-size.ts`

Signature: `useSizes({
    observeMutation: false,
    getNodes()`

### Return Value
`ReturnType<typeof useSizes>`

### Internal Logic Summary


### Usage Example
```tsx
import { useSizes } from '@paalstack/react-hooks';

function Demo() {
  const result = useSizes();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Element size measurement hook.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useSubscription

### Purpose
Subscribe to Observable-like sources.

### Parameters
`UseSubscriptionOptions` — see `packages/hooks/src/use-subscription/use-subscription.ts`

Signature: `useSubscription(See source)`

### Return Value
`ReturnType<typeof useSubscription>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useSubscription } from '@paalstack/react-hooks';

function Demo() {
  const result = useSubscription();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Subscribe to Observable-like sources.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useTextSelection

### Purpose
Tracks text selection within element.

### Parameters
`UseTextSelectionOptions` — see `packages/hooks/src/use-text-selection/use-text-selection.ts`

Signature: `useTextSelection(See source)`

### Return Value
`ReturnType<typeof useTextSelection>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useTextSelection } from '@paalstack/react-hooks';

function Demo() {
  const result = useTextSelection();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Tracks text selection within element.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useTimeout

### Purpose
Declarative setTimeout with cleanup.

### Parameters
`UseTimeoutOptions` — see `packages/hooks/src/use-timeout/use-timeout.ts`

Signature: `useTimeout(See source)`

### Return Value
`ReturnType<typeof useTimeout>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. Uses useCallbackRef for latest callback refs. 

### Usage Example
```tsx
import { useTimeout } from '@paalstack/react-hooks';

function Demo() {
  const result = useTimeout();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Declarative setTimeout with cleanup.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useToggle

### Purpose
Boolean toggle state.

### Parameters
`UseToggleOptions` — see `packages/hooks/src/use-toggle/use-toggle.ts`

Signature: `useToggle(See source)`

### Return Value
`ReturnType<typeof useToggle>`

### Internal Logic Summary


### Usage Example
```tsx
import { useToggle } from '@paalstack/react-hooks';

function Demo() {
  const result = useToggle();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Boolean toggle state.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useUpdateEffect

### Purpose
useEffect that skips first mount.

### Parameters
`UseUpdateEffectOptions` — see `packages/hooks/src/use-update-effect/use-update-effect.ts`

Signature: `useUpdateEffect(See source)`

### Return Value
`ReturnType<typeof useUpdateEffect>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useUpdateEffect } from '@paalstack/react-hooks';

function Demo() {
  const result = useUpdateEffect();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
useEffect that skips first mount.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useValidatedState

### Purpose
State with validation rules.

### Parameters
`UseValidatedStateOptions` — see `packages/hooks/src/use-validated-state/use-validated-state.ts`

Signature: `useValidatedState(See source)`

### Return Value
`ReturnType<typeof useValidatedState>`

### Internal Logic Summary


### Usage Example
```tsx
import { useValidatedState } from '@paalstack/react-hooks';

function Demo() {
  const result = useValidatedState();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
State with validation rules.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useViewportSize

### Purpose
Window inner width/height tracking.

### Parameters
`UseViewportSizeOptions` — see `packages/hooks/src/use-viewport-size/use-viewport-size.ts`

Signature: `useViewportSize(See source)`

### Return Value
`ReturnType<typeof useViewportSize>`

### Internal Logic Summary
Uses useCallback/useMemo for stable handlers. Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useViewportSize } from '@paalstack/react-hooks';

function Demo() {
  const result = useViewportSize();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Window inner width/height tracking.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Memoized callbacks prevent unnecessary child re-renders.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useWindowEvent

### Purpose
window.addEventListener wrapper.

### Parameters
`UseWindowEventOptions` — see `packages/hooks/src/use-window-event/use-window-event.ts`

Signature: `useWindowEvent(See source)`

### Return Value
`ReturnType<typeof useWindowEvent>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useWindowEvent } from '@paalstack/react-hooks';

function Demo() {
  const result = useWindowEvent();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
window.addEventListener wrapper.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

## useWindowScroll

### Purpose
Window scroll position tracking.

### Parameters
`UseWindowScrollOptions` — see `packages/hooks/src/use-window-scroll/use-window-scroll.ts`

Signature: `useWindowScroll(See source)`

### Return Value
`ReturnType<typeof useWindowScroll>`

### Internal Logic Summary
Side effects in useEffect with cleanup. 

### Usage Example
```tsx
import { useWindowScroll } from '@paalstack/react-hooks';

function Demo() {
  const result = useWindowScroll();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
```

### When To Use
Window scroll position tracking.

### When NOT To Use
Avoid when React 19+ built-ins or simpler `useState` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
See HOOKS_CATALOG index

### Performance Notes
Lightweight; no special memoization.

### Best Practices
Import from `@paalstack/react-hooks` (install alongside `@paalstack/react-ui`). Pair `useDisclosure` with Dialog/Drawer. Use `useIsomorphicEffect` for DOM-only effects.

---

