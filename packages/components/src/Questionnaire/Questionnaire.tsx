'use client';

import type * as React from 'react';

import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';

import { cn } from '@/shared/lib';

import { buttonVariants } from '../Button';

// ─── Props API types ─────────────────────────────────────────────────────────

export interface QuestionnaireQuestionChoice {
  /** The value submitted for this choice. */
  value: string;
  /** The label content for this choice. */
  label: React.ReactNode;
  /** Optional secondary description shown under the label. */
  description?: React.ReactNode;
  /** Disable this choice. */
  disabled?: boolean;
}

export interface QuestionnaireQuestion {
  /** Unique name for the question, used as the form field name. */
  name: string;
  /** The question title. */
  title: React.ReactNode;
  /** Optional description shown under the title. */
  description?: React.ReactNode;
  /** The available choices. Omit for free-text input questions. */
  choices?: Array<QuestionnaireQuestionChoice>;
  /**
   * Allow multiple selections (checkboxes instead of radios).
   * @default false
   */
  multiple?: boolean;
  /** Mark this question as required. */
  required?: boolean;
  /** Disable this question. */
  disabled?: boolean;
  /**
   * The input type for free-text questions (when `choices` is omitted).
   * @default 'text'
   */
  inputType?: 'text' | 'email' | 'number' | 'tel' | 'date';
}

export interface QuestionnaireProps extends React.ComponentProps<typeof QuestionnairePrimitive.Root> {
  /**
   * Declarative question data. When provided, the component auto-renders
   * Item/Title/Description/Choices/Choice/Input/Error + Progress + Actions
   * from this data (Props API). When omitted, children-based composition is used.
   */
  questions?: Array<QuestionnaireQuestion>;
  /** Show the built-in progress label. Only used with `questions`. */
  showProgress?: boolean;
  /** Show the built-in Previous/Skip/Next/Submit actions. Only used with `questions`. */
  showActions?: boolean;
  /** Custom labels for the built-in action buttons. Only used with `questions`. */
  labels?: {
    previous?: React.ReactNode;
    skip?: React.ReactNode;
    next?: React.ReactNode;
    submit?: React.ReactNode;
  };
}

/**
 * Questionnaire Component
 *
 * A step-by-step questionnaire built on the @shadcn/react questionnaire primitive.
 * Supports both a declarative Props API (via the `questions` prop) and full
 * children-based composition.
 * Perfect for onboarding flows, surveys, quizzes, and progressive forms.
 *
 * @example
 * // Props API — auto-rendered from question data
 * import { Questionnaire } from '@paalstack/react-ui';
 *
 * <Questionnaire
 *   onSubmit={(event) => {
 *     const data = new FormData(event.currentTarget);
 *     console.log(Object.fromEntries(data));
 *   }}
 *   questions={[
 *     {
 *       name: 'plan',
 *       title: 'Which plan fits you best?',
 *       description: 'You can change this later.',
 *       required: true,
 *       choices: [
 *         { value: 'free', label: 'Free', description: 'Basic features' },
 *         { value: 'pro', label: 'Pro', description: 'Everything + analytics' },
 *       ],
 *     },
 *     {
 *       name: 'topics',
 *       title: 'What are you interested in?',
 *       multiple: true,
 *       choices: [
 *         { value: 'design', label: 'Design' },
 *         { value: 'code', label: 'Engineering' },
 *       ],
 *     },
 *     {
 *       name: 'email',
 *       title: 'Where should we send updates?',
 *       inputType: 'email',
 *     },
 *   ]}
 * />
 *
 * @example
 * // Props API — custom action labels
 * <Questionnaire
 *   labels={{ previous: 'Back', skip: 'Not now', next: 'Continue', submit: 'Finish' }}
 *   questions={questions}
 * />
 *
 * @example
 * // Composition API — full control over the structure
 * import { Questionnaire, QuestionnaireProgress, QuestionnaireItem, QuestionnaireTitle, QuestionnaireDescription, QuestionnaireChoices, QuestionnaireChoice, QuestionnaireChoiceDescription, QuestionnaireInput, QuestionnaireError, QuestionnaireActions, QuestionnairePrevious, QuestionnaireSkip, QuestionnaireNext, QuestionnaireSubmit } from '@paalstack/react-ui';
 *
 * <Questionnaire onSubmit={handleSubmit}>
 *   <QuestionnaireProgress />
 *   <QuestionnaireItem name="plan" required>
 *     <QuestionnaireTitle>Which plan fits you best?</QuestionnaireTitle>
 *     <QuestionnaireDescription>You can change this later.</QuestionnaireDescription>
 *     <QuestionnaireChoices>
 *       <QuestionnaireChoice value="free">
 *         Free
 *         <QuestionnaireChoiceDescription>Basic features</QuestionnaireChoiceDescription>
 *       </QuestionnaireChoice>
 *       <QuestionnaireChoice value="pro">
 *         Pro
 *         <QuestionnaireChoiceDescription>Everything + analytics</QuestionnaireChoiceDescription>
 *       </QuestionnaireChoice>
 *     </QuestionnaireChoices>
 *     <QuestionnaireError />
 *   </QuestionnaireItem>
 *   <QuestionnaireItem name="email">
 *     <QuestionnaireTitle>Your email</QuestionnaireTitle>
 *     <QuestionnaireInput type="email" placeholder="you@example.com" />
 *     <QuestionnaireError />
 *   </QuestionnaireItem>
 *   <QuestionnaireActions>
 *     <QuestionnairePrevious />
 *     <QuestionnaireSkip />
 *     <QuestionnaireNext />
 *     <QuestionnaireSubmit />
 *   </QuestionnaireActions>
 * </Questionnaire>
 *
 * @tip Use the `questions` prop for quick, data-driven questionnaires
 * @tip Use composition when you need custom widgets inside an item
 */
