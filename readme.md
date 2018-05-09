# parse-email

> Parses mime-encoded email messages.

[![NPM](https://img.shields.io/npm/v/parse-email.svg)](https://www.npmjs.com/package/parse-email) [![Build Status](https://travis-ci.org/transitive-bullshit/parse-email.svg?branch=master)](https://travis-ci.org/transitive-bullshit/parse-email) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```bash
npm install --save parse-email
```


## Usage

```js
const parse = require('parse-email')
const fs = require('fs')
const input = fs.readFileSync('./fixtures/0.txt', 'utf8')

parse(input)
  .then((email) => {
    console.log(email)
  })
```


## API

### parse(input)

Returns: `Promise<Object>`

Parses the given input string as a mime-encoded email.

#### input

Type: `String`
**Required**

Mime-encoded email string to parse.


## Related

- [@nodemailer/mailparser2](https://yarnpkg.com/en/package/@nodemailer/mailparser2) - Mail parser used under the hood.
- [@nodemailer/mailparser](https://github.com/nodemailer/mailparser) - Deprecated mail parser.
- [emailjs-mime-parser](https://github.com/emailjs/emailjs-mime-parser) - Parse a mime tree, no magic included.
- [nylas-mail](https://github.com/nylas/nylas-mail) - An extensible desktop mail app built on the modern web.


## License

Note: this module relies on [@nodemailer/mailparser2](https://yarnpkg.com/en/package/@nodemailer/mailparser2) which has a more restrictive license.

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
