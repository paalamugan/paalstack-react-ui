import { Heading, Stack, TypographyCode } from '@/layouts/index';

import { useSearchParams } from './use-search-params';

export default { title: 'Hooks/Utilities/useSearchParams' };

export function Usage() {
  const searchParams = useSearchParams();

  return (
    <Stack>
      <Heading>Search Params</Heading>
      <TypographyCode as="pre">{JSON.stringify(searchParams, null, 2)}</TypographyCode>
    </Stack>
  );
}
