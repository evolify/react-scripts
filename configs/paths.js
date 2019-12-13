const path = require('path')
const fs = require('fs-extra')

const cwd = process.cwd()
let app = parseEntry()

function parseEntry(c) {
  if (c) {
    return path.join(cwd, c)
  }
  const e = [
    'index.js', 'index.jsx', 'index.ts', 'index.tsx',
    'App.js', 'App.jsx', 'App.ts', 'App.tsx',
    'src/index.js', 'src/index.jsx', 'src/index.ts', 'src/index.tsx',
    'src/App.js', 'src/App.jsx', 'src/App.ts', 'src/App.tsx'
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
