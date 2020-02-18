const merge = require('webpack-merge')
const { green, yellow } = require('./utils')
const baseConfig = require('./webpack.base.config')

const devConfig = merge({
  devtool: 'development'
}, baseConfig)

module.exports = devConfig