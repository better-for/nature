require('dotenv').config();

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const withTranspileModules = require('next-plugin-transpile-modules');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(
  withCustomBabelConfigFile(
    withTranspileModules({
      babelConfigFile: path.resolve('./babel.config.js'),
      transpileModules: ['@nature'],
      webpack(config) {
        config.resolve.modules.push(__dirname);
        config.plugins = config.plugins || [];
        config.plugins.push(
          new HtmlWebpackPlugin({
            minify:
              process.env.NODE_ENV === 'production'
                ? {
                    collapseWhitespace: true, // 빈칸 제거
                    removeComments: true // 주석 제거
                  }
                : false
          })
        );
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
  )
);
