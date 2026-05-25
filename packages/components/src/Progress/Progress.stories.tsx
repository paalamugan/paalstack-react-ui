import { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@/layouts/Box';
import { COLOR_VARIANTS } from '@/shared/constants';

import { Button } from '../Button';
import { Slider } from '../Slider';
import { Progress, ProgressIndicator, ProgressLabel, ProgressRoot, ProgressTrack, ProgressValue } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: { control: { type: 'select', options: COLOR_VARIANTS } },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
};
export default meta;

type Story = StoryObj<typeof Progress>;

// ─── Props API ────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: 'Props API — Default',
  args: { value: 40 },
};

export const Primary: Story = {
  name: 'Props API — Primary',
  args: { value: 33, variant: 'primary' },
};

export const Secondary: Story = {
  name: 'Props API — Secondary',
  args: { value: 33, variant: 'secondary' },
};

export const Success: Story = {
  name: 'Props API — Success',
  args: { value: 33, variant: 'success' },
};

export const Warning: Story = {
  name: 'Props API — Warning',
  args: { value: 33, variant: 'warning' },
};

export const Danger: Story = {
  name: 'Props API — Danger',
  args: { value: 33, variant: 'danger' },
};

export const Info: Story = {
  name: 'Props API — Info',
  args: { value: 33, variant: 'info' },
};

export const Dark: Story = {
  name: 'Props API — Dark',
  args: { value: 33, variant: 'dark' },
};

export const AllVariants: Story = {
  name: 'Props API — All Variants',
  render: () => (
    <Box className="flex w-full flex-col gap-4">
      {(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'accent'] as const).map((variant) => (
        <Box key={variant} className="flex flex-col gap-1">
          <span className="text-sm font-medium capitalize">{variant}</span>
          <Progress value={60} variant={variant} />
        </Box>
      ))}
    </Box>
  ),
};

export const IndeterminateState: Story = {
  name: 'Props API — Indeterminate',
  render: () => (
    <Box className="flex w-full flex-col gap-2">
      <span className="text-sm text-muted-foreground">Value set to null → indeterminate</span>
      <Progress value={null} />
    </Box>
  ),
};

export const ZeroAndFull: Story = {
  name: 'Props API — 0% and 100%',
  render: () => (
    <Box className="flex w-full flex-col gap-4">
      <Box className="flex flex-col gap-1">
        <span className="text-sm font-medium">0%</span>
        <Progress value={0} variant="primary" />
      </Box>
      <Box className="flex flex-col gap-1">
        <span className="text-sm font-medium">100%</span>
        <Progress value={100} variant="success" />
      </Box>
    </Box>
  ),
};

// Extract hook-using components so React hook rules are satisfied

type VariantProp = 'default' | 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'dark' | 'accent';

const SliderDemo = ({ value, variant }: { value?: number | null; variant?: VariantProp }) => {
  const [progress, setProgress] = useState(value ?? 40);
  return (
    <Box className="flex w-full flex-col gap-4">
      <Progress value={progress} variant={variant} />
      <Slider value={progress} onValueChange={(v) => setProgress(v as number)} min={0} max={100} step={1} />
      <span className="text-center text-sm text-muted-foreground">{progress}%</span>
    </Box>
  );
};

export const WithSlider: Story = {
  name: 'Props API — Interactive (Slider)',
  render: (args) => <SliderDemo value={args.value} variant={args.variant ?? undefined} />,
  args: { value: 40, variant: 'primary' },
};

