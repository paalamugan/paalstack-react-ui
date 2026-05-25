import { useState } from 'react';

import { Input } from '@/components/index';
import { Stack, Text } from '@/layouts/index';
import { toast } from '@/providers/index';

import { getHotkeyHandler, useHotkeys } from './use-hotkeys';

export default { title: 'Hooks/UI And Dom/useHotkeys' };

export function Usage() {
  // ctrl + J and ⌘ + J to toggle color scheme
  // ctrl + K and ⌘ + K to search
  useHotkeys([
    ['mod+J', () => toast('Toggle color scheme')],
    ['ctrl+K', () => toast('Trigger search')],
    ['alt+mod+shift+X', () => toast('Rick roll')],
  ]);

  return (
    <Stack>
      <Text>Press ctrl + J or ⌘ + J to toggle color scheme</Text>
      <Text>Press ctrl + K or ⌘ + K to search</Text>
      <Text>Press alt + mod + shift + X to rick roll</Text>
    </Stack>
  );
}

export function WithTargetElement() {
  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const handleSubmit = () => toast('Your message', { description: value });
  const handleSave = () => toast.success('You saved', { description: value });

  return (
    <Input
      placeholder="Your message"
      label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', handleSubmit],
        ['mod+S', handleSave],
      ])}
    />
  );
}
