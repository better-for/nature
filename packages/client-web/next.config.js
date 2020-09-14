require('dotenv').config();

const path = require('path');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const withTranspileModules = require('next-plugin-transpile-modules');

module.exports = withCustomBabelConfigFile(
  withTranspileModules({
    babelConfigFile: path.resolve('./babel.config.js'),
    transpileModules: ['@nature'],
    webpack(config) {
      config.resolve.modules.push(__dirname);
      config.plugins = config.plugins || [];

      return config;
    },
    env: {
      SITE: process.env.SITE,
      FACEBOOK_ID: process.env.FACEBOOK_ID,
      FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
      NAVER: process.env.NAVER,
      NAVER_CALLBACK: process.env.NAVER_CALLBACK,
      LOCALHOST: process.env.LOCALHOST,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL
    }
  })
);

// bundle-analyzer
/*module.exports = {
  webpack: config => {
    const webpack = require('webpack');
    const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
    config.plugins = config.plugins || [];
    config.plugins.push(
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/)
    );
    config.plugins.push(new BundleAnalyzerPlugin());
    return config;
  }
};
*/
