const path = require('path')
let config = {
  template: path.join(__dirname, '../public/index.html'),
  outputDir: path.join(process.cwd(), 'build'),
  entry: path.join(__dirname, '../public/index.jsx'),
  publicPath: '',
  app: '',
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