const path = require('path')
const fs = require('fs-extra')
const shell = require('shelljs')
const webpack = require('webpack')
const paths = require('../configs/paths')
const config = require('../configs/config')
const webpackConfigFactory = require('../configs/webpack')

module.exports = async function eject() {
  const webpackConfig = webpackConfigFactory(true, config)
  fs.outputFileSync(path.join(process.cwd(), 'webpack.js'), JSON.stringify(webpackConfig))
}
