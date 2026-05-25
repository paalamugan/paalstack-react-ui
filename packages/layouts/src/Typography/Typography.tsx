import type { ComponentWithAs } from '@/shared/types';
import type { BoxProps } from '../Box';

import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { Box } from '../Box';

/**
 * TypographyH1 Component
 *
 * The largest and most prominent heading element for page titles and main headings.
 * Features centered text, extrabold weight, and responsive sizing.
 *
 * @example
 * // Basic usage
 * import { TypographyH1 } from '@paalstack/react-ui';
 *
 * <TypographyH1>Welcome to Our Platform</TypographyH1>
 *
 * @example
 * // Landing page hero
 * <TypographyH1>Build Modern Web Applications</TypographyH1>
 *
 * @example
 * // With custom styling
 * <TypographyH1 className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">
 *   Gradient Title
 * </TypographyH1>
 *
 * @example
 * // Marketing page
 * <TypographyH1>The Future of Development</TypographyH1>
 * <TypographyLead>Create amazing experiences with our tools</TypographyLead>
 *
 * @tip Centered by default with text-balance
 * @tip Responsive: text-4xl on mobile, text-5xl on large screens
 * @tip Includes scroll-m-20 for smooth anchor scrolling
 */
export const TypographyH1: ComponentWithAs<'h1', BoxProps> = forwardRef<BoxProps, 'h1'>(
  ({ className, ...props }, ref) => (
    <Box
      as="h1"
      ref={ref}
      className={cn(
        'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance lg:text-5xl',
        className,
      )}
      data-qa="h1"
      {...props}
    />
  ),
);
TypographyH1.displayName = 'TypographyH1';

/**
 * TypographyH2 Component
 *
 * Section heading with bottom border for visual separation.
 * Perfect for major sections within a page.
 *
 * @example
 * // Basic usage
 * import { TypographyH2 } from '@paalstack/react-ui';
 *
 * <TypographyH2>Features</TypographyH2>
 *
 * @example
 * // Article sections
 * <TypographyH2>Introduction</TypographyH2>
 * <TypographyP>Section content here...</TypographyP>
 * <TypographyH2>Methodology</TypographyH2>
 * <TypographyP>More content...</TypographyP>
 *
 * @example
 * // Documentation page
 * <TypographyH2>Installation</TypographyH2>
 * <TypographyP>Run npm install...</TypographyP>
 * <TypographyH2>Usage</TypographyH2>
 * <TypographyP>Import the component...</TypographyP>
 *
 * @tip Includes bottom border by default
 * @tip First TypographyH2 has no top margin (first:mt-0)
 */
export const TypographyH2: ComponentWithAs<'h2', BoxProps> = forwardRef<BoxProps, 'h2'>(
  ({ className, ...props }, ref) => (
    <Box
      as="h2"
      ref={ref}
      className={cn('scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0', className)}
      data-qa="h2"
      {...props}
    />
  ),
);
TypographyH2.displayName = 'TypographyH2';

/**
 * TypographyH3 Component
 *
 * Subsection heading for organizing content within major sections.
 * Smaller than TypographyH2 but still prominent.
 *
 * @example
 * // Basic usage
 * import { TypographyH3 } from '@paalstack/react-ui';
 *
 * <TypographyH3>Getting Started</TypographyH3>
 *
 * @example
 * // Card titles
 * <Card>
 *   <TypographyH3>Product Features</TypographyH3>
 *   <TypographyP>Description of features...</TypographyP>
 * </Card>
 *
 * @example
 * // Documentation subsections
 * <TypographyH2>API Reference</TypographyH2>
 * <TypographyH3>Components</TypographyH3>
 * <TypographyP>Component documentation...</TypographyP>
 * <TypographyH3>Hooks</TypographyH3>
 * <TypographyP>Hook documentation...</TypographyP>
 *
 * @tip Use for subsections within TypographyH2 sections
 * @tip No border by default
 */
export const TypographyH3: ComponentWithAs<'h3', BoxProps> = forwardRef<BoxProps, 'h3'>(
  ({ className, ...props }, ref) => (
    <Box
      as="h3"
      ref={ref}
      className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}
      data-qa="h3"
      {...props}
    />
  ),
);
TypographyH3.displayName = 'TypographyH3';

