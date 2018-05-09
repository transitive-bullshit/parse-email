'use strict'

const { test } = require('ava')
const fs = require('fs')
const path = require('path')

const parse = require('.')

const fixturesPath = path.join(__dirname, `fixtures`)

fs.readdirSync(fixturesPath)
  .forEach((filename) => {
    const file = path.join(fixturesPath, filename)

    test(`${filename}`, async (t) => {
      const input = fs.readFileSync(file, 'utf8')
      const email = await parse(input)
      console.log(JSON.stringify(email, null, 2))
      t.snapshot(email)
    })
  })
