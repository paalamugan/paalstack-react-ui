import { fireEvent, render, screen } from '@testing-library/react';

import { useEventListener } from './use-event-listener';

function Test({ spy }: { spy(): void }) {
  const ref = useEventListener<'click', HTMLButtonElement>('click', () => spy());
  return (
    <button ref={ref} type="button">
      Test button
    </button>
  );
}

describe('Hooks/use-event-listener', () => {
  it('calls given function when event is fired', () => {
    const spy = jest.fn();
    render(<Test spy={spy} />);
    fireEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
