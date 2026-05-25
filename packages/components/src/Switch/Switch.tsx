import { Switch as SwitchPrimitive } from '@base-ui/react/switch';

import { cn } from '@/shared/lib';

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
export const Switch = ({
  className,
  size = 'default',
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: 'sm' | 'default';
}) => (
  <SwitchPrimitive.Root
    data-slot="switch"
    data-qa="switch"
    data-size={size}
    className={cn(
      'peer group/switch relative inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-checked:bg-primary data-disabled:cursor-not-allowed data-disabled:opacity-50 data-unchecked:bg-input data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80',
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      data-qa="switch-thumb"
      className="pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground"
    />
  </SwitchPrimitive.Root>
);
Switch.displayName = 'Switch';
