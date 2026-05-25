import { Badge } from '@/components/index';

import { useIdle } from './use-idle';

export default { title: 'Hooks/Utilities/useIdle' };

export function Usage() {
  const idle = useIdle(2000);
  return (
    <Badge variant={idle ? 'primary' : 'success'} className="rounded-full uppercase">
      Current state: {idle ? 'idle' : 'not idle'}
    </Badge>
  );
}

export function WithCustomEvent() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return (
    <Badge variant={idle ? 'primary' : 'success'} className="rounded-full uppercase">
      Current state: {idle ? 'idle' : 'not idle'}
    </Badge>
  );
}

export function WithInitialState() {
  const idle = useIdle(2000, { initialState: false });
  return (
    <Badge variant={idle ? 'primary' : 'success'} className="rounded-full uppercase">
      Current state: {idle ? 'idle' : 'not idle'}
    </Badge>
  );
}
