// const path = require('path');

// module.exports = {
//   entry: './src/mainPosts.js',         // точка входу
//   output: {
//     filename: 'main.js',         // файл на виході
//     path: path.resolve(__dirname, 'dist'),
//   },
//   mode: 'development',             // або 'production'
// };

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/mainPosts.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    watchFiles: ['src/**/*', 'dist/index.html'],
    open: true,
    port: 3000,
  },
  resolve: {
    extensions: ['.js'],
  },
};