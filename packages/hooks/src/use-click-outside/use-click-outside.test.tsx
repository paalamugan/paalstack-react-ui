import { useRef, useState } from 'react';

import type React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { useClickOutside } from './use-click-outside';

interface UseClickOutsideProps {
  handler: () => void;
  events?: string[] | null;
  nodes?: HTMLElement[];
}

const Target: React.FunctionComponent<UseClickOutsideProps> = ({ handler, events, nodes }) => {
  const ref = useClickOutside<HTMLDivElement>(handler, events, nodes);
  return <div data-testid="target" ref={ref} />;
};

describe('Hooks/use-click-outside', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('calls `handler` function when clicked outside target (no `events` given)', () => {
    const handler = jest.fn();

    render(
      <>
        <Target handler={handler} />
        <div data-testid="outside-target" />
      </>,
    );

    const target = screen.getByTestId('target');
    const outsideTarget = screen.getByTestId('outside-target');

    expect(handler).toHaveBeenCalledTimes(0);

    fireEvent.mouseDown(target);
    fireEvent.mouseUp(target);
    expect(handler).toHaveBeenCalledTimes(0);

    fireEvent.mouseDown(outsideTarget);
    fireEvent.mouseUp(outsideTarget);
    expect(handler).toHaveBeenCalledTimes(2);

    fireEvent.mouseDown(outsideTarget);
    fireEvent.mouseUp(outsideTarget);
    expect(handler).toHaveBeenCalledTimes(4);

    fireEvent.mouseDown(target);
    fireEvent.mouseUp(target);
    expect(handler).toHaveBeenCalledTimes(4);
  });

  it('calls `handler` only on given `events`', () => {
    const handler = jest.fn();
    const events = ['keydown'];

    render(
      <>
        <Target handler={handler} events={events} />
        <div data-testid="outside-target" />
      </>,
    );

    const target = screen.getByTestId('target');
    const outsideTarget = screen.getByTestId('outside-target');

    fireEvent.mouseDown(target);
    fireEvent.mouseUp(target);
    fireEvent.mouseDown(outsideTarget);
    fireEvent.mouseUp(outsideTarget);
    expect(handler).toHaveBeenCalledTimes(0);

    fireEvent.keyDown(target, { key: 'Enter' });
    expect(handler).toHaveBeenCalledTimes(0);

    fireEvent.keyDown(outsideTarget, { key: 'Enter' });
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('ignores clicks outside the given `nodes`', () => {
    const handler = jest.fn();

    const Wrapper: React.FunctionComponent = () => {
      const [ignore, setIgnore] = useState<HTMLDivElement | null>(null);
      const ignoreRef = useRef<HTMLDivElement | null>(null);

      return (
        <>
          <Target handler={handler} nodes={ignore ? [ignore] : undefined} />
          <div data-testid="ignore-clicks" ref={ignoreRef} onClick={() => setIgnore(ignoreRef.current)} />
        </>
      );
    };

    render(
      <div>
        <Wrapper />
      </div>,
    );

    const ignoreClicks = screen.getByTestId('ignore-clicks');

    fireEvent.mouseDown(ignoreClicks);
    fireEvent.mouseUp(ignoreClicks);
    fireEvent.click(ignoreClicks);
    expect(handler).toHaveBeenCalledTimes(2);

    const target = screen.getByTestId('target');
    fireEvent.mouseDown(target);
    fireEvent.mouseUp(target);
    expect(handler).toHaveBeenCalledTimes(4);
  });
});
