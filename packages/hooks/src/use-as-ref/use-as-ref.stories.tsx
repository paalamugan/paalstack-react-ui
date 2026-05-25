import { useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '@/components/Button';
import { Flex } from '@/layouts/Flex';
import { Heading } from '@/layouts/Heading';
import { Text } from '@/layouts/index';
import { Stack } from '@/layouts/Stack';

import { useAsRef } from './use-as-ref';

export default { title: 'Hooks/State Management/useAsRef' };

/**
 * Demonstrates the core behaviour: `useAsRef` keeps the ref in sync with
 * the latest value after every render without causing re-renders itself.
 * Click "Increment count" then "Log ref.current" to confirm the ref always
 * reflects the current count — even inside the closure captured at mount.
 */
export function Usage() {
  const [count, setCount] = useState(0);
  const countRef = useAsRef(count);

  const logRef = useCallback(() => {
    console.log('ref.current =', countRef.current);
  }, [countRef]);

  return (
    <Stack className="gap-4">
      <Heading as="h4">Count: {count}</Heading>
      <Text>
        The ref always holds the latest count. Click "Log ref.current" to see the value in the console — no
        stale-closure issue.
      </Text>
      <Flex className="gap-4">
        <Button type="button" onClick={() => setCount((c) => c + 1)}>
          Increment count
        </Button>
        <Button type="button" variant="outline" onClick={logRef}>
          Log ref.current
        </Button>
      </Flex>
    </Stack>
  );
}

/**
 * Shows the canonical use-case: a stable interval callback that always reads
 * the latest state without needing the interval to be torn down and restarted
 * every time the callback changes.
 */
export function WithInterval() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  const tick = () => setCount((c) => c + 1);
  const tickRef = useAsRef(tick);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => tickRef.current(), 500);
    return () => clearInterval(id);
  }, [running, tickRef]);

  return (
    <Stack className="gap-4">
      <Heading as="h4">Count: {count}</Heading>
      <Text>
        The interval callback is set up once but always calls the latest version of <code>tick</code> via the ref — the
        interval is never torn down when <code>count</code> changes.
      </Text>
      <Flex className="gap-4">
        <Button type="button" onClick={() => setRunning((r) => !r)}>
          {running ? 'Stop' : 'Start'} interval
        </Button>
        <Button type="button" variant="outline" onClick={() => setCount(0)}>
          Reset
        </Button>
      </Flex>
    </Stack>
  );
}

/**
 * Compares `useAsRef` against a plain `useRef`.
 *
 * The plain ref is captured once and becomes stale; the `useAsRef` ref always
 * reflects the current callback. Click "Fire both callbacks" after a few
 * increments to observe the difference in the console output.
 */
export function CompareWithPlainRef() {
  const [count, setCount] = useState(0);

  const handler = () => count;

  const staleRef = useRef(handler);
  const freshRef = useAsRef(handler);

  return (
    <Stack className="gap-4">
      <Heading as="h4">Count: {count}</Heading>
      <Text>
        <strong>staleRef</strong> (plain <code>useRef</code>) captures the initial closure and always returns{' '}
        <code>0</code>. <strong>freshRef</strong> (<code>useAsRef</code>) always returns the current count. Check the
        console after incrementing.
      </Text>
      <Flex className="gap-4">
        <Button type="button" onClick={() => setCount((c) => c + 1)}>
          Increment
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            console.log('staleRef (plain useRef):', staleRef.current());
            console.log('freshRef (useAsRef):', freshRef.current());
          }}
        >
          Fire both callbacks
        </Button>
      </Flex>
    </Stack>
  );
}

/**
 * Illustrates how `useAsRef` can stabilise an event-listener subscription so
 * that the listener is only registered once but always dispatches to the
 * latest handler — without re-subscribing on every render.
 */
export function WithEventListener() {
  const [lastKey, setLastKey] = useState<string>('(none)');
  const [listenCount, setListenCount] = useState(0);

  const handleKeyDown = (e: KeyboardEvent) => setLastKey(e.key);
  const handlerRef = useAsRef(handleKeyDown);

  useEffect(() => {
    setListenCount((n) => n + 1);
    const listener = (e: KeyboardEvent) => handlerRef.current(e);
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [handlerRef]);

  return (
    <Stack className="gap-4">
      <Heading as="h4">Last key pressed: {lastKey}</Heading>
      <Text>
        The event listener was registered <strong>{listenCount}</strong> time(s). Even though <code>handleKeyDown</code>{' '}
        is recreated on every render, the listener is never re-subscribed because <code>handlerRef</code> is a stable
        object.
      </Text>
      <Text>Click anywhere in this story and press any key.</Text>
    </Stack>
  );
}
