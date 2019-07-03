interface Configuration {
  /** Html template path */ 
  template?: string

  /** Page title */
  title?: string

  /**
   * Build output dir path.
   * 
   * Defaults to `build`
   */
  outputDir?: string

  /** Entry for webpack. */
  entry?: string

  /**
   * The prefix to you static resource, the same to webpack.output.publicPath.
   * 
   * Defaults to `/`
   */
  publicPath?: string

  /**
   * The root component of you project.
   * 
   * Defaults to one of `['index.(j|t)sx?', 'App.(j|t)sx?', 'src/index.(j|t)sx?', 'src/App.(j|t)sx?']`
   */
  app?: string

  /**
   * The root dir of source code.
   * 
   * Defaults to `src`
   */
  src?: string

  /**
   * To use typescript.
   * 
   * Defaults to `false`
   */
  typescript?: boolean

  /**
   * Mobile project.
   * 
   * Defaults to `true`
   */
  mobile?: boolean

  /**
   * Webpack configuration.
   * 
   * https://webpack.js.org/configuration/
   */
  webpack: import('webpack').Configuration

  /**
   * Babel configuration.
   * 
   * https://babeljs.io/docs/en/options
   */
  babel?: Object

  /**
   * PostCss configuration.
   * 
   * https://github.com/postcss/postcss
   */
  postcss?: Object
}

export = Configuration
