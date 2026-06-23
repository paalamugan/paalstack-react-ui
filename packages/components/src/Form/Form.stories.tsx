/* eslint-disable react-hooks/rules-of-hooks */

import { useMemo } from 'react';

import type { OptionGroupType } from '@/shared/types';
import type { Meta, StoryObj } from '@storybook/react';
import type { FormFieldItemType, FormProps } from './types';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LuSearch } from 'react-icons/lu';
import { z } from 'zod';

import { toast } from '../../../providers/src/ToastProvider/Toast';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel } from '../Field';
import { Input } from '../Input';
import { InputGroupText } from '../InputGroup';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import { FormField, FormRoot } from './components';
import { Form } from './Form';
import { FormFieldItem } from './FormFieldItem';
import { FormFieldItems } from './FormFieldItems';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    form: {
      description: 'The form object from react-hook-form',
    },
    fields: {
      description: 'The fields to render',
    },
    onSubmit: {
      description: 'The callback when the form is submitted',
    },
    submitText: {
      description: 'The text to display on the submit button',
    },
    SubmitButton: {
      description: 'The submit button component',
    },
    submitButtonVariant: {
      description: 'The submit button variant',
    },
    submitButtonColor: {
      description: 'The submit button color',
    },
    submitClassName: {
      description: 'The class name for the submit button',
    },
    resetText: {
      description: 'The text to display on the reset button',
    },
    ResetButton: {
      description: 'The reset button component',
    },
    resetButtonVariant: {
      description: 'The reset button variant',
    },
    resetButtonColor: {
      description: 'The reset button color',
    },
    resetClassName: {
      description: 'The class name for the reset button',
    },
    className: {
      description: 'The class name for the form element',
    },
    actionClassName: {
      description: 'The parent class name for reset and submit buttons',
    },
    hideResetButton: {
      description: 'Whether to hide the reset button',
    },
    hideSubmitButton: {
      description: 'Whether to hide the submit button',
    },
    inline: {
      description: 'Whether to display the form inline',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Basic: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: FormProps<any>) => {
    const formItemFields: FormFieldItemType<FormType>[] = [
      {
        type: 'input',
        name: 'username',
        label: 'Username',
        description: 'This is your public username name.',
        placeholder: 'Enter a username',
        required: true,
        autoComplete: 'off',
        labelDescription: 'This is your public username name.',
      },
      {
        type: 'input',
        name: 'email',
        label: 'Email',
        placeholder: 'Enter a email',
        required: true,
      },
      {
        type: 'number',
        name: 'age',
        label: 'Age',
        placeholder: 'Enter a age',
        required: true,
      },
      {
        type: 'date-picker',
        name: 'dob',
        label: 'Date of Birth',
        placeholder: 'Select a date of birth',
        required: true,
      },
      {
        type: 'date-range-picker',
        name: 'dateRange',
        label: 'Date Range',
        placeholder: 'Select a date range',
        required: true,
      },
      {
        type: 'select',
        name: 'gender',
        label: 'Gender',
        required: true,
        placeholder: 'Select a gender',
        options: ['Male', 'Female', 'Other'],
      },
      {
        type: 'textarea',
        name: 'description',
        label: 'Description',
        required: true,
        placeholder: 'Enter a description',
      },
      {
        type: 'combobox',
        name: 'language',
        label: 'Language',
        placeholder: 'Select a language',
        required: true,
        options: [
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
      {
        type: 'multi-select',
        name: 'skills',
        label: 'Skills',
        required: true,
        placeholder: 'Select one or more skills',
        options: [
          { label: 'React', value: 'react', key: 'react' },
          { label: 'Vue', value: 'vue', key: 'vue' },
          { label: 'Angular', value: 'angular', key: 'angular' },
          { label: 'Svelte', value: 'svelte', key: 'svelte' },
          { label: 'Ember', value: 'ember', key: 'ember' },
          { label: 'Next.js', value: 'nextjs', key: 'nextjs' },
          { label: 'Nuxt.js', value: 'nuxtjs', key: 'nuxtjs' },
          { label: 'Gatsby', value: 'gatsby', key: 'gatsby' },
          { label: 'Sapper', value: 'sapper', key: 'sapper' },
          { label: 'Blitz.js', value: 'blitzjs', key: 'blitzjs' },
          { label: 'React Native', value: 'reactnative', key: 'reactnative' },
          { label: 'Flutter', value: 'flutter', key: 'flutter' },
          { label: 'Ionic', value: 'ionic', key: 'ionic' },
          { label: 'Cordova', value: 'cordova', key: 'cordova' },
          { label: 'Capacitor', value: 'capacitor', key: 'capacitor' },
          { label: 'Electron', value: 'electron', key: 'electron' },
          { label: 'NW.js', value: 'nwjs', key: 'nwjs' },
          { label: 'React Native Web', value: 'reactnativeweb', key: 'reactnativeweb' },
          { label: 'React Native Windows', value: 'reactnativewindows', key: 'reactnativewindows' },
          { label: 'React Native macOS', value: 'reactnativemacos', key: 'reactnativemacos' },
          { label: 'React Native Android', value: 'reactnativeandroid', key: 'reactnativeandroid' },
          { label: 'React Native iOS', value: 'reactnativeios', key: 'reactnativeios' },
        ],
      },
      {
        type: 'checkbox-group',
        name: 'courses',
        required: true,
        label: 'Courses',
        checkboxInline: true,
        options: [
          {
            label: 'React',
            value: 'react',
            key: 'react',
          },
          {
            label: 'Vue',
            value: 'vue',
            key: 'vue',
          },
          {
            label: 'Angular',
            value: 'angular',
            key: 'angular',
          },
          {
            label: 'Svelte',
            value: 'svelte',
            key: 'svelte',
          },
          {
            label: 'Ember',
            value: 'ember',
            key: 'ember',
          },
          {
            label: 'Next.js',
            value: 'nextjs',
            key: 'nextjs',
          },
        ],
      },
      {
        type: 'native-radio-group',
        name: 'newsletter',
        required: true,
        label: 'Newsletter',
        options: ['Yes', 'No'],
        labelClassName: 'font-normal',
        radioInline: true,
      },

      {
        type: 'input',
        name: 'displayName',
        label: 'Display Name',
        placeholder: 'Display name',
        description: 'This is your public display name.',
      },

      {
        type: 'checkbox',
        name: 'terms',
        required: true,
        label: 'Accept terms and conditions',
      },
    ];
    const genderOptions = ['Male', 'Female', 'Other'] as const;

    const formSchema = z.object({
      username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
      }),
      email: z.string().email({
        message: 'Please enter a valid email.',
      }),
      age: z
        .number({
          required_error: 'Please enter your age.',
        })
        .min(18, {
          message: 'You must be at least 18 years old.',
        }),
      dob: z.date({
        required_error: 'Please select a date of birth.',
      }),
      dateRange: z.object(
        {
          from: z.date({
            required_error: 'Please select a date range.',
          }),
          to: z.date().optional(),
        },
        {
          required_error: 'Please select a date range.',
        },
      ),
      gender: z.enum(genderOptions, {
        required_error: 'Please select a gender option',
      }),
      description: z.string().min(2, {
        message: 'Please enter a description',
      }),
      displayName: z.string().optional(),
      language: z
        .object(
          {
            value: z.string(),
            label: z.string(),
          },
          {
            required_error: 'Please select a language.',
          },
        )
        .nullable(),
      skills: z.array(z.string(), {
        required_error: 'Please select one or more skills.',
      }),
      courses: z.array(z.string(), {
        required_error: 'Please select one or more courses.',
      }),
      terms: z.boolean().refine((value) => value, {
        message: 'Please accept the terms and conditions.',
      }),
      newsletter: z.enum(['Yes', 'No'], {
        required_error: 'Please select a newsletter option',
      }),
    });

    type FormType = z.infer<typeof formSchema>;

    const form = useForm<FormType>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
        email: '',
        description: '',
        gender: undefined,
        age: undefined,
        displayName: '',
        skills: [],
        terms: false,
        newsletter: undefined,
        dob: undefined,
        dateRange: undefined,
      },
    });

    console.log(form.watch());

    const onSubmitHandle = async (values: FormType) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="overflow-auto text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    };

    return (
      <Form<FormType> {...args} form={form} fields={formItemFields} inline={args.inline} onSubmit={onSubmitHandle} />
    );
  },
};

export const WithInline: Story = {
  render: Basic.render,
  args: {
    inline: true,
  },
};

export const WithCustomGridFormAlignment: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: FormProps<any>) => {
    const formItemFields: FormFieldItemType<FormType>[] = [
      {
        type: 'input',
        name: 'username',
        label: 'Username',
        description: 'This is your public username name.',
        placeholder: 'Enter a username',
        required: true,
        autoComplete: 'off',
        labelDescription: 'This is your public username name.',
      },
      {
        type: 'input',
        name: 'email',
        label: 'Email',
        placeholder: 'Enter a email',
        required: true,
      },
      {
        type: 'number',
        name: 'age',
        label: 'Age',
        placeholder: 'Enter a age',
        required: true,
      },
      {
        type: 'date-picker',
        name: 'dob',
        label: 'Date of Birth',
        placeholder: 'Select a date of birth',
        required: true,
      },
      {
        type: 'date-range-picker',
        name: 'dateRange',
        label: 'Date Range',
        placeholder: 'Select a date range',
        required: true,
      },
      {
        type: 'select',
        name: 'gender',
        label: 'Gender',
        required: true,
        placeholder: 'Select a gender',
        options: ['Male', 'Female', 'Other'],
      },
      {
        type: 'textarea',
        name: 'description',
        label: 'Description',
        required: true,
        placeholder: 'Enter a description',
        formItemClassName: 'col-span-2',
      },
      {
        type: 'combobox',
        name: 'language',
        label: 'Language',
        placeholder: 'Select a language',
        required: true,
        options: [
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
      {
        type: 'multi-select',
        name: 'skills',
        label: 'Skills',
        required: true,
        placeholder: 'Select one or more skills',
        options: [
          { label: 'React', value: 'react', key: 'react' },
          { label: 'Vue', value: 'vue', key: 'vue' },
          { label: 'Angular', value: 'angular', key: 'angular' },
          { label: 'Svelte', value: 'svelte', key: 'svelte' },
          { label: 'Ember', value: 'ember', key: 'ember' },
          { label: 'Next.js', value: 'nextjs', key: 'nextjs' },
          { label: 'Nuxt.js', value: 'nuxtjs', key: 'nuxtjs' },
          { label: 'Gatsby', value: 'gatsby', key: 'gatsby' },
          { label: 'Sapper', value: 'sapper', key: 'sapper' },
          { label: 'Blitz.js', value: 'blitzjs', key: 'blitzjs' },
          { label: 'React Native', value: 'reactnative', key: 'reactnative' },
          { label: 'Flutter', value: 'flutter', key: 'flutter' },
          { label: 'Ionic', value: 'ionic', key: 'ionic' },
          { label: 'Cordova', value: 'cordova', key: 'cordova' },
          { label: 'Capacitor', value: 'capacitor', key: 'capacitor' },
          { label: 'Electron', value: 'electron', key: 'electron' },
          { label: 'NW.js', value: 'nwjs', key: 'nwjs' },
          { label: 'React Native Web', value: 'reactnativeweb', key: 'reactnativeweb' },
          { label: 'React Native Windows', value: 'reactnativewindows', key: 'reactnativewindows' },
          { label: 'React Native macOS', value: 'reactnativemacos', key: 'reactnativemacos' },
          { label: 'React Native Android', value: 'reactnativeandroid', key: 'reactnativeandroid' },
          { label: 'React Native iOS', value: 'reactnativeios', key: 'reactnativeios' },
        ],
      },
      {
        type: 'checkbox-group',
        name: 'courses',
        required: true,
        label: 'Courses',
        checkboxInline: true,
        options: [
          {
            label: 'React',
            value: 'react',
            key: 'react',
          },
          {
            label: 'Vue',
            value: 'vue',
            key: 'vue',
          },
          {
            label: 'Angular',
            value: 'angular',
            key: 'angular',
          },
          {
            label: 'Svelte',
            value: 'svelte',
            key: 'svelte',
          },
          {
            label: 'Ember',
            value: 'ember',
            key: 'ember',
          },
          {
            label: 'Next.js',
            value: 'nextjs',
            key: 'nextjs',
          },
        ],
      },
      {
        type: 'radio-group',
        name: 'newsletter',
        required: true,
        label: 'Newsletter',
        options: ['Yes', 'No'],
        labelClassName: 'font-normal',
        radioInline: true,
      },

      {
        type: 'input',
        name: 'displayName',
        label: 'Display Name',
        placeholder: 'Display name',
        description: 'This is your public display name.',
        formItemClassName: 'col-span-2',
      },

      {
        type: 'checkbox',
        name: 'terms',
        required: true,
        label: 'Accept terms and conditions',
        formItemClassName: 'col-span-2',
      },
    ];
    const genderOptions = ['Male', 'Female', 'Other'] as const;

    const formSchema = z.object({
      username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
      }),
      email: z.string().email({
        message: 'Please enter a valid email.',
      }),
      age: z
        .number({
          required_error: 'Please enter your age.',
        })
        .min(18, {
          message: 'You must be at least 18 years old.',
        }),
      dob: z.date({
        required_error: 'Please select a date of birth.',
      }),
      dateRange: z.object(
        {
          from: z.date({
            required_error: 'Please select a date range.',
          }),
          to: z.date().optional(),
        },
        {
          required_error: 'Please select a date range.',
        },
      ),
      gender: z.enum(genderOptions, {
        required_error: 'Please select a gender option',
      }),
      description: z.string().min(2, {
        message: 'Please enter a description',
      }),
      displayName: z.string().optional(),
      language: z
        .object(
          {
            value: z.string(),
            label: z.string(),
          },
          {
            required_error: 'Please select a language.',
          },
        )
        .nullable(),
      skills: z.array(z.string(), {
        required_error: 'Please select one or more skills.',
      }),
      courses: z.array(z.string(), {
        required_error: 'Please select one or more courses.',
      }),
      terms: z.boolean().refine((value) => value, {
        message: 'Please accept the terms and conditions.',
      }),
      newsletter: z.enum(['Yes', 'No'], {
        required_error: 'Please select a newsletter option',
      }),
    });

    type FormType = z.infer<typeof formSchema>;

    const form = useForm<FormType>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
        email: '',
        description: '',
        gender: undefined,
        age: undefined,
        displayName: '',
        skills: [],
        terms: false,
        newsletter: undefined,
        dob: undefined,
        dateRange: undefined,
      },
    });

    const onSubmitHandle = async (values: FormType) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="overflow-auto text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    };

    return (
      <Form<FormType> {...args} form={form} fields={formItemFields} inline={args.inline} onSubmit={onSubmitHandle} />
    );
  },
  args: {
    className: 'space-y-0 grid grid-cols-2 gap-4',
  },
};

