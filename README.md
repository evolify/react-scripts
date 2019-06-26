# react-scripts
Scripts to run / build React project with zero or any configuration.

### Install:

Install to your project `npm i -S -D @evolify/react-scripts`  

or install global `npm i -g @evolify/react-scripts`;

### Usage:

All you need just a root  '.jsx' component in your `project root` or `src`;

```jsx
// App.jsx 
import React from 'react'

export default function App(){
  return (
    <div>Powered by @evolify/react-scripts.</div>
  )
}
```

1. Run in development:

   `miot-react-scripts dev [comp-path]`

   if you want to use `src/Demo.jsx` as the root component, just run `miot-react-scripts dev src/Demo.jsx`, if no `comp-path` provided, any one of `index.jsx?`、`src/index.jsx?`、`App.jsx?`、`src/App.jsx?` will be used as the root component.

2. Build in production:

   `miot-react-scripts build [comp-path]`

### Configuration:

By default , `miot-react-scripts` will work well without any configuration. `sass`、`postcss`、`react-hot-loader`、`@babel/proposal-decorators`、`@babel/proposal-class-properties`、`@babel/plugin-syntax-dynamic-import` are built in. 

You can still config what you want in `react-scripts.config.js` file in your project root dir.

```js
// react-scripts.config.js
module.exports = {
  {
    template: path.join(__dirname, 'public/index.html'), // html template, built in miot-react-scripts by default.
    outputDir: path.join(process.cwd(), 'build'),
    entry: path.join(__dirname, '../public/index.jsx'), // the same to webpack.entry, built in.
    publicPath: process.env.NODE_ENV === 'production' ? '//cdn.xxx.com': '', // deafult is ''
    app: '', // root component, can also be set as a param in miot-react-scripts
    typescript: false, // if you want to use ts, set this option to `true`
    mobile: false,
    webpack: {
      devServer: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
          
        }
      },
    },
    babel: {},
    postcss: {}
  }
}
```

webpack 、 babel、postcss, just follow the official doc, now only support `object` type.

### CSS Module
By default you can enable css module just to name you css/scss file to `style.module.css` / `style.module.scss`
