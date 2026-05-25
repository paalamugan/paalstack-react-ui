import { Button } from '@/components/index';
import { Heading, Stack, TypographyCode } from '@/layouts/index';

import { useQueue } from './use-queue';

export default { title: 'Hooks/State Management/useQueue' };

export function Usage() {
  const { state, queue, add, update, cleanQueue } = useQueue({
    initialValues: [1],
    limit: 2,
  });
  return (
    <Stack>
      <Heading>State</Heading>
      <TypographyCode as="pre">{JSON.stringify(state, null, 2)}</TypographyCode>
      <Heading className="mt-3">Queue</Heading>
      <TypographyCode as="pre" className="mb-3">
        {JSON.stringify(queue, null, 2)}
      </TypographyCode>
      <Button onClick={() => add(1)}>Add 1</Button>
      <Button onClick={() => add(2)}>Add 2</Button>
      <Button onClick={() => add(3)}>Add 3</Button>
      <Button onClick={() => update(() => [4, 5, 6])}>Update to [4, 5, 6]</Button>
      <Button onClick={() => cleanQueue()}>Clean queue</Button>
    </Stack>
  );
}
