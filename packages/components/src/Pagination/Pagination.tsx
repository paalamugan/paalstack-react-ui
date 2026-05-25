import { useEffect, useState } from 'react';

import type { UsePaginationParams } from '@/hooks/use-pagination';
import type * as React from 'react';

import { usePagination } from '@/hooks/use-pagination';
import {
  RxChevronLeft as ChevronLeftIcon,
  RxChevronRight as ChevronRightIcon,
  RxDotsHorizontal as DotsHorizontalIcon,
} from '@/icons/rx';
import { Box } from '@/layouts/Box';
import { Text } from '@/layouts/Text';
import { TypographyStrong } from '@/layouts/Typography';
import { cn } from '@/shared/lib';

import { Button } from '../Button';
import { PaginationSizeOption } from './components/PaginationSizeOption';
import { DEFAULT_PAGE_SIZE_OPTIONS } from './constants';

// ---------------------------------------------------------------------------
// Composable primitives
// ---------------------------------------------------------------------------

/**
 * `PaginationRoot` is the low-level `<nav>` wrapper for the composable
 * link-based pagination primitives. Pair it with `PaginationContent`,
 * `PaginationItem`, `PaginationLink`, `PaginationPrevious`,
 * `PaginationNext`, and `PaginationEllipsis` to build fully custom
 * href-driven pagination UIs.
 *
 * For a ready-made controlled component, use `Pagination` instead.
 *
 * @example
 * <PaginationRoot>
 *   <PaginationContent>
 *     <PaginationItem>
 *       <PaginationPrevious href="/page/1" />
 *     </PaginationItem>
 *     <PaginationItem>
 *       <PaginationLink href="/page/1">1</PaginationLink>
 *     </PaginationItem>
 *     <PaginationItem>
 *       <PaginationLink href="/page/2" isActive>2</PaginationLink>
 *     </PaginationItem>
 *     <PaginationItem>
 *       <PaginationEllipsis />
 *     </PaginationItem>
 *     <PaginationItem>
 *       <PaginationLink href="/page/10">10</PaginationLink>
 *     </PaginationItem>
 *     <PaginationItem>
 *       <PaginationNext href="/page/3" />
 *     </PaginationItem>
 *   </PaginationContent>
 * </PaginationRoot>
 */
const PaginationRoot = ({ className, ...props }: React.ComponentProps<'nav'>) => {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      data-qa="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
};

const PaginationContent = ({ className, ...props }: React.ComponentProps<'ul'>) => {
  return (
    <ul
      data-slot="pagination-content"
      data-qa="pagination-content"
      className={cn('flex items-center gap-0.5', className)}
      {...props}
    />
  );
};

const PaginationItem = ({ ...props }: React.ComponentProps<'li'>) => {
  return <li data-slot="pagination-item" data-qa="pagination-item" {...props} />;
};

type PaginationLinkProps = {
  /**
   * Marks this link as the currently active/selected page.
   * Applies `aria-current="page"` and switches to an outline style.
   */
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink = ({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) => {
  return (
    <Button variant={isActive ? 'outline' : 'ghost'} size={size} className={cn('cursor-pointer', className)} asChild>
      <a
        aria-current={isActive ? 'page' : undefined}
        data-slot="pagination-link"
        data-qa="pagination-link"
        data-active={isActive}
        {...props}
      />
    </Button>
  );
};

const PaginationPrevious = ({
  className,
  text = 'Previous',
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: React.ReactNode }) => {
  return (
    <PaginationLink aria-label="Go to previous page" size="default" className={cn('pl-1.5!', className)} {...props}>
      <ChevronLeftIcon data-icon="inline-start" className="cn-rtl-flip" aria-hidden="true" />
      <span className="hidden sm:block">{text}</span>
    </PaginationLink>
  );
};

const PaginationNext = ({
  className,
  text = 'Next',
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: React.ReactNode }) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn('pr-1.5!', className)} {...props}>
    <span className="hidden sm:block">{text}</span>
    <ChevronRightIcon data-icon="inline-end" className="cn-rtl-flip" aria-hidden="true" />
  </PaginationLink>
);

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    data-slot="pagination-ellipsis"
    data-qa="pagination-ellipsis"
    className={cn("flex size-8 items-center justify-center [&_svg:not([class*='size-'])]:size-4", className)}
    {...props}
  >
    <DotsHorizontalIcon />
    <span className="sr-only">More pages</span>
  </span>
);

// ---------------------------------------------------------------------------
// High-level controlled component
// ---------------------------------------------------------------------------

