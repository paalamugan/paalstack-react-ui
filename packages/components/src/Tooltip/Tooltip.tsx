import * as React from 'react';

import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';

import { cn } from '@/shared/lib';

const TooltipProvider = ({ delay = 0, ...props }: TooltipPrimitive.Provider.Props) => (
  <TooltipPrimitive.Provider data-slot="tooltip-provider" delay={delay} {...props} />
);
TooltipProvider.displayName = 'TooltipProvider';

const TooltipRoot = ({ ...props }: TooltipPrimitive.Root.Props) => (
  <TooltipPrimitive.Root data-slot="tooltip" {...props} />
);
TooltipRoot.displayName = 'TooltipRoot';

const TooltipTrigger = ({ ...props }: TooltipPrimitive.Trigger.Props) => (
  <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
);
TooltipTrigger.displayName = 'TooltipTrigger';

const TooltipPortal = TooltipPrimitive.Portal;

export type TooltipContentProps = TooltipPrimitive.Popup.Props &
  Pick<TooltipPrimitive.Positioner.Props, 'align' | 'alignOffset' | 'side' | 'sideOffset'> & {
    /**
     * Tooltip as portal (render tooltip in separate DOM node)
     *
     * @default true
     */
    asPortal?: boolean;
  };
const TooltipContent = ({
  className,
  sideOffset = 4,
  side = 'top',
  align = 'center',
  alignOffset = 0,
  children,
  asPortal = true,
  ...props
}: TooltipContentProps) => {
  const TooltipPortalComponent = asPortal ? TooltipPortal : React.Fragment;

  return (
    <TooltipPortalComponent>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          data-qa="tooltip-content"
          className={cn(
            'z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className,
          )}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow
            data-slot="tooltip-arrow"
            data-qa="tooltip-arrow"
            className="z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground data-[side=bottom]:top-1 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5"
          />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPortalComponent>
  );
};
TooltipContent.displayName = 'TooltipContent';

export type TooltipProps = Omit<React.ComponentPropsWithoutRef<typeof TooltipProvider>, 'children'> & {
  /**
   * Tooltip open state
   *
   * @default false
   */
  open?: boolean;
  /**
   * Tooltip default open state
   *
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * Tooltip on open state change handler
   *
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Tooltip root props
   *
   */
  rootProps?: Omit<React.ComponentPropsWithoutRef<typeof TooltipRoot>, 'open' | 'defaultOpen' | 'onOpenChange'>;
} & (
    | {
        /**
         * Tooltip as portal (render tooltip in separate DOM node)
         *
         * @default true
         */
        asPortal?: boolean;
        /**
         * Tooltip side
         *
         * @default top
         */
        side?: 'top' | 'right' | 'bottom' | 'left';
        /**
         * Tooltip align
         *
         * @default center
         */
        align?: 'start' | 'center' | 'end';
        /**
         * Tooltip trigger
         *
         */
        trigger: React.ReactNode;
        /**
         * Tooltip content
         *
         */
        content: React.ReactNode;
        /**
         * Tooltip trigger props
         *
         */
        triggerProps?: React.ComponentPropsWithoutRef<typeof TooltipTrigger>;
        /**
         * Tooltip content props
         *
         */
        contentProps?: React.ComponentPropsWithoutRef<typeof TooltipContent>;
      }
    | {
        /**
         * Tooltip trigger and content as children
         */
        children: React.ReactNode;
      }
  );

/**
 * Tooltip Component
 *
 * A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 *
 * @example
 * // Basic usage (Props API)
 * import { Tooltip } from '@paalstack/react-ui';
 *
 * <Tooltip content="Add to library" trigger={<Button variant="outline">Hover me</Button>} />
 *
 * @example
 * // Different sides
 * <Tooltip content="Top tooltip" side="top" trigger={<Button>Top</Button>} />
 * <Tooltip content="Right tooltip" side="right" trigger={<Button>Right</Button>} />
 * <Tooltip content="Bottom tooltip" side="bottom" trigger={<Button>Bottom</Button>} />
 * <Tooltip content="Left tooltip" side="left" trigger={<Button>Left</Button>} />
 *
 * @example
 * // Different alignments
 * <Tooltip content="Start aligned" align="start" trigger={<Button>Start</Button>} />
 * <Tooltip content="Center aligned" align="center" trigger={<Button>Center</Button>} />
 * <Tooltip content="End aligned" align="end" trigger={<Button>End</Button>} />
 *
 * @example
 * // With custom delay
 * <Tooltip content="Instant" delay={0} trigger={<Button>Instant</Button>} />
 * <Tooltip content="Delayed 500ms" delay={500} trigger={<Button>Delayed</Button>} />
 *
 * @example
 * // With keyboard shortcut in content
 * import { Kbd, KbdGroup } from '@paalstack/react-ui';
 *
 * <Tooltip
 *   content={
 *     <div className="flex items-center gap-2">
 *       Save file
 *       <KbdGroup>
 *         <Kbd>⌘</Kbd>
 *         <Kbd>S</Kbd>
 *       </KbdGroup>
 *     </div>
 *   }
 *   trigger={<Button variant="outline">Save</Button>}
 * />
 *
 * @example
 * // Controlled tooltip
 * const [open, setOpen] = useState(false);
 *
 * <Tooltip
 *   content="Controlled tooltip"
 *   open={open}
 *   onOpenChange={setOpen}
 *   trigger={<Button onClick={() => setOpen((v) => !v)}>Toggle</Button>}
 * />
 *
 * @example
 * // Composition API — full control over structure
 * import { Tooltip, TooltipTrigger, TooltipContent } from '@paalstack/react-ui';
 *
 * <Tooltip>
 *   <TooltipTrigger render={<Button variant="ghost" size="icon"><InfoIcon /></Button>} />
 *   <TooltipContent side="right" className="max-w-[180px] p-3">
 *     <p className="font-semibold">Quick tip</p>
 *     <p className="text-xs opacity-80">Press <Kbd>⌘K</Kbd> to open the command palette.</p>
 *   </TooltipContent>
 * </Tooltip>
 *
 * @example
 * // Composition API — toolbar with shortcuts
 * <Tooltip>
 *   <TooltipTrigger render={<Button variant="ghost" size="icon"><BellIcon /></Button>} />
 *   <TooltipContent side="bottom">
 *     <div className="flex items-center gap-1.5">
 *       Notifications <Kbd>⌘N</Kbd>
 *     </div>
 *   </TooltipContent>
 * </Tooltip>
 */
const Tooltip = ({ open, defaultOpen, onOpenChange, rootProps, ...props }: TooltipProps) => {
  const usePropsApi = 'trigger' in props && 'content' in props;

  if (usePropsApi) {
    const { trigger, content, triggerProps, contentProps, asPortal, side = 'top', align = 'center', ...rest } = props;

    return (
      <TooltipProvider {...rest}>
        <TooltipRoot open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} data-qa="tooltip" {...rootProps}>
          <TooltipTrigger
            render={React.isValidElement(trigger) ? trigger : <span>{trigger}</span>}
            data-qa="tooltip-trigger"
            {...triggerProps}
          />
          <TooltipContent side={side} align={align} asPortal={asPortal} data-qa="tooltip-content" {...contentProps}>
            {content}
          </TooltipContent>
        </TooltipRoot>
      </TooltipProvider>
    );
  }
  const { children, ...rest } = props;
  return (
    <TooltipProvider {...rest}>
      <TooltipRoot open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} data-qa="tooltip" {...rootProps}>
        {children}
      </TooltipRoot>
    </TooltipProvider>
  );
};

Tooltip.displayName = 'Tooltip';

export { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger };
