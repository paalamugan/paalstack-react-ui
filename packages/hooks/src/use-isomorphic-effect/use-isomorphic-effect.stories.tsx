import { Text } from '@/layouts/index';

import { useIsomorphicEffect } from './use-isomorphic-effect';

export default { title: 'Hooks/Life Cycle/useIsomorphicEffect' };

export function Usage() {
  useIsomorphicEffect(() => {
    document.title = 'title';
  }, []);

  return <Text>Check the title of the page</Text>;
}
