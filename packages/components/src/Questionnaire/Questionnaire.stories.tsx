import type { Meta, StoryObj } from '@storybook/react';
import type * as React from 'react';

import {
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
} from './Questionnaire';

const meta: Meta<typeof Questionnaire> = {
  title: 'Components/Questionnaire',
  component: Questionnaire,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Questionnaire>;

const ITEMS = [
  { name: 'task', required: true },
  { name: 'review', required: true },
  { name: 'delivery', required: true },
];

const CHOICES: Record<string, Array<{ value: string; label: string; description?: string }>> = {
  task: [
    { value: 'implement', label: 'Implement the requested change' },
    { value: 'debug', label: 'Debug the current behavior' },
    { value: 'review', label: 'Review the implementation' },
  ],
  review: [
    { value: 'targeted', label: 'Targeted checks', description: 'Only the affected modules' },
    { value: 'complete', label: 'Complete test suite' },
    { value: 'manual', label: 'Tests and manual QA' },
  ],
  delivery: [
    { value: 'summary', label: 'Concise summary' },
    { value: 'diff', label: 'Summary and changed files' },
    { value: 'handoff', label: 'Detailed review handoff' },
  ],
};

export const Default: Story = {
  render: () => (
    <Questionnaire
      className="mx-auto max-w-md rounded-xl border p-6"
      items={ITEMS}
      defaultItem="task"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data: Record<string, FormDataEntryValue> = {};
        new FormData(event.currentTarget).forEach((value, key) => {
          data[key] = value;
        });
        // eslint-disable-next-line no-console
        console.log('Questionnaire submitted:', data);
      }}
    >
      <QuestionnaireProgress />
      <QuestionnaireItem name="task" required>
        <QuestionnaireTitle>What should the agent do?</QuestionnaireTitle>
        <QuestionnaireDescription>Choose the task for this run.</QuestionnaireDescription>
        <QuestionnaireChoices>
          {CHOICES.task.map((choice) => (
            <QuestionnaireChoice key={choice.value} value={choice.value}>
              {choice.label}
            </QuestionnaireChoice>
          ))}
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireItem name="review" required>
        <QuestionnaireTitle>How should the work be reviewed?</QuestionnaireTitle>
        <QuestionnaireDescription>Select the verification depth.</QuestionnaireDescription>
        <QuestionnaireChoices>
          {CHOICES.review.map((choice) => (
            <QuestionnaireChoice key={choice.value} value={choice.value}>
              {choice.label}
              {choice.description && (
                <QuestionnaireChoiceDescription>{choice.description}</QuestionnaireChoiceDescription>
              )}
            </QuestionnaireChoice>
          ))}
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireItem name="delivery" required>
        <QuestionnaireTitle>How should the result be delivered?</QuestionnaireTitle>
        <QuestionnaireDescription>Choose the final handoff format.</QuestionnaireDescription>
        <QuestionnaireChoices>
          {CHOICES.delivery.map((choice) => (
            <QuestionnaireChoice key={choice.value} value={choice.value}>
              {choice.label}
            </QuestionnaireChoice>
          ))}
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext>Next</QuestionnaireNext>
        <QuestionnaireSubmit>Save workflow</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  ),
};

export const MultipleChoice: Story = {
  render: () => (
    <Questionnaire
      className="mx-auto max-w-md rounded-xl border p-6"
      items={[{ name: 'stack', required: true }]}
      defaultItem="stack"
    >
      <QuestionnaireProgress />
      <QuestionnaireItem name="stack" multiple required>
        <QuestionnaireTitle>Which parts should be included?</QuestionnaireTitle>
        <QuestionnaireDescription>Pick all that apply.</QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="linting">ESLint + Prettier</QuestionnaireChoice>
          <QuestionnaireChoice value="testing">Jest + Testing Library</QuestionnaireChoice>
          <QuestionnaireChoice value="ci">GitHub Actions CI</QuestionnaireChoice>
          <QuestionnaireChoice value="storybook">Storybook docs</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext>Next</QuestionnaireNext>
        <QuestionnaireSubmit>Finish</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  ),
};

export const FreeformInput: Story = {
  render: () => (
    <Questionnaire
      className="mx-auto max-w-md rounded-xl border p-6"
      items={[{ name: 'notes', required: true }]}
      defaultItem="notes"
    >
      <QuestionnaireProgress />
      <QuestionnaireItem name="notes" required>
        <QuestionnaireTitle>Anything else we should know?</QuestionnaireTitle>
        <QuestionnaireDescription>Freeform answer — required.</QuestionnaireDescription>
        <QuestionnaireInput type="text" placeholder="Type your answer…" />
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSubmit>Submit</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  ),
};

export const Skippable: Story = {
  render: () => (
    <Questionnaire
      className="mx-auto max-w-md rounded-xl border p-6"
      items={[{ name: 'name', required: true }, { name: 'company' }]}
      defaultItem="name"
    >
      <QuestionnaireProgress />
      <QuestionnaireItem name="name" required>
        <QuestionnaireTitle>What is your name?</QuestionnaireTitle>
        <QuestionnaireInput type="text" placeholder="Full name" />
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireItem name="company">
        <QuestionnaireTitle>Company (optional)</QuestionnaireTitle>
        <QuestionnaireDescription>You can skip this step.</QuestionnaireDescription>
        <QuestionnaireInput type="text" placeholder="Company name" />
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext>Next</QuestionnaireNext>
        <QuestionnaireSubmit>Done</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  ),
};
