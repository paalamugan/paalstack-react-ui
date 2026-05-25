import { useRef } from 'react';

/**
 * Returns a stable ref object whose `.current` value is lazily initialized on
 * the **first render only** by calling the provided factory function `fn`.
 * Subsequent renders return the same ref without calling `fn` again.
 *
 * This mirrors the lazy-initializer pattern of `useState(() => expensiveValue)`
 * but for refs — the factory is only invoked once and the result is stored for
 * the lifetime of the component.
 *
 * Use this when you need a stable mutable container (like a store, a class
 * instance, or an expensive derived value) that must not be recreated on
 * re-renders, and where the ref itself (not just its `.current`) must remain
 * the same object reference.
 *
 * @template T The type of the value produced by the factory function.
 * @param {() => T} fn A factory function called once to initialize the ref.
 * @returns {React.MutableRefObject<T>} A mutable ref whose `.current` holds
 * the value returned by `fn` on the first render.
 *
 * @example
 * // Lazily create a store once per component instance
 * function Counter() {
 *   const storeRef = useLazyRef(() => createCounterStore({ initialCount: 0 }));
 *   // storeRef.current is always the same store object
 * }
 *
 * @example
 * // Avoid recreating an expensive object on every render
 * function Chart({ data }: { data: number[] }) {
 *   const workerRef = useLazyRef(() => new Worker('/chart.worker.js'));
 *
 *   useEffect(() => {
 *     workerRef.current.postMessage(data);
 *   }, [data, workerRef]);
 * }
 */
export const useLazyRef = <T>(fn: () => T) => {
  const ref = useRef<T | null>(null);

  if (ref.current === null) {
    ref.current = fn();
  }

  return ref as React.MutableRefObject<T>;
};