export const WithCustomInputRender: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: FormProps<any>) => {
    const customInputSchema = z.object({
      firstName: z.string().min(2, {
        message: 'First Name must be at least 2 characters.',
      }),
    });
    const form = useForm<z.infer<typeof customInputSchema>>({
      resolver: zodResolver(customInputSchema),
      defaultValues: {
        firstName: '',
      },
    });
    const onSubmitHandle = async (values: z.infer<typeof customInputSchema>) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="overflow-auto text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    };
    return <Form<z.infer<typeof customInputSchema>> {...args} form={form} onSubmit={onSubmitHandle} />;
  },
  args: {
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        required: true,
        type: 'custom',
        render: ({ field }) => <Input type="text" placeholder="Enter a first name" {...field} />,
      },
    ],
  },
};

export const WithInputGroupAndField: Story = {
  render: () => {
    const inputGroupFieldSchema = z.object({
      search: z.string().min(1, 'Search term is required'),
      amount: z
        .string()
        .min(1, 'Amount is required')
        .refine((val) => !Number.isNaN(Number(val)) && Number(val) >= 0, 'Enter a valid amount'),
      website: z
        .string()
        .min(1, 'Website is required')
        .refine((val) => /^[a-zA-Z0-9.-]+$/.test(val), 'Enter a valid site name (letters, numbers, dots, hyphens)'),
      code: z.string().min(10, 'Code snippet must be at least 10 characters'),
      username: z.string().min(2, 'Username must be at least 2 characters'),
    });

    const form = useForm<z.infer<typeof inputGroupFieldSchema>>({
      resolver: zodResolver(inputGroupFieldSchema),
      defaultValues: {
        search: '',
        amount: '',
        website: '',
        code: '',
        username: '',
      },
    });
    const onSubmitHandle = async (values: z.infer<typeof inputGroupFieldSchema>) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast('Submitted:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="overflow-auto text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    };
    type InputGroupFieldFormType = z.infer<typeof inputGroupFieldSchema>;
    const fields = useMemo<FormFieldItemType<InputGroupFieldFormType>[]>(
      () => [
        {
          type: 'input-group',
          name: 'search',
          label: 'Search',
          placeholder: 'Search...',
          required: true,
          addonEnd: <LuSearch className="size-4" />,
        },
        {
          type: 'input-group',
          name: 'amount',
          label: 'Amount',
          placeholder: '0.00',
          inputType: 'number',
          required: true,
          addonStart: <InputGroupText>$</InputGroupText>,
          addonEnd: <InputGroupText>USD</InputGroupText>,
        },
        {
          type: 'input-group',
          name: 'website',
          label: 'Website',
          placeholder: 'yoursite',
          required: true,
          addonStart: <InputGroupText>https://</InputGroupText>,
          addonEnd: <InputGroupText>.com</InputGroupText>,
        },
        {
          type: 'input-group',
          name: 'code',
          label: 'Code snippet',
          textareaProps: { rows: 3, placeholder: 'Enter code...' },
          required: true,
          addonStart: <InputGroupText>script.js</InputGroupText>,
          addonStartAlign: 'block-start',
        },
        {
          type: 'field',
          name: 'username',
          label: 'Username',
          description: 'Shown with Field component (label, description, error).',
          required: true,
          render: ({ field }) => (
            <Input {...field} id={field.name} placeholder="Enter username" data-qa={`form-input-${field.name}`} />
          ),
          fieldProps: {
            'data-invalid': false,
          },
        },
      ],
      [],
    );
    return <Form<InputGroupFieldFormType> form={form} fields={fields} onSubmit={onSubmitHandle} submitText="Submit" />;
  },
};

export const WithFormFieldItemComponent: Story = {
  render: () => {
    const formSchema = z.object({
      firstName: z.string().min(2, 'First name must be at least 2 characters.'),
      lastName: z.string().min(2, 'Last name must be at least 2 characters.'),
      email: z.string().email('Please enter a valid email.'),
      role: z.string({ required_error: 'Please select a role.' }),
      bio: z.string().optional(),
      notifications: z.boolean().refine((val) => val, {
        message: 'You must enable notifications.',
      }),
    });

    type FormType = z.infer<typeof formSchema>;

    const form = useForm<FormType>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
        role: undefined,
        bio: '',
        notifications: false,
      },
    });

    const onSubmitHandle = async (values: FormType) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="overflow-auto text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    };

    const fields: FormFieldItemType<FormType>[] = [
      {
        type: 'input',
        name: 'firstName',
        label: 'First Name',
        placeholder: 'Enter first name',
        required: true,
      },
      {
        type: 'input',
        name: 'lastName',
        label: 'Last Name',
        placeholder: 'Enter last name',
        required: true,
      },
      {
        type: 'input',
        name: 'email',
        label: 'Email',
        placeholder: 'Enter email address',
        required: true,
        inputType: 'email',
      },
      {
        type: 'select',
        name: 'role',
        label: 'Role',
        placeholder: 'Select a role',
        required: true,
        options: ['Admin', 'Editor', 'Viewer'],
      },
      {
        type: 'textarea',
        name: 'bio',
        label: 'Bio',
        placeholder: 'Tell us about yourself',
      },
      {
        type: 'checkbox',
        name: 'notifications',
        label: 'Enable email notifications',
        required: true,
      },
    ];

    return (
      <FormRoot {...form}>
        <form onSubmit={form.handleSubmit(onSubmitHandle)} className="space-y-4" noValidate>
          {fields.map((field) => (
            <FormFieldItem<FormType> key={field.name} control={form.control} field={field} />
          ))}
          <Button type="submit">Submit</Button>
        </form>
      </FormRoot>
    );
  },
};

