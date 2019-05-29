const path = require('path')
const shell = require('shelljs')
const webpack = require('webpack')
const paths = require('../configs/paths')
const webpackConfigFactory = require('../configs/webpack')
const {mergeConfig} = require('../utils/util')

module.exports = async function build(app) {
  const config = mergeConfig({
    app: paths.parseEntry(app)
  })
  const webpackConfig = webpackConfigFactory(true, config)
  const compiler = webpack(webpackConfig)
  compiler.run((err, stats)=>{
    console.log(stats.toString({
      chunks: false,
      colors: true
    }));
  })
}
