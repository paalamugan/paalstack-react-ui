import * as React from 'react';

import type { ColorVariant } from '@/shared/constants';

import { Slider as SliderPrimitive } from '@base-ui/react/slider';

import { cn } from '@/shared/lib';

const sliderVariant: Record<ColorVariant, { track: string; range: string; thumb: string }> = {
  primary: {
    track: 'bg-primary/20',
    range: 'bg-primary',
    thumb: 'border-primary/50',
  },
  secondary: {
    track: 'bg-secondary/20',
    range: 'bg-secondary',
    thumb: 'border-secondary/50',
  },
  tertiary: {
    track: 'bg-tertiary/20',
    range: 'bg-tertiary',
    thumb: 'border-tertiary/50',
  },
  destructive: {
    track: 'bg-destructive/20',
    range: 'bg-destructive',
    thumb: 'border-destructive/50',
  },
  danger: {
    track: 'bg-danger/20',
    range: 'bg-danger',
    thumb: 'border-danger/50',
  },
  warning: {
    track: 'bg-warning/20',
    range: 'bg-warning',
    thumb: 'border-warning/50',
  },
  success: {
    track: 'bg-success/20',
    range: 'bg-success',
    thumb: 'border-success/50',
  },
  info: {
    track: 'bg-info/20',
    range: 'bg-info',
    thumb: 'border-info/50',
  },
  muted: {
    track: 'bg-muted/20',
    range: 'bg-muted',
    thumb: 'border-muted/50',
  },
  accent: {
    track: 'bg-accent/20',
    range: 'bg-accent',
    thumb: 'border-accent/50',
  },
};

export interface SliderProps<TValue extends number | readonly number[]> extends React.ComponentProps<
  typeof SliderPrimitive.Root<TValue>
> {
  /**
   * The variant of the slider
   */
  variant?: ColorVariant;
}

