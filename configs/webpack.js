const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const vConsolePlugin = require('vconsole-webpack-plugin')
const merge = require('webpack-merge')
const ip = require('ip').address()

module.exports = (prod, config) => {
  process.env.NODE_ENV = process.env.NODE_ENV || (prod ? 'production' : 'development')
  const styleLoader = loaders => [
    prod ? MiniCssExtractPlugin.loader : 'style-loader',
    ...loaders,
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: path.resolve(__dirname),
          ctx: config.postcss || {}
        }
      }
    }
  ]

  return merge({
    mode: prod ? 'production' : 'development',
    devtool: prod ? 'source-map' : 'cheap-module-eval-source-map',
    entry: [
      !prod && require.resolve('webpack-dev-server/client') + '?/',
      !prod && require.resolve('webpack/hot/dev-server'),
      config.entry,
    ].filter(Boolean),
    output: {
      path: config.outputDir,
      filename: prod ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      publicPath: prod && config.publicPath || '',
    },
    module: {
      rules: [{
        test: config.typescript ? /\.(js|ts)x?$/ : /\.jsx?$/,
        exclude: {
          test: /node_modules/,
          exclude: path.resolve(__dirname, '../public/index.jsx')
        },
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, './babel.config.js'),
            overrides: [
              {
                presets: [
                  config.typescript && "@babel/typescript"
                ].filter(Boolean)
              },
              config.babel || {}
            ]
          }
        }
      }, {
        test: /\.css$/,
        use: styleLoader(['css-loader'])
      }, {
        test: /\.scss$/,
        use: styleLoader(['css-loader', {
          loader: "sass-loader",
          options: {
              implementation: require("sass")
          }
        }])
      }, {
        test: /\.(jpe?g|png|gif|bmp|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8 * 1024,
            name: prod ? 'img/[name].[contenthash:8].[ext]' : '[name].[ext]',
          },
        }
      }, {
        test: /\.(svg|eot|woff|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: prod ? 'font/[name].[contenthash:8].[ext]' : '[name].[ext]',
          }
        }
      }]
    },
    resolve: {
      modules: [path.resolve(process.cwd(), 'node_modules'), path.join(__dirname, '../node_modules')],
      extensions: ['.js', '.jsx']
    },
    resolveLoader: {
      modules: [path.join(__dirname, '../node_modules'), path.resolve(process.cwd(), 'node_modules')],
    },
    devServer: {
      contentBase: config.outputDir,
      disableHostCheck: true,
      useLocalIp: true,
      open: 'Google Chrome',
      hot: true,
      publicPath: ''
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: config.template
      }),
      new webpack.EnvironmentPlugin({
        ...process.env,
        APP_ROOT: config.app
      }),
      prod && new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css'
      }),
      !prod && new webpack.HotModuleReplacementPlugin(),
      new vConsolePlugin({
        enable: !prod
      })
    ].filter(Boolean)
  }, config.webpack)
}
