import { useState } from 'react';

import { Button } from '@/components/index';
import { Box, Flex, Stack, TypographyStrong } from '@/layouts/index';

import { useEyeDropper } from './use-eye-dropper';

export default { title: 'Hooks/Utilities/useEyeDropper' };

export function Usage() {
  const [color, setColor] = useState('');
  const { open, supported } = useEyeDropper();

  return (
    <Stack className="items-start p-10">
      <Flex className="gap-2">
        <TypographyStrong>Supported:</TypographyStrong> {supported.toString()} <br />
      </Flex>
      <Flex className="gap-2">
        <TypographyStrong>Color:</TypographyStrong> {color || 'No color picked yet'}
      </Flex>
      <Flex className="items-center gap-2">
        <TypographyStrong>Background:</TypographyStrong>{' '}
        <Box className="h-4 w-4 rounded-sm" style={{ backgroundColor: color }}></Box>
      </Flex>
      <Button type="button" onClick={async () => setColor((await open()).sRGBHex)}>
        Pick color
      </Button>
    </Stack>
  );
}
