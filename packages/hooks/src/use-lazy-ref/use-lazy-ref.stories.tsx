import { useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '@/components/Button';
import { Flex } from '@/layouts/Flex';
import { Heading } from '@/layouts/Heading';
import { Text } from '@/layouts/index';
import { Stack } from '@/layouts/Stack';

import { useLazyRef } from './use-lazy-ref';

export default { title: 'Hooks/State Management/useLazyRef' };

/**
 * Basic usage: the factory runs exactly once per component instance.
 * The UUID displayed never changes across re-renders, proving the factory
 * was not called again.
 */
export function Usage() {
  const [renderCount, setRenderCount] = useState(1);

  const idRef = useLazyRef(() => {
    console.log('Factory called — generating ID');
    return Math.random().toString(36).slice(2);
  });

  return (
    <Stack className="gap-4">
      <Heading as="h4">Stable ID: {idRef.current}</Heading>
      <Text>
        The ID is generated once by the factory function and never changes, even after <strong>{renderCount}</strong>{' '}
        render(s). Check the console — the "Factory called" message should appear only once.
      </Text>
      <Button type="button" onClick={() => setRenderCount((n) => n + 1)}>
        Force re-render ({renderCount})
      </Button>
    </Stack>
  );
}

/**
 * Compares `useLazyRef` with a naïve inline initialisation.
 *
 * The naïve approach (plain `useRef(fn())`) calls the factory on every render;
 * `useLazyRef` guarantees the factory is called only once.
 */
export function CompareWithPlainRef() {
  const [renderCount, setRenderCount] = useState(1);

  const naiveCallCount = useRef(0);
  const lazyCallCount = useRef(0);

  useRef(
    (() => {
      naiveCallCount.current += 1;
      return {};
    })(),
  );
  useLazyRef(() => {
    lazyCallCount.current += 1;
    return {};
  });

  return (
    <Stack className="gap-4">
      <Heading as="h4">Render #{renderCount}</Heading>
      <Text>
        <strong>Plain useRef(fn())</strong> factory calls: {naiveCallCount.current}
        <br />
        <strong>useLazyRef(fn)</strong> factory calls: {lazyCallCount.current}
      </Text>
      <Text>
        After multiple re-renders, the plain ref factory count keeps climbing while the lazy ref factory count stays at{' '}
        <strong>1</strong>.
      </Text>
      <Button type="button" onClick={() => setRenderCount((n) => n + 1)}>
        Force re-render
      </Button>
    </Stack>
  );
}

/**
 * Shows how `useLazyRef` is ideal for holding a mutable store object that
 * must be created once and mutated imperatively (e.g. a mini counter store).
 */
export function WithStore() {
  const createStore = () => {
    let value = 0;
    const listeners = new Set<() => void>();
    return {
      get: () => value,
      increment: () => {
        value += 1;
        listeners.forEach((l) => l());
      },
      decrement: () => {
        value -= 1;
        listeners.forEach((l) => l());
      },
      subscribe: (listener: () => void) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
      },
    };
  };

  const storeRef = useLazyRef(createStore);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const unsubscribe = storeRef.current.subscribe(() => forceUpdate((n) => n + 1));
    return () => {
      unsubscribe();
    };
  }, [storeRef]);

  return (
    <Stack className="gap-4">
      <Heading as="h4">Store value: {storeRef.current.get()}</Heading>
      <Text>
        The store is created once via <code>useLazyRef</code>. Mutating it does not recreate the store; only a forced
        re-render reads the new value.
      </Text>
      <Flex className="gap-4">
        <Button type="button" onClick={() => storeRef.current.increment()}>
          Increment
        </Button>
        <Button type="button" variant="outline" onClick={() => storeRef.current.decrement()}>
          Decrement
        </Button>
      </Flex>
    </Stack>
  );
}

/**
 * Demonstrates lazy instantiation of an expensive resource (simulated here
 * with a deliberately slow computation). The resource is created on first
 * render and reused on subsequent renders, keeping re-render cost minimal.
 */
export function WithExpensiveInitialisation() {
  const [renderCount, setRenderCount] = useState(1);
  const initTimeRef = useRef<number | null>(null);

  const resourceRef = useLazyRef(() => {
    const start = performance.now();
    let result = 0;
    for (let i = 0; i < 1_000_000; i++) result += i;
    const elapsed = performance.now() - start;
    initTimeRef.current = elapsed;
    return { result, elapsed };
  });

  const handleRerender = useCallback(() => setRenderCount((n) => n + 1), []);

  return (
    <Stack className="gap-4">
      <Heading as="h4">Computed result: {resourceRef.current.result.toLocaleString()}</Heading>
      <Text>
        Initialisation time: <strong>{resourceRef.current.elapsed.toFixed(2)} ms</strong> (runs once).
      </Text>
      <Text>
        Re-render #{renderCount} — the expensive computation is <em>not</em> repeated.
      </Text>
      <Button type="button" onClick={handleRerender}>
        Force re-render
      </Button>
    </Stack>
  );
}
