import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib';

const TabsRoot = ({ className, orientation = 'horizontal', ...props }: TabsPrimitive.Root.Props) => (
  <TabsPrimitive.Root
    data-slot="tabs"
    data-orientation={orientation}
    className={cn('group/tabs flex gap-2 data-[orientation=horizontal]:flex-col', className)}
    {...props}
  />
);
TabsRoot.displayName = 'TabsRoot';

const tabsListVariants = cva(
  'group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-8 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none',
  {
    variants: {
      variant: {
        default: 'bg-muted',
        line: 'gap-1 bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const TabsList = ({
  className,
  variant = 'default',
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) => (
  <TabsPrimitive.List
    data-slot="tabs-list"
    data-qa="tabs-list"
    data-variant={variant}
    className={cn(tabsListVariants({ variant }), className)}
    {...props}
  />
);
TabsList.displayName = 'TabsList';

const TabsTrigger = ({ className, ...props }: TabsPrimitive.Tab.Props) => (
  <TabsPrimitive.Tab
    data-slot="tabs-trigger"
    data-qa="tabs-trigger"
    className={cn(
      "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      'group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent',
      'data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground',
      'after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100',
      className,
    )}
    {...props}
  />
);
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = ({ className, ...props }: TabsPrimitive.Panel.Props) => (
  <TabsPrimitive.Panel
    data-slot="tabs-content"
    data-qa="tabs-content"
    className={cn('flex-1 text-sm outline-none', className)}
    {...props}
  />
);
TabsContent.displayName = 'TabsContent';

export interface TabsProps extends React.ComponentProps<typeof TabsRoot> {
  /**
   * Tab variant — "default" (boxed) or "line" (underline)
   * @default "default"
   */
  variant?: 'default' | 'line';
  /**
   * Optional class name applied to every tab trigger
   */
  triggerClassName?: string;
  /**
   * Optional class name applied to every tab content panel
   */
  contentClassName?: string;
  /**
   * The tabs to render
   */
  tabs: {
    label: React.ReactNode;
    value: string;
    content: React.ReactNode;
    triggerClassName?: string;
    contentClassName?: string;
  }[];
  /**
   * Props forwarded to the TabsList
   */
  tabsListProps?: React.ComponentPropsWithRef<typeof TabsList>;
  /**
   * Props forwarded to each TabsTrigger
   */
  tabsTriggerProps?: React.ComponentPropsWithRef<typeof TabsTrigger>;
  /**
   * Props forwarded to each TabsContent
   */
  tabsContentProps?: React.ComponentPropsWithRef<typeof TabsContent>;
  /**
   * Optional class name for the tab list container
   */
  tabListClassName?: string;
}

/**
 * Tabs Component (Props API)
 *
 * A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * Supports two variants: "default" (boxed background) and "line" (underline indicator).
 *
 * @example
 * // Basic usage with default variant (boxed)
 * import { Tabs } from '@paalstack/react-ui';
 *
 * <Tabs
 *   defaultValue="account"
 *   tabs={[
 *     { label: 'Account', value: 'account', content: <AccountForm /> },
 *     { label: 'Password', value: 'password', content: <PasswordForm /> },
 *   ]}
 * />
 *
 * @example
 * // Line variant (underline indicator)
 * <Tabs
 *   defaultValue="overview"
 *   variant="line"
 *   tabs={[
 *     { label: 'Overview', value: 'overview', content: <Overview /> },
 *     { label: 'Analytics', value: 'analytics', content: <Analytics /> },
 *     { label: 'Reports', value: 'reports', content: <Reports /> },
 *   ]}
 * />
 *
 * @example
 * // Controlled tabs
 * const [activeTab, setActiveTab] = useState('general');
 *
 * <Tabs
 *   value={activeTab}
 *   onValueChange={(val) => setActiveTab(val as string)}
 *   tabs={[
 *     { label: 'General', value: 'general', content: <GeneralSettings /> },
 *     { label: 'Advanced', value: 'advanced', content: <AdvancedSettings /> },
 *   ]}
 * />
 *
 * @example
 * // With icons in labels
 * <Tabs
 *   defaultValue="profile"
 *   tabs={[
 *     { label: <><UserIcon /> Profile</>, value: 'profile', content: <ProfileForm /> },
 *     { label: <><BellIcon /> Notifications</>, value: 'notifications', content: <NotificationPrefs /> },
 *   ]}
 * />
 *
 * @example
 * // Vertical orientation
 * <Tabs
 *   defaultValue="general"
 *   orientation="vertical"
 *   variant="line"
 *   tabs={[
 *     { label: 'General', value: 'general', content: <GeneralSettings /> },
 *     { label: 'Security', value: 'security', content: <SecuritySettings /> },
 *   ]}
 * />
 *
 * @example
 * // Custom styling for all triggers and content
 * <Tabs
 *   defaultValue="tab1"
 *   triggerClassName="px-6 py-3"
 *   contentClassName="p-6"
 *   tabListClassName="grid w-full grid-cols-3"
 *   tabs={[
 *     { label: 'Tab 1', value: 'tab1', content: <div>Content 1</div> },
 *     { label: 'Tab 2', value: 'tab2', content: <div>Content 2</div> },
 *     { label: 'Tab 3', value: 'tab3', content: <div>Content 3</div> },
 *   ]}
 * />
 *
 * @example
 * // Composition API (for full control)
 * import { TabsRoot, TabsList, TabsTrigger, TabsContent } from '@paalstack/react-ui';
 *
 * <TabsRoot defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </TabsRoot>
 *
 * @example
 * // Composition API with line variant and vertical orientation
 * <TabsRoot defaultValue="general" orientation="vertical">
 *   <TabsList variant="line">
 *     <TabsTrigger value="general">General</TabsTrigger>
 *     <TabsTrigger value="security">Security</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="general">General settings.</TabsContent>
 *   <TabsContent value="security">Security settings.</TabsContent>
 * </TabsRoot>
 */
const Tabs = ({
  tabs,
  tabListClassName,
  triggerClassName: allTriggerClassName,
  contentClassName: allContentClassName,
  variant = 'default',
  tabsListProps,
  tabsTriggerProps,
  tabsContentProps,
  ...props
}: TabsProps) => {
  return (
    <TabsRoot data-qa="tabs" {...props}>
      <TabsList variant={variant} {...tabsListProps} className={cn(tabListClassName, tabsListProps?.className)}>
        {tabs.map(({ label, value, triggerClassName }) => (
          <TabsTrigger
            data-qa="tabs-trigger"
            value={value}
            key={value}
            {...tabsTriggerProps}
            className={cn(allTriggerClassName, tabsTriggerProps?.className, triggerClassName)}
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(({ value, content, contentClassName }) => (
        <TabsContent
          data-qa="tabs-content"
          key={value}
          value={value}
          {...tabsContentProps}
          className={cn(allContentClassName, tabsContentProps?.className, contentClassName)}
        >
          {content}
        </TabsContent>
      ))}
    </TabsRoot>
  );
};

export { Tabs, TabsContent, TabsList, TabsRoot, TabsTrigger, tabsListVariants };
