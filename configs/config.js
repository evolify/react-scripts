const path = require('path')
let config = {
  template: path.join(__dirname, '../public/index.html'),
  outputDir: path.join(process.cwd(), 'build'),
  entry: path.join(__dirname, '../public/index.jsx'),
  publicPath: '',
  app: '',
  devServer: {
    port: 3000,
    host: 'localhost',
  },
  webpack: {},
  babel: {},
  postcss: {}
}
module.exports = {
  baseConfig: config,
  configFile: 'miot.config.js'
}