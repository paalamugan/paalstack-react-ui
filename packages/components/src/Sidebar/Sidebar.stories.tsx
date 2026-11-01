import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import {
  LuBookOpen as BookOpenIcon,
  LuCalendar as CalendarIcon,
  LuChartBar as ChartBarIcon,
  LuChevronRight as ChevronRightIcon,
  LuHouse as HouseIcon,
  LuInbox as InboxIcon,
  LuPlus as PlusIcon,
  LuSearch as SearchIcon,
  LuSettings as SettingsIcon,
  LuSquareTerminal as TerminalIcon,
  LuUser as UserIcon,
} from '@/icons/lu';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from './Sidebar';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    // The sidebar needs the viewport height; `centered` clips it against a padded canvas.
    layout: 'fullscreen',
  },
  argTypes: {
    side: {
      description: 'Which edge the sidebar is docked to.',
      control: { type: 'inline-radio' },
      options: ['left', 'right'],
    },
    variant: {
      description: 'Visual treatment of the panel.',
      control: { type: 'inline-radio' },
      options: ['sidebar', 'floating', 'inset'],
    },
    collapsible: {
      description:
        'What the panel does when it closes: leave the layout, shrink to a 3rem icon rail, or never collapse.',
      control: { type: 'inline-radio' },
      options: ['offcanvas', 'icon', 'none'],
    },
  },
  decorators: [
    (Story) => (
      <SidebarProvider className="h-svh">
        <Story />
      </SidebarProvider>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

type SidebarArgs = ComponentProps<typeof Sidebar>;

const NavMenu = () => (
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton isActive tooltip="Overview">
        <HouseIcon />
        <span>Overview</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
    <SidebarMenuItem>
      <SidebarMenuButton tooltip="Components">
        <BookOpenIcon />
        <span>Components</span>
      </SidebarMenuButton>
      <SidebarMenuBadge>77</SidebarMenuBadge>
      <SidebarMenuAction showOnHover>
        <PlusIcon />
        <span className="sr-only">Add component</span>
      </SidebarMenuAction>
      <SidebarMenuSub>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton href="#">Form</SidebarMenuSubButton>
        </SidebarMenuSubItem>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton href="#">Navigation</SidebarMenuSubButton>
        </SidebarMenuSubItem>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton href="#" isActive>
            Data display
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      </SidebarMenuSub>
    </SidebarMenuItem>
    <SidebarMenuItem>
      <SidebarMenuButton tooltip="Tokens">
        <ChartBarIcon />
        <span>Tokens</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
);

const Shell = ({ side, variant, collapsible }: SidebarArgs) => (
  <>
    <Sidebar side={side} variant={variant} collapsible={collapsible}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="Paalstack React UI">
              <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <TerminalIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Paalstack React UI</span>
                <span className="truncate text-xs text-muted-foreground">77 components</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarInput placeholder="Find a component..." aria-label="Find a component" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Library</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavMenu />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupAction title="New entry">
            <PlusIcon />
            <span className="sr-only">New entry</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Calendar">
                  <CalendarIcon />
                  <span>Calendar</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Inbox">
                  <InboxIcon />
                  <span>Inbox</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>4</SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Settings">
              <SettingsIcon />
              <span>Settings</span>
            </SidebarMenuButton>
            <SidebarMenuAction aria-label="Account shortcuts">
              <ChevronRightIcon />
            </SidebarMenuAction>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="Account">
              <div className="flex size-8 items-center justify-center rounded-full bg-sidebar-accent">
                <UserIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">paalamugan</span>
                <span className="truncate text-xs text-muted-foreground">paalstack</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <header className="flex h-14 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        <span className="text-sm font-medium">Overview</span>
      </header>
      <div className="p-6">
        <div className="rounded-lg border border-border p-6">
          <p className="text-sm text-muted-foreground">
            Click the trigger, or press{' '}
            <kbd className="rounded border border-border bg-muted px-1 font-mono text-xs">b</kbd> with the sidebar
            focused, to collapse it.
          </p>
        </div>
      </div>
    </SidebarInset>
  </>
);

export const Default: Story = {
  args: {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'offcanvas',
  },
  render: (args) => <Shell {...args} />,
};

export const IconCollapsible: Story = {
  args: {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'icon',
  },
  render: (args) => <Shell {...args} />,
};

export const Floating: Story = {
  args: {
    side: 'left',
    variant: 'floating',
    collapsible: 'offcanvas',
  },
  render: (args) => <Shell {...args} />,
};

export const Inset: Story = {
  args: {
    side: 'left',
    variant: 'inset',
    collapsible: 'offcanvas',
  },
  render: (args) => <Shell {...args} />,
};

export const RightSidebar: Story = {
  args: {
    side: 'right',
    variant: 'sidebar',
    collapsible: 'offcanvas',
  },
  render: (args) => (
    <>
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <span className="text-sm font-medium">Canvas</span>
          <div className="ml-auto">
            <SidebarTrigger />
          </div>
        </header>
      </SidebarInset>
      <Sidebar {...args}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" tooltip="Inspector">
                <SearchIcon />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Inspector</span>
                  <span className="truncate text-xs text-muted-foreground">Props and tokens</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Selection</SidebarGroupLabel>
            <SidebarGroupContent>
              <NavMenu />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </>
  ),
};
