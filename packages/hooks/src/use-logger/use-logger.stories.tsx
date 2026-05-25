import { useMemo, useState } from 'react';

import { Button } from '@/components/index';
import { Stack, Text } from '@/layouts/index';

import { useLogger } from './use-logger';

export default { title: 'Hooks/Life Cycle/useLogger' };

export function Usage() {
  const [count, setCount] = useState(0);
  useLogger(
    'Usage',
    useMemo(() => [{ count, hello: 'world' }], [count]),
  );
  return (
    <Stack className="items-start">
      <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>
      <Text>Check the console</Text>
    </Stack>
  );
}
