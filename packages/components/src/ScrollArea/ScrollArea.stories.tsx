import { Fragment } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../Badge';
import { Separator } from '../Separator';
import { ScrollArea, ScrollBar } from './ScrollArea';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ScrollArea>;

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

const files = [
  'index.ts',
  'App.tsx',
  'styles.css',
  'README.md',
  'package.json',
  'tsconfig.json',
  'vite.config.ts',
  'tailwind.config.ts',
  '.eslintrc.cjs',
  '.prettierrc',
  'components/Button.tsx',
  'components/Input.tsx',
  'components/Card.tsx',
  'hooks/use-id.ts',
  'hooks/use-debounce.ts',
  'utils/cn.ts',
  'utils/format.ts',
  'lib/api.ts',
];

const notifications = [
  { id: 1, title: 'New message', body: 'You have a new message from Alice.', time: '2 min ago' },
  { id: 2, title: 'Pull request merged', body: 'PR #42 was merged into main.', time: '15 min ago' },
  { id: 3, title: 'Deployment complete', body: 'Production deployment succeeded.', time: '1 hr ago' },
  { id: 4, title: 'Comment on issue', body: 'Bob commented on issue #17.', time: '2 hr ago' },
  { id: 5, title: 'Build failed', body: 'CI pipeline failed on branch feature/xyz.', time: '3 hr ago' },
  { id: 6, title: 'New comment', body: 'Carol replied to your comment.', time: '5 hr ago' },
  { id: 7, title: 'Release published', body: 'v2.1.0 has been published.', time: '1 day ago' },
];

const tagList = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Storybook',
  'Vite',
  'ESLint',
  'Prettier',
  'Vitest',
  'Playwright',
  'Radix UI',
  'shadcn/ui',
  'base-ui',
  'Zustand',
  'React Query',
  'Zod',
];

// ─────────────────────────────────────────────
// Props API
// ─────────────────────────────────────────────

export const Default: Story = {
  name: 'Default – Vertical',
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </Fragment>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const LongContent: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et enim voluptas dolorum illum! Nisi aut saepe
      incidunt harum quasi accusantium possimus suscipit et ut quibusdam hic ex velit, est minima quia quod explicabo
      reiciendis natus. Maxime at voluptates error fuga nesciunt odit cupiditate sit dicta quia ad eos repellat
      inventore consectetur, neque commodi vel illo quod laboriosam, veniam tempora! Ex aspernatur non nihil atque,
      magni praesentium fugit saepe quaerat odit aut, officiis molestiae inventore quam eum perferendis adipisci ducimus
      velit voluptates delectus consequatur pariatur? Impedit illum corporis, quia quod deleniti consequuntur repellat,
      sapiente quam deserunt quos doloribus id officiis inventore obcaecati dolores distinctio neque rem vel sunt dolor.
      Quia voluptatem vitae pariatur consequuntur exercitationem dolorum fugiat laudantium non. Velit, maxime. Eaque a
      consequatur nostrum cumque blanditiis natus aspernatur doloremque exercitationem vero ab quas voluptatibus odio,
      cum quisquam minima, itaque dicta? Impedit quaerat, obcaecati, optio ex veniam odio dolor quia quis natus velit
      quibusdam dolores autem sed voluptatibus illum reiciendis.
    </ScrollArea>
  ),
};

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex gap-2 p-4">
        {tagList.map((tag) => (
          <Badge key={tag} variant="outline" className="shrink-0">
            {tag}
          </Badge>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const FileExplorer: Story = {
  render: () => (
    <ScrollArea className="h-72 w-64 rounded-md border">
      <div className="p-2">
        <p className="px-2 py-1 text-xs font-medium text-muted-foreground">EXPLORER</p>
        {files.map((file) => (
          <div
            key={file}
            className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground"
          >
            <span className="truncate">{file}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const NotificationsPanel: Story = {
  render: () => (
    <ScrollArea className="h-80 w-96 rounded-md border">
      <div className="p-4">
        <h3 className="mb-3 font-semibold">Notifications</h3>
        <div className="space-y-2">
          {notifications.map((n) => (
            <div key={n.id} className="rounded-md border p-3 hover:bg-accent">
              <p className="text-sm font-medium">{n.title}</p>
              <p className="text-xs text-muted-foreground">{n.body}</p>
              <p className="mt-1 text-xs text-muted-foreground">{n.time}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

export const BothScrollbars: Story = {
  render: () => (
    <ScrollArea className="h-72 w-96 rounded-md border">
      <div style={{ width: '700px' }} className="p-4">
        <h4 className="mb-3 text-sm font-medium">Wide content with both axes</h4>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="mb-2 flex gap-6 text-sm">
            {Array.from({ length: 8 }).map((_, j) => (
              <span key={j} className="shrink-0 text-muted-foreground">
                Row {i + 1}, Col {j + 1}
              </span>
            ))}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const CodeViewer: Story = {
  render: () => (
    <ScrollArea className="h-64 w-full rounded-md border bg-muted/30">
      <pre className="p-4 font-mono text-sm">
        <code>{`import { ScrollArea, ScrollBar } from '@paalstack/react-ui';

function App() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        {items.map((item) => (
          <div key={item.id}>{item.label}</div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default App;`}</code>
      </pre>
    </ScrollArea>
  ),
};

// ─────────────────────────────────────────────
// Composition API
// ─────────────────────────────────────────────

export const CompositionVertical: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </Fragment>
        ))}
      </div>
      {/* ScrollBar is rendered automatically inside ScrollArea */}
    </ScrollArea>
  ),
};

export const CompositionHorizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex gap-2 p-4">
        {tagList.map((tag) => (
          <Badge key={tag} variant="outline" className="shrink-0">
            {tag}
          </Badge>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const CompositionCustomScrollbar: Story = {
  render: () => (
    <ScrollArea className="h-72 w-64 rounded-md border">
      <div className="p-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="py-1 text-sm text-muted-foreground">
            Item {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar className="bg-muted/50" />
    </ScrollArea>
  ),
};
