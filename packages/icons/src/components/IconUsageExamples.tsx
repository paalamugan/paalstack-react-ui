import type { IconType } from 'react-icons';

import { IconContext } from 'react-icons';

import { Heading } from '@/layouts/Heading';
import { HStack } from '@/layouts/HStack';
import { Text } from '@/layouts/Text';
import { VStack } from '@/layouts/VStack';

interface IconUsageExamplesProps {
  packageName: string;
  exampleIcons: {
    Icon1: IconType;
    Icon2: IconType;
    Icon3: IconType;
    icon1Name: string;
    icon2Name: string;
    icon3Name: string;
  };
}

export function IconUsageExamples({ packageName, exampleIcons }: IconUsageExamplesProps) {
  const { Icon1, Icon2, Icon3, icon1Name, icon2Name, icon3Name } = exampleIcons;

  return (
    <VStack className="mb-8 max-w-4xl gap-8">
      <VStack className="gap-4">
        <Heading as="h2">Usage Examples</Heading>
        <Text className="text-muted-foreground">
          Icons are provided via the react-icons library. Here are common usage patterns:
        </Text>
      </VStack>

      {/* Basic Import */}
      <VStack className="gap-3 rounded-lg border p-6">
        <Heading as="h3" className="text-lg">
          1. Basic Import
        </Heading>
        <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm">
          <code>{`import { ${icon1Name} } from '@paalstack/react-icons/${packageName}';

function MyComponent() {
  return <${icon1Name} />;
}`}</code>
        </pre>
        <HStack className="gap-4 pt-2">
          <Icon1 />
        </HStack>
      </VStack>

      {/* Size with className */}
      <VStack className="gap-3 rounded-lg border p-6">
        <Heading as="h3" className="text-lg">
          2. Custom Size (using className)
        </Heading>
        <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm">
          <code>{`import { ${icon2Name} } from '@paalstack/react-icons/${packageName}';

// Using Tailwind CSS classes
<${icon2Name} className="size-4" />  {/* 16px */}
<${icon2Name} className="size-6" />  {/* 24px */}
<${icon2Name} className="size-8" />  {/* 32px */}
<${icon2Name} className="size-12" /> {/* 48px */}`}</code>
        </pre>
        <HStack className="items-center gap-4 pt-2">
          <Icon2 className="size-4" />
          <Icon2 className="size-6" />
          <Icon2 className="size-8" />
          <Icon2 className="size-12" />
        </HStack>
      </VStack>

      {/* Size with size prop */}
      <VStack className="gap-3 rounded-lg border p-6">
        <Heading as="h3" className="text-lg">
          3. Custom Size (using size prop)
        </Heading>
        <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm">
          <code>{`import { ${icon3Name} } from '@paalstack/react-icons/${packageName}';

<${icon3Name} size={16} />
<${icon3Name} size={24} />
<${icon3Name} size={32} />
<${icon3Name} size={48} />`}</code>
        </pre>
        <HStack className="items-center gap-4 pt-2">
          <Icon3 size={16} />
          <Icon3 size={24} />
          <Icon3 size={32} />
          <Icon3 size={48} />
        </HStack>
      </VStack>

      {/* Color */}
      <VStack className="gap-3 rounded-lg border p-6">
        <Heading as="h3" className="text-lg">
          4. Custom Color
        </Heading>
        <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm">
          <code>{`import { ${icon1Name} } from '@paalstack/react-icons/${packageName}';

<${icon1Name} className="text-blue-500" />
<${icon1Name} className="text-green-500" />
<${icon1Name} className="text-red-500" />
<${icon1Name} color="#ff6b6b" />
<${icon1Name} style={{ color: '#4ecdc4' }} />`}</code>
        </pre>
        <HStack className="items-center gap-4 pt-2">
          <Icon1 className="size-8 text-blue-500" />
          <Icon1 className="size-8 text-green-500" />
          <Icon1 className="size-8 text-red-500" />
          <Icon1 className="size-8" color="#ff6b6b" />
          <Icon1 className="size-8" style={{ color: '#4ecdc4' }} />
        </HStack>
      </VStack>

      {/* Multiple imports */}
      <VStack className="gap-3 rounded-lg border p-6">
        <Heading as="h3" className="text-lg">
          5. Multiple Imports
        </Heading>
        <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm">
          <code>{`import { ${icon1Name}, ${icon2Name}, ${icon3Name} } from '@paalstack/react-icons/${packageName}';

function Navigation() {
  return (
    <nav>
      <${icon1Name} className="size-6" />
      <${icon2Name} className="size-6" />
      <${icon3Name} className="size-6" />
    </nav>
  );
}`}</code>
        </pre>
        <HStack className="gap-4 pt-2">
          <Icon1 className="size-6" />
          <Icon2 className="size-6" />
          <Icon3 className="size-6" />
        </HStack>
      </VStack>

      {/* IconContext */}
      <VStack className="gap-3 rounded-lg border border-purple-200 bg-purple-50 p-6">
        <Heading as="h3" className="text-lg">
          6. Using IconContext (Global Props)
        </Heading>
        <Text className="text-sm text-muted-foreground">
          Set default props for all icons within a context. Individual props override context values.
        </Text>
        <pre className="overflow-x-auto rounded bg-white p-4 text-sm">
          <code>{`import { IconContext } from '@paalstack/react-icons';
import { ${icon1Name}, ${icon2Name}, ${icon3Name} } from '@paalstack/react-icons/${packageName}';

function MyComponent() {
  return (
    <IconContext.Provider value={{ color: 'blue', size: '1.5em' }}>
      <div>
        <${icon1Name} />  {/* blue, 1.5em */}
        <${icon2Name} />  {/* blue, 1.5em */}
        <${icon3Name} color="red" />  {/* red, 1.5em - override */}
      </div>
    </IconContext.Provider>
  );
}`}</code>
        </pre>
        <div className="space-y-3 pt-2">
          <div>
            <Text className="mb-2 text-sm font-medium">Context: blue, 1.5em</Text>
            <IconContext.Provider value={{ color: 'blue', size: '1.5em' }}>
              <HStack className="items-center gap-4">
                <Icon1 />
                <Icon2 />
                <Icon3 />
              </HStack>
            </IconContext.Provider>
          </div>
          <div>
            <Text className="mb-2 text-sm font-medium">Context: blue, 1.5em + Override middle with red</Text>
            <IconContext.Provider value={{ color: 'blue', size: '1.5em' }}>
              <HStack className="items-center gap-4">
                <Icon1 />
                <Icon2 color="red" />
                <Icon3 />
              </HStack>
            </IconContext.Provider>
          </div>
        </div>
      </VStack>

      {/* All props */}
      <VStack className="gap-3 rounded-lg border p-6">
        <Heading as="h3" className="text-lg">
          7. Available Props
        </Heading>
        <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm">
          <code>{`interface IconBaseProps {
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
  attr?: React.SVGAttributes<SVGElement>;
  title?: string;
}

// Example
<${icon1Name} 
  size={32}
  color="blue"
  className="my-icon"
  title="${icon1Name.replace(/([A-Z])/g, ' $1').trim()} Icon"
  style={{ cursor: 'pointer' }}
/>`}</code>
        </pre>
      </VStack>

      {/* NPM Installation */}
      <VStack className="gap-3 rounded-lg border border-blue-200 bg-blue-50 p-6">
        <Heading as="h3" className="text-lg">
          📦 Installation
        </Heading>
        <pre className="overflow-x-auto rounded bg-white p-4 text-sm">
          <code>{`npm install @paalstack/react-icons`}</code>
        </pre>
        <Text className="text-sm text-muted-foreground">
          For more information, visit:{' '}
          <a
            href="https://www.npmjs.com/package/react-icons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            react-icons documentation
          </a>
        </Text>
      </VStack>
    </VStack>
  );
}
