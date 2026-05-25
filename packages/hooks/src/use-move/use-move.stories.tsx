import { useState } from 'react';

import { Box, Center, Text, TypographyCode } from '@/layouts/index';

import { useMove } from './use-move';

export default { title: 'Hooks/UI And Dom/useMove' };

export function Usage() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <Center>
        <Box ref={ref} className="relative h-52 w-60 bg-blue-100">
          <Box
            className={`absolute h-5 w-5 ${active ? 'bg-teal-700' : 'bg-blue-700'}`}
            style={{
              left: `calc(${value.x * 100}% - 0.5rem)`,
              top: `calc(${value.y * 100}% - 0.5rem)`,
            }}
          />
        </Box>
      </Center>
      <Text className="mt-5 text-center">
        Values <TypographyCode>{`{ x: ${Math.round(value.x * 100)}, y: ${Math.round(value.y * 100)} }`}</TypographyCode>
      </Text>
    </>
  );
}

export function HorizontalSlider() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ x }) => setValue(x));

  return (
    <>
      <Center>
        <Box ref={ref} className="relative h-5 w-80 bg-blue-100">
          {/* Filled bar */}
          <Box
            bg="blue"
            className="h-5"
            style={{
              width: `${value * 100}%`,
            }}
          />
          {/* Thumb */}
          <Box
            className="absolute top-0 h-5 w-5 cursor-pointer bg-blue-800"
            style={{
              left: `calc(${value * 100}% - 0.5rem)`,
            }}
          />
        </Box>
      </Center>
      <Text className="mt-5 text-center">Values: {Math.round(value * 100)}</Text>
    </>
  );
}