function Questionnaire({
  className,
  questions,
  showProgress = true,
  showActions = true,
  labels,
  ...props
}: QuestionnaireProps) {
  if (questions) {
    return (
      <QuestionnairePrimitive.Root
        data-qa="questionnaire"
        data-slot="questionnaire"
        className={cn('cn-questionnaire flex w-full min-w-0 flex-col', className)}
        {...props}
      >
        {showProgress && <QuestionnaireProgress />}
        {questions.map((question) => {
          const hasChoices = Boolean(question.choices?.length);
          return (
            <QuestionnaireItem
              disabled={question.disabled}
              key={question.name}
              multiple={question.multiple}
              name={question.name}
              required={question.required}
            >
              <QuestionnaireTitle>{question.title}</QuestionnaireTitle>
              {question.description && <QuestionnaireDescription>{question.description}</QuestionnaireDescription>}
              {hasChoices ? (
                <QuestionnaireChoices>
                  {question.choices!.map((choice) => (
                    <QuestionnaireChoice disabled={choice.disabled} key={choice.value} value={choice.value}>
                      {choice.label}
                      {choice.description && (
                        <QuestionnaireChoiceDescription>{choice.description}</QuestionnaireChoiceDescription>
                      )}
                    </QuestionnaireChoice>
                  ))}
                </QuestionnaireChoices>
              ) : (
                <QuestionnaireInput type={question.inputType ?? 'text'} />
              )}
              <QuestionnaireError />
            </QuestionnaireItem>
          );
        })}
        {showActions && (
          <QuestionnaireActions>
            <QuestionnairePrevious>{labels?.previous}</QuestionnairePrevious>
            <QuestionnaireSkip>{labels?.skip}</QuestionnaireSkip>
            <QuestionnaireNext>{labels?.next}</QuestionnaireNext>
            <QuestionnaireSubmit>{labels?.submit}</QuestionnaireSubmit>
          </QuestionnaireActions>
        )}
      </QuestionnairePrimitive.Root>
    );
  }
  return (
    <QuestionnairePrimitive.Root
      data-slot="questionnaire"
      data-qa="questionnaire"
      className={cn('cn-questionnaire flex w-full min-w-0 flex-col', className)}
      {...props}
    />
  );
}
Questionnaire.displayName = 'Questionnaire';

function QuestionnaireProgress({ className, ...props }: React.ComponentProps<typeof QuestionnairePrimitive.Progress>) {
  return (
    <QuestionnairePrimitive.Progress
      data-slot="questionnaire-progress"
      data-qa="questionnaire-progress"
      className={cn(
        'cn-questionnaire-progress min-h-[1lh] w-fit min-w-[14ch] font-medium text-muted-foreground tabular-nums',
        className,
      )}
      {...props}
    />
  );
}
QuestionnaireProgress.displayName = 'QuestionnaireProgress';

