const path = require('path')
const chalk = require('chalk')

function resolvePath(p) {
  return path.resolve(__dirname, p)
}

function green(str) {
  console.log(chalk.green(str))
}

function red(str) {
  console.log(chalk.red(str))
}

function yellow(str) {
  console.log(chalk.yellow(str))
}

module.exports = { resolvePath, green, red, yellow }