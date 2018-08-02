const http = require('http')
const concat = require('concat-stream')

const logResult = result => {
  console.log(result.length)
  console.log(result)
}

const handleResponse = response => {
  response.setEncoding('utf8')
  response.pipe(concat(logResult))
}

http.get(process.argv[2], handleResponse)
