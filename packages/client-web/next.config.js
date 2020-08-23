const path = require('path');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const withTranspileModules = require('next-transpile-modules');

module.exports = withCustomBabelConfigFile(
  withTranspileModules({
    babelConfigFile: path.resolve('./babel.config.js'),
    transpileModules: ['@nature']
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
