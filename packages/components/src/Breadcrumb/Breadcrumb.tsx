import * as React from 'react';

import type { BoxPropsWithRef } from '@/layouts/Box';

import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

import { RxChevronRight as ChevronRightIcon, RxDotsHorizontal as DotsHorizontalIcon } from '@/icons/rx';
import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

const BreadcrumbRoot: React.FC<BoxPropsWithRef<'nav'>> = ({ className, ...props }) => (
  <Box
    as="nav"
    aria-label="breadcrumb"
    role="navigation"
    data-slot="breadcrumb"
    data-qa="breadcrumb"
    className={cn('flex', className)}
    {...props}
  />
);
BreadcrumbRoot.displayName = 'BreadcrumbRoot';

const BreadcrumbList: React.FC<BoxPropsWithRef<'ol'>> = ({ className, ...props }) => (
  <Box
    as="ol"
    role="list"
    data-slot="breadcrumb-list"
    data-qa="breadcrumb-list"
    className={cn('flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground sm:gap-2.5', className)}
    {...props}
  />
);
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem: React.FC<BoxPropsWithRef<'li'>> = ({ className, ...props }) => (
  <Box
    as="li"
    role="listitem"
    data-slot="breadcrumb-item"
    data-qa="breadcrumb-item"
    className={cn('inline-flex items-center gap-1.5', className)}
    {...props}
  />
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = ({ className, render, ...props }: useRender.ComponentProps<'a'>) =>
  useRender({
    defaultTagName: 'a',
    props: mergeProps<'a'>(
      {
        'data-slot': 'breadcrumb-link',
        className: cn('transition-colors hover:text-foreground', className),
      } as React.ComponentPropsWithoutRef<'a'>,
      props,
    ),
    render,
    state: {
      slot: 'breadcrumb-link',
    },
  });
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage: React.FC<BoxPropsWithRef<'span'>> = ({ className, ...props }) => (
  <Box
    as="span"
    data-slot="breadcrumb-page"
    data-qa="breadcrumb-page"
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn('font-normal text-foreground', className)}
    {...props}
  />
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator: React.FC<BoxPropsWithRef<'li'>> = ({ children, className, ...props }) => (
  <Box
    as="li"
    data-slot="breadcrumb-separator"
    data-qa="breadcrumb-separator"
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:size-3.5', className)}
    {...props}
  >
    {children ?? <ChevronRightIcon />}
  </Box>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis: React.FC<BoxPropsWithRef<'span'>> = ({ className, ...props }) => (
  <Box
    as="span"
    data-slot="breadcrumb-ellipsis"
    data-qa="breadcrumb-ellipsis"
    role="presentation"
    aria-hidden="true"
    className={cn('flex size-9 items-center justify-center', className)}
    {...props}
  >
    <DotsHorizontalIcon className="size-4" />
    <Box as="span" className="sr-only">
      More
    </Box>
  </Box>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

/**
 * Represents a single breadcrumb item in the props API.
 */
export interface BreadcrumbItemType {
  /** Unique key for the item. */
  key?: string;
  /** The label to display. */
  label: React.ReactNode;
  /** The href for the link. Omit for the current (last) page. */
  href?: string;
  /** Custom render element for the link (e.g. a router `<Link />`). */
  render?: React.ReactElement;
  /** Whether this item is the current page. Defaults to `true` for the last item. */
  isCurrent?: boolean;
}

export type BreadcrumbProps = React.ComponentProps<typeof BreadcrumbRoot> & {
  /**
   * The breadcrumb items to render.
   * The last item is automatically treated as the current page.
   */
  items: BreadcrumbItemType[];
  /**
   * A custom separator node. Defaults to `<ChevronRightIcon />`.
   */
  separator?: React.ReactNode;
  /**
   * When set, collapses middle items beyond this count and shows an ellipsis.
   */
  maxItems?: number;
};

/**
 * Breadcrumb Component
 *
 * Displays the path to the current resource using a hierarchy of links.
 * Supports both a props API for quick setup and a composition API for full control.
 *
 * @example
 * // Props API — basic
 * import { Breadcrumb } from '@paalstack/react-ui';
 *
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Components', href: '/components' },
 *     { label: 'Breadcrumb' },
 *   ]}
 * />
 *
 * @example
 * // Props API — custom separator
 * import { RxSlash } from '@paalstack/react-icons/rx';
 *
 * <Breadcrumb
 *   separator={<RxSlash />}
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Settings', href: '/settings' },
 *     { label: 'Profile' },
 *   ]}
 * />
 *
 * @example
 * // Props API — collapse middle items
 * <Breadcrumb
 *   maxItems={3}
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Dashboard', href: '/dashboard' },
 *     { label: 'Settings', href: '/settings' },
 *     { label: 'Profile', href: '/settings/profile' },
 *     { label: 'Edit' },
 *   ]}
 * />
 *
 * @example
 * // Props API — with render prop for router links
 * import { Link } from 'react-router-dom';
 *
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', render: <Link to="/" /> },
 *     { label: 'Components', render: <Link to="/components" /> },
 *     { label: 'Breadcrumb' },
 *   ]}
 * />
 *
 * @example
 * // Composition API — full control
 * import {
 *   BreadcrumbRoot,
 *   BreadcrumbList,
 *   BreadcrumbItem,
 *   BreadcrumbLink,
 *   BreadcrumbPage,
 *   BreadcrumbSeparator,
 *   BreadcrumbEllipsis,
 * } from '@paalstack/react-ui';
 *
 * <BreadcrumbRoot>
 *   <BreadcrumbList>
 *     <BreadcrumbItem>
 *       <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *     </BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem>
 *       <BreadcrumbEllipsis />
 *     </BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem>
 *       <BreadcrumbLink href="/components">Components</BreadcrumbLink>
 *     </BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem>
 *       <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
 *     </BreadcrumbItem>
 *   </BreadcrumbList>
 * </BreadcrumbRoot>
 */
const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator, maxItems, ...props }) => {
  const total = items.length;

  let visibleItems: BreadcrumbItemType[];
  let showEllipsis = false;

  if (maxItems && total > maxItems) {
    showEllipsis = true;
    visibleItems = [items[0], ...items.slice(total - (maxItems - 1))];
  } else {
    visibleItems = items;
  }

  return (
    <BreadcrumbRoot {...props}>
      <BreadcrumbList>
        {visibleItems.map((item, index) => {
          const isFirst = index === 0;
          const globalIndex = showEllipsis && index > 0 ? total - (visibleItems.length - index) : index;
          const isLast = globalIndex === total - 1;
          const isCurrent = item.isCurrent ?? isLast;
          const key = item.key ?? (typeof item.label === 'string' ? item.label : String(index));

          return (
            <React.Fragment key={key}>
              {showEllipsis && !isFirst && index === 1 && (
                <>
                  <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                </>
              )}
              {(!showEllipsis || isFirst || index > 1) && !isFirst && (
                <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
              )}
              <BreadcrumbItem>
                {isCurrent ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href} render={item.render}>
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbRoot>
  );
};
Breadcrumb.displayName = 'Breadcrumb';

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
};
