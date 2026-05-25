import { useRef } from 'react';

import { Button } from '@/components/index';
import { Stack, TypographySmall } from '@/layouts/index';

import { useFocusOnPointerDown } from './use-focus-on-pointer-down';

export default {
  title: 'Hooks/UI And Dom/useFocusOnPointerDown',
};

export function Usage() {
  const ref = useRef<HTMLButtonElement>(null);
  useFocusOnPointerDown({ enabled: true, ref });

  return (
    <Stack className="items-start">
      <Button ref={ref}>Click me</Button>
      <TypographySmall>
        When you click the button, the button will get focused. This hook will only work on Safari browser.
      </TypographySmall>
    </Stack>
  );
}
