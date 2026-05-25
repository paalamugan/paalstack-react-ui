import { Button } from '@/components/index';
import { Flex, Stack, Text, TypographySmall } from '@/layouts/index';

import { useCounter } from './use-counter';

export default {
  title: 'Hooks/State Management/useCounter',
};

export function Usage() {
  const initialValue = 0;
  const min = -10;
  const max = 10;
  const [count, { increment, decrement, set, reset }] = useCounter(initialValue, { min, max });

  return (
    <Stack>
      <Text>Count: {count}</Text>
      <Flex className="mt-2 gap-2">
        <Button variant="outline" onClick={increment}>
          Increment
        </Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={() => reset()}>Reset</Button>
        <Button onClick={() => set(5)}>Set to 5</Button>
      </Flex>
      <TypographySmall>
        <Text>Min: {min}</Text>
        <Text>Max: {max}</Text>
      </TypographySmall>
    </Stack>
  );
}
