import { useRef } from 'react';

import { useIsomorphicEffect } from '../use-isomorphic-effect';

/**
 * Returns a stable ref object whose `.current` value is always synchronized
 * with the latest value passed in, updated after every render via
 * `useIsomorphicEffect` (safe for SSR environments).
 *
 * Unlike `useLatestRef` (which writes synchronously during render),
 * `useAsRef` defers the write to the effect phase, ensuring the ref is never
 * mutated during the render itself — making it safe to pass as a stable
 * dependency to child components or memoized callbacks without triggering
 * extra renders.
 *
 * @template T The type of the value to track.
 * @param {T} value The value to synchronize into the ref after each render.
 * @returns {React.RefObject<T>} A ref whose `.current` always reflects the
 * most recent value after the current render cycle completes.
 *
 * @example
 * // Prevent stale closures in event handlers without re-subscribing
 * function useWindowEvent(event: string, handler: (e: Event) => void) {
 *   const handlerRef = useAsRef(handler);
 *
 *   useEffect(() => {
 *     const listener = (e: Event) => handlerRef.current(e);
 *     window.addEventListener(event, listener);
 *     return () => window.removeEventListener(event, listener);
 *   }, [event, handlerRef]);
 * }
 *
 * @example
 * // Always read the latest callback inside a long-running interval
 * function useInterval(callback: () => void, delay: number) {
 *   const callbackRef = useAsRef(callback);
 *
 *   useEffect(() => {
 *     const id = setInterval(() => callbackRef.current(), delay);
 *     return () => clearInterval(id);
 *   }, [delay, callbackRef]);
 * }
 */
export const useAsRef = <T>(value: T) => {
  const ref = useRef<T>(value);

  useIsomorphicEffect(() => {
    ref.current = value;
  });

  return ref;
};
