import { Badge } from '@/components/index';

import { useMediaQuery } from './use-media-query';

export default { title: 'Hooks/UI And Dom/useMediaQuery' };

export function Usage() {
  const matches = useMediaQuery('(min-width: 56.25em)');

  return <Badge variant={matches ? 'success' : 'danger'}>Breakpoint {matches ? 'matches' : 'does not match'}</Badge>;
}

export function ServerSideRendering() {
  // Set initial value in second argument and getInitialValueInEffect option to false
  const matches = useMediaQuery('(max-width: 40em)', true, { getInitialValueInEffect: false });
  return <Badge color={matches ? 'teal' : 'red'}>Breakpoint {matches ? 'matches' : 'does not match'}</Badge>;
}