/**
 * Demonstrates the composable FormField + Field approach (shadcn v4 style).
 *
 * Instead of the config-driven <Form fields={[...]} /> pattern, this story shows how
 * to use <FormField> (a Controller wrapper) together with <Field>, <FieldLabel>,
 * <FieldDescription>, and <FieldError> for fully custom, composable form layouts.
 *
 * Both patterns coexist — use whichever fits your use case:
 * - Config-driven <Form /> for rapid, uniform forms
 * - Composable <FormField /> + <Field /> for custom layouts and full control
 */
export const WithComposableFieldComponents: Story = {
  render: () => {
    const formSchema = z.object({
      username: z
        .string()
        .min(3, 'Username must be at least 3 characters.')
        .max(20, 'Username must be at most 20 characters.'),
      email: z.string().email('Please enter a valid email address.'),
      role: z.string({ required_error: 'Please select a role.' }).min(1, 'Please select a role.'),
      bio: z.string().max(200, 'Bio must be at most 200 characters.').optional(),
      agreeToTerms: z.boolean().refine((val) => val, {
        message: 'You must agree to the terms and conditions.',
      }),
    });

    type FormType = z.infer<typeof formSchema>;

    const form = useForm<FormType>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
        email: '',
        role: '',
        bio: '',
        agreeToTerms: false,
      },
    });

    const onSubmitHandle = async (values: FormType) => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="overflow-auto text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    };

    return (
      <Form
        form={form}
        fields={[]}
        onSubmit={onSubmitHandle}
        hideResetButton
        hideSubmitButton
        id="composable-form"
        className="max-w-md space-y-4"
      >
        <FieldGroup>
          {/* Username — Input with Field components */}
          <FormField
            control={form.control}
            name="username"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} required>
                  Username
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter a username"
                  autoComplete="off"
                />
                <FieldDescription>Must be between 3 and 20 characters.</FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Email — Input type email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} required>
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="name@example.com"
                  autoComplete="email"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Role — Select with Field components */}
          <FormField
            control={form.control}
            name="role"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} required>
                  Role
                </FieldLabel>
                <Select
                  id={field.name}
                  name={field.name}
                  value={field.value}
                  placeholder="Select a role"
                  aria-invalid={fieldState.invalid}
                  options={[
                    { label: 'Admin', value: 'admin', key: 'admin' },
                    { label: 'Editor', value: 'editor', key: 'editor' },
                    { label: 'Viewer', value: 'viewer', key: 'viewer' },
                  ]}
                  onValueChange={field.onChange}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Bio — Textarea with character counter */}
          <FormField
            control={form.control}
            name="bio"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Bio</FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Tell us about yourself…"
                  className="min-h-24 resize-none"
                />
                <FieldDescription>{(field.value ?? '').length}/200 characters</FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Agree to terms — horizontal Checkbox + Field */}
          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field, fieldState }) => (
              <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                <Checkbox
                  id={field.name}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  aria-invalid={fieldState.invalid}
                />
                <FieldContent>
                  <FieldLabel htmlFor={field.name} className="font-normal" required>
                    I agree to the terms and conditions
                  </FieldLabel>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldContent>
              </Field>
            )}
          />
        </FieldGroup>

        <div className="flex gap-3">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    );
  },
};