/**
 * TypographyH4 Component
 *
 * Minor heading for smaller subsections and groupings.
 *
 * @example
 * // Basic usage
 * import { TypographyH4 } from '@paalstack/react-ui';
 *
 * <TypographyH4>Configuration Options</TypographyH4>
 *
 * @example
 * // Sidebar sections
 * <TypographyH4>Navigation</TypographyH4>
 * <nav>...</nav>
 *
 * @example
 * // Settings groups
 * <TypographyH4>Privacy Settings</TypographyH4>
 * <TypographyP>Manage your privacy preferences</TypographyP>
 *
 * @tip Use for minor section headings
 * @tip Good for sidebar and panel titles
 */
export const TypographyH4: ComponentWithAs<'h4', BoxProps> = forwardRef<BoxProps, 'h4'>(
  ({ className, ...props }, ref) => (
    <Box
      as="h4"
      ref={ref}
      className={cn('scroll-m-20 text-xl font-semibold tracking-normal', className)}
      data-qa="h4"
      {...props}
    />
  ),
);
TypographyH4.displayName = 'TypographyH4';

/**
 * TypographyH5 Component
 *
 * Small heading for detailed subsections.
 *
 * @example
 * // Basic usage
 * import { TypographyH5 } from '@paalstack/react-ui';
 *
 * <TypographyH5>Advanced Features</TypographyH5>
 *
 * @example
 * // Card subtitles
 * <TypographyH5>Step 1: Setup</TypographyH5>
 *
 * @tip Use for detailed subsections
 */
export const TypographyH5: ComponentWithAs<'h5', BoxProps> = forwardRef<BoxProps, 'h5'>(
  ({ className, ...props }, ref) => (
    <Box
      as="h5"
      ref={ref}
      className={cn('scroll-m-20 text-lg font-semibold tracking-tight', className)}
      data-qa="h5"
      {...props}
    />
  ),
);
TypographyH5.displayName = 'TypographyH5';

/**
 * TypographyH6 Component
 *
 * The smallest heading element for minor labels and groupings.
 *
 * @example
 * // Basic usage
 * import { TypographyH6 } from '@paalstack/react-ui';
 *
 * <TypographyH6>Metadata</TypographyH6>
 *
 * @example
 * // Form section labels
 * <TypographyH6>Personal Information</TypographyH6>
 *
 * @tip Use for the smallest section labels
 */
export const TypographyH6: ComponentWithAs<'h6', BoxProps> = forwardRef<BoxProps, 'h6'>(
  ({ className, ...props }, ref) => (
    <Box
      as="h6"
      ref={ref}
      className={cn('scroll-m-20 text-base font-semibold tracking-tight', className)}
      data-qa="h6"
      {...props}
    />
  ),
);
TypographyH6.displayName = 'TypographyH6';

/**
 * TypographyP Component
 *
 * Standard paragraph text with optimal line height and automatic spacing.
 * First paragraph has no top margin for better layout control.
 *
 * @example
 * // Basic usage
 * import { TypographyP } from '@paalstack/react-ui';
 *
 * <TypographyP>This is a paragraph of text.</TypographyP>
 *
 * @example
 * // Multiple paragraphs
 * <TypographyP>First paragraph with some content.</TypographyP>
 * <TypographyP>Second paragraph automatically gets top margin.</TypographyP>
 * <TypographyP>Third paragraph continues the flow.</TypographyP>
 *
 * @example
 * // Article content
 * <TypographyH2>Introduction</TypographyH2>
 * <TypographyP>This is the first paragraph after the heading.</TypographyP>
 * <TypographyP>This is the second paragraph with more details.</TypographyP>
 *
 * @example
 * // With inline elements
 * <TypographyP>
 *   Here is some text with <TypographyCode>inline code</TypographyCode> and <TypographyStrong>bold text</TypographyStrong>.
 * </TypographyP>
 *
 * @example
 * // Long content
 * <TypographyP className="text-justify">
 *   Lorem ipsum dolor sit amet, consectetur adipiscing elit...
 * </TypographyP>
 *
 * @tip First paragraph has no top margin
 * @tip Leading-7 for optimal readability
 * @tip Use with other typography components
 */
export const TypographyP: ComponentWithAs<'p', BoxProps> = forwardRef<BoxProps, 'p'>(({ className, ...props }, ref) => (
  <Box as="p" ref={ref} className={cn('leading-7 not-first:mt-6', className)} data-qa="p" {...props} />
));
TypographyP.displayName = 'TypographyP';

