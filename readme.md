# parse-email

> Parses mime-encoded email messages.

[![NPM](https://img.shields.io/npm/v/parse-email.svg)](https://www.npmjs.com/package/parse-email) [![Build Status](https://travis-ci.com/transitive-bullshit/parse-email.svg?branch=master)](https://travis-ci.com/transitive-bullshit/parse-email) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


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

Example parsed output:

```json
{
  "attachments": [ ... ],
  "headers": { ... },
  "html": "<!DOCTYPE html>\n<html>...</html>",
  "text": "...",
  "textAsHtml": "<p>...</p>",
  "subject": "Example email subject",
  "date": "2018-05-09T14:17:02.000Z",
  "to": {
    "value": [
      {
        "address": "fischxxxx@gmail.com",
        "name": "Travis Fischer"
      }
    ],
    "html": "<span class=\"mp_address_name\">Travis Fischer</span> &lt;<a href=\"mailto:fischxxxx@gmail.com\" class=\"mp_address_email\">fischxxxx@gmail.com</a>&gt;",
    "text": "Travis Fischer <fischxxxx@gmail.com>"
  },
  "from": {
    "value": [
      {
        "address": "courses-xxxxxx@theblockchainacademy.com",
        "name": "Bryant Nielson"
      }
    ],
    "html": "<span class=\"mp_address_name\">Bryant Nielson</span> &lt;<a href=\"mailto:courses-xxxxxx@theblockchainacademy.com\" class=\"mp_address_email\">courses-xxxxxx@theblockchainacademy.com</a>&gt;",
    "text": "Bryant Nielson <courses-xxxxxx@theblockchainacademy.com>"
  },
  "messageId": "<01.B3.11399.xxxxxxxx@momentum1-mta1>"
}
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

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
