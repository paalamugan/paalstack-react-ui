/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from '.';
import { Label } from '../Label';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {
    max: 100,
    step: 1,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'destructive',
        'danger',
        'warning',
        'success',
        'info',
        'muted',
        'accent',
      ],
    },
    disabled: { control: 'boolean' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Basic: Story = {
  args: {
    defaultValue: [50],
  },
};

export const Secondary: Story = {
  args: {
    defaultValue: [60],
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    defaultValue: [50],
    variant: 'tertiary',
  },
};

export const Info: Story = {
  args: {
    defaultValue: [40],
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    defaultValue: [30],
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    defaultValue: [80],
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    defaultValue: [90],
    variant: 'danger',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [40],
    disabled: true,
  },
};

const WithLabelRender = () => {
  const [value, setValue] = React.useState([50]);

  return (
    <div className="w-64 space-y-2">
      <div className="flex items-center justify-between">
        <Label>Volume</Label>
        <span className="text-sm text-muted-foreground">{value[0]}%</span>
      </div>
      <Slider value={value} onValueChange={(v) => setValue(v as number[])} />
    </div>
  );
};

export const WithLabel: Story = {
  render: () => <WithLabelRender />,
};

const RangeSliderRender = () => {
  const [range, setRange] = React.useState([20, 80]);

  return (
    <div className="w-80 space-y-2">
      <div className="flex items-center justify-between">
        <Label>Price Range</Label>
        <span className="text-sm text-muted-foreground">
          ${range[0]} – ${range[1]}
        </span>
      </div>
      <Slider value={range} onValueChange={(v) => setRange(v as number[])} />
    </div>
  );
};

export const RangeSlider: Story = {
  name: 'Range (Two Thumbs)',
  render: () => <RangeSliderRender />,
};

export const CustomStep: Story = {
  args: {
    defaultValue: [25],
    step: 25,
    min: 0,
    max: 100,
    variant: 'info',
  },
};

export const SmallRange: Story = {
  args: {
    defaultValue: [5],
    min: 1,
    max: 10,
    step: 1,
    variant: 'success',
  },
};

export const Vertical: Story = {
  args: {
    defaultValue: [50],
    orientation: 'vertical',
  },
  decorators: [
    (Story) => (
      <div className="flex h-48 items-center">
        <Story />
      </div>
    ),
  ],
};

export const VerticalRange: Story = {
  render: () => {
    const [range, setRange] = React.useState([25, 75]);

    return (
      <div className="flex h-48 items-end gap-6">
        <div className="flex flex-col items-center gap-2">
          <Slider
            value={range}
            onValueChange={(v) => setRange(v as number[])}
            orientation="vertical"
            variant="success"
          />
          <span className="text-xs text-muted-foreground">
            {range[0]}–{range[1]}
          </span>
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    const variants = [
      'primary',
      'secondary',
      'tertiary',
      'destructive',
      'danger',
      'warning',
      'success',
      'info',
      'muted',
      'accent',
    ] as const;

    return (
      <div className="w-80 space-y-4">
        {variants.map((v) => (
          <div key={v} className="space-y-1">
            <Label className="text-xs capitalize">{v}</Label>
            <Slider defaultValue={[60]} variant={v} />
          </div>
        ))}
      </div>
    );
  },
};

export const TemperatureControl: Story = {
  render: () => {
    const [temp, setTemp] = React.useState([72]);

    return (
      <div className="w-72 space-y-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <Label>Temperature</Label>
          <span className="text-2xl font-bold">{temp[0]}°F</span>
        </div>
        <Slider
          value={temp}
          onValueChange={(v) => setTemp(v as number[])}
          min={60}
          max={80}
          step={1}
          variant="danger"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>60°F</span>
          <span>70°F</span>
          <span>80°F</span>
        </div>
      </div>
    );
  },
};

export const BrightnessControl: Story = {
  render: () => {
    const [brightness, setBrightness] = React.useState([50]);

    return (
      <div className="w-64 space-y-2">
        <Label>Brightness</Label>
        <Slider value={brightness} onValueChange={(v) => setBrightness(v as number[])} variant="warning" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Dark</span>
          <span>Bright</span>
        </div>
      </div>
    );
  },
};

export const Equalizer: Story = {
  render: () => {
    const [bass, setBass] = React.useState([50]);
    const [mid, setMid] = React.useState([50]);
    const [treble, setTreble] = React.useState([50]);

    const bands = [
      { label: 'Bass', value: bass, onChange: setBass, variant: 'danger' as const },
      { label: 'Mid', value: mid, onChange: setMid, variant: 'warning' as const },
      { label: 'Treble', value: treble, onChange: setTreble, variant: 'info' as const },
    ];

    return (
      <div className="flex h-48 items-end gap-8 rounded-lg border p-6">
        {bands.map((band) => (
          <div key={band.label} className="flex flex-col items-center gap-2">
            <Slider
              value={band.value}
              onValueChange={(v) => band.onChange(v as number[])}
              orientation="vertical"
              variant={band.variant}
            />
            <Label className="text-xs">{band.label}</Label>
            <span className="text-xs text-muted-foreground">{band.value[0]}</span>
          </div>
        ))}
      </div>
    );
  },
};
