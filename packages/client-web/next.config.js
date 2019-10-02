const path = require('path');
const withTypeScript = require('@zeit/next-typescript');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const withTranspileModules = require('next-transpile-modules');

module.exports = withCustomBabelConfigFile(
  withTypeScript(
    withTranspileModules({
      babelConfigFile: path.resolve('./babel.config.js'),
      transpileModules: ['@nature']
    })
  )
);
