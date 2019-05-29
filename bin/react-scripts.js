#!/usr/bin/env node
const program = require('commander')
const pkg = require('../package.json')
const dev = require('../scripts/dev')
const build = require('../scripts/build')
const eject = require('../scripts/eject')

program.command('dev [comp]')
  .description('Run an single component without any config. Now for react only.')
  .action((comp) => {
    dev(comp)
  })

program.command('build [comp]')
  .description('Run an single component without any config. Now for react only.')
  .action((comp) => {
    build(comp)
  })

program.command('eject')
  .description('Eject configurations.')
  .action(() => {
    eject()
  })
program.version(pkg.version)
  .action(() => {
    console.log('hello')
  })
  .parse(process.argv)