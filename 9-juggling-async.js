const http = require('http')
const concat = require('concat-stream')
const partialRight = require('./utils/partial-right')

const [,, first, ...endpoints] = process.argv;

const handleResponse = (response, next, ...rest) => {
  response.setEncoding('utf8');
  response.pipe(concat(console.log));

  if (!next) return;

  response.on('end', () => {
    http.get(next, partialRight(handleResponse, ...rest))
  });
}

http.get(first, partialRight(handleResponse, ...endpoints));
