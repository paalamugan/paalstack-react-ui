/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { OptionGroupType, OptionType } from '@/shared/types';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComboboxValueType } from './types';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { toast } from '../../../providers/src/ToastProvider/Toast';
import { Button } from '../Button';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '../Field';
import { FormField, FormProvider } from '../Form';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxLoading,
  ComboboxRoot,
  ComboboxSeparator,
} from './Combobox';

// ─── Shared mock data & fetch helpers ────────────────────────────────────────

const ALL_COUNTRIES: OptionType[] = [
  { value: 'us', label: 'United States', key: 'us' },
  { value: 'gb', label: 'United Kingdom', key: 'gb' },
  { value: 'ca', label: 'Canada', key: 'ca' },
  { value: 'au', label: 'Australia', key: 'au' },
  { value: 'de', label: 'Germany', key: 'de' },
  { value: 'fr', label: 'France', key: 'fr' },
  { value: 'jp', label: 'Japan', key: 'jp' },
  { value: 'cn', label: 'China', key: 'cn' },
  { value: 'in', label: 'India', key: 'in' },
  { value: 'br', label: 'Brazil', key: 'br' },
  { value: 'mx', label: 'Mexico', key: 'mx' },
  { value: 'it', label: 'Italy', key: 'it' },
  { value: 'es', label: 'Spain', key: 'es' },
  { value: 'kr', label: 'South Korea', key: 'kr' },
  { value: 'ru', label: 'Russia', key: 'ru' },
  { value: 'za', label: 'South Africa', key: 'za' },
  { value: 'ng', label: 'Nigeria', key: 'ng' },
  { value: 'ar', label: 'Argentina', key: 'ar' },
  { value: 'nl', label: 'Netherlands', key: 'nl' },
  { value: 'se', label: 'Sweden', key: 'se' },
];

/** Simulates a remote API call with a configurable delay. */
const mockFetch = (query: string, delayMs = 800): Promise<OptionType[]> =>
  new Promise((resolve) =>
    setTimeout(() => {
      const q = query.toLowerCase();
      resolve(ALL_COUNTRIES.filter((c) => c.label.toLowerCase().includes(q)));
    }, delayMs),
  );

/** Like mockFetch but rejects ~30 % of the time to demonstrate error handling. */
const mockFetchWithErrors = (query: string): Promise<OptionType[]> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error('Network error – please try again.'));
      } else {
        const q = query.toLowerCase();
        resolve(ALL_COUNTRIES.filter((c) => c.label.toLowerCase().includes(q)));
      }
    }, 800),
  );

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    options: [
      { value: 'item-1', label: 'Option 1', key: 'item-1' },
      { value: 'item-2', label: 'Option 2', key: 'item-2' },
      { value: 'item-3', label: 'Option 3', key: 'item-3' },
    ],
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Combobox>;

// ─── Props API Stories ────────────────────────────────────────────────────────

export const Basic: Story = {
  args: {
    placeholder: 'Search a item...',
    className: 'w-[300px]',
    contentClassName: 'w-[300px]',
  },
};

export const WithLabel: Story = {
  args: {
    ...Basic.args,
    label: 'Label',
  },
};

export const WithInvalidWithoutMessage: Story = {
  args: {
    ...WithLabel.args,
    isInvalid: true,
  },
};

export const WithErrorMessage: Story = {
  args: { ...WithInvalidWithoutMessage.args, errorMessage: 'This field is required.' },
};

export const WithInline: Story = {
  args: {
    ...WithLabel.args,
    inline: true,
  },
};

export const WithInlineRequired: Story = {
  args: {
    ...WithInline.args,
    required: true,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<ComboboxValueType | null>(null);
    return (
      <div className="w-[300px]">
        <Combobox {...args} value={value} onValueChange={(v) => setValue(v as ComboboxValueType)} />
        <p className="mt-2 text-sm text-muted-foreground">Selected: {value ? JSON.stringify(value) : 'none'}</p>
      </div>
    );
  },
  args: {
    ...WithLabel.args,
    label: 'Controlled Combobox',
  },
};

