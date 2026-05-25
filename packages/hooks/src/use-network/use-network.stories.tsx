import { Heading, Stack, TypographyCode } from '@/layouts/index';

import { useNetwork } from './use-network';

export default { title: 'Hooks/Utilities/useNetwork' };

export function Usage() {
  const network = useNetwork();
  return (
    <Stack>
      <Heading as="h3">Network Status:</Heading>
      <TypographyCode className="whitespace-pre-wrap">{JSON.stringify(network, null, 2)}</TypographyCode>
    </Stack>
  );
}
