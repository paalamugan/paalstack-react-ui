import { Button } from '@/components/index';
import { Stack, Text, TypographyCode } from '@/layouts/index';
import { randomId } from '@/shared/utils';

import { useHash } from './use-hash';

export default { title: 'Hooks/Utilities/useHash' };

export function Usage() {
  const [hash, setHash] = useHash();
  return (
    <Stack className="items-start">
      <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
      <Text>
        Current hash: <TypographyCode>{hash}</TypographyCode>
      </Text>
    </Stack>
  );
}

export function InitialStateValue() {
  const [hash, setHash] = useHash({ getInitialValueInEffect: false });
  return (
    <Stack className="items-start">
      <Text>Hash: {hash}</Text>
      <Button onClick={() => setHash('new-hash')}>Set New hash</Button>
    </Stack>
  );
}