export const ControlledWithSelectOptionAsValue: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(null);
    const optionMap = {
      us: 'United States',
      gb: 'United Kingdom',
      ca: 'Canada',
    };
    return (
      <div className="w-[300px]">
        <Combobox
          {...args}
          value={value}
          onValueChange={(v) => setValue(v as string)}
          itemToStringLabel={(item) => optionMap[item as keyof typeof optionMap]}
        />
        <p className="mt-2 text-sm text-muted-foreground">Selected: {value ? JSON.stringify(value) : 'none'}</p>
      </div>
    );
  },
  args: {
    ...WithLabel.args,
    label: 'Controlled Combobox with Select Option As Value',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'gb', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
    ],
    selectOptionAsValue: true,
  },
};

export const ControlledWithDefaultSelectOptionAsValue: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div className="w-[300px]">
        <Combobox {...args} value={value} onValueChange={(v) => setValue(v as string)} />
        <p className="mt-2 text-sm text-muted-foreground">Selected: {value ? JSON.stringify(value) : 'none'}</p>
      </div>
    );
  },
  args: {
    ...WithLabel.args,
    label: 'Controlled Combobox with Default Select Option As Value',
    options: ['United States', 'United Kingdom', 'Canada'],
  },
};

export const Form: Story = {
  render: (args) => {
    const FormSchema = z.object({
      language: z.object(
        {
          value: z.string(),
          label: z.string(),
        },
        {
          required_error: 'Please select a language.',
        },
      ),
    });
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        language: undefined,
      },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }

    return (
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="language"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="story-language" required>
                  Language
                </FieldLabel>
                <Combobox
                  {...args}
                  {...field}
                  id="story-language"
                  aria-invalid={fieldState.invalid}
                  onValueChange={(v) => field.onChange(v as ComboboxValueType)}
                />
                <FieldDescription>This is the language that will be used in the dashboard.</FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    );
  },
  args: {
    options: [
      {
        label: 'English',
        items: [
          { label: 'English', value: 'en', key: 'en' },
          { label: 'French', value: 'fr', key: 'fr' },
          { label: 'German', value: 'de', key: 'de' },
          { label: 'Spanish', value: 'es', key: 'es' },
          { label: 'Portuguese', value: 'pt', key: 'pt' },
          { label: 'Russian', value: 'ru', key: 'ru' },
          { label: 'Japanese', value: 'ja', key: 'ja' },
          { label: 'Korean', value: 'ko', key: 'ko' },
          { label: 'Chinese', value: 'zh', key: 'zh' },
        ],
      },
    ],
    placeholder: 'Search a language...',
    emptyOptionMessage: 'No language found.',
  },
};

// ─── Remote Fetch Stories ─────────────────────────────────────────────────────

/**
 * Simulates a remote API call.
 * Type at least one character to trigger a fetch (debounced 400 ms).
 * The dropdown shows a spinner while loading and displays results once resolved.
 */
export const RemoteFetch: Story = {
  name: 'Remote Fetch: Basic',
  render: () => {
    const [value, setValue] = useState<ComboboxValueType | null>({
      value: 'ca',
      label: 'Canada',
    });
    return (
      <div className="w-[320px]">
        <Combobox
          label="Country"
          placeholder="Search countries…"
          value={value}
          onValueChange={setValue}
          fetchOptions={mockFetch}
          fetchDebounce={400}
          loadingMessage="Searching countries…"
          emptyOptionMessage="No countries found."
          className="w-full"
        />
        <p className="mt-2 text-sm text-muted-foreground">Selected: {value ? JSON.stringify(value) : 'none'}</p>
      </div>
    );
  },
};

/**
 * Shows a list of initial options before the user types, then switches to
 * remote results once the user starts searching.
 */
export const RemoteFetchWithInitialOptions: Story = {
  name: 'Remote Fetch: With Initial Options',
  render: () => {
    const [value, setValue] = useState<string | null>('');
    const popular: OptionType[] = [
      { value: 'us', label: 'United States', key: 'us' },
      { value: 'gb', label: 'United Kingdom', key: 'gb' },
      { value: 'ca', label: 'Canada', key: 'ca' },
    ];
    return (
      <div className="w-[320px]">
        <Combobox
          label="Country"
          placeholder="Search countries…"
          value={value}
          onValueChange={setValue}
          options={popular}
          fetchOptions={mockFetch}
          fetchDebounce={350}
          loadingMessage="Searching…"
          emptyOptionMessage="No countries match your search."
          className="w-full"
        />
        <p className="mt-2 text-sm text-muted-foreground">
          Popular countries shown before typing. Start typing to search all.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Selected: {value ? JSON.stringify(value) : 'none'}</p>
      </div>
    );
  },
};

