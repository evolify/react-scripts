const path = require('path')

/**
 * @type {import('../config')}
 */
let config = {
  template: path.join(__dirname, '../public/index.html'),
  title: '',
  outputDir: path.join(process.cwd(), 'build'),
  entry: path.join(__dirname, '../public/index.jsx'),
  publicPath: '',
  app: '',
  src: path.resolve(process.cwd(), 'src'),
  typescript: false,
  mobile: false,
  webpack: {
    devServer: {
      port: 3000,
      host: '',
    }
  },
  babel: {},
  postcss: {}
}
module.exports = {
  baseConfig: config,
  configFile: 'react-scripts.config.js'
}