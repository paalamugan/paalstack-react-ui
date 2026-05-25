import * as React from 'react';

import type { IconType } from 'react-icons';

import { Grid } from '@/layouts/Grid';
import { Heading } from '@/layouts/Heading';
import { Text } from '@/layouts/Text';
import { VStack } from '@/layouts/VStack';

import * as GrIcons from './index';

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input className="w-full rounded-md border border-gray-300 p-2" {...props} />;
};

function toIconEntries(mod: Record<string, unknown>) {
  return Object.entries(mod)
    .filter(([, value]) => typeof value === 'function')
    .map(([key, value]) => [key, value as IconType] as [string, IconType])
    .sort(([a], [b]) => a.localeCompare(b));
}

function getIconDisplayName(iconName: string): string {
  const nameWithoutPrefix = iconName.replace(/^[A-Z][a-z]+/, '');
  return nameWithoutPrefix
    .replace(/([A-Z])/g, ' $1')
    .replace(/([0-9]+)/g, ' $1')
    .trim();
}

export default {
  title: 'Icons/Grommet Icons',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    options: {
      showPanel: false,
    },
  },
};

export function GrommetIcons() {
  const icons = React.useMemo(() => toIconEntries(GrIcons), []);
  const [filteredIcons, setFilteredIcons] = React.useState(icons);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) {
      setFilteredIcons(icons);
      return;
    }
    const filtered = icons.filter(([key]) => {
      return (
        key.toLowerCase().includes(value.toLowerCase()) ||
        getIconDisplayName(key).toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredIcons(filtered);
  };

  return (
    <VStack className="gap-6">
      <Input placeholder="Search Grommet icons..." onChange={onValueChange} />
      <VStack className="mb-6">
        <Heading as="h2">Grommet Icons ({filteredIcons.length})</Heading>
        <Grid className="grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] gap-8">
          {filteredIcons.map(([key, IconComponent]) => (
            <VStack key={key} className="items-center gap-3 p-4 text-center break-all shadow-sm">
              <IconComponent className="size-6" />
              <Text className="text-xs font-medium">{getIconDisplayName(key)}</Text>
              <Text className="text-xs text-muted-foreground">{key}</Text>
            </VStack>
          ))}
        </Grid>
      </VStack>
    </VStack>
  );
}
