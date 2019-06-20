import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'

import(process.env.APP_ROOT)
  .then(App => hot(module)(App.default))
  .then(App => render(<App />, document.querySelector('#app')))
