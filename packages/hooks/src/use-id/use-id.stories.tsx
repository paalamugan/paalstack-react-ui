import { Input } from '@/components/index';
import { Heading, Stack, VStack } from '@/layouts/index';

import { useId } from './use-id';

export default { title: 'Hooks/State Management/useId' };

export function Usage() {
  function InputElement({ id }: { id?: string }) {
    const uuid = useId(id);

    return <Input id={uuid} label="Input label" type="text" />;
  }

  // input and label will have id 'my-id'
  const withId = <InputElement id="my-id" />;

  // input and label will have random id 'random-fZMoF'
  const withoutId = <InputElement />;
  return (
    <Stack className="gap-4">
      <VStack>
        <Heading as="h4">Input and label will have id 'my-id'</Heading>
        {withId}
      </VStack>
      <VStack>
        <Heading as="h4">Input and label will have random id 'random-fZMoF'</Heading>
        {withoutId}
      </VStack>
    </Stack>
  );
}