/**
 * Demonstrates graceful error handling: ~30 % of fetches fail.
 * On failure the dropdown shows the empty state instead of crashing.
 */
export const RemoteFetchWithErrors: Story = {
  name: 'Remote Fetch: With Errors',
  render: () => {
    const [value, setValue] = useState<ComboboxValueType | null>(null);
    return (
      <div className="w-[320px]">
        <Combobox
          label="Country (may fail ~30 %)"
          placeholder="Search countries…"
          value={value}
          onValueChange={setValue}
          fetchOptions={mockFetchWithErrors}
          emptyOptionMessage="No results — try again."
          loadingMessage="Fetching…"
          className="w-full"
        />
        <p className="mt-2 text-sm text-muted-foreground">
          Errors are silently swallowed; the dropdown shows the empty state.
        </p>
      </div>
    );
  },
};

/**
 * The `isLoading` prop lets you control the loading indicator externally,
 * independent of `fetchOptions`. Useful when you manage fetching yourself.
 */
export const WithExternalLoading: Story = {
  name: 'Remote Fetch: External isLoading',
  render: () => {
    const [value, setValue] = useState<ComboboxValueType | null>(null);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState<OptionType[]>([]);

    const handleChange = async (query: string) => {
      if (!query.trim()) {
        setOptions([]);
        return;
      }
      setLoading(true);
      const results = await mockFetch(query, 1000);
      setOptions(results);
      setLoading(false);
    };

    return (
      <div className="w-[320px] space-y-3">
        <Combobox
          label="Country (external load)"
          placeholder="Search countries…"
          value={value}
          onValueChange={setValue}
          options={options}
          isLoading={loading}
          loadingMessage="Please wait…"
          emptyOptionMessage="Type to search."
          inputProps={{ onChange: (e) => void handleChange((e as React.ChangeEvent<HTMLInputElement>).target.value) }}
          className="w-full"
        />
        <p className="text-sm text-muted-foreground">isLoading and options are managed externally.</p>
      </div>
    );
  },
};

/**
 * Remote fetch integrated with react-hook-form via the Field component family.
 * Validation requires a country to be selected.
 */
