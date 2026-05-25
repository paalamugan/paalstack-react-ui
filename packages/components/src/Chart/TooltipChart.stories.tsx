import type { Meta, StoryObj } from '@storybook/react';
import type * as React from 'react';
import type { ChartConfig } from './Chart';

import { Bar, BarChart as RechartsBarChart, XAxis } from 'recharts';

import { LuFootprints, LuWaves } from '@/icons/lu';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../Card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './Chart';

const meta: Meta = {
  title: 'Charts/Tooltip',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Tooltip
const chartData = [
  { date: '2024-07-15', running: 450, swimming: 300 },
  { date: '2024-07-16', running: 380, swimming: 420 },
  { date: '2024-07-17', running: 520, swimming: 120 },
  { date: '2024-07-18', running: 140, swimming: 550 },
  { date: '2024-07-19', running: 600, swimming: 350 },
  { date: '2024-07-20', running: 480, swimming: 400 },
];

const chartConfig = {
  running: {
    label: 'Running',
    color: 'var(--chart-1)',
  },
  swimming: {
    label: 'Swimming',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Tooltip - Default</CardTitle>
        <CardDescription>Default tooltip with ChartTooltipContent.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[250px]">
          <RechartsBarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString('en-US', {
                  weekday: 'short',
                });
              }}
            />
            <Bar dataKey="running" stackId="a" fill="var(--color-running)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="swimming" stackId="a" fill="var(--color-swimming)" radius={[4, 4, 0, 0]} />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} defaultIndex={1} />
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

// Tooltip with Line Indicator
const indicatorLineChartData = [
  { date: '2024-07-15', running: 450, swimming: 300 },
  { date: '2024-07-16', running: 380, swimming: 420 },
  { date: '2024-07-17', running: 520, swimming: 120 },
  { date: '2024-07-18', running: 140, swimming: 550 },
  { date: '2024-07-19', running: 600, swimming: 350 },
  { date: '2024-07-20', running: 480, swimming: 400 },
];

const indicatorLineChartConfig = {
  running: {
    label: 'Running',
    color: 'var(--chart-1)',
  },
  swimming: {
    label: 'Swimming',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export const IndicatorLine: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Tooltip - Line Indicator</CardTitle>
        <CardDescription>Tooltip with line indicator.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={indicatorLineChartConfig} className="max-h-[250px]">
          <RechartsBarChart accessibilityLayer data={indicatorLineChartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString('en-US', {
                  weekday: 'short',
                });
              }}
            />
            <Bar dataKey="running" stackId="a" fill="var(--color-running)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="swimming" stackId="a" fill="var(--color-swimming)" radius={[4, 4, 0, 0]} />
            <ChartTooltip content={<ChartTooltipContent indicator="line" />} cursor={false} defaultIndex={1} />
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

// Tooltip with No Indicator
const indicatorNoneChartData = [
  { date: '2024-07-15', running: 450, swimming: 300 },
  { date: '2024-07-16', running: 380, swimming: 420 },
  { date: '2024-07-17', running: 520, swimming: 120 },
  { date: '2024-07-18', running: 140, swimming: 550 },
  { date: '2024-07-19', running: 600, swimming: 350 },
  { date: '2024-07-20', running: 480, swimming: 400 },
];

const indicatorNoneChartConfig = {
  running: {
    label: 'Running',
    color: 'var(--chart-1)',
  },
  swimming: {
    label: 'Swimming',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export const IndicatorNone: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Tooltip - No Indicator</CardTitle>
        <CardDescription>Tooltip with no indicator.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={indicatorNoneChartConfig} className="max-h-[250px]">
          <RechartsBarChart accessibilityLayer data={indicatorNoneChartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString('en-US', {
                  weekday: 'short',
                });
              }}
            />
            <Bar dataKey="running" stackId="a" fill="var(--color-running)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="swimming" stackId="a" fill="var(--color-swimming)" radius={[4, 4, 0, 0]} />
            <ChartTooltip content={<ChartTooltipContent hideIndicator />} cursor={false} defaultIndex={1} />
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

// Tooltip with Custom Label
const labelCustomChartData = [
  { date: '2024-07-15', running: 450, swimming: 300 },
  { date: '2024-07-16', running: 380, swimming: 420 },
  { date: '2024-07-17', running: 520, swimming: 120 },
  { date: '2024-07-18', running: 140, swimming: 550 },
  { date: '2024-07-19', running: 600, swimming: 350 },
  { date: '2024-07-20', running: 480, swimming: 400 },
];

const labelCustomChartConfig = {
  activities: {
    label: 'Activities',
  },
  running: {
    label: 'Running',
    color: 'var(--chart-1)',
  },
  swimming: {
    label: 'Swimming',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export const LabelCustom: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Tooltip - Custom label</CardTitle>
        <CardDescription>Tooltip with custom label from chartConfig.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={labelCustomChartConfig} className="max-h-[250px]">
          <RechartsBarChart accessibilityLayer data={labelCustomChartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString('en-US', {
                  weekday: 'short',
                });
              }}
            />
            <Bar dataKey="running" stackId="a" fill="var(--color-running)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="swimming" stackId="a" fill="var(--color-swimming)" radius={[4, 4, 0, 0]} />
            <ChartTooltip
              content={<ChartTooltipContent labelKey="activities" indicator="line" />}
              cursor={false}
              defaultIndex={1}
            />
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

// Tooltip with Label Formatter
const labelFormatterChartData = [
  { date: '2024-07-15', running: 450, swimming: 300 },
  { date: '2024-07-16', running: 380, swimming: 420 },
  { date: '2024-07-17', running: 520, swimming: 120 },
  { date: '2024-07-18', running: 140, swimming: 550 },
  { date: '2024-07-19', running: 600, swimming: 350 },
  { date: '2024-07-20', running: 480, swimming: 400 },
];

const labelFormatterChartConfig = {
  running: {
    label: 'Running',
    color: 'var(--chart-1)',
  },
  swimming: {
    label: 'Swimming',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export const LabelFormatter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Tooltip - Label Formatter</CardTitle>
        <CardDescription>Tooltip with label formatter.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={labelFormatterChartConfig} className="max-h-[250px]">
          <RechartsBarChart accessibilityLayer data={labelFormatterChartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString('en-US', {
                  weekday: 'short',
                });
              }}
            />
            <Bar dataKey="running" stackId="a" fill="var(--color-running)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="swimming" stackId="a" fill="var(--color-swimming)" radius={[4, 4, 0, 0]} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    });
                  }}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

// Tooltip with No Label
const labelNoneChartData = [
  { date: '2024-07-15', running: 450, swimming: 300 },
  { date: '2024-07-16', running: 380, swimming: 420 },
  { date: '2024-07-17', running: 520, swimming: 120 },
  { date: '2024-07-18', running: 140, swimming: 550 },
  { date: '2024-07-19', running: 600, swimming: 350 },
  { date: '2024-07-20', running: 480, swimming: 400 },
];

const labelNoneChartConfig = {
  running: {
    label: 'Running',
    color: 'var(--chart-1)',
  },
  swimming: {
    label: 'Swimming',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export const LabelNone: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Tooltip - No Label</CardTitle>
        <CardDescription>Tooltip with no label.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={labelNoneChartConfig} className="max-h-[250px]">
          <RechartsBarChart accessibilityLayer data={labelNoneChartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString('en-US', {
                  weekday: 'short',
                });
              }}
            />
            <Bar dataKey="running" stackId="a" fill="var(--color-running)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="swimming" stackId="a" fill="var(--color-swimming)" radius={[4, 4, 0, 0]} />
            <ChartTooltip content={<ChartTooltipContent hideIndicator hideLabel />} cursor={false} defaultIndex={1} />
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

// Tooltip with Formatter
const formatterChartData = [
  { date: '2024-07-15', running: 450, swimming: 300 },
  { date: '2024-07-16', running: 380, swimming: 420 },
  { date: '2024-07-17', running: 520, swimming: 120 },
  { date: '2024-07-18', running: 140, swimming: 550 },
  { date: '2024-07-19', running: 600, swimming: 350 },
  { date: '2024-07-20', running: 480, swimming: 400 },
];

const formatterChartConfig = {
  running: {
    label: 'Running',
    color: 'var(--chart-1)',
  },
  swimming: {
    label: 'Swimming',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export const Formatter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Tooltip - Formatter</CardTitle>
        <CardDescription>Tooltip with custom formatter .</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={formatterChartConfig} className="max-h-[250px]">
          <RechartsBarChart accessibilityLayer data={formatterChartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString('en-US', {
                  weekday: 'short',
                });
              }}
            />
            <Bar dataKey="running" stackId="a" fill="var(--color-running)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="swimming" stackId="a" fill="var(--color-swimming)" radius={[4, 4, 0, 0]} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value, name) => (
                    <div className="flex min-w-[130px] items-center text-xs text-muted-foreground">
                      {formatterChartConfig[name as keyof typeof formatterChartConfig]?.label || name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium text-foreground tabular-nums">
                        {value}
                        <span className="font-normal text-muted-foreground">kcal</span>
                      </div>
                    </div>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

// Tooltip with Icons
const iconsChartData = [
  { date: '2024-07-15', running: 450, swimming: 300 },
  { date: '2024-07-16', running: 380, swimming: 420 },
  { date: '2024-07-17', running: 520, swimming: 120 },
  { date: '2024-07-18', running: 140, swimming: 550 },
  { date: '2024-07-19', running: 600, swimming: 350 },
  { date: '2024-07-20', running: 480, swimming: 400 },
];

const iconsChartConfig = {
  running: {
    label: 'Running',
    color: 'var(--chart-1)',
    icon: LuFootprints,
  },
  swimming: {
    label: 'Swimming',
    color: 'var(--chart-2)',
    icon: LuWaves,
  },
} satisfies ChartConfig;

export const Icons: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Tooltip - Icons</CardTitle>
        <CardDescription>Tooltip with icons.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={iconsChartConfig} className="max-h-[250px]">
          <RechartsBarChart accessibilityLayer data={iconsChartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString('en-US', {
                  weekday: 'short',
                });
              }}
            />
            <Bar dataKey="running" stackId="a" fill="var(--color-running)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="swimming" stackId="a" fill="var(--color-swimming)" radius={[4, 4, 0, 0]} />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} defaultIndex={1} />
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

// Tooltip Advanced
const advancedChartData = [
  { date: '2024-07-15', running: 450, swimming: 300 },
  { date: '2024-07-16', running: 380, swimming: 420 },
  { date: '2024-07-17', running: 520, swimming: 120 },
  { date: '2024-07-18', running: 140, swimming: 550 },
  { date: '2024-07-19', running: 600, swimming: 350 },
  { date: '2024-07-20', running: 480, swimming: 400 },
];

const advancedChartConfig = {
  running: {
    label: 'Running',
    color: 'var(--chart-1)',
  },
  swimming: {
    label: 'Swimming',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export const Advanced: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Tooltip - Advanced</CardTitle>
        <CardDescription>Tooltip with custom formatter and total.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={advancedChartConfig} className="max-h-[250px]">
          <RechartsBarChart accessibilityLayer data={advancedChartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString('en-US', {
                  weekday: 'short',
                });
              }}
            />
            <Bar dataKey="running" stackId="a" fill="var(--color-running)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="swimming" stackId="a" fill="var(--color-swimming)" radius={[4, 4, 0, 0]} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-[180px]"
                  formatter={(value, name, item, index) => (
                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-(--color-bg)"
                        style={
                          {
                            '--color-bg': `var(--color-${name})`,
                          } as React.CSSProperties
                        }
                      />
                      {advancedChartConfig[name as keyof typeof advancedChartConfig]?.label || name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium text-foreground tabular-nums">
                        {value}
                        <span className="font-normal text-muted-foreground">kcal</span>
                      </div>
                      {/* Add this after the last item */}
                      {index === 1 && (
                        <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                          Total
                          <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium text-foreground tabular-nums">
                            {item.payload.running + item.payload.swimming}
                            <span className="font-normal text-muted-foreground">kcal</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};
