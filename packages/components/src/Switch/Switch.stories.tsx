/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { toast } from '../../../providers/src/ToastProvider/Toast';
import { Button } from '../Button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormProvider } from '../Form';
import { Label } from '../Label';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'sm'] },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="checked-demo" defaultChecked />
      <Label htmlFor="checked-demo">Enabled by default</Label>
    </div>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="small-switch" size="sm" />
      <Label htmlFor="small-switch">Small switch</Label>
    </div>
  ),
};

export const SizeComparison: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="size-default" defaultChecked />
        <Label htmlFor="size-default">Default size</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="size-sm" size="sm" defaultChecked />
        <Label htmlFor="size-sm">Small size</Label>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled-off" disabled />
        <Label htmlFor="disabled-off">Disabled (off)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label htmlFor="disabled-on">Disabled (on)</Label>
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch id="controlled" checked={checked} onCheckedChange={setChecked} />
          <Label htmlFor="controlled">Dark Mode</Label>
        </div>
        <p className="text-sm text-muted-foreground">Switch is {checked ? 'on' : 'off'}</p>
      </div>
    );
  },
};

export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: true,
      emailUpdates: false,
      darkMode: true,
      autoSave: true,
    });

    const toggle = (key: keyof typeof settings) => setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

    const items = [
      { key: 'notifications' as const, label: 'Push Notifications', desc: 'Receive push notifications on your device' },
      { key: 'emailUpdates' as const, label: 'Email Updates', desc: 'Get notified about product updates via email' },
      { key: 'darkMode' as const, label: 'Dark Mode', desc: 'Use dark theme across the application' },
      { key: 'autoSave' as const, label: 'Auto Save', desc: 'Automatically save changes as you work' },
    ];

    return (
      <div className="w-96 space-y-1 rounded-lg border p-4">
        <h3 className="mb-3 text-base font-semibold">Preferences</h3>
        {items.map((item) => (
          <div key={item.key} className="flex items-center justify-between rounded-md px-2 py-3">
            <div className="space-y-0.5">
              <Label className="text-sm font-medium">{item.label}</Label>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
            <Switch checked={settings[item.key]} onCheckedChange={() => toggle(item.key)} />
          </div>
        ))}
      </div>
    );
  },
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex w-80 items-start justify-between rounded-lg border p-4">
      <div className="space-y-1">
        <Label htmlFor="maintenance" className="text-sm font-medium">
          Maintenance Mode
        </Label>
        <p className="text-xs text-muted-foreground">
          When enabled, the site will show a maintenance page to all visitors.
        </p>
      </div>
      <Switch id="maintenance" />
    </div>
  ),
};

export const SwitchForm: Story = {
  render: () => {
    const formSchema = z.object({
      marketing_emails: z.boolean().default(false).optional(),
      security_emails: z.boolean(),
    });
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        security_emails: true,
      },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    };

    return (
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="marketing_emails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-xs">
                    <div className="space-y-0.5">
                      <FormLabel>Marketing emails</FormLabel>
                      <FormDescription>Receive emails about new products, features, and more.</FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="security_emails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-xs">
                    <div className="space-y-0.5">
                      <FormLabel>Security emails</FormLabel>
                      <FormDescription>Receive emails about your account security.</FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} disabled aria-readonly />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    );
  },
};