/**
 * TypographyBlockQuote Component
 *
 * Stylized quote element with left border and italic text.
 * Perfect for highlighting quotes, testimonials, and important statements.
 *
 * @example
 * // Basic usage
 * import { TypographyBlockQuote } from '@paalstack/react-ui';
 *
 * <TypographyBlockQuote>
 *   "The only way to do great work is to love what you do."
 * </TypographyBlockQuote>
 *
 * @example
 * // With attribution
 * <TypographyBlockQuote>
 *   "Innovation distinguishes between a leader and a follower."
 *   <footer className="mt-2 text-sm">— Steve Jobs</footer>
 * </TypographyBlockQuote>
 *
 * @example
 * // Customer testimonial
 * <TypographyBlockQuote>
 *   "This product has completely transformed how we work. Highly recommended!"
 * </TypographyBlockQuote>
 *
 * @example
 * // With custom styling
 * <TypographyBlockQuote className="border-blue-500 text-blue-900 dark:text-blue-100">
 *   Important note highlighted in blue
 * </TypographyBlockQuote>
 *
 * @example
 * // Multi-paragraph quote
 * <TypographyBlockQuote>
 *   <TypographyP>First paragraph of the quote.</TypographyP>
 *   <TypographyP>Second paragraph continues the thought.</TypographyP>
 * </TypographyBlockQuote>
 *
 * @tip Includes left border for visual emphasis
 * @tip Italic by default
 * @tip Theme-aware border and text colors
 */
export const TypographyBlockQuote: ComponentWithAs<'blockquote', BoxProps> = forwardRef<BoxProps, 'blockquote'>(
  ({ className, ...props }, ref) => (
    <Box
      as="blockquote"
      ref={ref}
      className={cn(
        'mt-6 border-l-2 border-slate-300 pl-6 text-slate-800 italic dark:border-slate-600 dark:text-slate-200',
        className,
      )}
      data-qa="blockquote"
      {...props}
    />
  ),
);
TypographyBlockQuote.displayName = 'TypographyBlockQuote';

/**
 * TypographyTable Component
 *
 * Semantic table element for structured data display.
 * Use with TypographyTHead, TypographyTBody, TypographyTR, TypographyTH, and TypographyTD components.
 *
 * @example
 * // Basic usage
 * import { TypographyTable, TypographyTHead, TypographyTBody, TypographyTR, TypographyTH, TypographyTD } from '@paalstack/react-ui';
 *
 * <TypographyTable>
 *   <TypographyTHead>
 *     <TypographyTR>
 *       <TypographyTH>Name</TypographyTH>
 *       <TypographyTH>Email</TypographyTH>
 *     </TypographyTR>
 *   </TypographyTHead>
 *   <TypographyTBody>
 *     <TypographyTR>
 *       <TypographyTD>John Doe</TypographyTD>
 *       <TypographyTD>john@example.com</TypographyTD>
 *     </TypographyTR>
 *   </TypographyTBody>
 * </TypographyTable>
 *
 * @example
 * // Pricing table
 * <TypographyTable>
 *   <TypographyTHead>
 *     <TypographyTR>
 *       <TypographyTH>Feature</TypographyTH>
 *       <TypographyTH>Free</TypographyTH>
 *       <TypographyTH>Pro</TypographyTH>
 *     </TypographyTR>
 *   </TypographyTHead>
 *   <TypographyTBody>
 *     <TypographyTR>
 *       <TypographyTD>Storage</TypographyTD>
 *       <TypographyTD>5GB</TypographyTD>
 *       <TypographyTD>100GB</TypographyTD>
 *     </TypographyTR>
 *   </TypographyTBody>
 * </TypographyTable>
 *
 * @tip Full width by default
 * @tip Use with table semantic elements
 */
export const TypographyTable: ComponentWithAs<'table', BoxProps> = forwardRef<BoxProps, 'table'>(
  ({ className, ...props }, ref) => (
    <Box as="table" ref={ref} className={cn('w-full', className)} data-qa="table" {...props} />
  ),
);
TypographyTable.displayName = 'TypographyTable';

export const TypographyTHead: ComponentWithAs<'thead', BoxProps> = forwardRef<BoxProps, 'thead'>(
  ({ className, ...props }, ref) => (
    <Box as="thead" ref={ref} className={cn('', className)} data-qa="thead" {...props} />
  ),
);
TypographyTHead.displayName = 'TypographyTHead';

export const TypographyTBody: ComponentWithAs<'tbody', BoxProps> = forwardRef<BoxProps, 'tbody'>(
  ({ className, ...props }, ref) => (
    <Box as="tbody" ref={ref} className={cn('', className)} data-qa="tbody" {...props} />
  ),
);
TypographyTBody.displayName = 'TypographyTBody';

