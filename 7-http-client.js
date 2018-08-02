const http = require('http');

const [, , url] = process.argv;

const responseHandler = response => {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}

http
  .get(url, responseHandler)
  .on('error', console.error)
