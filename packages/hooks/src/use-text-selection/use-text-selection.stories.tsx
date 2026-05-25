import { Box, Heading, Stack, TypographyP, TypographyStrong } from '@/layouts/index';

import { useTextSelection } from './use-text-selection';

export default { title: 'Hooks/Utilities/useTextSelection' };

export function Usage() {
  const selection = useTextSelection();
  return (
    <Stack className="p-20">
      <Heading as="h3">Select a text from above content:</Heading>
      <Box>
        <TypographyP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id architecto, nostrum laboriosam quisquam
          dolores beatae! Ipsum a eos cum voluptates, explicabo reprehenderit nihil iste! Nam voluptate non vel dicta.
        </TypographyP>
        <TypographyP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id architecto, nostrum laboriosam quisquam
          dolores beatae! Ipsum a eos cum voluptates, explicabo reprehenderit nihil iste! Nam voluptate non vel dicta.
        </TypographyP>
      </Box>
      <TypographyP className="mt-4">
        <TypographyStrong>Selected Text:</TypographyStrong> {selection?.toString()}
      </TypographyP>
    </Stack>
  );
}
