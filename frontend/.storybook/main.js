const path = require('path');
const { config } = require('process');
const tsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
    'storybook-addon-next',
  ],
  framework: '@storybook/react',
  staticDirs: ['../public'],
  env: (config) => ({
    ...config,
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  }),

  // Fixed: https://stackoverflow.com/questions/70538307/sasserror-sasserror-expected-in-storybook
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: [
  //       'style-loader',
  //       {
  //         loader: 'css-loader',
  //         options: {
  //           modules: {
  //             auto: true,
  //           },
  //         },
  //       },
  //       'sass-loader',
  //     ],
  //     include: path.resolve(__dirname, '../src/styles'),
  //   });

  //   config.plugins.push(new tsConfigPathsPlugin());

  //   return config;
  // },
};
