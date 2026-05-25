import { Box, Portal, Stack, Text, TypographyStrong } from '@/layouts/index';

import { useHeadroom } from './use-headroom';

export default { title: 'Hooks/Utilities/useHeadroom' };

export function Usage() {
  const pinned = useHeadroom({ fixedAt: 20 });

  return (
    <>
      <Portal>
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '1rem',
            height: '60rem',
            zIndex: 1000000,
            transform: `translate3d(0, ${pinned ? 0 : '-110rem'}, 0)`,
            transition: 'transform 400ms ease',
          }}
        >
          Pinned header
        </Box>
      </Portal>
      <Stack className="h-400">
        <Text className="mt-40 text-center">
          <Text className="mb-5 text-center">
            When you Scroll down you will see the below pinned value will change and top pinned header will get
            disappear
          </Text>
          Header is <TypographyStrong>{pinned ? 'pinned' : 'not pinned'}</TypographyStrong>
        </Text>
      </Stack>
    </>
  );
}
