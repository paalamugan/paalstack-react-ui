import { Button } from '@/components/index';
import { HStack, Text } from '@/layouts/index';
import { randomId } from '@/shared/utils';

import { useForceUpdate } from './use-force-update';

export default { title: 'Hooks/Life Cycle/useForceUpdate' };

export function Usage() {
  const forceUpdate = useForceUpdate();

  return (
    <HStack className="justify-center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </HStack>
  );
}