const LANGUAGE_OPTIONS = [
  { label: 'English', value: 'en', key: 'en' },
  { label: 'French', value: 'fr', key: 'fr' },
  { label: 'German', value: 'de', key: 'de' },
  { label: 'Spanish', value: 'es', key: 'es' },
  { label: 'Portuguese', value: 'pt', key: 'pt' },
  { label: 'Russian', value: 'ru', key: 'ru' },
  { label: 'Japanese', value: 'ja', key: 'ja' },
  { label: 'Korean', value: 'ko', key: 'ko' },
  { label: 'Chinese', value: 'zh', key: 'zh' },
];

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
 * Demonstrates all Combobox variations inside a form:
 * - Config-driven single combobox (language)
 * - Config-driven combobox with grouped options (framework)
 * - Composable combobox with multiple selection (tags)
 */
export const WithCombobox: Story = {
  render: () => {
    const comboboxValueSchema = z.object(
      { value: z.string(), label: z.string() },
      { required_error: 'This field is required.' },
    );

    const formSchema = z.object({
      language: comboboxValueSchema.nullable(),
      framework: comboboxValueSchema.nullable(),
      tags: z
        .array(comboboxValueSchema, {
          required_error: 'Please select at least one tag.',
        })
        .min(1, 'Please select at least one tag.'),
    });

    type FormType = z.infer<typeof formSchema>;

    const fields: FormFieldItemType<FormType>[] = [
      {
        type: 'combobox',
        name: 'language',
        label: 'Language',
        placeholder: 'Search a language...',
        required: true,
        description: 'Select the language used in the dashboard.',
        options: LANGUAGE_OPTIONS,
      },
      {
        type: 'combobox',
        name: 'framework',
        label: 'Framework',
        placeholder: 'Search frameworks...',
        required: true,
        description: 'Pick a framework from any category.',
        options: FRAMEWORK_GROUPS,
      },
      {
        type: 'combobox',
        name: 'tags',
        label: 'Tags',
        placeholder: 'Select tags...',
        required: true,
        description: 'Select one or more tags (multiple mode).',
        options: LANGUAGE_OPTIONS,
        comboboxProps: {
          multiple: true,
          emptyOptionMessage: 'No tags found.',
        },
      },
    ];

    const form = useForm<FormType>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        language: undefined,
        framework: undefined,
        tags: [],
      },
    });

    const onSubmitHandle = async (values: FormType) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="overflow-auto text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    };

    return (
      <Form<FormType>
        form={form}
        fields={fields}
        onSubmit={onSubmitHandle}
        hideResetButton
        hideSubmitButton
        id="combobox-form"
        className="max-w-md space-y-4"
      >
        <div className="flex gap-3">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    );
  },
};

