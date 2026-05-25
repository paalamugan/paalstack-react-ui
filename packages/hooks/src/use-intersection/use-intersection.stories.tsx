import { useRef } from 'react';

import { Box, Paper, Text } from '@/layouts/index';

import { useIntersection } from './use-intersection';

export default { title: 'Hooks/UI And Dom/useIntersection' };

export function Usage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} className="h-128 overflow-y-scroll">
      <Text className="p-5">Scroll down to see the intersection status</Text>
      <Box className="pt-128 pb-5">
        <Paper
          ref={ref}
          className={`p-10 ${entry?.isIntersecting ? 'bg-green-500' : 'bg-red-500'}`}
          style={{
            minWidth: '50%',
          }}
        >
          <Text color={'white'} className="font-bold">
            {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </Box>
    </Paper>
  );
}
