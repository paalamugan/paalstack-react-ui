'use client';

import { useState } from 'react';

import { LuTrash2 } from '@paalstack/react-icons/lu';
import {
  AlertDialog,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Dialog,
  Input,
  Label,
  Sheet,
  Text,
  toast,
} from '@paalstack/react-ui';

function DialogDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Dialog</CardTitle>
        <CardDescription>Modal overlay for forms and detail views.</CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog
          trigger={<Button variant="outline">Open Dialog</Button>}
          header={{
            title: 'Edit Display Name',
            description: 'Update the name shown on your public profile.',
          }}
        >
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="display-name">Display Name</Label>
              <Input id="display-name" defaultValue="Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@janedoe" />
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={() => toast.info('Cancelled')}>
              Cancel
            </Button>
            <Button onClick={() => toast.success('Profile updated!')}>Save changes</Button>
          </div>
        </Dialog>
      </CardContent>
    </Card>
  );
}

function SheetDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Sheet</CardTitle>
        <CardDescription>Slide-in panel — great for settings and detail panes.</CardDescription>
      </CardHeader>
      <CardContent>
        <Sheet
          trigger={<Button variant="outline">Open Sheet</Button>}
          header={{
            title: 'Notification Settings',
            description: 'Manage how and when you receive notifications.',
          }}
        >
          <div className="space-y-4 py-4">
            {[
              { id: 'email', label: 'Email notifications' },
              { id: 'sms', label: 'SMS notifications' },
              { id: 'push', label: 'Push notifications' },
              { id: 'weekly', label: 'Weekly digest' },
            ].map(({ id, label }) => (
              <div key={id} className="flex items-center justify-between rounded-md border border-border p-3">
                <Text className="text-sm">{label}</Text>
                <Input type="checkbox" className="h-4 w-4 cursor-pointer" id={id} />
              </div>
            ))}
            <Button className="mt-2 w-full" onClick={() => toast.success('Settings saved!')}>
              Save preferences
            </Button>
          </div>
        </Sheet>
      </CardContent>
    </Card>
  );
}

function AlertDialogDemo() {
  const [deleted, setDeleted] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">AlertDialog</CardTitle>
        <CardDescription>Confirm destructive actions before they execute.</CardDescription>
      </CardHeader>
      <CardContent>
        <AlertDialog
          trigger={
            <Button variant="destructive" leftIcon={<LuTrash2 className="h-4 w-4" />}>
              {deleted ? 'Item deleted' : 'Delete Item'}
            </Button>
          }
          header={{
            title: 'Delete this item?',
            description:
              'This action is permanent and cannot be undone. The item will be removed from all associated records.',
          }}
          confirmButtonText="Yes, delete"
          cancelButtonText="Cancel"
          onConfirm={() => {
            setDeleted(true);
            toast.error('Item deleted permanently.');
          }}
          onCancel={() => toast.info('Deletion cancelled.')}
        />
      </CardContent>
    </Card>
  );
}

export function OverlaysDemo() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <DialogDemo />
      <SheetDemo />
      <AlertDialogDemo />
    </div>
  );
}
