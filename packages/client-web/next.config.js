const path = require('path');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const withTranspileModules = require('next-plugin-transpile-modules');

// const { nextI18NextRewrites } = require('next-i18next/rewrites');
// const localeSubpaths = { en: 'en', ko: 'ko' };

module.exports = withCustomBabelConfigFile(
  withTranspileModules({
    babelConfigFile: path.resolve('./babel.config.js')
    // transpileModules: ['@nature']
    // publicRuntimeConfig: {
    //   localeSubpaths
    // },
    // experimental: {
    //   async rewrites() {
    //     return [...nextI18NextRewrites(localeSubpaths)];
    //   }
    // }
  })
);

// bundle-analyzer
// module.exports = {
//   webpack: config => {
//     const webpack = require('webpack');
//     const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//       .BundleAnalyzerPlugin;
//     config.plugins = config.plugins || [];
//     config.plugins.push(
//       new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/)
//     );
//     config.plugins.push(new BundleAnalyzerPlugin());
//     return config;
//   }
// };
