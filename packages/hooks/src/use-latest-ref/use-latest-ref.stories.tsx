import { Button } from '@/components/Button';
import { Flex } from '@/layouts/Flex';
import { Heading } from '@/layouts/Heading';
import { Stack } from '@/layouts/Stack';

import { useLatestRef } from './use-latest-ref';

export default { title: 'Hooks/State Management/useLatestRef' };

export function Usage() {
  const ref = useLatestRef(0);

  return (
    <Stack className="gap-4">
      <Heading as="h4">Check the console</Heading>
      <Flex className="gap-4">
        <Button type="button" onClick={() => (ref.current += 1)}>
          Increment ref
        </Button>
        <Button type="button" variant="outline" onClick={() => console.log(ref.current)}>
          Log ref
        </Button>
      </Flex>
    </Stack>
  );
}
