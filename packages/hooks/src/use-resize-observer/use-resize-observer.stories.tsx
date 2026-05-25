import { Textarea } from '@/components/index';
import { Center, Text, TypographyCode } from '@/layouts/index';

import { useResizeObserver } from './use-resize-observer';

export default { title: 'Hooks/UI And Dom/useResizeObserver' };

export function Usage() {
  const [ref, rect] = useResizeObserver<HTMLTextAreaElement>();

  return (
    <Center className="flex-col gap-2">
      <Text className="mb-3">Resize the textarea to see the rect changes</Text>
      <Textarea ref={ref} className="h-36 w-80 resize bg-blue-100" />
      <Text className="mt-3 text-center">
        Rect: <TypographyCode>{JSON.stringify(rect, null, 2)}</TypographyCode>
      </Text>
    </Center>
  );
}