export interface PaginationProps extends React.ComponentProps<'div'>, Omit<UsePaginationParams, 'onChange' | 'page'> {
  /**
   * The total number of items.
   */
  total: number;
  /**
   * The current page number (controlled).
   */
  currentPage?: number;
  /**
   * Number of items displayed per page.
   * @default 10
   */
  pageSize?: number;
  /**
   * Callback fired when the active page changes.
   */
  onPageChange?: (page: number) => void;
  /**
   * Callback fired when the page size changes.
   */
  onPageSizeChange?: (pageSize: number) => void;
  /**
   * Generates an `href` for each page link. When provided, every page
   * button is rendered as an `<a>` tag with the returned href **and** still
   * fires `onPageChange`. When omitted, buttons remain clickable but
   * contain no href.
   *
   * @example
   * getPageHref={(page) => `/products?page=${page}`}
   */
  getPageHref?: (page: number) => string;
  /**
   * Options for the page-size selector.
   * @default [10, 20, 30, 40, 50]
   */
  pageSizeOptions?: number[];
  /**
   * Label rendered next to the page-size selector.
   * @default "rows per page"
   */
  pageSizeText?: React.ReactNode;
  /**
   * When `true`, renders a page-size selector.
   * @default false
   */
  showPageSizeOptions?: boolean;
  /**
   * When `true`, displays a "Showing X to Y of Z rows" summary.
   * @default false
   */
  showTotalResults?: boolean;
  /**
   * When `true`, renders only the Previous / Next navigation buttons
   * and hides individual page-number links.
   * @default false
   */
  showOnlyNextAndPrevious?: boolean;
  /**
   * When `true`, hides the component entirely if `total <= pageSize`.
   * @default true
   */
  showOnlyIfTotalGreaterThanPageSize?: boolean;
  /**
   * Number of selected rows to display instead of total results.
   */
  selectedRowsCount?: number;
  /**
   * When `true`, shows the selected-rows count instead of total results.
   * @default false
   */
  showSelectedRowsCount?: boolean;
}

/**
 * Pagination Component
 *
 * A controlled pagination component that renders link-based (`<a>` tag) page
 * buttons. Accepts the same props as `Pagination` and adds an optional
 * `getPageHref` callback to generate URLs for each page.
 *
 * Use the low-level composable primitives (`PaginationRoot`,
 * `PaginationContent`, `PaginationItem`, `PaginationLink`,
 * `PaginationPrevious`, `PaginationNext`, `PaginationEllipsis`)
 * when you need full control over the markup.
 *
 * @example
 * // Basic usage
 * import { Pagination } from '@paalstack/react-ui';
 *
 * const [currentPage, setCurrentPage] = useState(1);
 *
 * <Pagination
 *   total={100}
 *   currentPage={currentPage}
 *   onPageChange={setCurrentPage}
 *   pageSize={10}
 * />
 *
 * @example
 * // URL-based navigation with getPageHref
 * <Pagination
 *   total={250}
 *   currentPage={page}
 *   pageSize={pageSize}
 *   onPageChange={setPage}
 *   onPageSizeChange={setPageSize}
 *   showPageSizeOptions
 *   pageSizeOptions={[10, 20, 50, 100]}
 *   getPageHref={(p) => `/products?page=${p}`}
 * />
 *
 * @example
 * // With total results and page size selector
 * <Pagination
 *   total={500}
 *   currentPage={page}
 *   pageSize={25}
 *   onPageChange={setPage}
 *   onPageSizeChange={setPageSize}
 *   showTotalResults
 *   showPageSizeOptions
 * />
 *
 * @example
 * // Simple previous / next only
 * <Pagination
 *   total={100}
 *   currentPage={page}
 *   pageSize={10}
 *   onPageChange={setPage}
 *   showOnlyNextAndPrevious
 * />
 */