export const TypographyTR: ComponentWithAs<'tr', BoxProps> = forwardRef<BoxProps, 'tr'>(
  ({ className, ...props }, ref) => (
    <Box
      as="tr"
      ref={ref}
      className={cn(
        'm-0 border-t border-slate-300 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800',
        className,
      )}
      data-qa="tr"
      {...props}
    />
  ),
);
TypographyTR.displayName = 'TypographyTR';

export const TypographyTD: ComponentWithAs<'td', BoxProps> = forwardRef<BoxProps, 'td'>(
  ({ className, ...props }, ref) => (
    <Box
      as="td"
      ref={ref}
      className={cn(
        'border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right',
        className,
      )}
      data-qa="td"
      {...props}
    />
  ),
);
TypographyTD.displayName = 'TypographyTD';

export const TypographyTH: ComponentWithAs<'th', BoxProps> = forwardRef<BoxProps, 'th'>(
  ({ className, ...props }, ref) => (
    <Box
      as="th"
      ref={ref}
      className={cn(
        'border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [[align=center]]:text-center [[align=right]]:text-right',
        className,
      )}
      data-qa="th"
      {...props}
    />
  ),
);
TypographyTH.displayName = 'TypographyTH';

/**
 * TypographyUL Component
 *
 * Unordered list with disc bullets and consistent spacing.
 * Can be rendered unstyled for custom list styles.
 *
 * @example
 * // Basic usage
 * import { TypographyUL } from '@paalstack/react-ui';
 *
 * <TypographyUL>
 *   <li>First item</li>
 *   <li>Second item</li>
 *   <li>Third item</li>
 * </TypographyUL>
 *
 * @example
 * // Feature list
 * <TypographyUL>
 *   <li>Fast and responsive</li>
 *   <li>Fully customizable</li>
 *   <li>Accessible by default</li>
 *   <li>Dark mode support</li>
 * </TypographyUL>
 *
 * @example
 * // Unstyled list
 * <TypographyUL unstyled className="space-y-2">
 *   <li className="flex items-center gap-2">
 *     <CheckIcon /> Custom styled item
 *   </li>
 *   <li className="flex items-center gap-2">
 *     <CheckIcon /> Another item
 *   </li>
 * </TypographyUL>
 *
 * @example
 * // Nested lists
 * <TypographyUL>
 *   <li>Parent item 1</li>
 *   <li>
 *     Parent item 2
 *     <TypographyUL>
 *       <li>Child item 1</li>
 *       <li>Child item 2</li>
 *     </TypographyUL>
 *   </li>
 * </TypographyUL>
 *
 * @tip Use unstyled prop to remove default list styling
 * @tip Includes margin and list-item spacing
 */
export const TypographyUL: ComponentWithAs<'ul', BoxProps & { unstyled?: boolean }> = forwardRef<
  BoxProps & { unstyled?: boolean },
  'ul'
>(({ className, unstyled = false, ...props }, ref) => (
  <Box
    as="ul"
    ref={ref}
    className={cn(
      {
        'm-4 list-disc [&>li]:mt-2': !unstyled,
      },
      className,
    )}
    data-qa="ul"
    {...props}
  />
));
TypographyUL.displayName = 'TypographyUL';

/**
 * TypographyOL Component
 *
 * Ordered list with decimal numbering and consistent spacing.
 * Can be rendered unstyled for custom list styles.
 *
 * @example
 * // Basic usage
 * import { TypographyOL } from '@paalstack/react-ui';
 *
 * <TypographyOL>
 *   <li>First step</li>
 *   <li>Second step</li>
 *   <li>Third step</li>
 * </TypographyOL>
 *
 * @example
 * // Installation steps
 * <TypographyH3>Installation</TypographyH3>
 * <TypographyOL>
 *   <li>Run npm install</li>
 *   <li>Configure your environment</li>
 *   <li>Start the development server</li>
 * </TypographyOL>
 *
 * @example
 * // Recipe instructions
 * <TypographyOL>
 *   <li>Preheat oven to 350°F</li>
 *   <li>Mix dry ingredients</li>
 *   <li>Add wet ingredients</li>
 *   <li>Bake for 25 minutes</li>
 * </TypographyOL>
 *
 * @example
 * // Unstyled ordered list
 * <TypographyOL unstyled className="space-y-2">
 *   <li className="flex items-center gap-2">
 *     <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">1</span>
 *     Custom numbered item
 *   </li>
 * </TypographyOL>
 *
 * @tip Use unstyled prop for custom numbering styles
 * @tip Includes automatic numbering
 */
