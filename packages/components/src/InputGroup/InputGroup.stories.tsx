/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  RxCopy as CopyIcon,
  RxMagnifyingGlass as SearchIcon,
  RxReload as SpinnerIcon,
  RxTrash as TrashIcon,
} from '@/icons/rx';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupRoot,
  InputGroupText,
  InputGroupTextarea,
} from './InputGroup';

const meta: Meta<typeof InputGroup> = {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Basic: Story = {
  render: () => (
    <InputGroup inputProps={{ placeholder: 'Search...' }} addonStart={<SearchIcon />} addonStartAlign="inline-start" />
  ),
};

export const PropsSearch: Story = {
  render: () => (
    <InputGroup inputProps={{ placeholder: 'Search...' }} addonEnd={<SearchIcon />} addonEndAlign="inline-end" />
  ),
};

export const PropsTextarea: Story = {
  render: () => (
    <InputGroup
      textareaProps={{ placeholder: 'Enter code...' }}
      addonStart={<InputGroupText>script.js</InputGroupText>}
      addonStartAlign="block-start"
    />
  ),
};

export const PropsCurrency: Story = {
  render: () => (
    <InputGroup
      inputProps={{ type: 'number', placeholder: '0.00' }}
      addonStart={<InputGroupText>$</InputGroupText>}
      addonStartAlign="inline-start"
      addonEnd={<InputGroupText>USD</InputGroupText>}
      addonEndAlign="inline-end"
    />
  ),
};

export const PropsURL: Story = {
  render: () => (
    <InputGroup
      inputProps={{ placeholder: 'yoursite' }}
      addonStart={<InputGroupText>https://</InputGroupText>}
      addonEnd={<InputGroupText>.com</InputGroupText>}
    />
  ),
};

export const PropsEmail: Story = {
  render: () => (
    <InputGroup
      inputProps={{ type: 'email', placeholder: 'username' }}
      addonEnd={<InputGroupText>@company.com</InputGroupText>}
    />
  ),
};

export const PropsWithButton: Story = {
  render: () => (
    <InputGroup
      inputProps={{ placeholder: 'https://example.com', 'data-qa': 'search-button' }}
      addonEnd={
        <InputGroupButton type="button" onClick={() => alert('Search')}>
          Search
        </InputGroupButton>
      }
      addonEndAlign="inline-end"
    />
  ),
};

export const WithTextAddonStart: Story = {
  name: 'Text Addon (inline-start)',
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Amount" />
      <InputGroupAddon align="inline-start">
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithTextAddonEnd: Story = {
  name: 'Text Addon (inline-end)',
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Amount" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithButton: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="https://example.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>Search</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithMultipleButtons: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="File path" defaultValue="/home/user/documents/file.txt" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Copy">
          <CopyIcon />
        </InputGroupButton>
        <InputGroupButton size="icon-xs" aria-label="Delete">
          <TrashIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const URLInput: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="yoursite" />
      <InputGroupAddon align="inline-start">
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText>.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const EmailInput: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput type="email" placeholder="username" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>@company.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const CurrencyInput: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput type="number" placeholder="0.00" step="0.01" />
      <InputGroupAddon align="inline-start">
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

const SpinnerExample = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>{isLoading ? <SpinnerIcon className="animate-spin" /> : <SearchIcon />}</InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton onClick={handleSearch} disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};

export const WithSpinner: Story = {
  render: () => <SpinnerExample />,
};

export const TextareaWithHeader: Story = {
  name: 'Textarea with Header (block-start)',
  render: () => (
    <InputGroup>
      <InputGroupTextarea placeholder="Enter code..." rows={6} defaultValue="console.log('Hello World');" />
      <InputGroupAddon align="block-start">
        <InputGroupText>script.js</InputGroupText>
        <InputGroupButton size="icon-xs" aria-label="Copy">
          <CopyIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

const TextareaWithFooterExample = () => {
  const [text, setText] = React.useState('');
  const maxLength = 280;

  return (
    <InputGroup>
      <InputGroupTextarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
        rows={4}
      />
      <InputGroupAddon align="block-end">
        <InputGroupText>
          {text.length}/{maxLength}
        </InputGroupText>
        <InputGroupButton disabled={!text || text.length > maxLength}>Post</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};

export const TextareaWithFooter: Story = {
  name: 'Textarea with Footer (block-end)',
  render: () => <TextareaWithFooterExample />,
};

export const TextareaWithBothEnds: Story = {
  render: () => (
    <InputGroup>
      <InputGroupTextarea placeholder="Enter your code..." rows={10} />
      <InputGroupAddon align="block-start">
        <InputGroupText>main.tsx</InputGroupText>
        <div className="flex gap-1">
          <InputGroupButton size="icon-xs" aria-label="Copy">
            <CopyIcon />
          </InputGroupButton>
        </div>
      </InputGroupAddon>
      <InputGroupAddon align="block-end">
        <InputGroupText>Line 1, Column 1</InputGroupText>
        <InputGroupButton>Run</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const SearchBar: Story = {
  render: () => {
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState<number>(0);

    const handleSearch = () => {
      // Simulate search
      setResults(Math.floor(Math.random() * 100));
    };

    return (
      <div className="flex flex-col gap-2">
        <InputGroup>
          <InputGroupInput
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <InputGroupAddon align="inline-start">
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupButton onClick={handleSearch} disabled={!query}>
              Search
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        {results > 0 && (
          <p className="text-sm text-muted-foreground">
            {results} {results === 1 ? 'result' : 'results'} found
          </p>
        )}
      </div>
    );
  },
};

export const CommentBox: Story = {
  render: () => {
    const [comment, setComment] = React.useState('');
    const maxLength = 500;
    const remaining = maxLength - comment.length;

    return (
      <InputGroup>
        <InputGroupTextarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={5}
        />
        <InputGroupAddon align="block-end">
          <InputGroupText className={remaining < 50 ? 'text-warning' : ''}>{remaining} characters left</InputGroupText>
          <div className="flex gap-2">
            <InputGroupButton variant="outline" onClick={() => setComment('')} disabled={!comment}>
              Clear
            </InputGroupButton>
            <InputGroupButton variant="solid" disabled={!comment || remaining < 0}>
              Submit
            </InputGroupButton>
          </div>
        </InputGroupAddon>
      </InputGroup>
    );
  },
};

export const FilePathInput: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Enter file path" defaultValue="/var/www/html/index.html" />
      <InputGroupAddon align="inline-start">
        <InputGroupText>/</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" variant="outline" aria-label="Copy path">
          <CopyIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const PriceInput: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupInput type="number" placeholder="0.00" step="0.01" />
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="number" placeholder="0.00" step="0.01" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>EUR</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="number" placeholder="0.00" step="0.01" />
        <InputGroupAddon align="inline-start">
          <InputGroupText>£</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText>GBP</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithActionButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="API Key" type="password" defaultValue="sk_test_1234567890" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Copy">
            <CopyIcon />
          </InputGroupButton>
          <InputGroupButton size="icon-xs" aria-label="Regenerate">
            <SpinnerIcon />
          </InputGroupButton>
          <InputGroupButton size="icon-xs" aria-label="Delete">
            <TrashIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const CodeEditor: Story = {
  render: () => {
    const [code, setCode] = React.useState('function hello() {\n  console.log("Hello World!");\n}');
    const line = 1;
    const col = 1;

    return (
      <InputGroup>
        <InputGroupTextarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your code..."
          rows={15}
          className="font-mono text-sm"
        />
        <InputGroupAddon align="block-start">
          <InputGroupText>script.js</InputGroupText>
          <div className="flex gap-1">
            <InputGroupButton size="icon-xs" aria-label="Copy">
              <CopyIcon />
            </InputGroupButton>
          </div>
        </InputGroupAddon>
        <InputGroupAddon align="block-end">
          <InputGroupText>
            Line {line}, Column {col}
          </InputGroupText>
          <InputGroupButton>Run</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Extra small button" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="xs">XS</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Small button" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="sm">SM</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Icon button (xs)" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Search">
            <SearchIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Icon button (sm)" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-sm" aria-label="Search">
            <SearchIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const ButtonVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Default variant" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="solid">Default</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Outline variant" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="outline">Outline</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Ghost variant" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="ghost">Ghost</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Destructive variant" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="solid" color="danger">
            Delete
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const PropsCompoundRootExample: Story = {
  name: 'Compound API (InputGroupRoot)',
  render: () => (
    <InputGroupRoot>
      <InputGroupInput placeholder="Compound: use InputGroupRoot for full control" />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroupRoot>
  ),
};
