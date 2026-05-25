import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Field, FieldDescription, FieldLabel } from '../Field';
import { Input } from '../Input';
import { Textarea } from '../Textarea';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const DirectionBottom: Story = {
  render: () => (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button>Open Bottom</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Bottom Drawer</DrawerTitle>
          <DrawerDescription>This drawer opens from the bottom.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">This is the default direction for mobile-first experiences.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const DirectionRight: Story = {
  render: () => (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button>Open Right</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Right Panel</DrawerTitle>
          <DrawerDescription>Content slides in from the right.</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-auto p-4">
          <p className="text-sm text-muted-foreground">Perfect for side panels, filters, and navigation menus.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const DirectionLeft: Story = {
  render: () => (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button>Open Left</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Left Panel</DrawerTitle>
          <DrawerDescription>Content slides in from the left.</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-auto p-4">
          <p className="text-sm text-muted-foreground">Common for navigation menus and sidebars.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const DirectionTop: Story = {
  render: () => (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button>Open Top</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Top Drawer</DrawerTitle>
          <DrawerDescription>This drawer opens from the top.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">Useful for notifications and announcements.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const AllDirections: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Drawer direction="top">
        <DrawerTrigger asChild>
          <Button>Top</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Top</DrawerTitle>
            <DrawerDescription>Opens from top</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button>Right</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Right</DrawerTitle>
            <DrawerDescription>Opens from right</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button>Bottom</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Bottom</DrawerTitle>
            <DrawerDescription>Opens from bottom</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button>Left</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Left</DrawerTitle>
            <DrawerDescription>Opens from left</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  ),
};

const ControlledExample = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>Open Controlled Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Controlled Drawer</DrawerTitle>
            <DrawerDescription>This drawer is controlled by state.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">You can control the open state externally.</p>
          </div>
          <DrawerFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <div className="text-sm text-muted-foreground">
        Drawer is: <strong>{open ? 'Open' : 'Closed'}</strong>
      </div>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledExample />,
};

export const ScrollableContent: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Scrollable</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Scrollable Content</DrawerTitle>
          <DrawerDescription>The content area is scrollable while footer stays visible.</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-auto p-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <p key={i} className="mb-2 text-sm">
              Line {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          ))}
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

const FormExample = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>Make changes to your profile here.</DrawerDescription>
        </DrawerHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 p-4">
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
            </Field>
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
              />
            </Field>
          </div>
          <DrawerFooter>
            <Button type="submit">Save changes</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export const WithForm: Story = {
  render: () => <FormExample />,
};

export const Confirmation: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant="destructive">Yes, delete my account</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

const NestedExample = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Parent Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Parent Drawer</DrawerTitle>
          <DrawerDescription>This drawer contains another nested drawer.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Open Child Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Child Drawer</DrawerTitle>
                <DrawerDescription>This is a nested drawer.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close Child</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close Parent</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export const Nested: Story = {
  render: () => <NestedExample />,
};

export const WithoutFooter: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Simple Drawer</DrawerTitle>
          <DrawerDescription>No footer, just content.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">You can close this by clicking outside or swiping down.</p>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const WithoutHeader: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4">
          <p className="text-sm">No header, just content and footer.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

const ContactFormExample = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent!');
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button>Contact Us</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Contact Us</DrawerTitle>
          <DrawerDescription>Fill out the form below and we'll get back to you.</DrawerDescription>
        </DrawerHeader>
        <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
          <div className="flex-1 space-y-4 overflow-auto p-4">
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </Field>
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </Field>
            <Field>
              <FieldLabel>Message</FieldLabel>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message..."
                rows={6}
                required
              />
              <FieldDescription>Tell us how we can help.</FieldDescription>
            </Field>
          </div>
          <DrawerFooter>
            <Button type="submit">Send Message</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export const ContactForm: Story = {
  render: () => <ContactFormExample />,
};

export const CustomCloseButton: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-start justify-between">
            <div>
              <DrawerTitle>Custom Close Button</DrawerTitle>
              <DrawerDescription>The close button is positioned in the header.</DrawerDescription>
            </div>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon-sm">
                ✕
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">Content goes here.</p>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

const FilterPanelExample = () => {
  const [filters, setFilters] = React.useState({
    category: '',
    priceRange: '',
    inStock: false,
  });

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Filters</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filter Products</DrawerTitle>
          <DrawerDescription>Refine your search results.</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 space-y-4 overflow-auto p-4">
          <Field>
            <FieldLabel>Category</FieldLabel>
            <select
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>
          </Field>

          <Field>
            <FieldLabel>Price Range</FieldLabel>
            <select
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
            >
              <option value="">Any Price</option>
              <option value="0-50">$0 - $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100+">$100+</option>
            </select>
          </Field>

          <Field>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => setFilters({ ...filters, inStock: e.target.checked })}
              />
              <span className="text-sm">In Stock Only</span>
            </label>
          </Field>
        </div>
        <DrawerFooter>
          <Button onClick={() => console.log('Apply filters:', filters)}>Apply Filters</Button>
          <DrawerClose asChild>
            <Button variant="outline" onClick={() => setFilters({ category: '', priceRange: '', inStock: false })}>
              Clear
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export const FilterPanel: Story = {
  render: () => <FilterPanelExample />,
};

export const QuickActions: Story = {
  render: () => (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button>Quick Actions</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Quick Actions</DrawerTitle>
          <DrawerDescription>Choose an action to perform.</DrawerDescription>
        </DrawerHeader>
        <div className="grid grid-cols-2 gap-2 p-4">
          <Button variant="outline" className="h-20">
            📧 Email
          </Button>
          <Button variant="outline" className="h-20">
            📞 Call
          </Button>
          <Button variant="outline" className="h-20">
            💬 Message
          </Button>
          <Button variant="outline" className="h-20">
            📍 Location
          </Button>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

// --- Prop-based API examples ---

export const PropsBasic: Story = {
  render: () => (
    <Drawer
      trigger={<Button>Open (Props)</Button>}
      title="Confirm action"
      description="This action cannot be undone."
      footer={
        <>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </>
      }
    >
      <p className="text-sm text-muted-foreground">Optional body content here.</p>
    </Drawer>
  ),
};

export const PropsWithDirection: Story = {
  render: () => (
    <Drawer
      direction="right"
      trigger={<Button>Open from right</Button>}
      title="Side Panel"
      description="Content slides from the right."
      footer={
        <DrawerClose asChild>
          <Button variant="outline">Close</Button>
        </DrawerClose>
      }
    >
      <div className="p-4">
        <p className="text-sm text-muted-foreground">Custom panel content.</p>
      </div>
    </Drawer>
  ),
};

export const PropsControlled: Story = {
  render: function ControlledStory() {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Drawer
          open={open}
          onOpenChange={setOpen}
          trigger={<Button>Edit profile</Button>}
          title="Edit Profile"
          description="Make changes below and save."
          footer={
            <>
              <Button onClick={() => setOpen(false)}>Save</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </>
          }
        >
          <div className="space-y-4 p-4">
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" type="email" placeholder="your@email.com" />
          </div>
        </Drawer>
      </>
    );
  },
};

export const PropsMinimal: Story = {
  render: () => (
    <Drawer trigger={<Button variant="outline">Quick open</Button>} title="Minimal drawer">
      <p className="p-4 text-sm text-muted-foreground">No description or footer, just title and content.</p>
    </Drawer>
  ),
};

export const PropsWithSubComponentProps: Story = {
  render: () => (
    <Drawer
      trigger={<Button>Styled drawer</Button>}
      title="Custom styling"
      description="Header and footer use headerProps and footerProps."
      headerProps={{ className: 'border-b bg-muted/30' }}
      footerProps={{ className: 'gap-4 justify-between' }}
      footer={
        <>
          <DrawerClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DrawerClose>
          <Button>Confirm</Button>
        </>
      }
    >
      <p className="p-4 text-sm">Content area.</p>
    </Drawer>
  ),
};