const AnimatedDemo = ({ variant }: { variant?: VariantProp }) => {
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    if (progress >= 100) {
      setRunning(false);
      return;
    }
    const t = setTimeout(() => setProgress((p) => Math.min(p + 5, 100)), 120);
    return () => clearTimeout(t);
  }, [progress, running]);

  return (
    <Box className="flex w-full flex-col gap-4">
      <Progress value={progress} variant={variant} />
      <Box className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{progress}%</span>
        <Box className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setProgress(0);
              setRunning(true);
            }}
          >
            Restart
          </Button>
          <Button size="sm" onClick={() => setRunning((r) => !r)}>
            {running ? 'Pause' : 'Start'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export const AnimatedProgress: Story = {
  name: 'Props API — Animated',
  render: (args) => <AnimatedDemo variant={args.variant ?? undefined} />,
  args: { variant: 'primary' },
};

const MultiStepDemo = () => {
  const steps = ['Account', 'Profile', 'Preferences', 'Review'];
  const [step, setStep] = useState(0);
  const progress = ((step + 1) / steps.length) * 100;

  return (
    <Box className="flex w-full max-w-sm flex-col gap-4">
      <Box className="flex justify-between">
        <span className="text-sm font-medium">
          Step {step + 1} of {steps.length}: {steps[step]}
        </span>
        <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
      </Box>
      <Progress value={progress} variant="primary" />
      <Box className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
          Back
        </Button>
        <Button
          size="sm"
          onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
          disabled={step === steps.length - 1}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export const MultiStepForm: Story = {
  name: 'Props API — Multi-step Form',
  render: () => <MultiStepDemo />,
};

export const SkillLevels: Story = {
  name: 'Props API — Skill Levels',
  render: () => {
    const skills = [
      { name: 'React', level: 90, variant: 'success' as const },
      { name: 'TypeScript', level: 75, variant: 'primary' as const },
      { name: 'GraphQL', level: 50, variant: 'warning' as const },
      { name: 'Rust', level: 20, variant: 'danger' as const },
    ];
    return (
      <Box className="flex w-full flex-col gap-4">
        {skills.map((skill) => (
          <Box key={skill.name} className="flex flex-col gap-1">
            <Box className="flex justify-between">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </Box>
            <Progress value={skill.level} variant={skill.variant} />
          </Box>
        ))}
      </Box>
    );
  },
};

// ─── Composition API ──────────────────────────────────────────────────────────

export const CompositionBasic: Story = {
  name: 'Composition API — Basic',
  render: () => (
    <Box className="w-full">
      <ProgressRoot value={60}>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </ProgressRoot>
    </Box>
  ),
};

export const CompositionWithLabel: Story = {
  name: 'Composition API — With Label & Value',
  render: () => (
    <Box className="w-full">
      <ProgressRoot value={66}>
        <ProgressLabel>Uploading file…</ProgressLabel>
        <ProgressValue />
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </ProgressRoot>
    </Box>
  ),
};

export const CompositionCustomStyles: Story = {
  name: 'Composition API — Custom Styles',
  render: () => (
    <Box className="flex w-full flex-col gap-6">
      <Box className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Tall track (h-3)</span>
        <ProgressRoot value={45}>
          <ProgressTrack className="h-3 bg-primary/20">
            <ProgressIndicator className="rounded-full bg-primary" />
          </ProgressTrack>
        </ProgressRoot>
      </Box>
      <Box className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Success color</span>
        <ProgressRoot value={80}>
          <ProgressTrack className="h-2 bg-success/20">
            <ProgressIndicator className="bg-success" />
          </ProgressTrack>
        </ProgressRoot>
      </Box>
      <Box className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Danger color</span>
        <ProgressRoot value={25}>
          <ProgressTrack className="h-2 bg-danger/20">
            <ProgressIndicator className="bg-danger" />
          </ProgressTrack>
        </ProgressRoot>
      </Box>
    </Box>
  ),
};

export const CompositionStorageUsage: Story = {
  name: 'Composition API — Storage Usage',
  render: () => {
    const used = 68;
    const reserved = 12;
    const free = 100 - used - reserved;

    return (
      <Box className="flex w-full max-w-sm flex-col gap-4 rounded-lg border p-4">
        <span className="text-sm font-semibold">Storage Usage</span>
        <Box className="flex flex-col gap-3">
          {[
            { label: 'Used', value: used, track: 'bg-primary/20', indicator: 'bg-primary' },
            { label: 'Reserved', value: reserved, track: 'bg-warning/20', indicator: 'bg-warning' },
            { label: 'Free', value: free, track: 'bg-success/20', indicator: 'bg-success' },
          ].map(({ label, value, track, indicator }) => (
            <ProgressRoot key={label} value={value}>
              <Box className="flex justify-between">
                <ProgressLabel className="text-xs">{label}</ProgressLabel>
                <ProgressValue className="text-xs" />
              </Box>
              <ProgressTrack className={`h-2 ${track}`}>
                <ProgressIndicator className={indicator} />
              </ProgressTrack>
            </ProgressRoot>
          ))}
        </Box>
      </Box>
    );
  },
};

const CompositionAnimatedDemo = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= 100) return;
    const t = setTimeout(() => setValue((v) => Math.min(v + 2, 100)), 60);
    return () => clearTimeout(t);
  }, [value]);

  return (
    <Box className="flex w-full flex-col gap-2">
      <ProgressRoot value={value}>
        <ProgressLabel>{value < 100 ? 'Processing…' : 'Complete!'}</ProgressLabel>
        <ProgressValue />
        <ProgressTrack className="h-2 bg-primary/20">
          <ProgressIndicator className={value === 100 ? 'bg-success' : 'bg-primary'} />
        </ProgressTrack>
      </ProgressRoot>
    </Box>
  );
};

export const CompositionAnimated: Story = {
  name: 'Composition API — Animated with Label',
  render: () => <CompositionAnimatedDemo />,
};

export const ProgressDemo: Story = {
  name: 'Props API — Legacy Demo',
  render: (args) => <SliderDemo value={args.value} variant={args.variant ?? undefined} />,
  args: { value: 10, variant: 'primary' },
};
