import { Button, Input } from '@/components/index';
import { Box, Text } from '@/layouts/index';

import { useFocusWithin } from './use-focus-within';

export default { title: 'Hooks/UI And Dom/useFocusWithin' };

export function Usage() {
  const { ref, focused } = useFocusWithin<HTMLDivElement>();
  return (
    <Box ref={ref}>
      <Box className={`p-10 ${focused ? 'bg-blue-50' : 'bg-transparent'}`}>
        <Text fontSize="sm">One of elements has focus: {focused.toString()}</Text>
        <Input
          label="Focus this input"
          placeholder="parent element of the background color will change when focus is"
          className="mt-4"
        />
        <Button className="mt-2">Button</Button>
      </Box>
    </Box>
  );
}