/**
 * Demonstrates mixing config-driven `fields` with a directly placed `<FormFieldItem>` child.
 * The `username` and `email` fields are rendered via the `fields` prop while the
 * `agreeToTerms` checkbox is rendered manually as a child of `<Form>`.
 */
export const WithFormFieldItemAsChild: Story = {
  render: () => {
    const formSchema = z.object({
      username: z.string().min(2, 'Username must be at least 2 characters.'),
      email: z.string().email('Please enter a valid email.'),
      agreeToTerms: z.boolean().refine(Boolean, 'You must agree to the terms.'),
    });

    type FormType = z.infer<typeof formSchema>;

    const form = useForm<FormType>({
      resolver: zodResolver(formSchema),
      defaultValues: { username: '', email: '', agreeToTerms: false },
    });

    const onSubmitHandle = async (values: FormType) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="overflow-auto text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    };

    return (
      <Form<FormType>
        form={form}
        onSubmit={onSubmitHandle}
        fields={[
          { type: 'input', name: 'username', label: 'Username', required: true, placeholder: 'Enter a username' },
          { type: 'input', name: 'email', label: 'Email', inputType: 'email', required: true, placeholder: 'Enter an email' },
        ]}
        submitText="Register"
        hideResetButton
        className="max-w-md"
      >
        {/* FormFieldItem placed directly as a child of Form */}
        <FormFieldItem
          control={form.control}
          field={{
            type: 'checkbox',
            name: 'agreeToTerms',
            label: 'I agree to the terms and conditions',
            required: true,
          }}
        />
      </Form>
    );
  },
};

