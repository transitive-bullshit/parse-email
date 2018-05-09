'use strict'

const { SimpleParser } = require('@nodemailer/mailparser2')
const ow = require('ow')

module.exports = async (source) => {
  ow(source, ow.string.nonEmpty)

  // outlook produces slightly invalid content-type lines which need to be
  // fixed before parsing can begin
  const match = source.match(/content-type:\s*multipart\/\w+;\r?\nboundary=.*\r?\n/i)
  if (match) {
    source = source.substr(0, match.index) +
      match[0].replace(/\r?\n/g, '') + '\n' +
      source.substr(match.index + match[0].length)
  }

  const result = await SimpleParser(source)
  return result
}
