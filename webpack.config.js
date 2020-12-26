const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const getFileName = () => (isProd ? '[name].[contenthash]' : '[name]');

const getOptimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };
  if (isProd) {
    config.minimize = isProd;
    config.minimizer = [new CssMinimizerPlugin(), new TerserPlugin()];
  }
  return config;
};

module.exports = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  devtool: isDev ? 'source-map' : false,
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill', './js/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${getFileName()}.bundle.js`,
  },
  resolve: {
    extensions: ['.js', '.json', '.css'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
  optimization: getOptimization(),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/public/path/to/',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(svg|png)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[hash][ext]',
        },
      },
      {
        test: /\.(csv)$/i,
        use: ['csv-loader'],
        generator: {
          filename: 'files/[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    port: 5555,
    open: true,
  },
  plugins: [
    // new ESLintPlugin(),
    new htmlWebpackPlugin({ template: '../public/index.html' }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
};
