import * as React from 'react';

import type { IconType } from 'react-icons';

import { Grid } from '@/layouts/Grid';
import { Heading } from '@/layouts/Heading';
import { Text } from '@/layouts/Text';
import { VStack } from '@/layouts/VStack';

import { IconUsageExamples } from '../components/IconUsageExamples';
import * as RxIcons from './index';
import { RxFace, RxHome, RxRocket } from './index';

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
  title: 'Icons/Radix Icons',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    options: {
      showPanel: false,
    },
  },
};

export function Usage() {
  return (
    <IconUsageExamples
      packageName="rx"
      exampleIcons={{
        Icon1: RxHome,
        Icon2: RxRocket,
        Icon3: RxFace,
        icon1Name: 'RxHome',
        icon2Name: 'RxRocket',
        icon3Name: 'RxFace',
      }}
    />
  );
}

export function RadixIcons() {
  const icons = React.useMemo(() => toIconEntries(RxIcons), []);
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
      <Input placeholder="Search Radix icons..." onChange={onValueChange} />
      <VStack className="mb-6">
        <Heading as="h2">Radix Icons ({filteredIcons.length})</Heading>
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
