import { useState } from 'react';

import { Button, Dialog } from '@/components/index';

import { useFocusReturn } from './use-focus-return';

export default {
  title: 'Hooks/UI And Dom/useFocusReturn',
};

export function Usage() {
  const [opened, setOpened] = useState(false);

  useFocusReturn({ opened, shouldReturnFocus: true });

  return (
    <Dialog
      trigger={
        <Button
          variant="outline"
          className="focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
        >
          Open Dialog
        </Button>
      }
      open={opened}
      onOpenChange={(open) => setOpened(open)}
      modal
      header={{
        title: 'Dialog',
        description: 'When you close the dialog and focus should return to the button.',
      }}
    />
  );
}
