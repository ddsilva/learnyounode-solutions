const http = require('http')
const concat = require('concat-stream')

const [,, first, second, third ] = process.argv

const handleResponse = response => {
  response.setEncoding('utf8')
  response.pipe(concat(console.log))
}

const handleFirst = response => {
  handleResponse(response)
  http.get(second, handleSecond)
}

const handleSecond = response => {
  handleResponse(response)
  http.get(third, handleResponse)
}

http.get(first, handleFirst)
