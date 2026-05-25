import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@/layouts/Box';
import { Stack } from '@/layouts/Stack';

import { Resizable, ResizableHandle, ResizablePanel, ResizablePanelGroup } from './Resizable';

const meta: Meta<typeof Resizable> = {
  title: 'Components/Resizable',
  component: Resizable,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation of the panel group',
    },
    withHandle: {
      control: 'boolean',
      description: 'Show the visible drag handle knob between panels',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Resizable>;

// ─────────────────────────────────────────────
// Props API
// ─────────────────────────────────────────────

export const Default: Story = {
  name: 'Props API – Horizontal',
  args: {
    orientation: 'horizontal',
    withHandle: false,
    className: 'h-48 max-w-2xl rounded-lg border',
    panels: [
      {
        defaultSize: 50,
        children: (
          <Box className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </Box>
        ),
      },
      {
        defaultSize: 50,
        children: (
          <Box className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Two</span>
          </Box>
        ),
      },
    ],
  },
};

export const PropsVertical: Story = {
  name: 'Props API – Vertical',
  args: {
    orientation: 'vertical',
    withHandle: false,
    className: 'h-64 max-w-2xl rounded-lg border',
    panels: [
      {
        defaultSize: 50,
        children: (
          <Box className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Top</span>
          </Box>
        ),
      },
      {
        defaultSize: 50,
        children: (
          <Box className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Bottom</span>
          </Box>
        ),
      },
    ],
  },
};

export const PropsWithHandle: Story = {
  name: 'Props API – With Handle',
  args: {
    orientation: 'horizontal',
    withHandle: true,
    className: 'h-48 max-w-2xl rounded-lg border',
    panels: [
      {
        defaultSize: 50,
        children: (
          <Box className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </Box>
        ),
      },
      {
        defaultSize: 50,
        children: (
          <Box className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Two</span>
          </Box>
        ),
      },
    ],
  },
};

export const PropsThreePanels: Story = {
  name: 'Props API – Three Panels',
  args: {
    orientation: 'horizontal',
    withHandle: true,
    className: 'h-48 max-w-2xl rounded-lg border',
    panels: [
      {
        defaultSize: 25,
        children: (
          <Box className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </Box>
        ),
      },
      {
        defaultSize: 50,
        children: (
          <Box className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </Box>
        ),
      },
      {
        defaultSize: 25,
        children: (
          <Box className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Panel</span>
          </Box>
        ),
      },
    ],
  },
};

export const PropsMinMaxSize: Story = {
  name: 'Props API – Min / Max Size',
  render: (args) => (
    <Stack className="gap-2">
      <p className="text-sm text-muted-foreground">Left panel: min 15%, max 40%. Try dragging the handle.</p>
      <Resizable {...args} />
    </Stack>
  ),
  args: {
    orientation: 'horizontal',
    withHandle: true,
    className: 'h-48 max-w-2xl rounded-lg border',
    panels: [
      {
        defaultSize: 30,
        minSize: 15,
        maxSize: 40,
        children: (
          <Box className="flex h-full items-center justify-center bg-muted/30 p-6">
            <span className="font-semibold">Constrained</span>
          </Box>
        ),
      },
      {
        defaultSize: 70,
        children: (
          <Box className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Flexible</span>
          </Box>
        ),
      },
    ],
  },
};

// ─────────────────────────────────────────────
// Composition API
// ─────────────────────────────────────────────

export const Horizontal: Story = {
  name: 'Composition API – Horizontal',
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="h-48 max-w-2xl rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <Box className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </Box>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <Box className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </Box>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertical: Story = {
  name: 'Composition API – Vertical',
  render: () => (
    <ResizablePanelGroup orientation="vertical" className="h-64 max-w-2xl rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <Box className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Top</span>
        </Box>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <Box className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Bottom</span>
        </Box>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const WithHandle: Story = {
  name: 'Composition API – With Handle',
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="h-48 max-w-2xl rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <Box className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </Box>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <Box className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </Box>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const ThreePanels: Story = {
  name: 'Composition API – Three Panels',
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="h-48 max-w-2xl rounded-lg border">
      <ResizablePanel defaultSize={25}>
        <Box className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </Box>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <Box className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </Box>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <Box className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel</span>
        </Box>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Nested: Story = {
  name: 'Composition API – Nested',
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="h-64 max-w-2xl rounded-lg border">
      <ResizablePanel defaultSize={30}>
        <Box className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </Box>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70}>
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize={60}>
            <Box className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Main</span>
            </Box>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={40}>
            <Box className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Terminal</span>
            </Box>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const WithMinMaxSize: Story = {
  name: 'Composition API – Min / Max Size',
  render: () => (
    <Stack className="gap-2">
      <p className="text-sm text-muted-foreground">Left panel: min 20%, max 40%. Try dragging the handle.</p>
      <ResizablePanelGroup orientation="horizontal" className="h-48 max-w-2xl rounded-lg border">
        <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
          <Box className="flex h-full items-center justify-center bg-muted/30 p-6">
            <span className="font-semibold">Constrained</span>
          </Box>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <Box className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Flexible</span>
          </Box>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Stack>
  ),
};

export const IDELayout: Story = {
  name: 'Composition API – IDE Layout',
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="h-96 max-w-3xl rounded-lg border">
      <ResizablePanel defaultSize={20} minSize={15}>
        <Box className="flex h-full flex-col">
          <Box className="border-b px-3 py-2 text-xs font-medium text-muted-foreground">EXPLORER</Box>
          <Box className="flex-1 p-2">
            {['index.ts', 'App.tsx', 'styles.css', 'README.md'].map((f) => (
              <Box
                key={f}
                className="cursor-pointer rounded px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground"
              >
                {f}
              </Box>
            ))}
          </Box>
        </Box>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={55}>
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize={70}>
            <Box className="flex h-full flex-col">
              <Box className="border-b px-3 py-2 text-xs font-medium text-muted-foreground">EDITOR</Box>
              <Box className="flex-1 p-4 font-mono text-xs text-muted-foreground">
                <p>{'// Start typing...'}</p>
              </Box>
            </Box>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30} minSize={15}>
            <Box className="flex h-full flex-col">
              <Box className="border-b px-3 py-2 text-xs font-medium text-muted-foreground">TERMINAL</Box>
              <Box className="flex-1 bg-black/5 p-2 font-mono text-xs">
                <span className="text-green-600">$</span>
                <span className="ml-1 text-muted-foreground">npm run dev</span>
              </Box>
            </Box>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} minSize={15}>
        <Box className="flex h-full flex-col">
          <Box className="border-b px-3 py-2 text-xs font-medium text-muted-foreground">OUTLINE</Box>
          <Box className="flex-1 p-2 text-xs text-muted-foreground">No symbols found.</Box>
        </Box>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
