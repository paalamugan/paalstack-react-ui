import * as React from 'react';

import { Grid } from '@/layouts/Grid';
import { Heading } from '@/layouts/Heading';
import { Text } from '@/layouts/Text';
import { VStack } from '@/layouts/VStack';

import * as AiIcons from './ai';
import * as BiIcons from './bi';
import * as BsIcons from './bs';
import * as CgIcons from './cg';
import * as CiIcons from './ci';
import * as DiIcons from './di';
import * as FaIcons from './fa';
import * as Fa6Icons from './fa6';
import * as FcIcons from './fc';
import * as FiIcons from './fi';
import * as GiIcons from './gi';
import * as GoIcons from './go';
import * as GrIcons from './gr';
import * as HiIcons from './hi';
import * as Hi2Icons from './hi2';
import * as ImIcons from './im';
import * as IoIcons from './io';
import * as Io5Icons from './io5';
import * as LiaIcons from './lia';
import * as LuIcons from './lu';
import * as MdIcons from './md';
import * as PiIcons from './pi';
import * as RiIcons from './ri';
import * as RxIcons from './rx';
import * as SiIcons from './si';
import * as SlIcons from './sl';
import * as TbIcons from './tb';
import * as TfiIcons from './tfi';
import * as TiIcons from './ti';
import * as VscIcons from './vsc';
import * as WiIcons from './wi';

interface IconPackInfo {
  id: string;
  name: string;
  description: string;
  path: string;
  count: number;
  preview: React.ComponentType[];
}

function getIconCount(mod: Record<string, unknown>) {
  return Object.entries(mod).filter(([, value]) => typeof value === 'function').length;
}

function getPreviewIcons(mod: Record<string, unknown>, count: number = 6) {
  return Object.entries(mod)
    .filter(([, value]) => typeof value === 'function')
    .slice(0, count)
    .map(([, value]) => value as React.ComponentType);
}

export default {
  title: 'Icons/Overview',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    layout: 'centered',
    options: {
      showPanel: false,
    },
  },
};

