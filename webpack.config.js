
// Get AWS Credential
const config = require(`${process.env.HOME}/.aws/config.json`);

const webpack = require('webpack');
const path = require('path');

const rootPath = path.resolve(__dirname);
const wwwPath = path.resolve(rootPath, 'www');

module.exports = {
  context: wwwPath,
  entry: './index.ts',
  output: {
    path: wwwPath,
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: wwwPath,
  },

  module: {
    noParse: [/aws-sdk/],

    loaders: [

      // { test: /aws-sdk*browser/, loader: 'transform?brfs' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.ts(x?)$/, loader: 'babel!ts' },
      { test: /\.html$/, loader: 'raw' },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test',
      ACCESS_KEY_ID: JSON.stringify(config.accessKeyId),
      SECRET_ACCESS_KEY: JSON.stringify(config.secretAccessKey),
    }),
  ],
};