export const TypographyOL: ComponentWithAs<'ol', BoxProps & { unstyled?: boolean }> = forwardRef<
  BoxProps & { unstyled?: boolean },
  'ol'
>(({ className, unstyled = false, ...props }, ref) => (
  <Box
    as="ol"
    ref={ref}
    className={cn(
      {
        'm-4 list-decimal [&>li]:mt-2': !unstyled,
      },
      className,
    )}
    data-qa="ol"
    {...props}
  />
));
TypographyOL.displayName = 'TypographyOL';

/**
 * TypographyLI Component
 *
 * List item element for use within TypographyUL or TypographyOL components.
 *
 * @example
 * // Basic usage
 * import { TypographyLI } from '@paalstack/react-ui';
 *
 * <TypographyUL>
 *   <TypographyLI>First item</TypographyLI>
 *   <TypographyLI>Second item</TypographyLI>
 * </TypographyUL>
 *
 * @example
 * // With custom styling
 * <TypographyUL unstyled>
 *   <TypographyLI className="flex items-center gap-2">
 *     <CheckIcon /> Completed task
 *   </TypographyLI>
 * </TypographyUL>
 *
 * @tip Use inside TypographyUL or TypographyOL
 * @tip Supports all Box props
 */
export const TypographyLI: ComponentWithAs<'li', BoxProps> = forwardRef<BoxProps, 'li'>(
  ({ className, ...props }, ref) => <Box as="li" ref={ref} className={cn('', className)} data-qa="li" {...props} />,
);
TypographyLI.displayName = 'TypographyLI';

/**
 * TypographyCode Component
 *
 * Inline code element with monospace font and background styling.
 * Perfect for displaying code snippets within text.
 *
 * @example
 * // Basic usage
 * import { TypographyCode } from '@paalstack/react-ui';
 *
 * <TypographyP>Install with <TypographyCode>npm install</TypographyCode></TypographyP>
 *
 * @example
 * // Function names
 * <TypographyP>Call the <TypographyCode>useState</TypographyCode> hook to manage state.</TypographyP>
 *
 * @example
 * // Terminal commands
 * <TypographyP>Run <TypographyCode>npm start</TypographyCode> to start the server.</TypographyP>
 *
 * @example
 * // File paths
 * <TypographyP>Edit the <TypographyCode>src/App.tsx</TypographyCode> file.</TypographyP>
 *
 * @example
 * // Environment variables
 * <TypographyP>Set <TypographyCode>NODE_ENV=production</TypographyCode> for production builds.</TypographyP>
 *
 * @example
 * // In documentation
 * <TypographyP>
 *   The <TypographyCode>Button</TypographyCode> component accepts a <TypographyCode>variant</TypographyCode> prop
 *   which can be <TypographyCode>"primary"</TypographyCode> or <TypographyCode>"secondary"</TypographyCode>.
 * </TypographyP>
 *
 * @tip Monospace font with muted background
 * @tip Use for inline code references
 * @tip Different from code blocks (use pre for blocks)
 */
export const TypographyCode: ComponentWithAs<'code', BoxProps> = forwardRef<BoxProps, 'code'>(
  ({ className, ...props }, ref) => (
    <Box
      as="code"
      ref={ref}
      className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}
      data-qa="code"
      {...props}
    />
  ),
);
TypographyCode.displayName = 'TypographyCode';

/**
 * TypographyLead Component
 *
 * Large introductory paragraph text for page and article introductions.
 * Renders as a paragraph with increased font size and muted color.
 *
 * @example
 * // Basic usage
 * import { TypographyLead } from '@paalstack/react-ui';
 *
 * <TypographyLead>This is an introduction to the article with larger text.</TypographyLead>
 *
 * @example
 * // Article intro
 * <TypographyH1>Understanding React Hooks</TypographyH1>
 * <TypographyLead>
 *   React Hooks revolutionized how we write components. Learn the fundamentals
 *   and best practices for using hooks in your applications.
 * </TypographyLead>
 *
 * @example
 * // Landing page
 * <TypographyH1>Welcome to Our Platform</TypographyH1>
 * <TypographyLead>
 *   Build faster, ship better. Our tools help you create amazing experiences.
 * </TypographyLead>
 *
 * @example
 * // Product description
 * <TypographyLead>
 *   A comprehensive design system built for modern web applications.
 * </TypographyLead>
 *
 * @tip Use after page/article titles
 * @tip Larger than body text (text-xl)
 * @tip Muted color for visual hierarchy
 */
