const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const createLodashAliases = require('lodash-loader').createLodashAliases;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const path = require('path');
module.exports = env =>
  console.log(env) || {
    mode: env.mode,
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      alias: createLodashAliases(),
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Homework10',
        filename: 'index.html',
        template: './index.html',
      }),
      new MiniCssExtractPlugin({ filename: '[name].css' }),
      new LodashModuleReplacementPlugin(),
    ],
    devServer: { contentBase: path.join(__dirname, 'dist') },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ],
        },
        { test: /\.handlebars$/, test: /\.hbs$/, loader: 'handlebars-loader' },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
  };
