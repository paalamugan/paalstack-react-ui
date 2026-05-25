import { useRef } from 'react';

import { Input } from '@/components/index';
import { Stack, TypographyCode, TypographyP } from '@/layouts/index';

import { useWindowEvent } from './use-window-event';

export default { title: 'Hooks/UI And Dom/useWindowEvent' };

export function Usage() {
  const inputRef = useRef<HTMLInputElement>(null);

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyK' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      inputRef.current?.focus();
    }
  });

  return (
    <Stack>
      <TypographyP>
        Press <TypographyCode>⌘ + K</TypographyCode> on mac or <TypographyCode>Ctrl + K</TypographyCode> to focus the
        input below
      </TypographyP>
      <Input ref={inputRef} />
    </Stack>
  );
}
