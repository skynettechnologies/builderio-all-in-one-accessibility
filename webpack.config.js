// contents of webpack.config.js
const path = require('path');
const pkg = require('./package.json');

module.exports = {
  // entry: `./src/${pkg.entry}.jsx`,
  entry: `./src/plugin.ts`,
  externals: {
    '@builder.io/react': '@builder.io/react',
    '@builder.io/app-context': '@builder.io/app-context',
    "@emotion/core": "@emotion/core",
    "react": "react",
    "react-dom": "react-dom"
  },
  output: {
    filename: pkg.output,
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'system',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  devServer: {
    port: 1268,
    static: {
       directory: path.join(__dirname, './dist'),
     },
    headers: {
      'Access-Control-Allow-Private-Network': 'true',
      'Access-Control-Allow-Origin': '*',
    },
  },
};
