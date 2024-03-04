const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('./webpack.config.resolve');

module.exports = () => {
  return {
    resolve,
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: { loader: require.resolve('ts-loader') },
        },
        {
          test: /\.css$/, // .css 확장자를 가진 파일에 적용될 로더 설정
          use: ['style-loader', 'css-loader'], // 사용할 로더 설정
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/assets/favicon/example.ico',
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3000,
    },
  };
};