export const Pagination = ({
  total,
  siblings,
  boundaries,
  currentPage,
  initialPage,
  onPageChange,
  showTotalResults = false,
  showOnlyNextAndPrevious = false,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  pageSizeText,
  showPageSizeOptions = false,
  className,
  pageSize: selectedPageSize = DEFAULT_PAGE_SIZE_OPTIONS[0],
  onPageSizeChange,
  showOnlyIfTotalGreaterThanPageSize = true,
  showSelectedRowsCount = false,
  selectedRowsCount = 0,
  getPageHref,
  ...props
}: PaginationProps) => {
  const [pageSize, setPageSize] = useState(selectedPageSize);

  useEffect(() => {
    setPageSize(selectedPageSize);
  }, [selectedPageSize]);

  const totalPages = Math.ceil(total / pageSize);

  const pagination = usePagination({
    siblings,
    boundaries,
    page: currentPage,
    initialPage,
    total: totalPages,
    onChange: onPageChange,
  });

  const currentPageCount = Math.ceil(total % pageSize);
  const fromCount = (pagination.active - 1) * pageSize + 1;
  const isFirstPage = pagination.active === 1;
  const isLastPage = pagination.active === totalPages;
  const toCount =
    isLastPage && currentPageCount !== 0 ? fromCount + currentPageCount - 1 : pagination.active * pageSize;

  if (!total || (showOnlyIfTotalGreaterThanPageSize && total <= pageSize)) return null;

  const hrefFor = (page: number) => (getPageHref ? getPageHref(page) : undefined);

  return (
    <Box
      className={cn(
        'flex items-center justify-between gap-2 px-4 py-3 md:px-6',
        {
          'justify-center': !showTotalResults && !showSelectedRowsCount && !showPageSizeOptions,
        },
        className,
      )}
      data-qa="pagination-wrapper"
      {...props}
    >
      {!showSelectedRowsCount && showTotalResults && (
        <Box className="hidden md:inline-flex" data-qa="pagination-total-results">
          <Text className="text-sm">
            Showing <TypographyStrong>{fromCount}</TypographyStrong> to <TypographyStrong>{toCount}</TypographyStrong>{' '}
            of <TypographyStrong>{total}</TypographyStrong> rows
          </Text>
        </Box>
      )}

      {!showTotalResults && showSelectedRowsCount && (
        <Box className="hidden md:inline-flex" data-qa="pagination-selected-rows">
          <Text className="text-sm font-medium">
            {selectedRowsCount} of {total} row(s) selected.
          </Text>
        </Box>
      )}

      {showOnlyNextAndPrevious ? (
        <PaginationRoot className="mx-0 w-auto" data-qa="pagination-nav">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={hrefFor(pagination.active - 1)}
                onClick={(e) => {
                  if (!getPageHref) e.preventDefault();
                  pagination.previous();
                }}
                aria-disabled={isFirstPage}
                tabIndex={isFirstPage ? -1 : undefined}
                className={cn({ 'pointer-events-none opacity-50': isFirstPage })}
                data-qa="pagination-prev"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href={hrefFor(pagination.active + 1)}
                onClick={(e) => {
                  if (!getPageHref) e.preventDefault();
                  pagination.next();
                }}
                aria-disabled={isLastPage}
                tabIndex={isLastPage ? -1 : undefined}
                className={cn({ 'pointer-events-none opacity-50': isLastPage })}
                data-qa="pagination-next"
              />
            </PaginationItem>
          </PaginationContent>
        </PaginationRoot>
      ) : (
        <PaginationRoot className="mx-0 w-auto" aria-label="Pagination" data-qa="pagination-nav">
          <PaginationContent>
            {/* Previous */}
            <PaginationItem>
              <PaginationPrevious
                href={hrefFor(pagination.active - 1)}
                onClick={(e) => {
                  if (!getPageHref) e.preventDefault();
                  pagination.previous();
                }}
                aria-disabled={isFirstPage}
                tabIndex={isFirstPage ? -1 : undefined}
                className={cn({ 'pointer-events-none opacity-50': isFirstPage })}
                data-qa="pagination-prev"
              />
            </PaginationItem>

            {/* Page number links */}
            {pagination.range.map((number, index) => {
              if (number === 'dots') {
                return (
                  <PaginationItem key={`dots-${index}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }

              return (
                <PaginationItem key={number}>
                  <PaginationLink
                    href={hrefFor(number)}
                    isActive={pagination.active === number}
                    onClick={(e) => {
                      if (!getPageHref) e.preventDefault();
                      if (pagination.active !== number) pagination.setPage(number);
                    }}
                    className="hidden md:inline-flex"
                    data-qa={`pagination-page-${number}`}
                  >
                    {number}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {/* Next */}
            <PaginationItem>
              <PaginationNext
                href={hrefFor(pagination.active + 1)}
                onClick={(e) => {
                  if (!getPageHref) e.preventDefault();
                  pagination.next();
                }}
                aria-disabled={isLastPage}
                tabIndex={isLastPage ? -1 : undefined}
                className={cn({ 'pointer-events-none opacity-50': isLastPage })}
                data-qa="pagination-next"
              />
            </PaginationItem>
          </PaginationContent>
        </PaginationRoot>
      )}

      {showPageSizeOptions && (
        <PaginationSizeOption
          pageSize={pageSize}
          setPageSize={(value) => {
            setPageSize(value);
            onPageSizeChange?.(value);
          }}
          isDisabled={!total}
          options={pageSizeOptions}
          text={pageSizeText}
        />
      )}
    </Box>
  );
};

Pagination.displayName = 'Pagination';

export {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
};

export type { PaginationLinkProps };