/**
 * Demonstrates using only `<FormFieldItem>` components as children — no `fields` prop.
 * Pass `fields={[]}` and render every field individually for full layout control.
 */
export const WithFormFieldItemOnly: Story = {
  render: () => {
    const formSchema = z.object({
      firstName: z.string().min(1, 'First name is required.'),
      lastName: z.string().min(1, 'Last name is required.'),
      role: z.string({ required_error: 'Please select a role.' }),
      bio: z.string().optional(),
    });

    type FormType = z.infer<typeof formSchema>;

    const form = useForm<FormType>({
      resolver: zodResolver(formSchema),
      defaultValues: { firstName: '', lastName: '', role: undefined, bio: '' },
    });

    const onSubmitHandle = async (values: FormType) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="overflow-auto text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    };

    return (
      <Form<FormType>
        form={form}
        onSubmit={onSubmitHandle}
        fields={[]}
        submitText="Save"
        hideResetButton
        className="max-w-md"
      >
        <FormFieldItem
          control={form.control}
          field={{ type: 'input', name: 'firstName', label: 'First Name', required: true, placeholder: 'John' }}
        />
        <FormFieldItem
          control={form.control}
          field={{ type: 'input', name: 'lastName', label: 'Last Name', required: true, placeholder: 'Doe' }}
        />
        <FormFieldItem
          control={form.control}
          field={{
            type: 'select',
            name: 'role',
            label: 'Role',
            required: true,
            placeholder: 'Select a role',
            options: ['Admin', 'Editor', 'Viewer'],
          }}
        />
        <FormFieldItem
          control={form.control}
          field={{ type: 'textarea', name: 'bio', label: 'Bio', placeholder: 'Tell us about yourself' }}
        />
      </Form>
    );
  },
};

