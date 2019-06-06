const fs = require('fs-extra')
const path = require('path')
const { configFile, baseConfig } = require('../configs/config')

const mergeConfig = (options) => {
  let config = {}
  if (fs.existsSync(path.join(process.cwd(), configFile))){
    config = require(path.join(process.cwd(), configFile))
  }
  return{
    ...baseConfig,
    ...options,
    ...config,
    webpack: {
      ...baseConfig.webpack,
      ...(config.webpack || {}),
      devServer: {
        ...baseConfig.webpack.devServer,
        ...(config && config.webpack && config.webpack.devServer || {})
      }
    }
  }
}

module.exports = {
  mergeConfig
}
