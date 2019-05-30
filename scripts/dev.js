const fs = require('fs-extra')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const signale = require('signale')
const paths = require('../configs/paths')
const {mergeConfig} = require('../utils/util')
const webpackConfigFactory = require('../configs/webpack')

module.exports = async function dev(app) {
  const config = mergeConfig({
    app: paths.parseEntry(app)
  })
  const webpackConfig = webpackConfigFactory(false, config)
  const compiler = webpack(webpackConfig)
  const server = new WebpackDevServer(compiler, webpackConfig.devServer)
  const { host, port } = config.webpack.devServer
  server.listen(port, host, () => {
    signale.success(`Start server on ${host}:${port}`)
  })
}