/**
 * Slider Component
 *
 * An input where the user selects a value from within a given range.
 * Perfect for volume controls, price ranges, ratings, and adjustable settings.
 *
 * @example
 * // Basic usage
 * import { Slider } from '@paalstack/react-ui';
 *
 * const [value, setValue] = useState([50]);
 *
 * <Slider value={value} onValueChange={setValue} />
 *
 * @example
 * // With label and display value
 * const [volume, setVolume] = useState([50]);
 *
 * <div className="space-y-2">
 *   <div className="flex items-center justify-between">
 *     <Label>Volume</Label>
 *     <span className="text-sm text-muted-foreground">{volume[0]}%</span>
 *   </div>
 *   <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
 * </div>
 *
 * @example
 * // Different color variants
 * <Slider variant="primary" defaultValue={[50]} />
 * <Slider variant="success" defaultValue={[50]} />
 * <Slider variant="danger" defaultValue={[50]} />
 * <Slider variant="warning" defaultValue={[50]} />
 * <Slider variant="info" defaultValue={[50]} />
 *
 * @example
 * // Price range slider
 * const [priceRange, setPriceRange] = useState([0, 1000]);
 *
 * <div className="space-y-2">
 *   <div className="flex items-center justify-between">
 *     <Label>Price Range</Label>
 *     <span className="text-sm text-muted-foreground">
 *       ${priceRange[0]} - ${priceRange[1]}
 *     </span>
 *   </div>
 *   <Slider
 *     value={priceRange}
 *     onValueChange={setPriceRange}
 *     min={0}
 *     max={5000}
 *     step={50}
 *     minStepsBetweenThumbs={1}
 *   />
 * </div>
 *
 * @example
 * // With min and max labels
 * const [brightness, setBrightness] = useState([50]);
 *
 * <div className="space-y-2">
 *   <Label>Brightness</Label>
 *   <Slider value={brightness} onValueChange={setBrightness} />
 *   <div className="flex justify-between text-xs text-muted-foreground">
 *     <span>Dark</span>
 *     <span>Bright</span>
 *   </div>
 * </div>
 *
 * @example
 * // Disabled state
 * <Slider defaultValue={[50]} disabled />
 *
 * @example
 * // Temperature control
 * const [temp, setTemp] = useState([72]);
 *
 * <Card>
 *   <CardContent className="pt-6">
 *     <div className="space-y-4">
 *       <div className="flex items-center justify-between">
 *         <Label>Temperature</Label>
 *         <span className="text-2xl font-bold">{temp[0]}°F</span>
 *       </div>
 *       <Slider
 *         value={temp}
 *         onValueChange={setTemp}
 *         min={60}
 *         max={80}
 *         step={1}
 *         variant="danger"
 *       />
 *       <div className="flex justify-between text-xs text-muted-foreground">
 *         <span>60°F</span>
 *         <span>70°F</span>
 *         <span>80°F</span>
 *       </div>
 *     </div>
 *   </CardContent>
 * </Card>
 *
 * @example
 * // Rating slider
 * const [rating, setRating] = useState([3]);
 *
 * <div className="space-y-2">
 *   <Label>Rate this product</Label>
 *   <Slider
 *     value={rating}
 *     onValueChange={setRating}
 *     min={1}
 *     max={5}
 *     step={1}
 *     variant="warning"
 *   />
 *   <div className="flex justify-between text-sm">
 *     {[1, 2, 3, 4, 5].map(num => (
 *       <span key={num} className={rating[0] >= num ? 'text-warning' : 'text-muted-foreground'}>
 *         ★
 *       </span>
 *     ))}
 *   </div>
 * </div>
 *
 * @example
 * // Zoom level control
 * const [zoom, setZoom] = useState([100]);
 *
 * <div className="flex items-center gap-4">
 *   <Button variant="outline" size="sm" onClick={() => setZoom([Math.max(50, zoom[0] - 10)])}>
 *     <MinusIcon />
 *   </Button>
 *   <div className="flex-1">
 *     <Slider
 *       value={zoom}
 *       onValueChange={setZoom}
 *       min={50}
 *       max={200}
 *       step={10}
 *     />
 *   </div>
 *   <Button variant="outline" size="sm" onClick={() => setZoom([Math.min(200, zoom[0] + 10)])}>
 *     <PlusIcon />
 *   </Button>
 *   <span className="text-sm text-muted-foreground w-12">{zoom[0]}%</span>
 * </div>
 *
 * @example
 * // Age range filter
 * const [ageRange, setAgeRange] = useState([18, 65]);
 *
 * <div className="space-y-2">
 *   <Label>Age Range</Label>
 *   <Slider
 *     value={ageRange}
 *     onValueChange={setAgeRange}
 *     min={0}
 *     max={100}
 *     step={1}
 *   />
 *   <div className="flex justify-between text-sm text-muted-foreground">
 *     <span>{ageRange[0]} years</span>
 *     <span>{ageRange[1]} years</span>
 *   </div>
 * </div>
 *
 * @example
 * // Audio player volume
 * const [volume, setVolume] = useState([75]);
 * const [muted, setMuted] = useState(false);
 *
 * <div className="flex items-center gap-3">
 *   <IconButton
 *     icon={muted ? <VolumeXIcon /> : <VolumeIcon />}
 *     onClick={() => setMuted(!muted)}
 *   />
 *   <Slider
 *     value={muted ? [0] : volume}
 *     onValueChange={(val) => {
 *       setVolume(val);
 *       if (val[0] > 0) setMuted(false);
 *     }}
 *     max={100}
 *     step={1}
 *     className="flex-1"
 *   />
 *   <span className="text-sm text-muted-foreground w-8">{muted ? 0 : volume[0]}</span>
 * </div>
 *
 * @example
 * // Progress/seek bar (media player)
 * const [position, setPosition] = useState([0]);
 * const duration = 180; // 3 minutes in seconds
 *
 * <div className="space-y-2">
 *   <Slider
 *     value={position}
 *     onValueChange={setPosition}
 *     max={duration}
 *     step={1}
 *     variant="primary"
 *   />
 *   <div className="flex justify-between text-xs text-muted-foreground">
 *     <span>{formatTime(position[0])}</span>
 *     <span>{formatTime(duration)}</span>
 *   </div>
 * </div>
 *
 * @example
 * // Settings with multiple sliders
 * <div className="space-y-6">
 *   <div className="space-y-2">
 *     <div className="flex justify-between">
 *       <Label>Bass</Label>
 *       <span className="text-sm text-muted-foreground">{bass[0]}</span>
 *     </div>
 *     <Slider value={bass} onValueChange={setBass} min={-10} max={10} step={1} />
 *   </div>
 *
 *   <div className="space-y-2">
 *     <div className="flex justify-between">
 *       <Label>Treble</Label>
 *       <span className="text-sm text-muted-foreground">{treble[0]}</span>
 *     </div>
 *     <Slider value={treble} onValueChange={setTreble} min={-10} max={10} step={1} />
 *   </div>
 *
 *   <div className="space-y-2">
 *     <div className="flex justify-between">
 *       <Label>Balance</Label>
 *       <span className="text-sm text-muted-foreground">{balance[0]}</span>
 *     </div>
 *     <Slider value={balance} onValueChange={setBalance} min={-10} max={10} step={1} />
 *   </div>
 * </div>
 *
 * @example
 * // Donation amount slider
 * const [amount, setAmount] = useState([25]);
 *
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Choose Your Donation Amount</CardTitle>
 *   </CardHeader>
 *   <CardContent>
 *     <div className="space-y-4">
 *       <div className="text-center">
 *         <span className="text-4xl font-bold text-primary">${amount[0]}</span>
 *       </div>
 *       <Slider
 *         value={amount}
 *         onValueChange={setAmount}
 *         min={5}
 *         max={500}
 *         step={5}
 *         variant="success"
 *       />
 *       <div className="flex justify-between text-sm text-muted-foreground">
 *         <span>$5</span>
 *         <span>$500</span>
 *       </div>
 *     </div>
 *   </CardContent>
 * </Card>
 */
const Slider = <TValue extends number | readonly number[] = number | readonly number[]>({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  variant = 'primary',
  ...props
}: SliderProps<TValue>) => {
  const sliderVariantColor = sliderVariant[variant || 'primary'];

  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max],
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      data-qa="slider"
      className={cn('data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full', className)}
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control
        data-slot="slider-control"
        data-qa="slider-control"
        className="relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col"
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          data-qa="slider-track"
          className={cn(
            'relative grow overflow-hidden rounded-full select-none data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1',
            sliderVariantColor.track,
          )}
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            data-qa="slider-range"
            className={cn(
              'select-none data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
              sliderVariantColor.range,
            )}
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            data-slot="slider-thumb"
            data-qa="slider-thumb"
            className={cn(
              'relative block size-3 shrink-0 rounded-full border bg-white ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50',
              sliderVariantColor.thumb,
            )}
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
};
Slider.displayName = 'Slider';

export { Slider, sliderVariant };