export const TypographyLead: ComponentWithAs<'p', BoxProps> = forwardRef<BoxProps, 'p'>(
  ({ className, ...props }, ref) => (
    <Box as="p" ref={ref} className={cn('text-xl text-muted-foreground', className)} data-qa="lead" {...props} />
  ),
);
TypographyLead.displayName = 'TypographyLead';

/**
 * TypographyLarge Component
 *
 * Large semibold text for emphasis and callouts.
 *
 * @example
 * // Basic usage
 * import { TypographyLarge } from '@paalstack/react-ui';
 *
 * <TypographyLarge>Important callout text</TypographyLarge>
 *
 * @example
 * // Stat display
 * <TypographyLarge>$1,234,567</TypographyLarge>
 * <TypographyMuted>Total Revenue</TypographyMuted>
 *
 * @example
 * // Key metric
 * <TypographyLarge className="text-green-600">+23.5%</TypographyLarge>
 * <TypographyP>Growth this month</TypographyP>
 *
 * @tip Slightly larger than body text
 * @tip Semibold weight for emphasis
 */
export const TypographyLarge: ComponentWithAs<'div', BoxProps> = forwardRef<BoxProps, 'div'>(
  ({ className, ...props }, ref) => (
    <Box as="div" ref={ref} className={cn('text-lg font-semibold', className)} data-qa="large" {...props} />
  ),
);
TypographyLarge.displayName = 'TypographyLarge';

/**
 * TypographySmall Component
 *
 * Small text for fine print, captions, and supplementary information.
 *
 * @example
 * // Basic usage
 * import { TypographySmall } from '@paalstack/react-ui';
 *
 * <TypographySmall>Fine print text</TypographySmall>
 *
 * @example
 * // Copyright notice
 * <TypographySmall>© 2026 Company Name. All rights reserved.</TypographySmall>
 *
 * @example
 * // Form helper
 * <Input label="Email" />
 * <TypographySmall>We'll never share your email with anyone else.</TypographySmall>
 *
 * @example
 * // Image caption
 * <img src="photo.jpg" alt="Photo" />
 * <TypographySmall>Photo taken in Paris, 2026</TypographySmall>
 *
 * @example
 * // Terms and conditions
 * <Checkbox label="I agree to the terms" />
 * <TypographySmall className="text-muted-foreground">
 *   By checking this box, you agree to our Terms of Service
 * </TypographySmall>
 *
 * @tip Smaller than body text (text-sm)
 * @tip Use for disclaimers and fine print
 */
export const TypographySmall: ComponentWithAs<'small', BoxProps> = forwardRef<BoxProps, 'small'>(
  ({ className, ...props }, ref) => (
    <Box
      as="small"
      ref={ref}
      className={cn('text-sm leading-none font-medium', className)}
      data-qa="small"
      {...props}
    />
  ),
);
TypographySmall.displayName = 'TypographySmall';

/**
 * TypographyMuted Component
 *
 * Muted text for secondary information and descriptions.
 * Renders with reduced color contrast.
 *
 * @example
 * // Basic usage
 * import { TypographyMuted } from '@paalstack/react-ui';
 *
 * <TypographyMuted>Secondary information</TypographyMuted>
 *
 * @example
 * // User info
 * <TypographyH3>John Doe</TypographyH3>
 * <TypographyMuted>john@example.com</TypographyMuted>
 *
 * @example
 * // Card footer
 * <Card>
 *   <TypographyH4>Card Title</TypographyH4>
 *   <TypographyP>Card content</TypographyP>
 *   <TypographyMuted>Last updated 2 hours ago</TypographyMuted>
 * </Card>
 *
 * @example
 * // Form descriptions
 * <Input label="Username" />
 * <TypographyMuted>Choose a unique username that others can use to find you.</TypographyMuted>
 *
 * @example
 * // Metadata
 * <TypographyMuted>Posted on January 15, 2026 by Admin</TypographyMuted>
 *
 * @tip Reduced color contrast (muted-foreground)
 * @tip Use for less important information
 */
export const TypographyMuted: ComponentWithAs<'p', BoxProps> = forwardRef<BoxProps, 'p'>(
  ({ className, ...props }, ref) => (
    <Box as="p" ref={ref} className={cn('text-sm text-muted-foreground', className)} data-qa="muted" {...props} />
  ),
);
TypographyMuted.displayName = 'TypographyMuted';