function QuestionnaireItem({ className, ...props }: React.ComponentProps<typeof QuestionnairePrimitive.Item>) {
  return (
    <QuestionnairePrimitive.Item
      data-slot="questionnaire-item"
      data-qa="questionnaire-item"
      className={cn('cn-questionnaire-item min-w-0 border-0 p-0 outline-none', className)}
      {...props}
    />
  );
}
QuestionnaireItem.displayName = 'QuestionnaireItem';

function QuestionnaireTitle({ className, ...props }: React.ComponentProps<typeof QuestionnairePrimitive.Title>) {
  return (
    <QuestionnairePrimitive.Title
      data-slot="questionnaire-title"
      data-qa="questionnaire-title"
      className={cn('cn-questionnaire-title cn-font-heading text-pretty', className)}
      {...props}
    />
  );
}
QuestionnaireTitle.displayName = 'QuestionnaireTitle';

function QuestionnaireDescription({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Description>) {
  return (
    <QuestionnairePrimitive.Description
      data-slot="questionnaire-description"
      data-qa="questionnaire-description"
      className={cn('cn-questionnaire-description text-pretty text-muted-foreground', className)}
      {...props}
    />
  );
}
QuestionnaireDescription.displayName = 'QuestionnaireDescription';

function QuestionnaireChoices({ className, ...props }: React.ComponentProps<typeof QuestionnairePrimitive.Choices>) {
  return (
    <QuestionnairePrimitive.Choices
      data-slot="questionnaire-choices"
      data-qa="questionnaire-choices"
      className={cn('cn-questionnaire-choices group/questionnaire-choices grid min-w-0', className)}
      {...props}
    />
  );
}
QuestionnaireChoices.displayName = 'QuestionnaireChoices';

function QuestionnaireChoice({
  children,
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Choice>) {
  return (
    <QuestionnairePrimitive.Choice
      data-slot="questionnaire-choice"
      data-qa="questionnaire-choice"
      className={cn(
        'cn-questionnaire-choice group/questionnaire-choice relative flex min-h-11 cursor-pointer items-start text-start transition-colors outline-none select-none',
        'data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <QuestionnairePrimitive.ChoiceInput
        data-slot="questionnaire-choice-input"
        data-qa="questionnaire-choice-input"
        className="cn-questionnaire-choice-input absolute inset-0 z-10 size-full cursor-pointer opacity-0"
      />
      <span
        aria-hidden="true"
        data-slot="questionnaire-choice-indicator"
        data-qa="questionnaire-choice-indicator"
        className="cn-questionnaire-choice-indicator pointer-events-none relative flex shrink-0 items-center justify-center border group-data-[type=radio]/questionnaire-choice:rounded-full"
      >
        <span
          data-slot="questionnaire-choice-indicator-dot"
          data-qa="questionnaire-choice-indicator-dot"
          className="cn-questionnaire-choice-indicator-dot hidden rounded-full group-data-checked/questionnaire-choice:block group-data-[type=checkbox]/questionnaire-choice:hidden"
        />
      </span>
      <QuestionnairePrimitive.ChoiceLabel
        data-slot="questionnaire-choice-label"
        data-qa="questionnaire-choice-label"
        className="cn-questionnaire-choice-label cn-questionnaire-choice-content flex min-w-0 flex-1 flex-col leading-snug"
      >
        {children}
      </QuestionnairePrimitive.ChoiceLabel>
      <QuestionnairePrimitive.ChoiceShortcut
        data-slot="questionnaire-choice-shortcut"
        data-qa="questionnaire-choice-shortcut"
        className="cn-questionnaire-choice-shortcut cn-questionnaire-shortcut pointer-events-none ms-auto hidden shrink-0 group-data-[shortcut]/questionnaire-choice:inline-flex"
      />
    </QuestionnairePrimitive.Choice>
  );
}
QuestionnaireChoice.displayName = 'QuestionnaireChoice';

function QuestionnaireChoiceDescription({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="questionnaire-choice-description"
      data-qa="questionnaire-choice-description"
      className={cn('cn-questionnaire-choice-description', className)}
      {...props}
    />
  );
}
QuestionnaireChoiceDescription.displayName = 'QuestionnaireChoiceDescription';

function QuestionnaireInput({ className, ...props }: React.ComponentProps<typeof QuestionnairePrimitive.Input>) {
  return (
    <div
      data-slot="questionnaire-input-wrapper"
      data-qa="questionnaire-input-wrapper"
      className="cn-questionnaire-input-wrapper group/questionnaire-input relative min-w-0"
    >
      <QuestionnairePrimitive.Input
        data-slot="questionnaire-input"
        data-qa="questionnaire-input"
        className={cn(
          'cn-questionnaire-input min-h-11 w-full min-w-0 transition-[color,box-shadow,background-color] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 sm:min-h-0',
          'selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground',
          className,
        )}
        {...props}
      />
    </div>
  );
}
QuestionnaireInput.displayName = 'QuestionnaireInput';

function QuestionnaireError({ className, ...props }: React.ComponentProps<typeof QuestionnairePrimitive.Error>) {
  return (
    <QuestionnairePrimitive.Error
      data-slot="questionnaire-error"
      data-qa="questionnaire-error"
      className={cn('cn-questionnaire-error text-destructive', className)}
      {...props}
    />
  );
}
QuestionnaireError.displayName = 'QuestionnaireError';

function QuestionnaireActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="questionnaire-actions"
      data-qa="questionnaire-actions"
      className={cn(
        'cn-questionnaire-actions grid min-h-11 w-full grid-cols-[minmax(0,1fr)_auto_auto] items-center',
        className,
      )}
      {...props}
    />
  );
}
QuestionnaireActions.displayName = 'QuestionnaireActions';

function QuestionnairePrevious({
  children,
  className,
  size = 'default',
  variant = 'outline',
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Previous> & { variant?: string; size?: string }) {
  return (
    <QuestionnairePrimitive.Previous
      data-slot="questionnaire-previous"
      data-qa="questionnaire-previous"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size: size as never, variant: variant as never }),
        'cn-questionnaire-previous col-start-1 row-start-1 min-h-11 justify-self-start sm:min-h-0',
        className,
      )}
      {...props}
    >
      {children ?? 'Previous'}
    </QuestionnairePrimitive.Previous>
  );
}
QuestionnairePrevious.displayName = 'QuestionnairePrevious';