/**
 * Demonstrates using `<FormFieldItems>` to render groups of fields as children of `<Form>`.
 * Each group is placed in its own layout section, giving full control over visual grouping.
 */
export const WithFormFieldItemsAsChild: Story = {
  render: () => {
    const formSchema = z.object({
      firstName: z.string().min(1, 'First name is required.'),
      lastName: z.string().min(1, 'Last name is required.'),
      email: z.string().email('Please enter a valid email.'),
      phone: z.string().optional(),
      country: z.string({ required_error: 'Please select a country.' }),
      bio: z.string().optional(),
    });

    type FormType = z.infer<typeof formSchema>;

    const personalFields: FormFieldItemType<FormType>[] = [
      { type: 'input', name: 'firstName', label: 'First Name', required: true, placeholder: 'John', formItemClassName: 'col-span-1' },
      { type: 'input', name: 'lastName', label: 'Last Name', required: true, placeholder: 'Doe', formItemClassName: 'col-span-1' },
    ];

    const contactFields: FormFieldItemType<FormType>[] = [
      { type: 'input', name: 'email', label: 'Email', inputType: 'email', required: true, placeholder: 'john@example.com', formItemClassName: 'col-span-1' },
      { type: 'input', name: 'phone', label: 'Phone', inputType: 'tel', placeholder: '+1 234 567 890', formItemClassName: 'col-span-1' },
    ];

    const form = useForm<FormType>({
      resolver: zodResolver(formSchema),
      defaultValues: { firstName: '', lastName: '', email: '', phone: '', country: undefined, bio: '' },
    });

    const onSubmitHandle = async (values: FormType) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="overflow-auto text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    };

    return (
      <Form<FormType>
        form={form}
        onSubmit={onSubmitHandle}
        fields={[]}
        submitText="Submit"
        hideResetButton
        className="max-w-lg"
      >
        <p className="text-sm font-semibold text-foreground">Personal Info</p>
        <div className="grid grid-cols-2 gap-4">
          <FormFieldItems fields={personalFields} control={form.control} />
        </div>

        <p className="text-sm font-semibold text-foreground">Contact Details</p>
        <div className="grid grid-cols-2 gap-4">
          <FormFieldItems fields={contactFields} control={form.control} />
        </div>

        <FormFieldItem
          control={form.control}
          field={{
            type: 'select',
            name: 'country',
            label: 'Country',
            required: true,
            placeholder: 'Select a country',
            options: ['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France'],
          }}
        />
        <FormFieldItem
          control={form.control}
          field={{ type: 'textarea', name: 'bio', label: 'Bio', placeholder: 'Tell us about yourself' }}
        />
      </Form>
    );
  },
};

