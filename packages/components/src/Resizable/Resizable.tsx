import * as React from 'react';

import type { GroupProps, PanelProps, SeparatorProps } from 'react-resizable-panels';

import { Group, Panel, Separator } from 'react-resizable-panels';

import { cn } from '@/shared/lib';

const ResizablePanelGroup = ({ className, ...props }: GroupProps) => (
  <Group
    data-slot="resizable-panel-group"
    data-qa="resizable-panel-group"
    className={cn('flex h-full w-full aria-[orientation=vertical]:flex-col', className)}
    {...props}
  />
);
ResizablePanelGroup.displayName = 'ResizablePanelGroup';

const ResizablePanel = ({ ...props }: PanelProps) => (
  <Panel data-slot="resizable-panel" data-qa="resizable-panel" {...props} />
);
ResizablePanel.displayName = 'ResizablePanel';

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: SeparatorProps & {
  withHandle?: boolean;
}) => (
  <Separator
    data-slot="resizable-handle"
    data-qa="resizable-handle"
    className={cn(
      'relative flex w-px items-center justify-center bg-border ring-offset-background after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90',
      className,
    )}
    {...props}
  >
    {withHandle && <div className="z-10 flex h-6 w-1 shrink-0 rounded-lg bg-border" />}
  </Separator>
);
ResizableHandle.displayName = 'ResizableHandle';

export interface ResizablePanelConfig {
  /** Default size of the panel as a percentage (0–100) */
  defaultSize?: number;
  /** Minimum size of the panel as a percentage */
  minSize?: number;
  /** Maximum size of the panel as a percentage */
  maxSize?: number;
  /** Content rendered inside the panel */
  children: React.ReactNode;
  /** Additional className for the panel */
  className?: string;
}

export interface ResizableProps extends Omit<GroupProps, 'children'> {
  /** Array of panel configurations rendered in order */
  panels: ResizablePanelConfig[];
  /** Show the visible drag handle knob between panels */
  withHandle?: boolean;
  /** Panel group orientation — "horizontal" (default) or "vertical" */
  orientation?: 'horizontal' | 'vertical';
}

/**
 * Resizable Component (Props API)
 *
 * A simplified API over the composition primitives that accepts a flat
 * `panels` array and automatically inserts `ResizableHandle` separators
 * between each panel.
 *
 * @example
 * // Horizontal two-panel split
 * <Resizable
 *   direction="horizontal"
 *   className="h-48 rounded-lg border"
 *   panels={[
 *     { defaultSize: 30, children: <div>Sidebar</div> },
 *     { defaultSize: 70, children: <div>Content</div> },
 *   ]}
 * />
 *
 * @example
 * // Vertical split with visible handle knob
 * <Resizable
 *   direction="vertical"
 *   className="h-64 rounded-lg border"
 *   withHandle
 *   panels={[
 *     { defaultSize: 50, children: <div>Top</div> },
 *     { defaultSize: 50, children: <div>Bottom</div> },
 *   ]}
 * />
 *
 * @example
 * // Constrained panel sizes
 * <Resizable
 *   direction="horizontal"
 *   className="h-48 rounded-lg border"
 *   withHandle
 *   panels={[
 *     { defaultSize: 25, minSize: 15, maxSize: 40, children: <div>Nav</div> },
 *     { defaultSize: 75, children: <div>Main</div> },
 *   ]}
 * />
 */
const Resizable = ({ panels, withHandle = false, className, ...props }: ResizableProps) => (
  <ResizablePanelGroup className={className} {...props}>
    {panels.map((panel, index) => {
      const { children, className: panelClassName, defaultSize, minSize, maxSize } = panel;
      return (
        <React.Fragment key={index}>
          {index > 0 && <ResizableHandle withHandle={withHandle} />}
          <ResizablePanel defaultSize={defaultSize} minSize={minSize} maxSize={maxSize} className={panelClassName}>
            {children}
          </ResizablePanel>
        </React.Fragment>
      );
    })}
  </ResizablePanelGroup>
);
Resizable.displayName = 'Resizable';

export { Resizable, ResizableHandle, ResizablePanel, ResizablePanelGroup };
