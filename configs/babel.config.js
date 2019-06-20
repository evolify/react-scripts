module.exports = api => {
  api.cache(true)
  return {
    presets: [
      '@babel/env',
      '@babel/react',
      process.env.TYPESCRIPT_ENABLE && '@babel/typescript'
    ].filter(Boolean),
    plugins: [
      ['@babel/proposal-decorators', { legacy: true }],
      ['@babel/proposal-class-properties', { loose: true }],
      '@babel/transform-runtime',
      '@babel/syntax-dynamic-import',
      'react-hot-loader/babel'
    ]
  }
}