function QuestionnaireSkip({
  children,
  className,
  size = 'default',
  variant = 'outline',
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Skip> & { variant?: string; size?: string }) {
  return (
    <QuestionnairePrimitive.Skip
      data-slot="questionnaire-skip"
      data-qa="questionnaire-skip"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size: size as never, variant: variant as never }),
        'cn-questionnaire-skip col-start-2 row-start-1 min-h-11 justify-self-end sm:min-h-0',
        className,
      )}
      {...props}
    >
      {children ?? 'Skip'}
    </QuestionnairePrimitive.Skip>
  );
}
QuestionnaireSkip.displayName = 'QuestionnaireSkip';

function QuestionnaireNext({
  children,
  className,
  size = 'default',
  variant = 'default',
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Next> & { variant?: string; size?: string }) {
  return (
    <QuestionnairePrimitive.Next
      data-slot="questionnaire-next"
      data-qa="questionnaire-next"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size: size as never, variant: variant as never }),
        'cn-questionnaire-next col-start-3 row-start-1 min-h-11 justify-self-end sm:min-h-0',
        className,
      )}
      {...props}
    >
      {children ?? 'Next'}
    </QuestionnairePrimitive.Next>
  );
}
QuestionnaireNext.displayName = 'QuestionnaireNext';

function QuestionnaireSubmit({
  children,
  className,
  size = 'default',
  variant = 'default',
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Submit> & { variant?: string; size?: string }) {
  return (
    <QuestionnairePrimitive.Submit
      data-slot="questionnaire-submit"
      data-qa="questionnaire-submit"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size: size as never, variant: variant as never }),
        'cn-questionnaire-submit col-start-3 row-start-1 min-h-11 justify-self-end sm:min-h-0',
        className,
      )}
      {...props}
    >
      {children ?? 'Submit'}
    </QuestionnairePrimitive.Submit>
  );
}
QuestionnaireSubmit.displayName = 'QuestionnaireSubmit';

export {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
};
