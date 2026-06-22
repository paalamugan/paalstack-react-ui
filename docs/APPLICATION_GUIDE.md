# Application Guide

Build common screens using ONLY PaalStack components.

## Setup (every app)

```tsx
import '@paalstack/react-ui/styles.css';
import { ThemeProvider, Box, Container, Stack } from '@paalstack/react-ui';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>;
}
```

---

## Login Page

**Components:** Container, Card, Heading, Text, Form, Field, Input, Button, Checkbox, Separator

```tsx
import { Card, Form, Field, Input, Button, Checkbox, Label, Stack, Heading } from '@paalstack/react-ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({ email: z.string().email(), password: z.string().min(8), remember: z.boolean() });

export function LoginPage() {
  const form = useForm({ resolver: zodResolver(schema) });
  return (
    <Container className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md p-6">
        <Heading size="lg">Sign in</Heading>
        <Form form={form} onSubmit={form.handleSubmit(console.log)}>
          <Stack gap={4}>
            <Field name="email" label="Email"><Input type="email" /></Field>
            <Field name="password" label="Password"><Input type="password" /></Field>
            <Label><Checkbox {...form.register('remember')} /> Remember me</Label>
            <Button type="submit" variant="solid" color="primary" className="w-full">Sign in</Button>
          </Stack>
        </Form>
      </Card>
    </Container>
  );
}
```

---

## Registration Page

Add: `DatePicker` (DOB), `InputOTP` (verification), `Progress` (steps).

Multi-field validation with Zod `.refine()` for password match.

---

## Dashboard

**Components:** Grid, Card, Chart, Heading, Badge, Avatar, Tabs, DataTable (summary)

Layout: sidebar (Box + `bg-sidebar`) + main Container + responsive Grid of Card stats + Chart area.

---

## CRUD Table

**Components:** DataTable, Button, IconButton, Dialog, Form, Input, Select, Pagination, DropdownMenu, useToast

Pattern: DataTable with row actions column → Dialog for create/edit form → `useToast` for feedback.

---

## Settings Page

**Components:** Tabs, Switch, Select, Field, Input, Separator, Button, Card

Group settings in Tabs: Profile, Notifications, Security. Use Switch for toggles, Select for enums.

---

## Profile Page

**Components:** Avatar, Card, Field, Input, Textarea, FileUpload, Button, Badge

Avatar with FileUpload for image. Form sections in Stack.

---

## Admin Panel

**Components:** NavigationMenu or custom sidebar, DataTable, Breadcrumb, DropdownMenu, AlertDialog, Badge

Use sidebar tokens (`bg-sidebar`, `text-sidebar-foreground`). AlertDialog for destructive actions.

---

## Multi-Step Form

**Components:** Form, Progress or custom step indicator, Card, Button, ButtonGroup

Use `useState` step index or `useForm` with partial schema per step. `Button variant="outline"` for Back, primary for Next/Submit.

---

## Data Management Screen

**Components:** DataTable, Combobox/MultiSelect (filters), DateRangePicker, Pagination, Export Button

TanStack Table features: sorting, column filters, row selection, bulk actions via DropdownMenu.
