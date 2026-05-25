import { Badge } from '@/components/index';

import { useReducedMotion } from './use-reduced-motion';

export default { title: 'Hooks/UI And Dom/useReducedMotion' };

export function Usage() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge variant={reduceMotion ? 'danger' : 'success'} style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}>
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}
