import type { VariantProps } from 'class-variance-authority';

import { Switch as SwitchPrimitive } from '@base-ui/react/switch';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib';

const switchVariants = cva(
  'peer group/switch relative inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-unchecked:bg-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80',
  {
    variants: {
      color: {
        default: 'data-checked:bg-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
        secondary:
          'data-checked:bg-secondary focus-visible:border-secondary focus-visible:ring-3 focus-visible:ring-secondary/50',
        tertiary:
          'data-checked:bg-tertiary focus-visible:border-tertiary focus-visible:ring-3 focus-visible:ring-tertiary/50',
        success:
          'data-checked:bg-success focus-visible:border-success focus-visible:ring-3 focus-visible:ring-success/50',
        warning:
          'data-checked:bg-warning focus-visible:border-warning focus-visible:ring-3 focus-visible:ring-warning/50',
        destructive:
          'data-checked:bg-destructive focus-visible:border-destructive focus-visible:ring-3 focus-visible:ring-destructive/50',
        info: 'data-checked:bg-info focus-visible:border-info focus-visible:ring-3 focus-visible:ring-info/50',
        danger: 'data-checked:bg-danger focus-visible:border-danger focus-visible:ring-3 focus-visible:ring-danger/50',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  },
);

export type SwitchColor = NonNullable<VariantProps<typeof switchVariants>['color']>;

interface SwitchProps extends SwitchPrimitive.Root.Props, VariantProps<typeof switchVariants> {
  size?: 'sm' | 'default' | 'lg' | 'xl';
}

/**
 * Switch Component
 *
 * A toggle switch component for boolean on/off states.
 * Perfect for settings, preferences, and feature toggles.
 *
 * @example
 * // Basic usage
 * import { Switch } from '@paalstack/react-ui';
 *
 * <Switch />
 *
 * @example
 * // Controlled switch
 * const [enabled, setEnabled] = useState(false);
 *
 * <Switch checked={enabled} onCheckedChange={setEnabled} />
 *
 * @example
 * // Color variants
 * <Switch color="default" defaultChecked />
 * <Switch color="success" defaultChecked />
 * <Switch color="warning" defaultChecked />
 * <Switch color="destructive" defaultChecked />
 * <Switch color="info" defaultChecked />
 * <Switch color="danger" defaultChecked />
 * <Switch color="secondary" defaultChecked />
 * <Switch color="tertiary" defaultChecked />
 *
 * @example
 * // Size variants
 * <Switch size="sm" />
 * <Switch size="default" />
 * <Switch size="lg" />
 * <Switch size="xl" />
 *
 * @example
 * // With label (use Label component)
 * import { Switch, Label } from '@paalstack/react-ui'
 *
 * <div className="flex items-center gap-2">
 *   <Switch id="airplane-mode" />
 *   <Label htmlFor="airplane-mode">Airplane Mode</Label>
 * </div>
 *
 * @example
 * // Disabled switch
 * <Switch disabled checked />
 * <Switch disabled />
 *
 * @example
 * // Settings panel example
 * const [settings, setSettings] = useState({
 *   notifications: true,
 *   emailUpdates: false,
 *   darkMode: true
 * });
 *
 * <div className="space-y-4">
 *   <div className="flex items-center justify-between">
 *     <div>
 *       <h3 className="font-medium">Notifications</h3>
 *       <p className="text-sm text-muted-foreground">Receive push notifications</p>
 *     </div>
 *     <Switch
 *       checked={settings.notifications}
 *       onCheckedChange={(checked) => setSettings({...settings, notifications: checked})}
 *     />
 *   </div>
 *
 *   <div className="flex items-center justify-between">
 *     <div>
 *       <h3 className="font-medium">Email Updates</h3>
 *       <p className="text-sm text-muted-foreground">Get email about updates</p>
 *     </div>
 *     <Switch
 *       checked={settings.emailUpdates}
 *       onCheckedChange={(checked) => setSettings({...settings, emailUpdates: checked})}
 *     />
 *   </div>
 * </div>
 *
 * @example
 * // With custom styling
 * <Switch className="data-checked:bg-success" />
 *
 * @example
 * // Form integration
 * <form onSubmit={(e) => { e.preventDefault(); }}>
 *   <div className="flex items-center gap-2">
 *     <Switch name="terms" required />
 *     <label>I agree to the terms</label>
 *   </div>
 *   <button type="submit">Submit</button>
 * </form>
 *
 * @example
 * // Accessibility example with proper labeling
 * <div className="flex items-center space-x-2">
 *   <Switch
 *     id="marketing-emails"
 *     aria-label="Enable marketing emails"
 *     checked={marketingEnabled}
 *     onCheckedChange={setMarketingEnabled}
 *   />
 *   <Label htmlFor="marketing-emails" className="cursor-pointer">
 *     Receive marketing emails
 *   </Label>
 * </div>
 */
export const Switch = ({ className, size = 'default', color = 'default', ...props }: SwitchProps) => (
  <SwitchPrimitive.Root
    data-slot="switch"
    data-qa="switch"
    data-size={size}
    className={cn(
      switchVariants({ color }),
      'data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=lg]:h-[22px] data-[size=lg]:w-[40px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-[size=xl]:h-[28px] data-[size=xl]:w-[48px]',
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      data-qa="switch-thumb"
      className="pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=lg]/switch:size-5 group-data-[size=sm]/switch:size-3 group-data-[size=xl]/switch:size-6 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=lg]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=xl]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=lg]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=xl]/switch:data-unchecked:translate-x-0 dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground"
    />
  </SwitchPrimitive.Root>
);
Switch.displayName = 'Switch';
