'use client';

import { Box, Heading, Tabs, Text } from '@paalstack/react-ui';

import { ComponentsDemo } from './ComponentsDemo';
import { DataDemo } from './DataDemo';
import { FormDemo } from './FormDemo';
import { Header } from './Header';
import { OverlaysDemo } from './OverlaysDemo';

export function DemoShell() {
  return (
    <Box className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <Heading className="text-3xl font-bold tracking-tight">Component Showcase</Heading>
          <Text className="mt-2 text-muted-foreground">
            Production-ready components built with <code className="text-foreground">@paalstack/react-ui</code>
          </Text>
        </div>
        <Tabs
          defaultValue="components"
          variant="line"
          tabs={[
            {
              label: 'Components',
              value: 'components',
              content: <ComponentsDemo />,
            },
            {
              label: 'Forms',
              value: 'forms',
              content: <FormDemo />,
            },
            {
              label: 'Overlays',
              value: 'overlays',
              content: <OverlaysDemo />,
            },
            {
              label: 'Data Table',
              value: 'data',
              content: <DataDemo />,
            },
          ]}
        />
      </main>
    </Box>
  );
}
