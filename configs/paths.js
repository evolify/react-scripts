const path = require('path')
const fs = require('fs-extra')

const cwd = process.cwd()
let app = parseEntry()

function parseEntry(c) {
  if (c) {
    return path.join(cwd, c)
  }
  const e = [
    'index.js', 'index.jsx',
    'App.js', 'App.jsx',
    'src/index.js', 'src/index.jsx',
    'src/App.js', 'src/App.jsx',
  ].find(t => fs.existsSync(path.join(cwd, t)))
  if (e) {
    return path.join(cwd, e)
  }
}

module.exports = paths = {
  cwd,
  app,
  parseEntry,
}
