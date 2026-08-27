import type { Meta, StoryObj } from '@storybook/react';

import { LuFile as FileIcon, LuFileText as FileTextIcon, LuImage as ImageIcon, LuX as XIcon } from '@/icons/lu';

import { Spinner } from '../Spinner';
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from './Attachment';

const meta: Meta<typeof Attachment> = {
  title: 'Components/Attachment',
  component: Attachment,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['idle', 'uploading', 'processing', 'error', 'done'],
      description: 'Current upload state — drives styling (e.g. error border, shimmer title)',
    },
    size: {
      control: 'radio',
      options: ['default', 'sm', 'xs'],
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Attachment>;

export const Default: Story = {
  render: () => (
    <Attachment>
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>quarterly-report.pdf</AttachmentTitle>
        <AttachmentDescription>2.4 MB · PDF</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove attachment">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
};

export const Uploading: Story = {
  render: () => (
    <Attachment state="uploading">
      <AttachmentMedia>
        <Spinner />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>design-mockup.fig</AttachmentTitle>
        <AttachmentDescription>Uploading… 67%</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Cancel upload">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
      <AttachmentTrigger aria-label="Retry upload" />
    </Attachment>
  ),
};

export const Error: Story = {
  render: () => (
    <Attachment state="error">
      <AttachmentMedia>
        <FileIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>video-raw.mp4</AttachmentTitle>
        <AttachmentDescription>File exceeds the 25 MB limit</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Dismiss error">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
};

export const ImageAttachment: Story = {
  render: () => (
    <Attachment>
      <AttachmentMedia variant="image">
        <img
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=96&h=96&fit=crop"
          alt="Uploaded screenshot"
        />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>screenshot.png</AttachmentTitle>
        <AttachmentDescription>1.1 MB · PNG</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove attachment">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Attachment orientation="vertical">
      <AttachmentMedia variant="image">
        <ImageIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>borrowed-lights.jpg</AttachmentTitle>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove attachment">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
};

export const Group: Story = {
  render: () => (
    <AttachmentGroup className="max-w-md">
      <Attachment>
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>notes.txt</AttachmentTitle>
          <AttachmentDescription>12 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment>
        <AttachmentMedia>
          <FileIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>archive.zip</AttachmentTitle>
          <AttachmentDescription>8.9 MB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </AttachmentGroup>
  ),
};
