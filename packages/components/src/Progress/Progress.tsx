import type { VariantProps } from 'class-variance-authority';

import { Progress as ProgressPrimitive } from '@base-ui/react/progress';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib';

// Variant helpers

const progressTrackVariants = cva('relative flex h-1 w-full items-center overflow-x-hidden rounded-full', {
  variants: {
    variant: {
      default: 'bg-primary/20',
      primary: 'bg-primary/20',
      secondary: 'bg-secondary/20',
      danger: 'bg-danger/20',
      warning: 'bg-warning/20',
      success: 'bg-success/20',
      info: 'bg-info/20',
      dark: 'bg-foreground/20',
      accent: 'bg-accent/20',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const progressIndicatorVariants = cva('h-full transition-all', {
  variants: {
    variant: {
      default: 'bg-primary',
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      danger: 'bg-danger',
      warning: 'bg-warning',
      success: 'bg-success',
      info: 'bg-info',
      dark: 'bg-foreground',
      accent: 'bg-accent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

// Composable primitives (Composition API)

const ProgressRoot = ({ ...props }: ProgressPrimitive.Root.Props) => (
  <ProgressPrimitive.Root data-slot="progress" data-qa="progress" {...props} />
);
ProgressRoot.displayName = 'ProgressRoot';

const ProgressTrack = ({ className, ...props }: ProgressPrimitive.Track.Props) => (
  <ProgressPrimitive.Track
    data-slot="progress-track"
    data-qa="progress-track"
    className={cn('relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted', className)}
    {...props}
  />
);
ProgressTrack.displayName = 'ProgressTrack';

const ProgressIndicator = ({ className, ...props }: ProgressPrimitive.Indicator.Props) => (
  <ProgressPrimitive.Indicator
    data-slot="progress-indicator"
    data-qa="progress-indicator"
    className={cn('h-full bg-primary transition-all', className)}
    {...props}
  />
);
ProgressIndicator.displayName = 'ProgressIndicator';

const ProgressLabel = ({ className, ...props }: ProgressPrimitive.Label.Props) => (
  <ProgressPrimitive.Label
    data-slot="progress-label"
    data-qa="progress-label"
    className={cn('text-sm font-medium', className)}
    {...props}
  />
);
ProgressLabel.displayName = 'ProgressLabel';

const ProgressValue = ({ className, ...props }: ProgressPrimitive.Value.Props) => (
  <ProgressPrimitive.Value
    data-slot="progress-value"
    data-qa="progress-value"
    className={cn('ml-auto text-sm text-muted-foreground tabular-nums', className)}
    {...props}
  />
);
ProgressValue.displayName = 'ProgressValue';

// Props API

export interface ProgressProps
  extends Omit<ProgressPrimitive.Root.Props, 'value'>, VariantProps<typeof progressIndicatorVariants> {
  /**
   * The value of the progress bar. Should be between 0 and `max`.
   */
  value?: number | null;
  /**
   * The maximum value of the progress bar.
   * @default 100
   */
  max?: number;
}

/**
 * Progress Component
 *
 * Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 * Perfect for file uploads, form completion, loading states, and multi-step processes.
 *
 * @example
 * // Basic usage
 * import { Progress } from '@paalstack/react-ui';
 *
 * <Progress value={50} />
 *
 * @example
 * // Different color variants
 * <Progress value={25} variant="primary" />
 * <Progress value={50} variant="success" />
 * <Progress value={75} variant="warning" />
 * <Progress value={90} variant="danger" />
 * <Progress value={60} variant="info" />
 *
 * @example
 * // With label and value display (Composition API)
 * import { ProgressRoot, ProgressLabel, ProgressValue, ProgressTrack, ProgressIndicator } from '@paalstack/react-ui';
 *
 * <ProgressRoot value={66}>
 *   <ProgressLabel>Loading…</ProgressLabel>
 *   <ProgressValue />
 *   <ProgressTrack>
 *     <ProgressIndicator />
 *   </ProgressTrack>
 * </ProgressRoot>
 *
 * @example
 * // File upload progress
 * const [uploadProgress, setUploadProgress] = useState(0);
 *
 * <div>
 *   <Progress value={uploadProgress} variant="primary" />
 *   <p className="text-sm text-center mt-2">{Math.round(uploadProgress)}% uploaded</p>
 * </div>
 *
 * @example
 * // Multi-step form progress
 * const steps = 5;
 * const currentStep = 3;
 * const progress = (currentStep / steps) * 100;
 *
 * <div>
 *   <div className="flex justify-between mb-2">
 *     <span className="text-sm">Step {currentStep} of {steps}</span>
 *     <span className="text-sm">{Math.round(progress)}%</span>
 *   </div>
 *   <Progress value={progress} variant="success" />
 * </div>
 *
 * @example
 * // Dynamic color based on value
 * const getVariant = (value) => {
 *   if (value < 30) return 'danger';
 *   if (value < 70) return 'warning';
 *   return 'success';
 * };
 *
 * <Progress value={progress} variant={getVariant(progress)} />
 *
 * @example
 * // Animated progress
 * const [progress, setProgress] = useState(0);
 *
 * useEffect(() => {
 *   const timer = setInterval(() => {
 *     setProgress(prev => (prev >= 100 ? 0 : prev + 10));
 *   }, 500);
 *   return () => clearInterval(timer);
 * }, []);
 *
 * <Progress value={progress} variant="primary" />
 *
 * @example
 * // Custom size
 * <Progress value={75} className="[&_[data-slot=progress-track]]:h-4" />
 *
 * @tip Use the Composition API (ProgressRoot / ProgressTrack / ProgressIndicator) for full control
 * @tip ProgressLabel and ProgressValue render accessible label/value text via @base-ui/react primitives
 * @tip The variant prop controls both the track background and indicator color
 */
const Progress = ({ className, children, value, max = 100, variant = 'default', ...props }: ProgressProps) => (
  <ProgressRoot
    value={value ?? null}
    max={max}
    className={cn('flex flex-wrap gap-3', className)}
    data-qa="progress"
    {...props}
  >
    {children}
    <ProgressTrack className={progressTrackVariants({ variant })}>
      <ProgressIndicator className={progressIndicatorVariants({ variant })} />
    </ProgressTrack>
  </ProgressRoot>
);
Progress.displayName = 'Progress';

export {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValue,
  progressIndicatorVariants,
  progressTrackVariants,
};
