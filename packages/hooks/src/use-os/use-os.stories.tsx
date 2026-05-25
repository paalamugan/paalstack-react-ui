import { TypographyStrong } from '@/layouts/index';

import { useOs } from './use-os';

export default { title: 'Hooks/Utilities/useOs' };

export function Usage() {
  const os = useOs();
  return (
    <>
      Your os is <TypographyStrong>{os}</TypographyStrong>
    </>
  );
}
