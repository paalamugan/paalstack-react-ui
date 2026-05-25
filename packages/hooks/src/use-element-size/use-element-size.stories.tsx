import { Textarea } from '@/components/index';
import { Center, Text } from '@/layouts/index';

import { useElementSize } from './use-element-size';

export default { title: 'Hooks/UI And Dom/useElementSize' };

export function Usage() {
  const { ref, width, height } = useElementSize<HTMLTextAreaElement>();

  return (
    <Center className="gap-2">
      <Text className="mb-3">Resize textarea by dragging its right bottom corner</Text>
      <Textarea ref={ref} className="h-36 w-80 resize" />
      <Text className="mt-3 text-center">{JSON.stringify({ width, height }, null, 2)}</Text>
    </Center>
  );
}
