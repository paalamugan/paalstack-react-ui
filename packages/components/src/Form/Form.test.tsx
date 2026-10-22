import { render } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import { Form } from './Form';

type Values = { email: string };

/**
 * The native submit of a <form> is what runs when the browser submits it
 * WITHOUT React's handler attached - the window between the server-rendered
 * HTML and hydration. That path is invisible to `onSubmit`, and it is the one
 * that leaks a password into the URL, so the rendered `method` attribute is
 * the contract worth pinning.
 */
function Probe({ method }: { method?: 'get' | 'post' }) {
  const form = useForm<Values>({ defaultValues: { email: '' } });

  return <Form form={form} onSubmit={() => {}} fields={[]} hideSubmitButton hideResetButton method={method} />;
}

function formElement(method?: 'get' | 'post'): HTMLFormElement | null {
  const { container } = render(<Probe method={method} />);

  return container.querySelector('form');
}

describe('Form', () => {
  it('posts the native submit by default, so field values never land in the URL', () => {
    expect(formElement()).toHaveAttribute('method', 'post');
  });

  it('honours an explicit method', () => {
    expect(formElement('get')).toHaveAttribute('method', 'get');
  });

  it('never renders a form without a method, which a browser would treat as a GET', () => {
    expect(formElement()).not.toBeNull();
    expect(formElement()?.hasAttribute('method')).toBe(true);
    expect(formElement('get')?.hasAttribute('method')).toBe(true);
  });
});
