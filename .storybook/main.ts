import path from 'path';

import type { StorybookConfig } from '@storybook/react-vite';

import 'storybook-addon-tw-dm-toggle';

import { mergeConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: [
    '../packages/**/src/**/*.mdx',
    '../stories/**/*.mdx',
    '../packages/**/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  core: {
    disableTelemetry: true,
  },
  addons: [
    path.resolve(__dirname, './remarkGfm'),
    'storybook-addon-tw-dm-toggle',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    'storybook-addon-react-router-v6',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '../packages')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 120, singleQuote: false },
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) => {
    config.plugins?.push(tsconfigPaths());
    // customize the Vite config here
    config.plugins?.push(EnvironmentPlugin('all'));

    if (config.build) {
      config.build = {
        ...config.build,
        chunkSizeWarningLimit: 25000,
      };
    }

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@paalstack/react-components': path.resolve(__dirname, '../packages/components/src'),
        '@paalstack/react-hooks': path.resolve(__dirname, '../packages/hooks/src'),
        '@paalstack/react-icons': path.resolve(__dirname, '../packages/icons/src'),
        '@paalstack/react-layouts': path.resolve(__dirname, '../packages/layouts/src'),
        '@paalstack/react-providers': path.resolve(__dirname, '../packages/providers/src'),
        '@paalstack/react-shared': path.resolve(__dirname, '../packages/shared/src'),
        '@paalstack/react-ui': path.resolve(__dirname, '../packages/ui/src'),
      };
    }

    // Merge custom configuration into the default config
    return mergeConfig(config, {
      resolve: {
        tsconfigPaths: true,
      },
    });
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['./public'],
};
export default config;
