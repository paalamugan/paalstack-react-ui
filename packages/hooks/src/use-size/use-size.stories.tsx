import { useRef } from 'react';

import { Box, TypographyH2, TypographyP } from '@/layouts/index';

import { useSize } from './use-size';

export default { title: 'Hooks/UI And Dom/useSize' };

export function Usage() {
  const ref = useRef<HTMLDivElement>(null);
  const size = useSize(ref);
  return (
    <Box>
      <TypographyH2>Measured Size: {JSON.stringify(size, null, 4)}</TypographyH2>
      <TypographyP className="border border-dashed bg-pink-200 p-2" ref={ref}>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form
        of a document or a typeface without relying on meaningful content
      </TypographyP>
    </Box>
  );
}