export const RemoteFetchInForm: Story = {
  name: 'Remote Fetch: In Form',
  render: () => {
    const schema = z.object({
      country: z
        .object(
          {
            value: z.string(),
            label: z.string(),
          },
          {
            required_error: 'Please select a country.',
          },
        )
        .nullable(),
    });
    type FormValues = z.infer<typeof schema>;

    const form = useForm<FormValues>({
      resolver: zodResolver(schema),
      defaultValues: { country: null },
    });

    const onSubmit = (data: FormValues) => {
      toast('Submitted!', {
        description: (
          <pre className="mt-2 w-[300px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    };

    return (
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[320px] space-y-4">
          <FieldGroup>
            <FormField
              control={form.control}
              name="country"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="remote-country" required>
                    Country
                  </FieldLabel>
                  <Combobox
                    id="remote-country"
                    placeholder="Search countries…"
                    value={field.value}
                    onValueChange={(v) => field.onChange(v)}
                    fetchOptions={mockFetch}
                    fetchDebounce={400}
                    loadingMessage="Searching countries…"
                    emptyOptionMessage="No countries found."
                    aria-invalid={fieldState.invalid}
                    className="w-full"
                  />
                  <FieldDescription>Start typing to search all countries.</FieldDescription>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Reset
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </FormProvider>
    );
  },
};

export const WithMultiple: Story = {
  args: {
    ...WithLabel.args,
    multiple: true,
  },
};

// ─── Grouped Options Stories ──────────────────────────────────────────────────

const FRAMEWORK_GROUPS: OptionGroupType[] = [
  {
    label: 'Frontend',
    items: [
      { value: 'react', label: 'React', key: 'react' },
      { value: 'vue', label: 'Vue', key: 'vue' },
      { value: 'angular', label: 'Angular', key: 'angular' },
      { value: 'svelte', label: 'Svelte', key: 'svelte' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { value: 'express', label: 'Express', key: 'express' },
      { value: 'fastify', label: 'Fastify', key: 'fastify' },
      { value: 'nestjs', label: 'NestJS', key: 'nestjs' },
      { value: 'hono', label: 'Hono', key: 'hono' },
    ],
  },
  {
    label: 'Full-stack',
    items: [
      { value: 'nextjs', label: 'Next.js', key: 'nextjs' },
      { value: 'nuxt', label: 'Nuxt', key: 'nuxt' },
      { value: 'remix', label: 'Remix', key: 'remix' },
      { value: 'sveltekit', label: 'SvelteKit', key: 'sveltekit' },
    ],
  },
];

/**
 * Pass an array of `OptionGroupType` to `options` to render grouped options with
 * labelled sections separated by dividers — no composition required.
 */
export const WithGroups: Story = {
  name: 'Groups: Basic',
  render: (args) => (
    <div className="w-[300px]">
      <Combobox {...args} />
    </div>
  ),
  args: {
    label: 'Framework',
    placeholder: 'Search frameworks...',
    emptyOptionMessage: 'No frameworks found.',
    options: FRAMEWORK_GROUPS,
  },
};

/**
 * Controlled combobox with grouped options — the selected value is
 * displayed below the input.
 */
export const WithGroupsControlled: Story = {
  name: 'Groups: Controlled',
  render: (args) => {
    const [value, setValue] = useState<ComboboxValueType | null>(null);
    return (
      <div className="w-[300px] space-y-3">
        <Combobox {...args} value={value} onValueChange={(v) => setValue(v as ComboboxValueType)} />
        <p className="text-sm text-muted-foreground">Selected: {value ? `${value.label} (${value.value})` : 'none'}</p>
      </div>
    );
  },
  args: {
    label: 'Framework',
    placeholder: 'Search frameworks...',
    emptyOptionMessage: 'No frameworks found.',
    options: FRAMEWORK_GROUPS,
  },
};

/**
 * Grouped combobox wired to react-hook-form with Zod validation.
 * Selecting from any group populates the field value; submitting without
 * a selection shows the validation error.
 */
export const WithGroupsInForm: Story = {
  name: 'Groups: In Form',
  render: () => {
    const schema = z.object({
      framework: z
        .object({ value: z.string(), label: z.string() }, { required_error: 'Please select a framework.' })
        .nullable(),
    });
    type FormValues = z.infer<typeof schema>;

    const form = useForm<FormValues>({
      resolver: zodResolver(schema),
      defaultValues: { framework: null },
    });

    const onSubmit = (data: FormValues) => {
      toast('Submitted!', {
        description: (
          <pre className="mt-2 w-[300px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    };

    return (
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[300px] space-y-4">
          <FormField
            control={form.control}
            name="framework"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="story-framework" required>
                  Framework
                </FieldLabel>
                <Combobox
                  id="story-framework"
                  placeholder="Search frameworks..."
                  options={FRAMEWORK_GROUPS}
                  emptyOptionMessage="No frameworks found."
                  value={field.value}
                  onValueChange={field.onChange}
                  aria-invalid={fieldState.invalid}
                  className="w-full"
                />
                <FieldDescription>Pick a framework from any category.</FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Reset
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </FormProvider>
    );
  },
};

/**
 * Flat options and group options can be mixed in the same `options` array.
 * Top-level flat items are rendered before the first labelled group.
 */
export const WithMixedGroupsAndOptions: Story = {
  name: 'Groups: Mixed with Flat Options',
  render: (args) => (
    <div className="w-[300px]">
      <Combobox {...args} />
    </div>
  ),
  args: {
    label: 'Tech stack',
    placeholder: 'Search...',
    emptyOptionMessage: 'No results found.',
    options: [
      { value: 'typescript', label: 'TypeScript', key: 'typescript' },
      { value: 'javascript', label: 'JavaScript', key: 'javascript' },
      {
        label: 'Frontend',
        items: [
          { value: 'react', label: 'React', key: 'react' },
          { value: 'vue', label: 'Vue', key: 'vue' },
        ],
      },
      {
        label: 'Backend',
        items: [
          { value: 'node', label: 'Node.js', key: 'node' },
          { value: 'deno', label: 'Deno', key: 'deno' },
        ],
      },
    ],
  },
};

// ─── Composition API Stories ──────────────────────────────────────────────────

export const CompositionBasic: Story = {
  name: 'Composition: Basic',
  render: () => (
    <div className="w-[300px]">
      <ComboboxRoot items={['React', 'Vue', 'Angular', 'Svelte']}>
        <ComboboxInput placeholder="Search frameworks..." />
        <ComboboxContent>
          <ComboboxList>{(item) => <ComboboxItem value={item}>{item}</ComboboxItem>}</ComboboxList>
          <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
        </ComboboxContent>
      </ComboboxRoot>
    </div>
  ),
};

export const CompositionWithGroups: Story = {
  name: 'Composition: With Groups',
  render: () => {
    const items = [
      { label: 'Frontend', items: ['React', 'Vue', 'Angular'] },
      { label: 'Backend', items: ['Express', 'Fastify', 'NestJS'] },
    ];
    return (
      <div className="w-[300px]">
        <ComboboxRoot items={items}>
          <ComboboxInput placeholder="Search..." />
          <ComboboxContent>
            <ComboboxList>
              {(item: { label: string; items: string[] }, index: number) => (
                <>
                  <ComboboxGroup key={index}>
                    <ComboboxLabel>{item.label}</ComboboxLabel>
                    {item.items.map((item) => (
                      <ComboboxItem key={item} value={item}>
                        {item}
                      </ComboboxItem>
                    ))}
                  </ComboboxGroup>
                  {index !== items.length - 1 && <ComboboxSeparator />}
                </>
              )}
            </ComboboxList>
            <ComboboxEmpty>No results found.</ComboboxEmpty>
          </ComboboxContent>
        </ComboboxRoot>
      </div>
    );
  },
};

export const CompositionWithClear: Story = {
  name: 'Composition: With Clear',
  render: () => (
    <div className="w-[300px]">
      <ComboboxRoot>
        <ComboboxInput placeholder="Search..." showClear />
        <ComboboxContent>
          <ComboboxList>
            <ComboboxItem value="react">React</ComboboxItem>
            <ComboboxItem value="vue">Vue</ComboboxItem>
            <ComboboxItem value="angular">Angular</ComboboxItem>
          </ComboboxList>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
        </ComboboxContent>
      </ComboboxRoot>
    </div>
  ),
};

/**
 * Composition API with fully custom remote-fetch logic.
 * Debounce, fetching, and loading state are managed manually inside the render.
 * Use `ComboboxLoading` as a drop-in loading slot inside `ComboboxContent`.
 */
export const CompositionRemoteFetch: Story = {
  name: 'Composition: Remote Fetch',
  render: () => {
    const [items, setItems] = useState<OptionType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const debounceRef = useState<ReturnType<typeof setTimeout> | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;

      if (debounceRef[0]) clearTimeout(debounceRef[0]);

      if (!query.trim()) {
        setItems([]);
        setIsLoading(false);
        return;
      }

      setItems([]);
      setIsLoading(true);

      debounceRef[1](
        setTimeout(async () => {
          const results = await mockFetch(query, 700);
          setItems(results);
          setIsLoading(false);
        }, 350),
      );
    };

    return (
      <div className="w-[320px]">
        <ComboboxRoot items={items}>
          <ComboboxInput
            placeholder="Search countries…"
            onChange={handleInputChange as Parameters<typeof ComboboxInput>[0]['onChange']}
          />
          <ComboboxContent>
            {isLoading ? (
              <ComboboxLoading>Searching countries…</ComboboxLoading>
            ) : (
              <>
                <ComboboxEmpty>No countries found.</ComboboxEmpty>
                <ComboboxList>
                  {(item: OptionType) => (
                    <ComboboxItem key={item.key} value={item}>
                      {item.label}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </>
            )}
          </ComboboxContent>
        </ComboboxRoot>
        <p className="mt-2 text-sm text-muted-foreground">
          Fully manual: debounce, fetch, and loading state managed in the render function.
        </p>
      </div>
    );
  },
};
