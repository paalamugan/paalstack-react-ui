import { Box, Center, Text, TypographyCode } from '@/layouts/index';

import { useMouse } from './use-mouse';

export default { title: 'Hooks/UI And Dom/useMouse' };

export function Usage() {
  const { ref, x, y } = useMouse();

  return (
    <>
      <Center className="mb-2">
        <Box ref={ref} className="h-32 w-52 bg-blue-100" />
      </Center>
      <Text className="text-center">
        Mouse coordinates <TypographyCode>{`{ x: ${x}, y: ${y} }`}</TypographyCode>
      </Text>
    </>
  );
}

export const UsageWithoutRef = () => {
  const { x, y } = useMouse();

  return (
    <Text className="text-center">
      Mouse coordinates <TypographyCode>{`{ x: ${x}, y: ${y} }`}</TypographyCode>
    </Text>
  );
};
