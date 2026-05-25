import type { UseFocusWithinOptions } from './use-focus-within';

import { fireEvent, render, screen } from '@testing-library/react';

import { useFocusWithin } from './use-focus-within';

function Wrapper(props: UseFocusWithinOptions) {
  const { ref, focused } = useFocusWithin<HTMLDivElement>(props);
  return (
    <div ref={ref}>
      <input type="text" />
      <button type="button">Button</button>
      {focused && <div>test-focused</div>}
    </div>
  );
}

describe('Hooks/use-focus-within', () => {
  it('detects focus on child elements as expected', () => {
    const onBlur = jest.fn();
    const onFocus = jest.fn();

    render(<Wrapper onFocus={onFocus} onBlur={onBlur} />);
    expect(screen.queryAllByText('test-focused')).toHaveLength(0);

    const textbox = screen.getByRole('textbox');
    fireEvent.focusIn(textbox);
    expect(screen.getByText('test-focused')).toBeInTheDocument();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(0);

    const button = screen.getByRole('button');
    fireEvent.focusIn(button);
    expect(screen.getByText('test-focused')).toBeInTheDocument();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(0);

    fireEvent.focusOut(button);
    expect(screen.queryAllByText('test-focused')).toHaveLength(0);
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