/**
 * TypographySubtle Component
 *
 * Subtle text with reduced emphasis, similar to TypographyMuted.
 * Alias for secondary descriptive text.
 *
 * @example
 * // Basic usage
 * import { TypographySubtle } from '@paalstack/react-ui';
 *
 * <TypographySubtle>Additional context information</TypographySubtle>
 *
 * @example
 * // Timestamp
 * <TypographySubtle>2 minutes ago</TypographySubtle>
 *
 * @example
 * // Helper text
 * <TypographySubtle>Optional field</TypographySubtle>
 *
 * @tip Similar to TypographyMuted component
 * @tip Use for subtle secondary information
 */
export const TypographySubtle: ComponentWithAs<'p', BoxProps> = forwardRef<BoxProps, 'p'>(
  ({ className, ...props }, ref) => (
    <Box as="p" ref={ref} className={cn('text-sm text-muted-foreground', className)} data-qa="subtle" {...props} />
  ),
);
TypographySubtle.displayName = 'TypographySubtle';

/**
 * TypographyStrong Component
 *
 * Bold text for emphasis within paragraphs and content.
 * Semantic element that indicates importance.
 *
 * @example
 * // Basic usage
 * import { TypographyStrong } from '@paalstack/react-ui';
 *
 * <TypographyP>This is <TypographyStrong>very important</TypographyStrong> information.</TypographyP>
 *
 * @example
 * // Warning text
 * <TypographyP>
 *   <TypographyStrong>Warning:</TypographyStrong> This action cannot be undone.
 * </TypographyP>
 *
 * @example
 * // Highlighting key terms
 * <TypographyP>
 *   The <TypographyStrong>primary key</TypographyStrong> uniquely identifies each record.
 * </TypographyP>
 *
 * @example
 * // Stats and metrics
 * <TypographyP>
 *   Sales increased by <TypographyStrong>45%</TypographyStrong> this quarter.
 * </TypographyP>
 *
 * @example
 * // Instructions
 * <TypographyP>
 *   <TypographyStrong>Step 1:</TypographyStrong> Download the application from our website.
 * </TypographyP>
 *
 * @tip Renders as semantic <strong> element
 * @tip Semibold weight for emphasis
 * @tip Use for important text within paragraphs
 */
export const TypographyStrong: ComponentWithAs<'strong', BoxProps> = forwardRef<BoxProps, 'strong'>(
  ({ className, ...props }, ref) => (
    <Box as="strong" ref={ref} className={cn('font-semibold', className)} data-qa="strong" {...props} />
  ),
);
TypographyStrong.displayName = 'TypographyStrong';

