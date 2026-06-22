'use client';

import { useState } from 'react';

import { LuCheck, LuPlus, LuSettings, LuTrash2 } from '@paalstack/react-icons/lu';
import {
  Accordion,
  Alert,
  Avatar,
  AvatarGroupList,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Heading,
  Progress,
  Separator,
  Switch,
  Text,
  Tooltip,
  toast
} from '@paalstack/react-ui';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <Heading className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{title}</Heading>
      {children}
    </div>
  );
}

export function ComponentsDemo() {
  const [switchOn, setSwitchOn] = useState(false);
  const [progress] = useState(68);

  return (
    <div className="mt-6 space-y-10">
      {/* Buttons */}
      <Section title="Buttons">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Variants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">With Icons &amp; States</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 items-center">
              <Button leftIcon={<LuPlus className="h-4 w-4" />}>Add Item</Button>
              <Button variant="outline" leftIcon={<LuSettings className="h-4 w-4" />}>
                Settings
              </Button>
              <Button variant="destructive" leftIcon={<LuTrash2 className="h-4 w-4" />}>
                Delete
              </Button>
              <Button isLoading loadingText="Saving…">
                Save
              </Button>
              <Button disabled>Disabled</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Add">
                <LuPlus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Colors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button color="primary">Primary</Button>
              <Button color="success">Success</Button>
              <Button color="warning">Warning</Button>
              <Button color="danger">Danger</Button>
              <Button color="info">Info</Button>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Separator />

      {/* Badges */}
      <Section title="Badges">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Separator />

      {/* Alerts */}
      <Section title="Alerts">
        <div className="space-y-3">
          <Alert title="Information" description="This is an informational message for the user." />
          <Alert colorVariant="success" title="Success" description="Your changes have been saved successfully." />
          <Alert colorVariant="warning" title="Warning" description="This action may have unintended side effects." />
          <Alert colorVariant="danger" title="Error" description="Something went wrong. Please try again." />
        </div>
      </Section>

      <Separator />

      {/* Avatars */}
      <Section title="Avatars">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Avatar fallback="JD" size="sm" />
                <Avatar fallback="AB" />
                <Avatar fallback="XY" size="lg" />
              </div>
              <Separator orientation="vertical" className="h-10" />
              <AvatarGroupList
                items={[
                  { fallback: 'AA' },
                  { fallback: 'BB' },
                  { fallback: 'CC' },
                  { fallback: 'DD' },
                  { fallback: 'EE' },
                ]}
                max={3}
              />
            </div>
          </CardContent>
        </Card>
      </Section>

      <Separator />

      {/* Accordion */}
      <Section title="Accordion">
        <Accordion
          type="single"
          defaultValue={['item-1']}
          items={[
            {
              value: 'item-1',
              title: 'What is @paalstack/react-ui?',
              content:
                'A production-ready React component library built on Base UI primitives, styled with Tailwind CSS v4 and CVA. Fully accessible, dark-mode-ready, and tree-shakeable.',
            },
            {
              value: 'item-2',
              title: 'Does it support dark mode?',
              content:
                'Yes. Wrap your app in NextThemeProvider (Next.js) or ThemeProvider (other frameworks). All components use semantic design tokens that respond to the active theme automatically.',
            },
            {
              value: 'item-3',
              title: 'How do I extend components?',
              content:
                'Use the className prop on any component and merge with cn() from @paalstack/react-ui. Semantic tokens like bg-primary and text-muted-foreground are always preferred over raw hex values.',
            },
          ]}
        />
      </Section>

      <Separator />

      {/* Switch & Progress */}
      <Section title="Controls">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Switch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Switch
                  checked={switchOn}
                  onCheckedChange={setSwitchOn}
                  id="demo-switch"
                />
                <label htmlFor="demo-switch" className="cursor-pointer text-sm">
                  {switchOn ? 'Enabled' : 'Disabled'}
                </label>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Text className="mb-1 text-sm text-muted-foreground">Default — {progress}%</Text>
                <Progress value={progress} />
              </div>
              <div>
                <Text className="mb-1 text-sm text-muted-foreground">Success — 100%</Text>
                <Progress value={100} variant="success" />
              </div>
              <div>
                <Text className="mb-1 text-sm text-muted-foreground">Warning — 40%</Text>
                <Progress value={40} variant="warning" />
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Separator />

      {/* Tooltip + Toast */}
      <Section title="Tooltip &amp; Toast">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap items-center gap-4">
              <Tooltip content="This is a tooltip" side="top">
                <Button variant="outline">Hover for tooltip</Button>
              </Tooltip>
              <Tooltip content="Settings panel" side="right">
                <Button size="icon" variant="ghost" aria-label="Settings">
                  <LuSettings className="h-4 w-4" />
                </Button>
              </Tooltip>
              <Button
                variant="outline"
                leftIcon={<LuCheck className="h-4 w-4" />}
                onClick={() => toast.success('Action completed!')}
              >
                Fire success toast
              </Button>
              <Button variant="outline" onClick={() => toast.error('Something went wrong.')}>
                Fire error toast
              </Button>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
