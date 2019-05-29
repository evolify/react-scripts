module.exports = ctx => {
  const { env, options } = ctx
  return {
    map: env === 'production' ? false : 'inline',
    parser: 'postcss-scss',
    ...options
  }
}