/**
 * Typography Object
 *
 * Convenient grouped export of all typography components.
 * Allows importing multiple typography components from a single object.
 *
 * @example
 * // Import the entire Typography object
 * import { Typography } from '@paalstack/react-ui';
 *
 * <Typography.H1>Main Title</Typography.H1>
 * <Typography.Lead>Introduction text</Typography.Lead>
 * <Typography.P>Body paragraph</Typography.P>
 *
 * @example
 * // Use in a documentation page
 * import { Typography } from '@paalstack/react-ui';
 *
 * const { H1, H2, P, Code, BlockQuote } = Typography;
 *
 * <article>
 *   <H1>API Documentation</H1>
 *   <P>Welcome to our API docs.</P>
 *   <H2>Getting Started</H2>
 *   <P>Install with <Code>npm install</Code></P>
 *   <BlockQuote>Important: Read the terms before using.</BlockQuote>
 * </article>
 *
 * @example
 * // Blog post layout
 * import { Typography } from '@paalstack/react-ui';
 *
 * function BlogPost({ title, content }) {
 *   return (
 *     <article>
 *       <Typography.H1>{title}</Typography.H1>
 *       <Typography.Muted>Posted on January 15, 2026</Typography.Muted>
 *       <Typography.Lead>
 *         This is the introduction paragraph...
 *       </Typography.Lead>
 *       <Typography.P>{content}</Typography.P>
 *     </article>
 *   );
 * }
 *
 * @example
 * // Using with destructuring
 * import { Typography } from '@paalstack/react-ui';
 *
 * const { H1, H2, H3, P, UL, LI, Code } = Typography;
 *
 * function TutorialPage() {
 *   return (
 *     <>
 *       <H1>React Hooks Tutorial</H1>
 *       <H2>What You'll Learn</H2>
 *       <UL>
 *         <LI>useState basics</LI>
 *         <LI>useEffect patterns</LI>
 *         <LI>Custom hooks</LI>
 *       </UL>
 *       <H3>useState Hook</H3>
 *       <P>The <Code>useState</Code> hook lets you add state.</P>
 *     </>
 *   );
 * }
 *
 * @example
 * // Complete article with all features
 * import { Typography } from '@paalstack/react-ui';
 *
 * <article className="max-w-3xl mx-auto">
 *   <Typography.H1>Understanding TypeScript</Typography.H1>
 *   <Typography.Lead>
 *     A comprehensive guide to TypeScript for modern web development.
 *   </Typography.Lead>
 *   <Typography.Muted>By John Doe • 10 min read</Typography.Muted>
 *
 *   <Typography.H2>Introduction</Typography.H2>
 *   <Typography.P>
 *     TypeScript is a <Typography.Strong>typed superset</Typography.Strong> of JavaScript.
 *   </Typography.P>
 *
 *   <Typography.BlockQuote>
 *     "TypeScript is JavaScript with syntax for types."
 *   </Typography.BlockQuote>
 *
 *   <Typography.H3>Key Benefits</Typography.H3>
 *   <Typography.UL>
 *     <Typography.LI>Type safety</Typography.LI>
 *     <Typography.LI>Better IDE support</Typography.LI>
 *     <Typography.LI>Enhanced refactoring</Typography.LI>
 *   </Typography.UL>
 *
 *   <Typography.P>
 *     Install with <Typography.Code>npm install -g typescript</Typography.Code>
 *   </Typography.P>
 *
 *   <Typography.Small>Last updated: January 2026</Typography.Small>
 * </article>
 *
 * @example
 * // Landing page sections
 * import { Typography } from '@paalstack/react-ui';
 *
 * function LandingPage() {
 *   return (
 *     <>
 *       <section className="text-center py-20">
 *         <Typography.H1>Build Better Apps</Typography.H1>
 *         <Typography.Lead>
 *           The complete toolkit for modern web development
 *         </Typography.Lead>
 *       </section>
 *
 *       <section>
 *         <Typography.H2>Features</Typography.H2>
 *         <Typography.P>
 *           Discover what makes our platform <Typography.Strong>unique</Typography.Strong>
 *         </Typography.P>
 *       </section>
 *     </>
 *   );
 * }
 *
 * @example
 * // Pricing table
 * import { Typography } from '@paalstack/react-ui';
 *
 * function PricingCard() {
 *   return (
 *     <div className="border rounded-lg p-6">
 *       <Typography.H3>Pro Plan</Typography.H3>
 *       <Typography.Large className="text-primary">$29/mo</Typography.Large>
 *       <Typography.Muted>Billed annually</Typography.Muted>
 *       <Typography.UL>
 *         <Typography.LI>Unlimited projects</Typography.LI>
 *         <Typography.LI>Priority support</Typography.LI>
 *         <Typography.LI>Advanced analytics</Typography.LI>
 *       </Typography.UL>
 *       <Typography.Small>*Cancel anytime</Typography.Small>
 *     </div>
 *   );
 * }
 *
 * @example
 * // Using table components
 * import { Typography } from '@paalstack/react-ui';
 *
 * const { TableLayout, THead, TBody, TR, TH, TD } = Typography;
 *
 * <TableLayout>
 *   <THead>
 *     <TR>
 *       <TH>Name</TH>
 *       <TH>Role</TH>
 *       <TH>Status</TH>
 *     </TR>
 *   </THead>
 *   <TBody>
 *     <TR>
 *       <TD>John Doe</TD>
 *       <TD>Developer</TD>
 *       <TD>Active</TD>
 *     </TR>
 *   </TBody>
 * </TableLayout>
 *
 * @tip Import the entire object when using multiple typography components
 * @tip Destructure only what you need for cleaner code
 * @tip All components accept BoxProps and support polymorphic 'as' prop
 * @tip Use Typography.Code for inline code, not code blocks
 * @tip TableLayout components are for simple tables, use Table component for complex data tables
 */
export const Typography = {
  H1: TypographyH1,
  H2: TypographyH2,
  H3: TypographyH3,
  H4: TypographyH4,
  H5: TypographyH5,
  H6: TypographyH6,
  P: TypographyP,
  BlockQuote: TypographyBlockQuote,
  Table: TypographyTable,
  THead: TypographyTHead,
  TBody: TypographyTBody,
  TR: TypographyTR,
  TD: TypographyTD,
  TH: TypographyTH,
  UL: TypographyUL,
  OL: TypographyOL,
  LI: TypographyLI,
  Code: TypographyCode,
  Lead: TypographyLead,
  Large: TypographyLarge,
  Small: TypographySmall,
  Muted: TypographyMuted,
  Subtle: TypographySubtle,
  Strong: TypographyStrong,
};
