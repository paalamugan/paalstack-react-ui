import * as React from 'react';

import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

import * as RechartsPrimitive from 'recharts';

import { cn } from '@/shared/lib';

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: '', dark: '.dark' } as const;

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> })
>;

interface ChartContextProps {
  config: ChartConfig;
}

const ChartContext = React.createContext<ChartContextProps | null>(null);

export const useChart = () => {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />');
  }

  return context;
};

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme ?? config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ?? itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join('\n')}
}
`,
          )
          .join('\n'),
      }}
    />
  );
};

export interface ChartContainerProps
  extends
    Omit<React.ComponentProps<'div'>, 'children'>,
    Pick<
      React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>,
      | 'initialDimension'
      | 'aspect'
      | 'debounce'
      | 'minHeight'
      | 'minWidth'
      | 'maxHeight'
      | 'height'
      | 'width'
      | 'onResize'
      | 'children'
    > {
  config: ChartConfig;
  innerResponsiveContainerStyle?: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['style'];
}

/**
 * Chart Component
 *
 * A collection of chart components built on Recharts for data visualization.
 * Includes Bar, Line, Area, Pie, Radar, and Radial charts with consistent theming.
 * Perfect for dashboards, analytics, reports, and data visualization.
 *
 * @example
 * // Basic bar chart
 * import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@paalstack/react-ui';
 * import { Bar, BarChart, XAxis, YAxis } from 'recharts';
 *
 * const chartData = [
 *   { month: 'Jan', sales: 4000 },
 *   { month: 'Feb', sales: 3000 },
 *   { month: 'Mar', sales: 5000 },
 * ];
 *
 * const chartConfig = {
 *   sales: { label: 'Sales', color: '#2563eb' },
 * };
 *
 * <ChartContainer config={chartConfig} className="h-[300px]">
 *   <BarChart data={chartData}>
 *     <XAxis dataKey="month" />
 *     <YAxis />
 *     <ChartTooltip content={<ChartTooltipContent />} />
 *     <Bar dataKey="sales" fill="var(--color-sales)" />
 *   </BarChart>
 * </ChartContainer>
 *
 * @example
 * // Line chart with multiple series
 * const chartData = [
 *   { month: 'Jan', revenue: 4000, expenses: 2400 },
 *   { month: 'Feb', revenue: 3000, expenses: 1398 },
 *   { month: 'Mar', revenue: 5000, expenses: 3800 },
 * ];
 *
 * const chartConfig = {
 *   revenue: { label: 'Revenue', color: '#10b981' },
 *   expenses: { label: 'Expenses', color: '#ef4444' },
 * };
 *
 * <ChartContainer config={chartConfig}>
 *   <LineChart data={chartData}>
 *     <XAxis dataKey="month" />
 *     <YAxis />
 *     <ChartTooltip content={<ChartTooltipContent />} />
 *     <Line dataKey="revenue" stroke="var(--color-revenue)" />
 *     <Line dataKey="expenses" stroke="var(--color-expenses)" />
 *   </LineChart>
 * </ChartContainer>
 *
 * @example
 * // Area chart
 * <ChartContainer config={chartConfig}>
 *   <AreaChart data={chartData}>
 *     <XAxis dataKey="month" />
 *     <YAxis />
 *     <ChartTooltip content={<ChartTooltipContent />} />
 *     <Area
 *       dataKey="value"
 *       fill="var(--color-value)"
 *       stroke="var(--color-value)"
 *     />
 *   </AreaChart>
 * </ChartContainer>
 *
 * @example
 * // Pie chart
 * const pieData = [
 *   { category: 'Product A', value: 400, fill: 'var(--color-productA)' },
 *   { category: 'Product B', value: 300, fill: 'var(--color-productB)' },
 *   { category: 'Product C', value: 200, fill: 'var(--color-productC)' },
 * ];
 *
 * const pieConfig = {
 *   productA: { label: 'Product A', color: '#3b82f6' },
 *   productB: { label: 'Product B', color: '#10b981' },
 *   productC: { label: 'Product C', color: '#f59e0b' },
 * };
 *
 * <ChartContainer config={pieConfig}>
 *   <PieChart>
 *     <Pie data={pieData} dataKey="value" nameKey="category" />
 *     <ChartTooltip content={<ChartTooltipContent />} />
 *   </PieChart>
 * </ChartContainer>
 *
 * @example
 * // Dashboard with multiple charts
 * <div className="grid gap-4 md:grid-cols-2">
 *   <Card>
 *     <CardHeader>
 *       <CardTitle>Monthly Sales</CardTitle>
 *     </CardHeader>
 *     <CardContent>
 *       <ChartContainer config={salesConfig} className="h-[200px]">
 *         <BarChart data={salesData}>
 *           <XAxis dataKey="month" />
 *           <ChartTooltip content={<ChartTooltipContent />} />
 *           <Bar dataKey="sales" fill="var(--color-sales)" />
 *         </BarChart>
 *       </ChartContainer>
 *     </CardContent>
 *   </Card>
 *
 *   <Card>
 *     <CardHeader>
 *       <CardTitle>Traffic Trend</CardTitle>
 *     </CardHeader>
 *     <CardContent>
 *       <ChartContainer config={trafficConfig} className="h-[200px]">
 *         <LineChart data={trafficData}>
 *           <XAxis dataKey="date" />
 *           <ChartTooltip content={<ChartTooltipContent />} />
 *           <Line dataKey="visitors" stroke="var(--color-visitors)" />
 *         </LineChart>
 *       </ChartContainer>
 *     </CardContent>
 *   </Card>
 * </div>
 *
 * @example
 * // With legend
 * import { ChartLegend, ChartLegendContent } from '@paalstack/react-ui';
 *
 * <ChartContainer config={chartConfig}>
 *   <BarChart data={chartData}>
 *     <XAxis dataKey="month" />
 *     <ChartTooltip content={<ChartTooltipContent />} />
 *     <ChartLegend content={<ChartLegendContent />} />
 *     <Bar dataKey="sales" fill="var(--color-sales)" />
 *     <Bar dataKey="profit" fill="var(--color-profit)" />
 *   </BarChart>
 * </ChartContainer>
 *
 * @example
 * // Responsive chart sizing
 * <ChartContainer
 *   config={chartConfig}
 *   className="h-[300px] w-full"
 *   minHeight={200}
 *   minWidth={300}
 * >
 *   <LineChart data={chartData}>
 *     <Line dataKey="value" />
 *   </LineChart>
 * </ChartContainer>
 *
 * @example
 * // Dark/Light theme support
 * const chartConfig = {
 *   sales: {
 *     label: 'Sales',
 *     theme: {
 *       light: '#3b82f6',
 *       dark: '#60a5fa'
 *     }
 *   }
 * };
 *
 * <ChartContainer config={chartConfig}>
 *   <BarChart data={chartData}>
 *     <Bar dataKey="sales" fill="var(--color-sales)" />
 *   </BarChart>
 * </ChartContainer>
 *
 * @tip See individual chart story files (BarChart.stories.tsx, LineChart.stories.tsx, etc.) for more examples
 * @tip All charts support Recharts props - see Recharts documentation for advanced customization
 * @tip Use ChartContainer as the wrapper for consistent styling and theming
 */
const ChartContainer: React.FC<ChartContainerProps> = ({
  id,
  config,
  initialDimension = { width: 320, height: 200 },
  className,
  children,
  innerResponsiveContainerStyle,
  ...props
}) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, '')}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer
          initialDimension={initialDimension}
          style={innerResponsiveContainerStyle}
        >
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

export type ChartTooltipContentProps = React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<'div'> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: 'line' | 'dot' | 'dashed';
    nameKey?: string;
    labelKey?: string;
  } & Omit<RechartsPrimitive.DefaultTooltipContentProps<ValueType, NameType>, 'accessibilityLayer'>;

const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({
  active,
  payload,
  className,
  indicator = 'dot',
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}) => {
  const { config } = useChart();

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const key = `${labelKey ?? item?.dataKey ?? item?.name ?? 'value'}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === 'string' ? (config[label]?.label ?? label) : itemConfig?.label;

    if (labelFormatter) {
      return <div className={cn('font-medium', labelClassName)}>{labelFormatter(value, payload)}</div>;
    }

    if (!value) {
      return null;
    }

    return <div className={cn('font-medium', labelClassName)}>{value}</div>;
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

  if (!active || !payload?.length) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== 'dot';

  return (
    <div
      className={cn(
        'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl',
        className,
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload
          .filter((item) => item.type !== 'none')
          .map((item, index) => {
            const key = `${nameKey ?? item.name ?? item.dataKey ?? 'value'}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color ?? item.payload?.fill ?? item.color;

            return (
              <div
                key={index}
                className={cn(
                  'flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground',
                  indicator === 'dot' && 'items-center',
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn('shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)', {
                            'h-2.5 w-2.5': indicator === 'dot',
                            'w-1': indicator === 'line',
                            'w-0 border-[1.5px] border-dashed bg-transparent': indicator === 'dashed',
                            'my-0.5': nestLabel && indicator === 'dashed',
                          })}
                          style={
                            {
                              '--color-bg': indicatorColor,
                              '--color-border': indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        'flex flex-1 justify-between leading-none',
                        nestLabel ? 'items-end' : 'items-center',
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">{itemConfig?.label ?? item.name}</span>
                      </div>
                      {(item.value !== null || item.value !== undefined) && (
                        <span className="font-mono font-medium text-foreground tabular-nums">
                          {typeof item.value === 'number' ? item.value.toLocaleString() : String(item.value)}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

const ChartLegend = RechartsPrimitive.Legend;

export type ChartLegendContentProps = React.ComponentProps<'div'> & {
  hideIcon?: boolean;
  nameKey?: string;
} & RechartsPrimitive.DefaultLegendContentProps;

const ChartLegendContent: React.FC<ChartLegendContentProps> = ({
  className,
  hideIcon = false,
  nameKey,
  payload,
  verticalAlign,
}) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div className={cn('flex items-center justify-center gap-4', verticalAlign === 'top' ? 'pb-3' : 'pt-3', className)}>
      {payload
        .filter((item) => item.type !== 'none')
        .map((item) => {
          const key = `${nameKey ?? item.dataKey ?? 'value'}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div
              key={item.value}
              className={cn('flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground')}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
    </div>
  );
};

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== 'object' || payload === null) {
    return undefined;
  }

  const payloadPayload =
    'payload' in payload && typeof payload.payload === 'object' && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === 'string') {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === 'string'
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key];
}

export { ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent };
export type { NameType, ValueType };
