import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';

import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group';

import { cn } from '@/shared/lib';

import { Label } from '../Label';
import { toggleVariants } from '../Toggle/Toggle';

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number;
    orientation?: 'horizontal' | 'vertical';
  }
>({
  size: 'default',
  variant: 'default',
  spacing: 0,
  orientation: 'horizontal',
});

const ToggleGroupRoot = ({
  className,
  variant,
  size,
  spacing = 0,
  orientation = 'horizontal',
  children,
  ...props
}: ToggleGroupPrimitive.Props &
  VariantProps<typeof toggleVariants> & {
    spacing?: number;
    orientation?: 'horizontal' | 'vertical';
  }) => (
  <ToggleGroupPrimitive
    data-slot="toggle-group"
    data-qa="toggle-group"
    data-variant={variant}
    data-size={size}
    data-spacing={spacing}
    data-orientation={orientation}
    style={{ '--gap': spacing } as React.CSSProperties}
    className={cn(
      'group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-lg data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch data-[size=sm]:rounded-[min(var(--radius-md),10px)]',
      className,
    )}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size, spacing, orientation }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive>
);
ToggleGroupRoot.displayName = 'ToggleGroupRoot';

const ToggleGroupItem = ({
  className,
  children,
  variant = 'default',
  size = 'default',
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-qa="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        'shrink-0 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 focus:z-10 focus-visible:z-10 group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:last:rounded-b-lg group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t',
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </TogglePrimitive>
  );
};
ToggleGroupItem.displayName = 'ToggleGroupItem';

export interface ToggleGroupProps extends Omit<
  React.ComponentProps<typeof ToggleGroupRoot>,
  'value' | 'onValueChange' | 'defaultValue' | 'children'
> {
  /**
   * The items to render as toggle buttons
   */
  items: (Omit<React.ComponentProps<typeof ToggleGroupItem>, 'children' | 'content'> & {
    content: React.ReactNode;
  })[];
  /**
   * Optional label for the ToggleGroup
   */
  label?: React.ReactNode;
  /**
   * Layout direction — inline puts the label beside the group
   */
  inline?: boolean;
  /**
   * The type of toggle group: 'single' allows one selection, 'multiple' allows many.
   * @default 'single'
   */
  type?: 'single' | 'multiple';
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

/**
 * ToggleGroup Component (Props API)
 *
 * A set of two-state buttons that can be toggled on or off.
 *
 * @example
 * // Single selection
 * import { ToggleGroup } from '@paalstack/react-ui';
 *
 * <ToggleGroup
 *   type="single"
 *   value={alignment}
 *   onValueChange={setAlignment}
 *   items={[
 *     { value: 'left', content: 'Left' },
 *     { value: 'center', content: 'Center' },
 *     { value: 'right', content: 'Right' },
 *   ]}
 * />
 *
 * @example
 * // Multiple selection
 * <ToggleGroup
 *   type="multiple"
 *   value={formats}
 *   onValueChange={setFormats}
 *   items={[
 *     { value: 'bold', content: <BoldIcon /> },
 *     { value: 'italic', content: <ItalicIcon /> },
 *     { value: 'underline', content: <UnderlineIcon /> },
 *   ]}
 * />
 *
 * @example
 * // Outline variant with spacing
 * <ToggleGroup
 *   variant="outline"
 *   spacing={1}
 *   items={[
 *     { value: 'a', content: 'A' },
 *     { value: 'b', content: 'B' },
 *   ]}
 * />
 *
 * @example
 * // Composition API
 * import { ToggleGroupRoot, ToggleGroupItem } from '@paalstack/react-ui';
 *
 * <ToggleGroupRoot variant="outline">
 *   <ToggleGroupItem value="a">Option A</ToggleGroupItem>
 *   <ToggleGroupItem value="b">Option B</ToggleGroupItem>
 * </ToggleGroupRoot>
 */
const ToggleGroup = ({
  items,
  className,
  label,
  inline,
  type = 'single',
  value,
  defaultValue,
  onValueChange,
  ...props
}: ToggleGroupProps) => {
  const toArray = (v: string | string[] | undefined): string[] | undefined => {
    if (v === undefined) return undefined;
    return Array.isArray(v) ? v : [v];
  };

  const handleValueChange = (groupValue: string[]) => {
    if (!onValueChange) return;
    onValueChange(type === 'single' ? (groupValue[0] ?? '') : groupValue);
  };

  const root = (
    <ToggleGroupRoot
      multiple={type === 'multiple'}
      value={toArray(value)}
      defaultValue={toArray(defaultValue)}
      onValueChange={handleValueChange}
      {...props}
    >
      {items.map(({ value: itemValue, content, ...itemProps }) => (
        <ToggleGroupItem key={itemValue} value={itemValue} data-qa="toggle-group-item" {...itemProps}>
          {content}
        </ToggleGroupItem>
      ))}
    </ToggleGroupRoot>
  );

  if (!label) return root;

  return (
    <div
      className={cn('flex flex-col items-start justify-center gap-2', {
        'flex-row items-center justify-start': inline,
      })}
    >
      <Label data-qa="toggle-group-label">{label}</Label>
      {root}
    </div>
  );
};
ToggleGroup.displayName = 'ToggleGroup';

export { ToggleGroup, ToggleGroupItem, ToggleGroupRoot };
