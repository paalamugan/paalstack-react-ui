import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@/layouts/Box';
import { Stack } from '@/layouts/Stack';

import { Skeleton, SkeletonContainer } from '.';

const meta: Meta<typeof SkeletonContainer> = {
  title: 'Components/Skeleton',
  component: SkeletonContainer,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SkeletonContainer>;

export const SkeletonContainerBasic: Story = {
  args: {},
};

export const SkeletonContainerCircle: Story = {
  args: {
    circle: true,
  },
};

export const SkeletonContainerCount: Story = {
  args: {
    count: 3,
  },
};

export const SkeletonContainerFullWidthWithCount: Story = {
  args: {
    ...SkeletonContainerCount.args,
    isFullWidth: true,
  },
};

export const SkeletonContainerMultipleCircles: Story = {
  args: {
    circle: true,
    count: 5,
    className: 'h-12 w-12',
  },
};

export const SkeletonContainerCustomHeight: Story = {
  args: {
    count: 4,
    className: 'h-6',
  },
};

export const SkeletonContainerCustomSpacing: Story = {
  args: {
    count: 5,
    wrapperClassName: 'space-y-4',
  },
};

export const CustomSkeleton: Story = {
  render: () => (
    <Box className="flex items-center space-x-4">
      <Skeleton className="size-12 rounded-full" />
      <Box className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </Box>
    </Box>
  ),
  args: {},
};

export const SkeletonLoading: Story = {
  render: () => <Skeleton className="h-20 w-6/12" />,
  args: {},
};

export const UserProfileSkeleton: Story = {
  render: () => (
    <Box className="flex items-start space-x-4 rounded-lg border p-4">
      <SkeletonContainer circle className="h-16 w-16" />
      <Box className="flex-1">
        <SkeletonContainer count={2} className="h-5" />
      </Box>
    </Box>
  ),
  args: {},
};

export const ListItemsSkeleton: Story = {
  render: () => (
    <Stack className="gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <Box key={i} className="flex items-center space-x-3 rounded-lg border p-4">
          <SkeletonContainer circle className="h-10 w-10" />
          <Box className="flex-1">
            <SkeletonContainer count={2} className="h-4" />
          </Box>
        </Box>
      ))}
    </Stack>
  ),
  args: {},
};

export const BlogPostSkeleton: Story = {
  render: () => (
    <Box className="space-y-4 rounded-lg border p-4">
      <SkeletonContainer className="h-48 w-full rounded-lg" />
      <SkeletonContainer className="h-8 w-3/4" />
      <Box className="flex items-center space-x-4">
        <SkeletonContainer circle className="h-8 w-8" />
        <SkeletonContainer count={2} className="h-3 w-24" />
      </Box>
      <SkeletonContainer count={4} wrapperClassName="space-y-2" />
    </Box>
  ),
  args: {},
};

export const ProductCardSkeleton: Story = {
  render: () => (
    <Box className="grid grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <Box key={i} className="space-y-3 rounded-lg border p-4">
          <SkeletonContainer className="h-48 w-full rounded-lg" />
          <SkeletonContainer count={2} className="h-4" />
          <SkeletonContainer className="h-6 w-20" />
        </Box>
      ))}
    </Box>
  ),
  args: {},
};

export const CommentsSkeleton: Story = {
  render: () => (
    <Stack className="gap-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <Box key={i} className="flex space-x-3">
          <SkeletonContainer circle className="h-10 w-10" />
          <Box className="flex-1 space-y-2">
            <SkeletonContainer className="h-4 w-32" />
            <SkeletonContainer count={3} className="h-3" />
          </Box>
        </Box>
      ))}
    </Stack>
  ),
  args: {},
};

export const TableRowsSkeleton: Story = {
  render: () => (
    <Box className="w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">
              <SkeletonContainer className="h-4 w-24" />
            </th>
            <th className="p-2 text-left">
              <SkeletonContainer className="h-4 w-32" />
            </th>
            <th className="p-2 text-left">
              <SkeletonContainer className="h-4 w-20" />
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i} className="border-b">
              <td className="p-2">
                <SkeletonContainer className="h-4 w-24" />
              </td>
              <td className="p-2">
                <SkeletonContainer className="h-4 w-32" />
              </td>
              <td className="p-2">
                <SkeletonContainer className="h-4 w-20" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  ),
  args: {},
};

export const FormSkeleton: Story = {
  render: () => (
    <Box className="space-y-4 rounded-lg border p-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Box key={i} className="space-y-2">
          <SkeletonContainer className="h-4 w-32" />
          <SkeletonContainer className="h-10 w-full" />
        </Box>
      ))}
      <SkeletonContainer className="h-10 w-24" />
    </Box>
  ),
  args: {},
};

export const DashboardStatsSkeleton: Story = {
  render: () => (
    <Box className="grid grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Box key={i} className="space-y-2 rounded-lg border p-4">
          <SkeletonContainer className="h-8 w-20" />
          <SkeletonContainer className="h-4 w-32" />
        </Box>
      ))}
    </Box>
  ),
  args: {},
};

export const MediaGallerySkeleton: Story = {
  render: () => (
    <Box className="grid grid-cols-4 gap-2">
      {Array.from({ length: 12 }).map((_, i) => (
        <SkeletonContainer key={i} className="aspect-square w-full rounded" />
      ))}
    </Box>
  ),
  args: {},
};

export const ChatMessagesSkeleton: Story = {
  render: () => (
    <Stack className="gap-4 p-4">
      {/* Received messages (left-aligned) */}
      {[140, 220, 90].map((w, i) => (
        <Box key={`recv-${i}`} className="flex items-end gap-2">
          <SkeletonContainer circle className="h-8 w-8 shrink-0" />
          <Box className="space-y-1">
            <Skeleton className={`h-9 w-[${w}px] rounded-2xl rounded-bl-none`} />
          </Box>
        </Box>
      ))}
      {/* Sent messages (right-aligned) */}
      {[180, 120].map((w, i) => (
        <Box key={`sent-${i}`} className="flex items-end justify-end gap-2">
          <Skeleton className={`h-9 w-[${w}px] rounded-2xl rounded-br-none`} />
        </Box>
      ))}
      {/* Input bar */}
      <Box className="flex items-center gap-2 border-t pt-3">
        <Skeleton className="h-9 flex-1 rounded-full" />
        <Skeleton className="h-9 w-9 rounded-full" />
      </Box>
    </Stack>
  ),
  args: {},
};

export const EmailInboxSkeleton: Story = {
  render: () => (
    <Box className="w-full divide-y rounded-lg border">
      {Array.from({ length: 6 }).map((_, i) => (
        <Box key={i} className="flex items-start gap-3 px-4 py-3">
          <SkeletonContainer circle className="mt-0.5 h-9 w-9 shrink-0" />
          <Box className="min-w-0 flex-1 space-y-1.5">
            <Box className="flex items-center justify-between gap-2">
              <Skeleton className="h-3.5 w-28" />
              <Skeleton className="h-3 w-14 shrink-0" />
            </Box>
            <Skeleton className="h-3.5 w-48" />
            <Skeleton className="h-3 w-full max-w-xs" />
          </Box>
        </Box>
      ))}
    </Box>
  ),
  args: {},
};

export const SidebarNavSkeleton: Story = {
  render: () => (
    <Box className="flex h-[400px] w-56 flex-col gap-1 rounded-lg border p-3">
      {/* Logo */}
      <Box className="mb-3 flex items-center gap-2 px-1">
        <Skeleton className="h-7 w-7 rounded-md" />
        <Skeleton className="h-4 w-24" />
      </Box>
      {/* Nav items */}
      {Array.from({ length: 5 }).map((_, i) => (
        <Box key={i} className="flex items-center gap-2 rounded-md px-2 py-1.5">
          <Skeleton className="h-4 w-4 shrink-0 rounded" />
          <Skeleton className="h-3.5 w-24" />
        </Box>
      ))}
      <Box className="my-2 border-t" />
      {Array.from({ length: 3 }).map((_, i) => (
        <Box key={i} className="flex items-center gap-2 rounded-md px-2 py-1.5">
          <Skeleton className="h-4 w-4 shrink-0 rounded" />
          <Skeleton className="h-3.5 w-20" />
        </Box>
      ))}
      {/* User at bottom */}
      <Box className="mt-auto flex items-center gap-2 border-t pt-3">
        <SkeletonContainer circle className="h-8 w-8 shrink-0" />
        <Box className="flex-1 space-y-1">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-2.5 w-28" />
        </Box>
      </Box>
    </Box>
  ),
  args: {},
};

export const VideoPlayerSkeleton: Story = {
  render: () => (
    <Box className="w-full max-w-lg space-y-3 rounded-lg border p-4">
      {/* Video frame */}
      <Skeleton className="aspect-video w-full rounded-lg" />
      {/* Progress bar */}
      <Box className="space-y-1">
        <Skeleton className="h-1.5 w-full rounded-full" />
        <Box className="flex justify-between">
          <Skeleton className="h-3 w-10" />
          <Skeleton className="h-3 w-10" />
        </Box>
      </Box>
      {/* Controls */}
      <Box className="flex items-center gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-8 rounded-full" />
        ))}
        <Skeleton className="ml-auto h-4 w-24 rounded-full" />
      </Box>
      {/* Title & metadata */}
      <Box className="space-y-1.5 border-t pt-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3.5 w-40" />
        <Box className="flex items-center gap-2 pt-1">
          <SkeletonContainer circle className="h-8 w-8" />
          <Skeleton className="h-3.5 w-28" />
        </Box>
      </Box>
    </Box>
  ),
  args: {},
};

export const KanbanBoardSkeleton: Story = {
  render: () => (
    <Box className="flex gap-4 overflow-x-auto pb-2">
      {[3, 4, 2].map((cardCount, colIdx) => (
        <Box key={colIdx} className="w-56 shrink-0 space-y-3 rounded-lg border bg-muted/20 p-3">
          {/* Column header */}
          <Box className="flex items-center justify-between">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-5 w-5 rounded-full" />
          </Box>
          {/* Cards */}
          {Array.from({ length: cardCount }).map((_, cardIdx) => (
            <Box key={cardIdx} className="space-y-2 rounded-md bg-background p-3 shadow-sm">
              <Skeleton className="h-3.5 w-full" />
              <Skeleton className="h-3 w-4/5" />
              <Box className="flex items-center justify-between pt-1">
                <Box className="flex -space-x-1">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <Skeleton key={i} className="h-5 w-5 rounded-full ring-2 ring-background" />
                  ))}
                </Box>
                <Skeleton className="h-4 w-12 rounded-full" />
              </Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  ),
  args: {},
};

export const TimelineSkeleton: Story = {
  render: () => (
    <Box className="relative w-full max-w-sm space-y-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <Box key={i} className="flex gap-4">
          {/* Line + dot */}
          <Box className="flex flex-col items-center">
            <Skeleton className="h-4 w-4 rounded-full" />
            {i < 4 && <Skeleton className="w-0.5 flex-1 rounded-full" />}
          </Box>
          {/* Content */}
          <Box className="space-y-1.5 pb-6">
            <Skeleton className="h-3.5 w-24" />
            <Skeleton className="h-3 w-44" />
            <Skeleton className="h-3 w-36" />
          </Box>
        </Box>
      ))}
    </Box>
  ),
  args: {},
};