export function QuickStart() {
  return (
    <VStack className="max-w-4xl gap-8">
      <VStack className="gap-4">
        <Heading as="h1">Quick Start Guide</Heading>
        <Text className="text-lg text-muted-foreground">
          Learn how to use icons from our collection of {31} icon packs powered by react-icons.
        </Text>
      </VStack>

      {/* Installation */}
      <VStack className="gap-3 rounded-lg border border-blue-200 bg-blue-50 p-6">
        <Heading as="h2" className="text-xl">
          📦 Installation
        </Heading>
        <pre className="overflow-x-auto rounded bg-white p-4 text-sm">
          <code>{`npm install @paalstack/react-icons`}</code>
        </pre>
      </VStack>

      {/* Basic Usage */}
      <VStack className="gap-3 rounded-lg border p-6">
        <Heading as="h2" className="text-xl">
          1. Basic Usage
        </Heading>
        <Text className="text-muted-foreground">Import icons from any pack and use them as React components:</Text>
        <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm">
          <code>{`// Import from different icon packs
import { RxHome } from '@paalstack/react-icons/rx';     // Radix Icons
import { LuStar } from '@paalstack/react-icons/lu';     // Lucide Icons
import { MdFavorite } from '@paalstack/react-icons/md'; // Material Design

function MyComponent() {
  return (
    <div>
      <RxHome />
      <LuStar />
      <MdFavorite />
    </div>
  );
}`}</code>
        </pre>
      </VStack>

      {/* Customization */}
      <VStack className="gap-3 rounded-lg border p-6">
        <Heading as="h2" className="text-xl">
          2. Customization
        </Heading>
        <Text className="text-muted-foreground">Customize icons using className, size, color, and style props:</Text>
        <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm">
          <code>{`import { LuHeart } from '@paalstack/react-icons/lu';

// Using Tailwind CSS classes
<LuHeart className="size-6 text-red-500" />

// Using size and color props
<LuHeart size={32} color="#e74c3c" />

// Using inline styles
<LuHeart style={{ fontSize: '2rem', color: 'blue' }} />`}</code>
        </pre>
      </VStack>

      {/* IconContext */}
      <VStack className="gap-3 rounded-lg border border-purple-200 bg-purple-50 p-6">
        <Heading as="h2" className="text-xl">
          3. Global Configuration with IconContext
        </Heading>
        <Text className="text-muted-foreground">
          Use IconContext.Provider to set default props for all icons within a component tree:
        </Text>
        <pre className="overflow-x-auto rounded bg-white p-4 text-sm">
          <code>{`import { IconContext } from '@paalstack/react-icons';
import { RxHome, RxGear, RxPerson } from '@paalstack/react-icons/rx';

function Navigation() {
  return (
    <IconContext.Provider value={{ color: 'blue', size: '1.5em' }}>
      <nav>
        <RxHome />        {/* blue, 1.5em */}
        <RxGear />        {/* blue, 1.5em */}
        <RxPerson color="red" />  {/* red, 1.5em - override */}
      </nav>
    </IconContext.Provider>
  );
}`}</code>
        </pre>
        <div className="mt-3">
          <Heading as="h4" className="mb-2 text-sm font-semibold">
            Available Context Options:
          </Heading>
          <div className="rounded bg-white p-3 text-sm">
            <ul className="space-y-1">
              <li>
                <code>color</code>: Default color for all icons
              </li>
              <li>
                <code>size</code>: Default size for all icons
              </li>
              <li>
                <code>className</code>: Default CSS class for all icons
              </li>
              <li>
                <code>style</code>: Default inline styles for all icons
              </li>
              <li>
                <code>attr</code>: Default SVG attributes
              </li>
              <li>
                <code>title</code>: Default accessibility title
              </li>
            </ul>
          </div>
          <Text className="mt-2 text-xs text-muted-foreground">
            💡 <strong>Note:</strong> Individual icon props always override context values
          </Text>
        </div>
      </VStack>

      {/* Available Icon Packs */}
      <VStack className="gap-3 rounded-lg border p-6">
        <Heading as="h2" className="text-xl">
          4. Available Icon Packs
        </Heading>
        <Text className="text-muted-foreground">Choose from {31} different icon libraries:</Text>
        <Grid className="grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4 pt-2">
          {[
            { pack: 'rx', name: 'Radix Icons' },
            { pack: 'lu', name: 'Lucide Icons' },
            { pack: 'md', name: 'Material Design' },
            { pack: 'hi2', name: 'Heroicons 2' },
            { pack: 'fa6', name: 'Font Awesome 6' },
            { pack: 'bs', name: 'Bootstrap Icons' },
            { pack: 'fi', name: 'Feather Icons' },
            { pack: 'ai', name: 'Ant Design' },
            { pack: 'io5', name: 'Ionicons 5' },
            { pack: 'tb', name: 'Tabler Icons' },
            { pack: 'ri', name: 'Remix Icons' },
            { pack: 'pi', name: 'Phosphor Icons' },
          ].map(({ pack, name }) => (
            <div key={pack} className="rounded bg-gray-50 p-3">
              <code className="text-sm">@paalstack/react-icons/{pack}</code>
              <Text className="mt-1 text-xs text-muted-foreground">{name}</Text>
            </div>
          ))}
        </Grid>
        <Text className="pt-2 text-sm text-muted-foreground">...and {31 - 12} more icon packs available!</Text>
      </VStack>

      {/* Common Props */}
      <VStack className="gap-3 rounded-lg border p-6">
        <Heading as="h2" className="text-xl">
          5. Common Props
        </Heading>
        <Text className="text-muted-foreground">All icons accept these standard props:</Text>
        <div className="rounded bg-gray-100 p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 pr-4 text-left">Prop</th>
                <th className="py-2 pr-4 text-left">Type</th>
                <th className="py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">
                  <code>size</code>
                </td>
                <td className="py-2 pr-4">string | number</td>
                <td className="py-2">Icon size (in pixels)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">
                  <code>color</code>
                </td>
                <td className="py-2 pr-4">string</td>
                <td className="py-2">Icon color (any CSS color)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">
                  <code>className</code>
                </td>
                <td className="py-2 pr-4">string</td>
                <td className="py-2">CSS classes</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">
                  <code>style</code>
                </td>
                <td className="py-2 pr-4">CSSProperties</td>
                <td className="py-2">Inline styles</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">
                  <code>title</code>
                </td>
                <td className="py-2 pr-4">string</td>
                <td className="py-2">Accessibility title</td>
              </tr>
            </tbody>
          </table>
        </div>
      </VStack>

      {/* Best Practices */}
      <VStack className="gap-3 rounded-lg border border-green-200 bg-green-50 p-6">
        <Heading as="h2" className="text-xl">
          💡 Best Practices
        </Heading>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <span>✓</span>
            <span>
              <strong>Tree-shaking:</strong> Import only the icons you need to keep bundle size small
            </span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>
              <strong>Consistency:</strong> Stick to one or two icon packs for a consistent design
            </span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>
              <strong>Accessibility:</strong> Use the <code>title</code> prop for screen readers
            </span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>
              <strong>Performance:</strong> Use Tailwind CSS classes for better performance
            </span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>
              <strong>IconContext:</strong> Use IconContext for consistent styling across icon groups
            </span>
          </li>
        </ul>
      </VStack>

      {/* Next Steps */}
      <VStack className="gap-3 rounded-lg border p-6">
        <Heading as="h2" className="text-xl">
          🚀 Next Steps
        </Heading>
        <ul className="space-y-2">
          <li>
            <a href="?path=/story/icons-overview--icons-overview" className="text-blue-600 hover:underline">
              Browse all {31} icon packs →
            </a>
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/react-icons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit react-icons documentation →
            </a>
          </li>
          <li>
            <Text className="text-muted-foreground">
              Each icon pack has its own "Usage" story with detailed examples
            </Text>
          </li>
        </ul>
      </VStack>
    </VStack>
  );
}

