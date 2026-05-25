import { useState } from 'react';

import { Button, Input } from '@/components/index';
import { Box, Stack, Text, TypographyStrong } from '@/layouts/index';

import { useDebouncedValue } from './use-debounced-value';

export default {
  title: 'Hooks/State Management/useDebouncedValue',
};

export function Usage() {
  const [value, setValue] = useState('');
  const [searchTerm] = useDebouncedValue(value, 200);

  return (
    <Stack>
      <Input label="Enter value to see debounce" value={value} onChange={(e) => setValue(e.target.value)} />
      <Text>
        Value: <TypographyStrong>{value}</TypographyStrong>
      </Text>
      <Text>
        Debounced Value: <TypographyStrong>{searchTerm}</TypographyStrong>
      </Text>
    </Stack>
  );
}

export function LeadingUpdate() {
  const [value, setValue] = useState('');
  const [searchTerm] = useDebouncedValue(value, 200, { leading: true });

  return (
    <Stack>
      <Input label="Enter value to see debounce" value={value} onChange={(e) => setValue(e.target.value)} />
      <Text>
        Value: <TypographyStrong>{value}</TypographyStrong>
      </Text>
      <Text>
        Debounced Value: <TypographyStrong>{searchTerm}</TypographyStrong>
      </Text>
    </Stack>
  );
}

export function WithCancel() {
  const [value, setValue] = useState('Initial value');
  const [searchTerm, cancel] = useDebouncedValue(value, 500);

  return (
    <Box>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Text className="mt-2">
        <TypographyStrong>Debounced Value:</TypographyStrong> {searchTerm}
      </Text>
      <Button variant="outline" onClick={cancel}>
        Cancel
      </Button>
    </Box>
  );
}
