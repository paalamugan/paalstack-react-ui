import type { AllColorVariant } from '@/shared/constants';

export const LOADING_ICON_SIZE = {
  default: 'size-4',
  xs: 'size-3',
  sm: 'size-3.5',
  md: 'size-4',
  lg: 'size-4',
  xl: 'size-5',
  icon: 'size-4',
  'icon-xs': 'size-3',
  'icon-sm': 'size-3.5',
  'icon-lg': 'size-5',
} as const;

export const BUTTON_SIZE = {
  default: 'h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
  xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
  sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
  md: 'h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
  lg: 'h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
  xl: 'h-10 gap-2 px-3.5 has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5',
  icon: 'size-8',
  'icon-xs':
    "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
  'icon-sm': 'size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg',
  'icon-lg': 'size-9',
} as const;

export const BUTTON_ROUNDED = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
} as const;

export const BUTTON_VARIANTS = ['solid', 'surface', 'outline', 'soft', 'ghost', 'link'] as const;
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export const BUTTON_COLOR_VARIANT_MAPPING: Record<ButtonVariant, Record<AllColorVariant, string>> = {
  solid: {
    gray: 'bg-gray-600 [a]:hover:bg-gray-700 text-gray-50',
    red: 'bg-red-600 [a]:hover:bg-red-700 text-red-50',
    orange: 'bg-orange-600 [a]:hover:bg-orange-700 text-orange-50',
    amber: 'bg-amber-600 [a]:hover:bg-amber-700 text-amber-50',
    yellow: 'bg-yellow-600 [a]:hover:bg-yellow-700 text-yellow-50',
    lime: 'bg-lime-600 [a]:hover:bg-lime-700 text-lime-50',
    green: 'bg-green-600 [a]:hover:bg-green-700 text-green-50',
    emerald: 'bg-emerald-600 [a]:hover:bg-emerald-700 text-emerald-50',
    teal: 'bg-teal-600 [a]:hover:bg-teal-700 text-teal-50',
    cyan: 'bg-cyan-600 [a]:hover:bg-cyan-700 text-cyan-50',
    sky: 'bg-sky-600 [a]:hover:bg-sky-700 text-sky-50',
    blue: 'bg-blue-600 [a]:hover:bg-blue-700 text-blue-50',
    indigo: 'bg-indigo-600 [a]:hover:bg-indigo-700 text-indigo-50',
    violet: 'bg-violet-600 [a]:hover:bg-violet-700 text-violet-50',
    purple: 'bg-purple-600 [a]:hover:bg-purple-700 text-purple-50',
    fuchsia: 'bg-fuchsia-600 [a]:hover:bg-fuchsia-700 text-fuchsia-50',
    pink: 'bg-pink-600 [a]:hover:bg-pink-700 text-pink-50',
    rose: 'bg-rose-600 [a]:hover:bg-rose-700 text-rose-50',
    primary: 'bg-primary [a]:hover:bg-primary/80 text-primary-foreground',
    secondary: 'bg-secondary [a]:hover:bg-secondary/80 text-secondary-foreground',
    tertiary: 'bg-tertiary [a]:hover:bg-tertiary/80 text-tertiary-foreground',
    destructive: 'bg-destructive [a]:hover:bg-destructive/80 text-destructive-foreground',
    info: 'bg-info [a]:hover:bg-info/80 text-info-foreground',
    danger: 'bg-danger [a]:hover:bg-danger/80 text-danger-foreground',
    success: 'bg-success [a]:hover:bg-success/80 text-success-foreground',
    warning: 'bg-warning [a]:hover:bg-warning/80 text-warning-foreground',
    muted: 'bg-muted [a]:hover:bg-muted/80 text-muted-foreground',
    accent: 'bg-accent [a]:hover:bg-accent/80 text-accent-foreground',
  },
  surface: {
    gray: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-200 focus-visible:ring-gray-500 focus-visible:border-none border border-current',
    red: 'bg-transparent text-red-600 hover:bg-red-50 focus:ring-red-200 focus-visible:ring-red-500 focus-visible:border-none border border-current',
    orange:
      'bg-transparent text-orange-600 hover:bg-orange-50 focus:ring-orange-200 focus-visible:ring-orange-500 focus-visible:border-none border border-current',
    amber:
      'bg-transparent text-amber-600 hover:bg-amber-50 focus:ring-amber-200 focus-visible:ring-amber-500 border focus-visible:border-none border-current',
    yellow:
      'bg-transparent text-yellow-600 hover:bg-yellow-50 focus:ring-yellow-200 focus-visible:ring-yellow-500 border focus-visible:border-none border-current',
    lime: 'bg-transparent text-lime-600 hover:bg-lime-50 focus:ring-lime-200 focus-visible:ring-lime-500 border focus-visible:border-none border-current',
    green:
      'bg-transparent text-green-600 hover:bg-green-50 focus:ring-green-200 focus-visible:ring-green-500 border focus-visible:border-none border-current',
    emerald:
      'bg-transparent text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-200 focus-visible:ring-emerald-500 border focus-visible:border-none border-current',
    teal: 'bg-transparent text-teal-600 hover:bg-teal-50 focus:ring-teal-200 focus-visible:ring-teal-500 border focus-visible:border-none border-current',
    cyan: 'bg-transparent text-cyan-600 hover:bg-cyan-50 focus:ring-cyan-200 focus-visible:ring-cyan-500 border focus-visible:border-none border-current',
    sky: 'bg-transparent text-sky-600 hover:bg-sky-50 focus:ring-sky-200 focus-visible:ring-sky-500 border focus-visible:border-none border-current',
    blue: 'bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-200 focus-visible:ring-blue-500 border focus-visible:border-none border-current',
    indigo:
      'bg-transparent text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-200 focus-visible:ring-indigo-500 border focus-visible:border-none border-current',
    violet:
      'bg-transparent text-violet-600 hover:bg-violet-50 focus:ring-violet-200 focus-visible:ring-violet-500 border focus-visible:border-none border-current',
    purple:
      'bg-transparent text-purple-600 hover:bg-purple-50 focus:ring-purple-200 focus-visible:ring-purple-500 border focus-visible:border-none border-current',
    fuchsia:
      'bg-transparent text-fuchsia-600 hover:bg-fuchsia-50 focus:ring-fuchsia-200 focus-visible:ring-fuchsia-500 border focus-visible:border-none border-current',
    pink: 'bg-transparent text-pink-600 hover:bg-pink-50 focus:ring-pink-200 focus-visible:ring-pink-500 border focus-visible:border-none border-current',
    rose: 'bg-transparent text-rose-600 hover:bg-rose-50 focus:ring-rose-200 focus-visible:ring-rose-500 border focus-visible:border-none border-current',
    primary:
      'bg-transparent text-primary hover:bg-primary/10 focus:ring-primary focus-visible:ring-primary border focus-visible:border-none border-current',
    secondary:
      'bg-transparent text-secondary-foreground/90 hover:bg-secondary-foreground/10 focus:ring-secondary-foreground focus-visible:ring-secondary-foreground border focus-visible:border-none border-current',
    tertiary:
      'bg-transparent text-tertiary hover:bg-tertiary/10 focus:ring-tertiary focus-visible:ring-tertiary border focus-visible:border-none border-current',
    destructive:
      'bg-transparent text-destructive hover:bg-destructive/10 focus:ring-destructive focus-visible:ring-destructive border focus-visible:border-none border-current',
    info: 'bg-transparent text-info hover:bg-info/10 focus:ring-info focus-visible:ring-info border focus-visible:border-none border-current',
    danger:
      'bg-transparent text-danger hover:bg-danger/10 focus:ring-danger focus-visible:ring-danger border focus-visible:border-none border-current',
    success:
      'bg-transparent text-success hover:bg-success/10 focus:ring-success focus-visible:ring-success border focus-visible:border-none border-current',
    warning:
      'bg-transparent text-warning hover:bg-warning/10 focus:ring-warning focus-visible:ring-warning border focus-visible:border-none border-current',
    muted:
      'bg-transparent text-muted-foreground hover:bg-muted focus:ring-muted focus-visible:ring-muted border focus-visible:border-none border-current',
    accent:
      'bg-transparent text-accent-foreground hover:bg-accent focus:ring-accent focus-visible:ring-accent border focus-visible:border-none border-current',
  },
  outline: {
    gray: 'bg-transparent text-gray-600 hover:bg-gray-600 hover:text-gray-50 focus-visible:ring-gray-500 border focus-visible:border-none border-current hover:border-gray-600',
    red: 'bg-transparent text-red-600 hover:bg-red-600 hover:text-red-50 focus-visible:ring-red-500 border focus-visible:border-none border-current hover:border-red-600',
    orange:
      'bg-transparent text-orange-600 hover:bg-orange-600 hover:text-orange-50 focus-visible:ring-orange-500 border focus-visible:border-none border-current hover:border-orange-600',
    amber:
      'bg-transparent text-amber-600 hover:bg-amber-600 hover:text-amber-50 focus-visible:ring-amber-500 border focus-visible:border-none border-current hover:border-amber-600',
    yellow:
      'bg-transparent text-yellow-600 hover:bg-yellow-600 hover:text-yellow-50 focus-visible:ring-yellow-500 border focus-visible:border-none border-current hover:border-yellow-600',
    lime: 'bg-transparent text-lime-600 hover:bg-lime-600 hover:text-lime-50 focus-visible:ring-lime-500 border focus-visible:border-none border-current hover:border-lime-600',
    green:
      'bg-transparent text-green-600 hover:bg-green-600 hover:text-green-50 focus-visible:ring-green-500 border focus-visible:border-none border-current hover:border-green-600',
    emerald:
      'bg-transparent text-emerald-600 hover:bg-emerald-600 hover:text-emerald-50 focus-visible:ring-emerald-500 border focus-visible:border-none border-current hover:border-emerald-600',
    teal: 'bg-transparent text-teal-600 hover:bg-teal-600 hover:text-teal-50 focus-visible:ring-teal-500 border focus-visible:border-none border-current hover:border-teal-600',
    cyan: 'bg-transparent text-cyan-600 hover:bg-cyan-600 hover:text-cyan-50 focus-visible:ring-cyan-500 border focus-visible:border-none border-current hover:border-cyan-600',
    sky: 'bg-transparent text-sky-600 hover:bg-sky-600 hover:text-sky-50 focus-visible:ring-sky-500 border focus-visible:border-none border-current hover:border-sky-600',
    blue: 'bg-transparent text-blue-600 hover:bg-blue-600 hover:text-blue-50 focus-visible:ring-blue-500 border focus-visible:border-none border-current hover:border-blue-600',
    indigo:
      'bg-transparent text-indigo-600 hover:bg-indigo-600 hover:text-indigo-50 focus-visible:ring-indigo-500 border focus-visible:border-none border-current hover:border-indigo-600',
    violet:
      'bg-transparent text-violet-600 hover:bg-violet-600 hover:text-violet-50 focus-visible:ring-violet-500 border focus-visible:border-none border-current hover:border-violet-600',
    purple:
      'bg-transparent text-purple-600 hover:bg-purple-600 hover:text-purple-50 focus-visible:ring-purple-500 border focus-visible:border-none border-current hover:border-purple-600',
    fuchsia:
      'bg-transparent text-fuchsia-600 hover:bg-fuchsia-600 hover:text-fuchsia-50 focus-visible:ring-fuchsia-500 border focus-visible:border-none border-current hover:border-fuchsia-600',
    pink: 'bg-transparent text-pink-600 hover:bg-pink-600 hover:text-pink-50 focus-visible:ring-pink-500 border focus-visible:border-none border-current hover:border-pink-600',
    rose: 'bg-transparent text-rose-600 hover:bg-rose-600 hover:text-rose-50 focus-visible:ring-rose-500 border focus-visible:border-none border-current hover:border-rose-600',
    primary:
      'bg-transparent text-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-primary border focus-visible:border-none border-current hover:border-primary',
    secondary:
      'bg-transparent text-secondary-foreground hover:bg-secondary-foreground/80 hover:text-secondary focus-visible:ring-secondary-foreground border focus-visible:border-none border-current hover:border-secondary',
    tertiary:
      'bg-transparent text-tertiary hover:bg-tertiary hover:text-tertiary-foreground focus-visible:ring-tertiary border focus-visible:border-none border-current hover:border-tertiary',
    destructive:
      'bg-transparent text-destructive hover:bg-destructive hover:text-destructive-foreground focus-visible:ring-destructive border focus-visible:border-none border-current hover:border-destructive',
    info: 'bg-transparent text-info hover:bg-info hover:text-info-foreground focus-visible:ring-info border focus-visible:border-none border-current hover:border-info',
    danger:
      'bg-transparent text-danger hover:bg-danger hover:text-danger-foreground focus-visible:ring-danger border focus-visible:border-none border-current hover:border-danger',
    success:
      'bg-transparent text-success hover:bg-success hover:text-success-foreground focus-visible:ring-success border focus-visible:border-none border-current hover:border-success',
    warning:
      'bg-transparent text-warning hover:bg-warning hover:text-warning-foreground focus-visible:ring-warning border focus-visible:border-none border-current hover:border-warning',
    muted:
      'bg-transparent text-muted-foreground hover:bg-muted hover:text-muted-foreground focus-visible:ring-muted border focus-visible:border-none border-current hover:border-muted',
    accent:
      'bg-transparent text-accent-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent border focus-visible:border-none border-current hover:border-accent',
  },
  soft: {
    gray: 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus-visible:ring-gray-600',
    red: 'bg-red-100 hover:bg-red-200 text-red-800 focus-visible:ring-red-600',
    orange: 'bg-orange-100 hover:bg-orange-200 text-orange-800 focus-visible:ring-orange-600',
    amber: 'bg-amber-100 hover:bg-amber-200 text-amber-800 focus-visible:ring-amber-600',
    yellow: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800 focus-visible:ring-yellow-600',
    lime: 'bg-lime-100 hover:bg-lime-200 text-lime-800 focus-visible:ring-lime-600',
    green: 'bg-green-100 hover:bg-green-200 text-green-800 focus-visible:ring-green-600',
    emerald: 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800 focus-visible:ring-emerald-600',
    teal: 'bg-teal-100 hover:bg-teal-200 text-teal-800 focus-visible:ring-teal-600',
    cyan: 'bg-cyan-100 hover:bg-cyan-200 text-cyan-800 focus-visible:ring-cyan-600',
    sky: 'bg-sky-100 hover:bg-sky-200 text-sky-800 focus-visible:ring-sky-600',
    blue: 'bg-blue-100 hover:bg-blue-200 text-blue-800 focus-visible:ring-blue-600',
    indigo: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-800 focus-visible:ring-indigo-600',
    violet: 'bg-violet-100 hover:bg-violet-200 text-violet-800 focus-visible:ring-violet-600',
    purple: 'bg-purple-100 hover:bg-purple-200 text-purple-800 focus-visible:ring-purple-600',
    fuchsia: 'bg-fuchsia-100 hover:bg-fuchsia-200 text-fuchsia-800 focus-visible:ring-fuchsia-600',
    pink: 'bg-pink-100 hover:bg-pink-200 text-pink-800 focus-visible:ring-pink-600',
    rose: 'bg-rose-100 hover:bg-rose-200 text-rose-800 focus-visible:ring-rose-600',
    primary: 'bg-primary-soft hover:bg-primary-soft/90 text-primary/90 focus-visible:ring-primary',
    secondary:
      'bg-secondary-soft hover:bg-secondary-soft/50 text-secondary-foreground/70 focus-visible:ring-secondary-foreground',
    tertiary: 'bg-tertiary-soft hover:bg-tertiary-soft/90 text-tertiary/90 focus-visible:ring-tertiary',
    destructive: 'bg-destructive-soft hover:bg-destructive-soft/90 text-destructive/90 focus-visible:ring-destructive',
    info: 'bg-info-soft hover:bg-info-soft/90 text-info/90 focus-visible:ring-info',
    danger: 'bg-danger-soft hover:bg-danger-soft/90 text-danger/90 focus-visible:ring-danger',
    success: 'bg-success-soft hover:bg-success-soft/90 text-success/90 focus-visible:ring-success',
    warning: 'bg-warning-soft hover:bg-warning-soft/90 text-warning focus-visible:ring-warning',
    muted: 'bg-muted/60 hover:bg-muted text-muted-foreground focus-visible:ring-muted',
    accent: 'bg-accent/60 hover:bg-accent text-accent-foreground focus-visible:ring-accent',
  },
  ghost: {
    gray: 'bg-transparent text-gray-600 hover:bg-gray-50 shadow-none focus-visible:ring-gray-500 focus-visible:border-gray-500',
    red: 'bg-transparent text-red-600 hover:bg-red-50 shadow-none focus-visible:ring-red-500 focus-visible:border-red-500',
    orange:
      'bg-transparent text-orange-600 hover:bg-orange-50 shadow-none focus-visible:ring-orange-500 focus-visible:border-orange-500',
    amber:
      'bg-transparent text-amber-600 hover:bg-amber-50 shadow-none focus-visible:ring-amber-500 focus-visible:border-amber-500',
    yellow:
      'bg-transparent text-yellow-600 hover:bg-yellow-50 shadow-none focus-visible:ring-yellow-500 focus-visible:border-yellow-500',
    lime: 'bg-transparent text-lime-600 hover:bg-lime-50 shadow-none focus-visible:ring-lime-500 focus-visible:border-lime-500',
    green:
      'bg-transparent text-green-600 hover:bg-green-50 shadow-none focus-visible:ring-green-500 focus-visible:border-green-500',
    emerald:
      'bg-transparent text-emerald-600 hover:bg-emerald-50 shadow-none focus-visible:ring-emerald-500 focus-visible:border-emerald-500',
    teal: 'bg-transparent text-teal-600 hover:bg-teal-50 shadow-none focus-visible:ring-teal-500 focus-visible:border-teal-500',
    cyan: 'bg-transparent text-cyan-600 hover:bg-cyan-50 shadow-none focus-visible:ring-cyan-500 focus-visible:border-cyan-500',
    sky: 'bg-transparent text-sky-600 hover:bg-sky-50 shadow-none focus-visible:ring-sky-500 focus-visible:border-sky-500',
    blue: 'bg-transparent text-blue-600 hover:bg-blue-50 shadow-none focus-visible:ring-blue-500 focus-visible:border-blue-500',
    indigo:
      'bg-transparent text-indigo-600 hover:bg-indigo-50 shadow-none focus-visible:ring-indigo-500 focus-visible:border-indigo-500',
    violet:
      'bg-transparent text-violet-600 hover:bg-violet-50 shadow-none focus-visible:ring-violet-500 focus-visible:border-violet-500',
    purple:
      'bg-transparent text-purple-600 hover:bg-purple-50 shadow-none focus-visible:ring-purple-500 focus-visible:border-purple-500',
    fuchsia:
      'bg-transparent text-fuchsia-600 hover:bg-fuchsia-50 shadow-none focus-visible:ring-fuchsia-500 focus-visible:border-fuchsia-500',
    pink: 'bg-transparent text-pink-600 hover:bg-pink-50 shadow-none focus-visible:ring-pink-500 focus-visible:border-pink-500',
    rose: 'bg-transparent text-rose-600 hover:bg-rose-50 shadow-none focus-visible:ring-rose-500 focus-visible:border-rose-500',
    primary:
      'bg-transparent text-primary hover:bg-primary/10 shadow-none focus-visible:ring-primary focus-visible:border-primary',
    secondary:
      'bg-transparent text-secondary-foreground/90 hover:bg-secondary-foreground/10 shadow-none focus-visible:ring-secondary-foreground focus-visible:border-secondary-foreground',
    tertiary:
      'bg-transparent text-tertiary hover:bg-tertiary/10 shadow-none focus-visible:ring-tertiary focus-visible:border-tertiary',
    destructive:
      'bg-transparent text-destructive hover:bg-destructive/10 shadow-none focus-visible:ring-destructive focus-visible:border-destructive',
    info: 'bg-transparent text-info hover:bg-info/10 shadow-none focus-visible:ring-info focus-visible:border-info',
    danger:
      'bg-transparent text-danger hover:bg-danger/10 shadow-none focus-visible:ring-danger focus-visible:border-danger',
    success:
      'bg-transparent text-success hover:bg-success/10 shadow-none focus-visible:ring-success focus-visible:border-success',
    warning:
      'bg-transparent text-warning hover:bg-warning/10 shadow-none focus-visible:ring-warning focus-visible:border-warning',
    muted:
      'bg-transparent text-muted-foreground hover:bg-muted shadow-none focus-visible:ring-muted focus-visible:border-muted',
    accent:
      'bg-transparent text-accent-foreground hover:bg-accent shadow-none focus-visible:ring-accent focus-visible:border-accent',
  },
  link: {
    gray: 'bg-transparent text-gray-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    red: 'bg-transparent text-red-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    orange:
      'bg-transparent text-orange-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    amber:
      'bg-transparent text-amber-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    yellow:
      'bg-transparent text-yellow-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    lime: 'bg-transparent text-lime-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    green:
      'bg-transparent text-green-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    emerald:
      'bg-transparent text-emerald-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    teal: 'bg-transparent text-teal-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    cyan: 'bg-transparent text-cyan-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    sky: 'bg-transparent text-sky-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    blue: 'bg-transparent text-blue-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    indigo:
      'bg-transparent text-indigo-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    violet:
      'bg-transparent text-violet-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    purple:
      'bg-transparent text-purple-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    fuchsia:
      'bg-transparent text-fuchsia-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    pink: 'bg-transparent text-pink-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    rose: 'bg-transparent text-rose-600 p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    primary:
      'bg-transparent text-primary p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    secondary:
      'bg-transparent text-secondary-foreground p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    tertiary:
      'bg-transparent text-tertiary p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    destructive:
      'bg-transparent text-destructive p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    info: 'bg-transparent text-info p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    danger:
      'bg-transparent text-danger p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    success:
      'bg-transparent text-success p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    warning:
      'bg-transparent text-warning p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    muted:
      'bg-transparent text-muted-foreground p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
    accent:
      'bg-transparent text-accent-foreground p-0 h-auto hover:bg-transparent underline-offset-4 hover:underline shadow-none focus-visible:ring-transparent',
  },
};
