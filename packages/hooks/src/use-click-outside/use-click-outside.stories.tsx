import { useState } from 'react';

import { Button } from '@/components/index';
import { Box, TypographyLI, TypographyP, TypographyUL } from '@/layouts/index';

import { useClickOutside } from './use-click-outside';

export default {
  title: 'Hooks/UI And Dom/useClickOutside',
};

export function Usage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const ref = useClickOutside<HTMLDivElement>(closeMenu);

  return (
    <Box>
      <Button variant="outline" onClick={openMenu}>
        Click here to open Menu
      </Button>
      {isMenuOpen && (
        <>
          <Box ref={ref} borderColor="pink" className="mt-6 border p-2">
            <TypographyUL>
              <TypographyLI>Menu Item 1</TypographyLI>
              <TypographyLI>Menu Item 2</TypographyLI>
              <TypographyLI>Menu Item 3</TypographyLI>
            </TypographyUL>
          </Box>
          <TypographyP>Click outside of the pink border to close Menu</TypographyP>
        </>
      )}
    </Box>
  );
}
