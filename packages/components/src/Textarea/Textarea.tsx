import type { BoxPropsWithRef } from '@/layouts/Box';
import type { ComponentWithAs } from '@/shared/types';
import type { LabelProps } from '../Label';

import { useControllableState } from '@/hooks/use-controllable';
import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { forwardRef, isAriaInvalid } from '@/shared/utils';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';

export interface TextareaProps extends BoxPropsWithRef<'textarea'> {
  /**
   * whether the textarea is invalid
   */
  isInvalid?: boolean;
  /**
   * label for the input
   */
  label?: string;

  /**
   * props for the label
   */
  labelProps?: LabelProps;
  /**
   * inline input or not
   */
  inline?: boolean;
  /**
   * textarea class name for styling
   */
  className?: string;
  /**
   * parent class name for styling
   */
  wrapperClassName?: string;
  /**
   * error message for the textarea
   */
  errorMessage?: string;
  /**
   * value for the textarea
   */
  value?: string;
  /**
   * on value change callback
   */
  onValueChange?: (value: string) => void;
}

/**
 * Textarea Component
 *
 * A multi-line text input component for longer text content.
 * Supports labels, validation, error messages, and controlled/uncontrolled modes.
 *
 * @example
 * // Basic usage
 * import { Textarea } from '@paalstack/react-ui';
 *
 * <Textarea placeholder="Enter your message..." />
 *
 * @example
 * // With label
 * <Textarea
 *   label="Description"
 *   placeholder="Enter a description..."
 * />
 *
 * @example
 * // Required field
 * <Textarea
 *   label="Comments"
 *   required
 *   placeholder="Your comments here..."
 * />
 *
 * @example
 * // With error message
 * <Textarea
 *   label="Bio"
 *   isInvalid
 *   errorMessage="Bio must be at least 50 characters"
 *   placeholder="Tell us about yourself..."
 * />
 *
 * @example
 * // Controlled textarea
 * const [value, setValue] = useState('');
 *
 * <Textarea
 *   label="Message"
 *   value={value}
 *   onValueChange={setValue}
 *   placeholder="Type your message..."
 * />
 * <p className="text-sm text-gray-500">{value.length} characters</p>
 *
 * @example
 * // With character limit
 * const [text, setText] = useState('');
 * const maxLength = 200;
 *
 * <div>
 *   <Textarea
 *     label="Tweet"
 *     value={text}
 *     onValueChange={(val) => val.length <= maxLength && setText(val)}
 *     placeholder="What's happening?"
 *   />
 *   <p className="text-sm text-right text-gray-500">
 *     {text.length}/{maxLength}
 *   </p>
 * </div>
 *
 * @example
 * // Read-only and disabled states
 * <Textarea value="Read-only content" readOnly />
 * <Textarea value="Disabled textarea" disabled />
 *
 * @example
 * // Inline layout
 * <Textarea label="Note" inline placeholder="Add a note..." />
 *
 * @example
 * // Custom height
 * <Textarea
 *   label="Long Form"
 *   className="min-h-[200px]"
 *   placeholder="Write something long..."
 * />
 *
 * @example
 * // With custom styling
 * <Textarea
 *   label="Custom Styled"
 *   wrapperClassName="mb-4"
 *   className="bg-gray-50 border-2 min-h-[150px]"
 *   placeholder="Custom styles"
 * />
 *
 * @example
 * // Form integration with validation
 * const [feedback, setFeedback] = useState('');
 * const [error, setError] = useState('');
 *
 * const handleSubmit = (e) => {
 *   e.preventDefault();
 *   if (feedback.length < 10) {
 *     setError('Feedback must be at least 10 characters');
 *     return;
 *   }
 *   console.log('Feedback:', feedback);
 * };
 *
 * <form onSubmit={handleSubmit}>
 *   <Textarea
 *     label="Feedback"
 *     value={feedback}
 *     onValueChange={(val) => {
 *       setFeedback(val);
 *       setError('');
 *     }}
 *     isInvalid={!!error}
 *     errorMessage={error}
 *     placeholder="Share your feedback..."
 *     required
 *   />
 *   <button type="submit">Submit</button>
 * </form>
 *
 * @example
 * // Auto-resizing textarea (combine with custom logic)
 * const textareaRef = useRef(null);
 *
 * const handleChange = (value) => {
 *   if (textareaRef.current) {
 *     textareaRef.current.style.height = 'auto';
 *     textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
 *   }
 * };
 *
 * <Textarea
 *   ref={textareaRef}
 *   onValueChange={handleChange}
 *   className="resize-none overflow-hidden"
 *   placeholder="This will auto-resize..."
 * />
 */
const Textarea: ComponentWithAs<'textarea', TextareaProps> = forwardRef<TextareaProps, 'textarea'>(
  (
    {
      className,
      isInvalid: invalid,
      label,
      inline,
      wrapperClassName,
      required,
      id,
      errorMessage,
      value,
      onValueChange,
      defaultValue,
      onChange: onChangeProp,
      labelProps,
      ...props
    },
    ref,
  ) => {
    const [localValue, onChangeLocalValue] = useControllableState({
      value,
      defaultValue: defaultValue as string,
      onChange: onValueChange,
    });

    const isInvalid = isAriaInvalid(props['aria-invalid']) || invalid;
    const labelId = id || props.name || label;

    return (
      <>
        <Box
          className={cn(
            'flex w-full flex-col gap-2',
            {
              'flex-row items-center': inline,
            },
            wrapperClassName,
          )}
          data-qa="textarea-container"
        >
          {label && (
            <Label htmlFor={labelId} required={required} data-qa="textarea-label" {...labelProps}>
              {label}
            </Label>
          )}
          <Box
            as="textarea"
            data-slot="textarea"
            data-qa="textarea"
            {...(isInvalid ? { 'aria-invalid': true } : {})}
            {...props}
            className={cn(
              'flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
              {
                'bg-muted/40 read-only:focus-visible:ring-0': props.readOnly,
              },
              className,
            )}
            ref={ref}
            id={labelId}
            required={required}
            value={localValue}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              onChangeLocalValue(e.currentTarget.value);
              onChangeProp?.(e);
            }}
          />
        </Box>
        {isInvalid && <ErrorMessage data-qa="textarea-error-message" message={errorMessage} />}
      </>
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
