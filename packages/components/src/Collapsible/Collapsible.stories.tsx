/* eslint-disable react-hooks/rules-of-hooks */
import { default as React, useEffect } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { RxChevronDown as ChevronDownIcon, RxChevronUp as ChevronUpIcon } from '@/icons/rx';
import { Box } from '@/layouts/Box';

import { Button } from '../Button';
import { Collapsible, CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from './Collapsible';

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Collapsible>;

// ─── Props API Stories ────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => (
    <div className="w-[400px]">
      <Collapsible trigger={<Button variant="outline">Toggle Content</Button>}>
        <div className="mt-2 rounded-md border px-4 py-3 font-mono text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minus, fuga inventore omnis consectetur dolorem
          debitis.
        </div>
      </Collapsible>
    </div>
  ),
};

export const Controlled: Story = {
  render: ({ open, ...args }) => {
    const [isOpen, setIsOpen] = React.useState(open);
    useEffect(() => {
      setIsOpen(!!open);
    }, [open]);
    return (
      <div className="w-[400px]">
        <Collapsible
          {...args}
          open={isOpen}
          onOpenChange={setIsOpen}
          trigger={
            <Button variant="outline" className="w-full justify-between">
              {isOpen ? 'Hide' : 'Show'} Details
              {isOpen ? <ChevronUpIcon className="ml-2 size-4" /> : <ChevronDownIcon className="ml-2 size-4" />}
            </Button>
          }
        >
          <div className="mt-2 rounded-md border px-4 py-3 text-sm">
            <p>This is detailed content that can be expanded or collapsed.</p>
            <p className="mt-2 text-muted-foreground">Click the button above to toggle visibility.</p>
          </div>
        </Collapsible>
      </div>
    );
  },
  args: {
    open: false,
  },
};

export const DefaultOpen: Story = {
  render: () => (
    <div className="w-[400px]">
      <Collapsible
        defaultOpen
        trigger={
          <Button variant="ghost" size="sm">
            Toggle Section
          </Button>
        }
      >
        <div className="mt-2 space-y-2 rounded-md border px-4 py-3 text-sm">
          <p>This section is open by default.</p>
          <p className="text-muted-foreground">Use the defaultOpen prop for initial state.</p>
        </div>
      </Collapsible>
    </div>
  ),
};

// ─── Composition API Stories ──────────────────────────────────────────────────

export const CompositionBasic: Story = {
  name: 'Composition: Basic',
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <CollapsibleRoot open={isOpen} onOpenChange={setIsOpen} className="w-[400px] space-y-2">
        <Box className="rounded-md border border-slate-200 font-mono text-sm dark:border-slate-700">
          <CollapsibleTrigger className="w-full px-4 py-3 hover:bg-secondary">
            <Box className="flex items-center justify-between">
              <Box>Collapsible Trigger</Box>
              {isOpen ? <ChevronUpIcon className="size-4" /> : <ChevronDownIcon className="size-4" />}
            </Box>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo minus, fuga inventore omnis consectetur
            dolorem debitis, odit, quos delectus vel quibusdam ipsam!
          </CollapsibleContent>
        </Box>
      </CollapsibleRoot>
    );
  },
};

export const CompositionMultipleSections: Story = {
  name: 'Composition: Multiple Sections',
  render: () => {
    const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({});
    const toggle = (key: string) => setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
    const sections = [
      { key: 'general', title: 'General Settings', content: 'Configure general application settings here.' },
      { key: 'notifications', title: 'Notifications', content: 'Manage your notification preferences.' },
      { key: 'privacy', title: 'Privacy', content: 'Control your privacy and data sharing settings.' },
    ];
    return (
      <div className="w-[400px] space-y-2">
        {sections.map((section) => (
          <CollapsibleRoot
            key={section.key}
            open={!!openSections[section.key]}
            onOpenChange={() => toggle(section.key)}
          >
            <div className="rounded-md border">
              <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium hover:bg-muted">
                {section.title}
                {openSections[section.key] ? (
                  <ChevronUpIcon className="size-4" />
                ) : (
                  <ChevronDownIcon className="size-4" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="border-t px-4 py-3 text-sm text-muted-foreground">
                {section.content}
              </CollapsibleContent>
            </div>
          </CollapsibleRoot>
        ))}
      </div>
    );
  },
};

export const CompositionWithRenderProp: Story = {
  name: 'Composition: Nested Content',
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <CollapsibleRoot open={isOpen} onOpenChange={setIsOpen} className="w-[400px]">
        <CollapsibleTrigger className="w-full">
          <Button variant="outline" className="w-full justify-between">
            {isOpen ? 'Collapse' : 'Expand'} Items
            {isOpen ? <ChevronUpIcon className="size-4" /> : <ChevronDownIcon className="size-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 space-y-2">
          {['Item A', 'Item B', 'Item C'].map((item) => (
            <div key={item} className="rounded-md border px-4 py-2 text-sm">
              {item}
            </div>
          ))}
        </CollapsibleContent>
      </CollapsibleRoot>
    );
  },
};
