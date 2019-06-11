module.exports = {
  presets: [
    '@babel/env',
    '@babel/react'
  ],
  plugins: [
    ['@babel/proposal-decorators', { legacy: true }],
    ['@babel/proposal-class-properties', { loose: true }],
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel'
  ]
}
