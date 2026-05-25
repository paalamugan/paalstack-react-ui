import { CracoConfig } from '@craco/types';

const cracoConfig: CracoConfig = {
  style: {
    postcss: {
      plugins: [require('@tailwindcss/postcss')],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      if (!webpackConfig.module) {
        webpackConfig.module = {
          rules: [],
        };
      }
      if (webpackConfig.module.rules) {
        webpackConfig.module.rules.push({
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false,
          },
        });
      }

      return webpackConfig;
    },
  },
};
export default cracoConfig;
