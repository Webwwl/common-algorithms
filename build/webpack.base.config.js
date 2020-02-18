const { resolvePath } = require('./utils')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    app: resolvePath('../src/index.js')
  },
  output: {
    path: resolvePath('../dist'),
    filename: '[name].boundle.[hash:8].js'
  },
  devServer: {
    port: 10000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
        ]
      },
      {
        test: /\.(png|jpe?g|svg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5 * 1000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolvePath('../index.html')
    })
  ]
}

module.exports = config