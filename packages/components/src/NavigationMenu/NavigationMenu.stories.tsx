import type { Meta, StoryObj } from '@storybook/react';

import { RxCircleBackslash as CircleBackslashIcon } from '@/icons/rx';
import { Box, Text, TypographyLI, TypographyUL } from '@/layouts/index';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './NavigationMenu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],

  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof NavigationMenu>;

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

/**
 * Developer-friendly API: Simple navigation with links only
 */
export const SimplifiedWithLinks: Story = {
  render: () => (
    <NavigationMenu
      items={[
        { type: 'link', label: 'Home', href: '/' },
        { type: 'link', label: 'About', href: '/about' },
        { type: 'link', label: 'Services', href: '/services' },
        { type: 'link', label: 'Contact', href: '/contact' },
      ]}
    />
  ),
  args: {},
};

/**
 * Developer-friendly API: Navigation with dropdown using items array
 */
export const SimplifiedWithDropdown: Story = {
  render: () => (
    <NavigationMenu
      items={[
        { type: 'link', label: 'Home', href: '/' },
        {
          type: 'dropdown',
          label: 'Products',
          items: [
            {
              href: '/products/laptops',
              title: 'Laptops',
              description: 'High-performance laptops for work and gaming',
            },
            {
              href: '/products/phones',
              title: 'Smartphones',
              description: 'Latest smartphones with advanced features',
            },
            {
              href: '/products/tablets',
              title: 'Tablets',
              description: 'Versatile tablets for work and entertainment',
            },
            {
              href: '/products/accessories',
              title: 'Accessories',
              description: 'Essential accessories for your devices',
            },
          ],
          gridClassName: 'grid gap-3 p-6 md:grid-cols-2',
          widthClassName: 'w-[500px]',
        },
        {
          type: 'dropdown',
          label: 'Resources',
          items: [
            {
              href: '/docs',
              title: 'Documentation',
              description: 'Learn how to use our products',
            },
            {
              href: '/blog',
              title: 'Blog',
              description: 'Read our latest articles and updates',
            },
            {
              href: '/support',
              title: 'Support',
              description: 'Get help from our support team',
            },
          ],
          widthClassName: 'w-[400px]',
        },
        { type: 'link', label: 'Contact', href: '/contact' },
      ]}
    />
  ),
  args: {},
};

/**
 * Developer-friendly API: E-commerce navigation
 */
export const SimplifiedEcommerce: Story = {
  render: () => (
    <NavigationMenu
      items={[
        {
          type: 'dropdown',
          label: 'Shop',
          items: [
            { href: '/shop/mens', title: "Men's", description: "Browse men's collection" },
            { href: '/shop/womens', title: "Women's", description: "Browse women's collection" },
            { href: '/shop/kids', title: 'Kids', description: "Browse kids' collection" },
            { href: '/shop/accessories', title: 'Accessories', description: 'Browse accessories' },
          ],
          gridClassName: 'grid gap-3 p-4 md:grid-cols-2',
          widthClassName: 'w-[600px]',
        },
        { type: 'link', label: 'Sale', href: '/sale' },
        { type: 'link', label: 'New Arrivals', href: '/new' },
        { type: 'link', label: 'About', href: '/about' },
      ]}
    />
  ),
  args: {},
};

/**
 * Developer-friendly API: With custom content
 */
export const SimplifiedWithCustomContent: Story = {
  render: () => (
    <NavigationMenu
      items={[
        { type: 'link', label: 'Home', href: '/' },
        {
          type: 'dropdown',
          label: 'Getting Started',
          content: (
            <TypographyUL unstyled className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <TypographyLI className="row-span-3">
                <NavigationMenuLink
                  render={
                    <Box
                      as="a"
                      className="flex size-full flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="/"
                    >
                      <CircleBackslashIcon className="size-6" />
                      <Box className="mt-4 mb-2 text-lg font-medium">Application</Box>
                      <Text className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and Tailwind CSS.
                      </Text>
                    </Box>
                  }
                />
              </TypographyLI>
              <NavigationMenuListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </NavigationMenuListItem>
              <NavigationMenuListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </NavigationMenuListItem>
              <NavigationMenuListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </NavigationMenuListItem>
            </TypographyUL>
          ),
        },
        {
          type: 'dropdown',
          label: 'Components',
          items: components.map((c) => ({
            href: c.href,
            title: c.title,
            description: c.description,
          })),
          gridClassName: 'grid gap-3 p-4 md:grid-cols-2',
          widthClassName: 'w-[600px]',
        },
        { type: 'link', label: 'Documentation', href: '/docs' },
      ]}
    />
  ),
  args: {},
};

/**
 * Composition API: Advanced usage with full control
 */
export const CompositionAPI: Story = {
  render: () => (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <TypographyUL unstyled className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <TypographyLI className="row-span-3">
                <NavigationMenuLink
                  render={
                    <Box
                      as="a"
                      className="flex size-full flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="/"
                    >
                      <CircleBackslashIcon className="size-6" />
                      <Box className="mt-4 mb-2 text-lg font-medium">Application</Box>
                      <Text className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and Tailwind CSS.
                      </Text>
                    </Box>
                  }
                />
              </TypographyLI>
              <NavigationMenuListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </NavigationMenuListItem>
              <NavigationMenuListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </NavigationMenuListItem>
              <NavigationMenuListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </NavigationMenuListItem>
            </TypographyUL>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <TypographyUL unstyled className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <NavigationMenuListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </NavigationMenuListItem>
              ))}
            </TypographyUL>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuRoot>
  ),
  args: {},
};