export function IconsOverview() {
  const iconPacks = React.useMemo<IconPackInfo[]>(
    () => [
      {
        id: 'ai',
        name: 'Ant Design Icons',
        description: 'High-quality icons from Ant Design',
        path: '?path=/story/icons-ant-design-icons--ant-design-icons',
        count: getIconCount(AiIcons),
        preview: getPreviewIcons(AiIcons),
      },
      {
        id: 'bi',
        name: 'BoxIcons',
        description: 'Simple open source icons',
        path: '?path=/story/icons-boxicons--box-icons',
        count: getIconCount(BiIcons),
        preview: getPreviewIcons(BiIcons),
      },
      {
        id: 'bs',
        name: 'Bootstrap Icons',
        description: 'Official Bootstrap icon library',
        path: '?path=/story/icons-bootstrap-icons--bootstrap-icons',
        count: getIconCount(BsIcons),
        preview: getPreviewIcons(BsIcons),
      },
      {
        id: 'cg',
        name: 'css.gg',
        description: 'Pure CSS, SVG & Figma UI icons',
        path: '?path=/story/icons-css-gg--css-gg-icons',
        count: getIconCount(CgIcons),
        preview: getPreviewIcons(CgIcons),
      },
      {
        id: 'ci',
        name: 'Circum Icons',
        description: 'Consistent open source icons',
        path: '?path=/story/icons-circum-icons--circum-icons',
        count: getIconCount(CiIcons),
        preview: getPreviewIcons(CiIcons),
      },
      {
        id: 'di',
        name: 'Devicons',
        description: 'Icons for programming languages and tools',
        path: '?path=/story/icons-devicons--devicons',
        count: getIconCount(DiIcons),
        preview: getPreviewIcons(DiIcons),
      },
      {
        id: 'fa',
        name: 'Font Awesome',
        description: "The web's most popular icon set",
        path: '?path=/story/icons-font-awesome--font-awesome',
        count: getIconCount(FaIcons),
        preview: getPreviewIcons(FaIcons),
      },
      {
        id: 'fa6',
        name: 'Font Awesome 6',
        description: 'Latest version of Font Awesome',
        path: '?path=/story/icons-font-awesome-6--font-awesome-6',
        count: getIconCount(Fa6Icons),
        preview: getPreviewIcons(Fa6Icons),
      },
      {
        id: 'fc',
        name: 'Flat Color Icons',
        description: 'Colorful flat design icons',
        path: '?path=/story/icons-flat-color-icons--flat-color-icons',
        count: getIconCount(FcIcons),
        preview: getPreviewIcons(FcIcons),
      },
      {
        id: 'fi',
        name: 'Feather Icons',
        description: 'Beautiful open source icons',
        path: '?path=/story/icons-feather-icons--feather-icons',
        count: getIconCount(FiIcons),
        preview: getPreviewIcons(FiIcons),
      },
      {
        id: 'gi',
        name: 'Game Icons',
        description: 'Thousands of free game-related icons',
        path: '?path=/story/icons-game-icons--game-icons',
        count: getIconCount(GiIcons),
        preview: getPreviewIcons(GiIcons),
      },
      {
        id: 'go',
        name: 'Github Octicons',
        description: "GitHub's icon font",
        path: '?path=/story/icons-github-octicons--github-octicons',
        count: getIconCount(GoIcons),
        preview: getPreviewIcons(GoIcons),
      },
      {
        id: 'gr',
        name: 'Grommet Icons',
        description: 'Icons from the Grommet design system',
        path: '?path=/story/icons-grommet-icons--grommet-icons',
        count: getIconCount(GrIcons),
        preview: getPreviewIcons(GrIcons),
      },
      {
        id: 'hi',
        name: 'Heroicons',
        description: 'Beautiful hand-crafted SVG icons from Tailwind',
        path: '?path=/story/icons-heroicons--heroicons',
        count: getIconCount(HiIcons),
        preview: getPreviewIcons(HiIcons),
      },
      {
        id: 'hi2',
        name: 'Heroicons 2',
        description: 'Updated Heroicons from Tailwind CSS',
        path: '?path=/story/icons-heroicons-2--heroicons-2',
        count: getIconCount(Hi2Icons),
        preview: getPreviewIcons(Hi2Icons),
      },
      {
        id: 'im',
        name: 'IcoMoon Free',
        description: 'Free vector icons',
        path: '?path=/story/icons-icomoon-free--ico-moon-free',
        count: getIconCount(ImIcons),
        preview: getPreviewIcons(ImIcons),
      },
      {
        id: 'io',
        name: 'Ionicons 4',
        description: 'Premium designed icons for apps',
        path: '?path=/story/icons-ionicons-4--ionicons-4',
        count: getIconCount(IoIcons),
        preview: getPreviewIcons(IoIcons),
      },
      {
        id: 'io5',
        name: 'Ionicons 5',
        description: 'Latest Ionicons for apps and web',
        path: '?path=/story/icons-ionicons-5--ionicons-5',
        count: getIconCount(Io5Icons),
        preview: getPreviewIcons(Io5Icons),
      },
      {
        id: 'lia',
        name: 'Line Awesome',
        description: 'Replace Font Awesome with modern line icons',
        path: '?path=/story/icons-line-awesome--line-awesome',
        count: getIconCount(LiaIcons),
        preview: getPreviewIcons(LiaIcons),
      },
      {
        id: 'lu',
        name: 'Lucide Icons',
        description: 'Beautiful & consistent icon toolkit',
        path: '?path=/story/icons-lucide-icons--lucide-icons',
        count: getIconCount(LuIcons),
        preview: getPreviewIcons(LuIcons),
      },
      {
        id: 'md',
        name: 'Material Design Icons',
        description: 'Material Design icons by Google',
        path: '?path=/story/icons-material-design-icons--material-design-icons',
        count: getIconCount(MdIcons),
        preview: getPreviewIcons(MdIcons),
      },
      {
        id: 'pi',
        name: 'Phosphor Icons',
        description: 'Flexible icon family for interfaces',
        path: '?path=/story/icons-phosphor-icons--phosphor-icons',
        count: getIconCount(PiIcons),
        preview: getPreviewIcons(PiIcons),
      },
      {
        id: 'ri',
        name: 'Remix Icons',
        description: 'Open source neutral-style icon system',
        path: '?path=/story/icons-remix-icons--remix-icons',
        count: getIconCount(RiIcons),
        preview: getPreviewIcons(RiIcons),
      },
      {
        id: 'rx',
        name: 'Radix Icons',
        description: 'Crisp icon set from Radix UI',
        path: '?path=/story/icons-radix-icons--radix-icons',
        count: getIconCount(RxIcons),
        preview: getPreviewIcons(RxIcons),
      },
      {
        id: 'si',
        name: 'Simple Icons',
        description: 'SVG icons for popular brands',
        path: '?path=/story/icons-simple-icons--simple-icons',
        count: getIconCount(SiIcons),
        preview: getPreviewIcons(SiIcons),
      },
      {
        id: 'sl',
        name: 'Simple Line Icons',
        description: 'Simple and minimal line icons',
        path: '?path=/story/icons-simple-line-icons--simple-line-icons',
        count: getIconCount(SlIcons),
        preview: getPreviewIcons(SlIcons),
      },
      {
        id: 'tb',
        name: 'Tabler Icons',
        description: 'Over 4000 pixel-perfect icons',
        path: '?path=/story/icons-tabler-icons--tabler-icons',
        count: getIconCount(TbIcons),
        preview: getPreviewIcons(TbIcons),
      },
      {
        id: 'tfi',
        name: 'Themify Icons',
        description: 'Complete set of icons for web design',
        path: '?path=/story/icons-themify-icons--themify-icons',
        count: getIconCount(TfiIcons),
        preview: getPreviewIcons(TfiIcons),
      },
      {
        id: 'ti',
        name: 'Typicons',
        description: 'Free-to-use vector icons',
        path: '?path=/story/icons-typicons--typicons',
        count: getIconCount(TiIcons),
        preview: getPreviewIcons(TiIcons),
      },
      {
        id: 'vsc',
        name: 'VS Code Icons',
        description: 'Icons from Visual Studio Code',
        path: '?path=/story/icons-vs-code-icons--vs-code-icons',
        count: getIconCount(VscIcons),
        preview: getPreviewIcons(VscIcons),
      },
      {
        id: 'wi',
        name: 'Weather Icons',
        description: '222 weather themed icons',
        path: '?path=/story/icons-weather-icons--weather-icons',
        count: getIconCount(WiIcons),
        preview: getPreviewIcons(WiIcons),
      },
    ],
    [],
  );

  return (
    <VStack className="gap-6">
      <VStack className="mb-4 gap-2">
        <Heading as="h1">Icon Libraries</Heading>
        <Text className="text-muted-foreground">
          Browse our collection of {iconPacks.length} icon packs with{' '}
          {iconPacks.reduce((sum, pack) => sum + pack.count, 0).toLocaleString()} total icons.
        </Text>
      </VStack>

      <Grid className="grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4">
        {iconPacks.map((pack) => (
          <a
            key={pack.id}
            href={pack.path}
            className="block rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <VStack className="gap-4">
              <div className="flex items-center justify-between">
                <Heading as="h3" className="text-lg">
                  {pack.name}
                </Heading>
                <Text className="text-sm text-muted-foreground">{pack.count}</Text>
              </div>

              <Text className="text-sm text-muted-foreground">{pack.description}</Text>

              <div className="flex items-center gap-3">
                {pack.preview.map((IconComponent, index) => {
                  const Icon = IconComponent as React.ComponentType<{ className?: string }>;
                  return <Icon key={index} className="size-6 text-gray-600" />;
                })}
              </div>
            </VStack>
          </a>
        ))}
      </Grid>
    </VStack>
  );
}
