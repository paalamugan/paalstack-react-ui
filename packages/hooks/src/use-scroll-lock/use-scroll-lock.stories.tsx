import { Button } from '@/components/index';
import { Box, Heading, TypographyP, TypographyStrong } from '@/layouts/index';

import { useScrollLock } from './use-scroll-lock';

export default { title: 'Hooks/UI And Dom/useScrollLock' };

export function Usage() {
  const [scrollLocked, setScrollLocked] = useScrollLock();

  return (
    <Box>
      <Heading>useScrollLock Hook Example</Heading>
      <TypographyP className="mb-5">
        Scroll is currently <TypographyStrong>{scrollLocked ? 'locked' : 'unlocked'}</TypographyStrong>
      </TypographyP>
      <Button onClick={() => setScrollLocked(!scrollLocked)}>{scrollLocked ? 'Unlock scroll' : 'Lock scroll'}</Button>
    </Box>
  );
}
