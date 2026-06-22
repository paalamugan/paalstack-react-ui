'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Form, Text, toast } from '@paalstack/react-ui';

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  role: z.string().min(1, 'Please select a role'),
  bio: z.string().max(250, 'Bio must be 250 characters or fewer').optional(),
  notifications: z.boolean().optional(),
});

type ProfileForm = z.infer<typeof profileSchema>;

const roleOptions = [
  { label: 'Developer', value: 'developer' },
  { label: 'Designer', value: 'designer' },
  { label: 'Product Manager', value: 'product-manager' },
  { label: 'Engineering Manager', value: 'engineering-manager' },
  { label: 'Other', value: 'other' },
];

export function FormDemo() {
  const form = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: '',
      email: '',
      role: '',
      bio: '',
      notifications: false,
    },
  });

  function onSubmit(data: ProfileForm) {
    toast.success(`Profile saved for ${data.name}!`, {
      description: `Role: ${roleOptions.find((r) => r.value === data.role)?.label ?? data.role}`,
    });
    form.reset();
  }

  return (
    <div className="mt-6 max-w-xl space-y-6">
      <div>
        <Text className="text-muted-foreground">
          Full form validation with <code className="text-foreground">react-hook-form</code> +{' '}
          <code className="text-foreground">zod</code>. Errors surface inline on blur and on submit.
        </Text>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
          <CardDescription>Update your account information below.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form
            form={form}
            onSubmit={onSubmit}
            submitText="Save Profile"
            resetText="Clear"
            submitButtonColor="primary"
            fields={[
              {
                name: 'name',
                label: 'Full Name',
                type: 'input',
                required: true,
                placeholder: 'Jane Doe',
              },
              {
                name: 'email',
                label: 'Email Address',
                type: 'input',
                inputType: 'email',
                required: true,
                placeholder: 'jane@example.com',
              },
              {
                name: 'role',
                label: 'Role',
                type: 'select',
                required: true,
                placeholder: 'Select a role…',
                options: roleOptions,
              },
              {
                name: 'bio',
                label: 'Bio',
                type: 'textarea',
                placeholder: 'Tell us a little about yourself…',
                description: 'Max 250 characters.',
              },
              {
                name: 'notifications',
                label: 'Receive email notifications',
                type: 'checkbox',
              },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  );
}
