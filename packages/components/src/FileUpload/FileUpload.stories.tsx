/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import type { FileUploadProps } from './types';

import {
  LuArrowUp as ArrowUpIcon,
  LuCloudUpload as CloudUploadIcon,
  LuPaperclip as PaperclipIcon,
  LuUpload as UploadIcon,
  LuX as XIcon,
} from '@/icons/lu';

import { Button } from '../Button';
import { Textarea } from '../Textarea';
import {
  FileUpload,
  FileUploadClear,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadItemProgress,
  FileUploadList,
  FileUploadTrigger,
} from './FileUpload';

type OnUploadFn = NonNullable<FileUploadProps['onUpload']>;

const simulateUpload: OnUploadFn = async (
  files: File[],
  {
    onProgress,
    onSuccess,
    onError,
  }: {
    onProgress: (file: File, progress: number) => void;
    onSuccess: (file: File) => void;
    onError: (file: File, error: Error) => void;
  },
) => {
  try {
    await Promise.all(
      files.map(async (file) => {
        try {
          const totalChunks = 10;
          for (let i = 0; i < totalChunks; i++) {
            await new Promise<void>((resolve) => setTimeout(resolve, Math.random() * 200 + 100));
            onProgress(file, ((i + 1) / totalChunks) * 100);
          }
          await new Promise<void>((resolve) => setTimeout(resolve, 300));
          onSuccess(file);
        } catch (err) {
          onError(file, err instanceof Error ? err : new Error('Upload failed'));
        }
      }),
    );
  } catch (err) {
    console.error('Unexpected upload error:', err);
  }
};

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    multiple: {
      description: 'Allow multiple file selection',
      control: { type: 'boolean' },
    },
    disabled: {
      description: 'Disable the file upload',
      control: { type: 'boolean' },
    },
    maxFiles: {
      description: 'Maximum number of files allowed',
      control: { type: 'number' },
    },
    maxSize: {
      description: 'Maximum file size in bytes',
      control: { type: 'number' },
    },
    accept: {
      description: 'Accepted file types (e.g. "image/*,.pdf")',
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    return (
      <FileUpload {...args} value={files} onValueChange={setFiles} className="w-full max-w-md">
        <FileUploadDropzone>
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center justify-center rounded-full border p-2.5">
              <UploadIcon className="size-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium">Drag &amp; drop files here</p>
            <p className="text-xs text-muted-foreground">Or click to browse</p>
          </div>
          <FileUploadTrigger asChild>
            <Button variant="outline" size="sm" className="mt-2 w-fit">
              Browse files
            </Button>
          </FileUploadTrigger>
        </FileUploadDropzone>
        <FileUploadList>
          {files.map((file, index) => (
            <FileUploadItem key={index} value={file}>
              <FileUploadItemPreview />
              <FileUploadItemMetadata />
              <FileUploadItemDelete asChild>
                <Button variant="ghost" size="icon" className="size-7">
                  <XIcon />
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
        </FileUploadList>
      </FileUpload>
    );
  },
  args: {
    multiple: false,
  },
};

export const WithMultipleFiles: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    return (
      <FileUpload
        {...args}
        value={files}
        onValueChange={setFiles}
        maxFiles={5}
        maxSize={5 * 1024 * 1024}
        multiple
        className="w-full max-w-md"
      >
        <FileUploadDropzone>
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center justify-center rounded-full border p-2.5">
              <UploadIcon className="size-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium">Drag &amp; drop files here</p>
            <p className="text-xs text-muted-foreground">Or click to browse (max 5 files, up to 5 MB each)</p>
          </div>
          <FileUploadTrigger asChild>
            <Button variant="outline" size="sm" className="mt-2 w-fit">
              Browse files
            </Button>
          </FileUploadTrigger>
        </FileUploadDropzone>
        <FileUploadList>
          {files.map((file, index) => (
            <FileUploadItem key={index} value={file}>
              <FileUploadItemPreview />
              <FileUploadItemMetadata />
              <FileUploadItemDelete asChild>
                <Button variant="ghost" size="icon" className="size-7">
                  <XIcon />
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
        </FileUploadList>
        <FileUploadClear asChild>
          <Button variant="outline" size="sm" className="w-fit">
            Clear all
          </Button>
        </FileUploadClear>
      </FileUpload>
    );
  },
};

export const WithDirectUpload: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    return (
      <FileUpload
        {...args}
        value={files}
        onValueChange={setFiles}
        onUpload={simulateUpload}
        maxFiles={3}
        multiple
        className="w-full max-w-md"
      >
        <FileUploadDropzone>
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center justify-center rounded-full border p-2.5">
              <UploadIcon className="size-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium">Drag &amp; drop files here</p>
            <p className="text-xs text-muted-foreground">Or click to browse (max 3 files)</p>
          </div>
          <FileUploadTrigger asChild>
            <Button variant="outline" size="sm" className="mt-2 w-fit">
              Browse files
            </Button>
          </FileUploadTrigger>
        </FileUploadDropzone>
        <FileUploadList>
          {files.map((file, index) => (
            <FileUploadItem key={index} value={file} className="flex-col">
              <div className="flex w-full items-center gap-2">
                <FileUploadItemPreview />
                <FileUploadItemMetadata />
                <FileUploadItemDelete asChild>
                  <Button variant="ghost" size="icon" className="size-7">
                    <XIcon />
                  </Button>
                </FileUploadItemDelete>
              </div>
              <FileUploadItemProgress />
            </FileUploadItem>
          ))}
        </FileUploadList>
      </FileUpload>
    );
  },
};

export const WithCircularProgress: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    return (
      <FileUpload
        {...args}
        value={files}
        onValueChange={setFiles}
        onUpload={simulateUpload}
        maxFiles={10}
        maxSize={5 * 1024 * 1024}
        multiple
        className="w-full max-w-md"
      >
        <FileUploadDropzone>
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center justify-center rounded-full border p-2.5">
              <UploadIcon className="size-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium">Drag &amp; drop files here</p>
            <p className="text-xs text-muted-foreground">Or click to browse (max 10 files, up to 5 MB each)</p>
          </div>
          <FileUploadTrigger asChild>
            <Button variant="outline" size="sm" className="mt-2 w-fit">
              Browse files
            </Button>
          </FileUploadTrigger>
        </FileUploadDropzone>
        <FileUploadList orientation="horizontal">
          {files.map((file, index) => (
            <FileUploadItem key={index} value={file} className="p-0">
              <FileUploadItemPreview className="size-20 [&>svg]:size-12">
                <FileUploadItemProgress variant="circular" size={40} />
              </FileUploadItemPreview>
              <FileUploadItemMetadata className="sr-only" />
              <FileUploadItemDelete asChild>
                <Button variant="ghost" size="icon" className="absolute -top-1 -right-1 size-5 rounded-full">
                  <XIcon className="size-3" />
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
        </FileUploadList>
      </FileUpload>
    );
  },
};

export const WithFillProgress: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    return (
      <FileUpload
        {...args}
        value={files}
        onValueChange={setFiles}
        onUpload={simulateUpload}
        maxFiles={10}
        maxSize={5 * 1024 * 1024}
        multiple
        className="w-full max-w-md"
      >
        <FileUploadDropzone>
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center justify-center rounded-full border p-2.5">
              <UploadIcon className="size-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium">Drag &amp; drop files here</p>
            <p className="text-xs text-muted-foreground">Or click to browse (max 10 files, up to 5 MB each)</p>
          </div>
          <FileUploadTrigger asChild>
            <Button variant="outline" size="sm" className="mt-2 w-fit">
              Browse files
            </Button>
          </FileUploadTrigger>
        </FileUploadDropzone>
        <FileUploadList orientation="horizontal">
          {files.map((file, index) => (
            <FileUploadItem key={index} value={file} className="p-0">
              <FileUploadItemPreview className="size-20">
                <FileUploadItemProgress variant="fill" />
              </FileUploadItemPreview>
              <FileUploadItemMetadata className="sr-only" />
              <FileUploadItemDelete asChild>
                <Button variant="ghost" size="icon" className="absolute -top-1 -right-1 size-5 rounded-full">
                  <XIcon className="size-3" />
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
        </FileUploadList>
      </FileUpload>
    );
  },
};

export const WithValidation: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onFileValidate = (file: File): string | null => {
      if (files.length >= 2) return 'You can only upload up to 2 files';
      if (!file.type.startsWith('image/')) return 'Only image files are allowed';
      if (file.size > 2 * 1024 * 1024) return 'File size must be less than 2 MB';
      return null;
    };

    const onFileReject = (_file: File, message: string) => {
      setErrorMessage(message);
      setTimeout(() => setErrorMessage(null), 3000);
    };

    return (
      <FileUpload
        {...args}
        value={files}
        onValueChange={setFiles}
        onFileValidate={onFileValidate}
        onFileReject={onFileReject}
        accept="image/*"
        maxFiles={2}
        multiple
        className="w-full max-w-md"
      >
        <FileUploadDropzone>
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center justify-center rounded-full border p-2.5">
              <UploadIcon className="size-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium">Drag &amp; drop images here</p>
            <p className="text-xs text-muted-foreground">Images only · max 2 files · up to 2 MB each</p>
          </div>
          <FileUploadTrigger asChild>
            <Button variant="outline" size="sm" className="mt-2 w-fit">
              Browse files
            </Button>
          </FileUploadTrigger>
        </FileUploadDropzone>
        {errorMessage && <p className="text-xs text-destructive">{errorMessage}</p>}
        <FileUploadList>
          {files.map((file) => (
            <FileUploadItem key={file.name} value={file}>
              <FileUploadItemPreview />
              <FileUploadItemMetadata />
              <FileUploadItemDelete asChild>
                <Button variant="ghost" size="icon" className="size-7">
                  <XIcon />
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
        </FileUploadList>
      </FileUpload>
    );
  },
};

export const WithFormLikeDropzone: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    return (
      <FileUpload
        {...args}
        value={files}
        onValueChange={setFiles}
        accept="image/*"
        maxFiles={2}
        maxSize={5 * 1024 * 1024}
        multiple
        className="w-full max-w-md"
      >
        <FileUploadDropzone className="flex-row flex-wrap border-dotted text-center">
          <CloudUploadIcon className="size-4" />
          Drag and drop or
          <FileUploadTrigger asChild>
            <Button variant="link" size="sm" className="p-0">
              choose files
            </Button>
          </FileUploadTrigger>
          to upload
        </FileUploadDropzone>
        <FileUploadList>
          {files.map((file, index) => (
            <FileUploadItem key={index} value={file}>
              <FileUploadItemPreview />
              <FileUploadItemMetadata />
              <FileUploadItemDelete asChild>
                <Button variant="ghost" size="icon" className="size-7">
                  <XIcon />
                  <span className="sr-only">Delete</span>
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
        </FileUploadList>
        <Button type="submit" className="mt-2 w-fit" disabled={files.length === 0}>
          Submit
        </Button>
      </FileUpload>
    );
  },
};

export const WithChatInput: Story = {
  render: (args) => {
    const [input, setInput] = useState('');
    const [files, setFiles] = useState<File[]>([]);
    const [isUploading, setIsUploading] = useState(false);

    const onUpload: OnUploadFn = async (files: File[], callbacks) => {
      setIsUploading(true);
      try {
        await simulateUpload(files, callbacks);
      } finally {
        setIsUploading(false);
      }
    };

    return (
      <FileUpload
        {...args}
        value={files}
        onValueChange={setFiles}
        onUpload={onUpload}
        maxFiles={10}
        maxSize={5 * 1024 * 1024}
        multiple
        disabled={isUploading}
        className="relative h-[400px] w-[480px] items-center p-8"
      >
        <FileUploadDropzone
          tabIndex={-1}
          onClick={(event) => event.preventDefault()}
          className="absolute top-0 left-0 z-0 flex size-full items-center justify-center rounded-none border-none bg-background/50 p-0 opacity-0 backdrop-blur transition-opacity duration-200 ease-out data-[dragging]:z-10 data-[dragging]:opacity-100"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center justify-center rounded-full border p-2.5">
              <UploadIcon className="size-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium">Drag &amp; drop files here</p>
            <p className="text-xs text-muted-foreground">Upload max 10 files, up to 5 MB each</p>
          </div>
        </FileUploadDropzone>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setInput('');
            setFiles([]);
          }}
          className="relative flex w-full max-w-md flex-col gap-2.5 rounded-md border border-input px-3 py-2 outline-none focus-within:ring-1 focus-within:ring-ring/50"
        >
          <FileUploadList orientation="horizontal" className="overflow-x-auto px-0 py-1">
            {files.map((file, index) => (
              <FileUploadItem key={index} value={file} className="max-w-52 p-1.5">
                <FileUploadItemPreview className="size-8 [&>svg]:size-5">
                  <FileUploadItemProgress variant="fill" />
                </FileUploadItemPreview>
                <FileUploadItemMetadata size="sm" />
                <FileUploadItemDelete asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute -top-1 -right-1 size-4 shrink-0 cursor-pointer rounded-full"
                  >
                    <XIcon className="size-2.5" />
                  </Button>
                </FileUploadItemDelete>
              </FileUploadItem>
            ))}
          </FileUploadList>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="field-sizing-content min-h-10 w-full resize-none border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
            disabled={isUploading}
          />
          <div className="flex items-center justify-end gap-1.5">
            <FileUploadTrigger asChild>
              <Button type="button" size="icon" variant="ghost" className="size-7 rounded-sm">
                <PaperclipIcon className="size-3.5" />
                <span className="sr-only">Attach file</span>
              </Button>
            </FileUploadTrigger>
            <Button size="icon" className="size-7 rounded-sm" disabled={!input.trim() || isUploading}>
              <ArrowUpIcon className="size-3.5" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </form>
      </FileUpload>
    );
  },
};

export const WithDisabled: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    return (
      <FileUpload {...args} value={files} onValueChange={setFiles} disabled className="w-full max-w-md">
        <FileUploadDropzone>
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center justify-center rounded-full border p-2.5">
              <UploadIcon className="size-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium">Drag &amp; drop files here</p>
            <p className="text-xs text-muted-foreground">Upload is disabled</p>
          </div>
          <FileUploadTrigger asChild>
            <Button variant="outline" size="sm" className="mt-2 w-fit">
              Browse files
            </Button>
          </FileUploadTrigger>
        </FileUploadDropzone>
        <FileUploadList>
          {files.map((file, index) => (
            <FileUploadItem key={index} value={file}>
              <FileUploadItemPreview />
              <FileUploadItemMetadata />
              <FileUploadItemDelete asChild>
                <Button variant="ghost" size="icon" className="size-7">
                  <XIcon />
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
        </FileUploadList>
      </FileUpload>
    );
  },
};
