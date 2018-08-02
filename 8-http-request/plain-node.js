const http = require('http')

let result = ''

const logResult = () => {
  console.dir(result.length, result)
  console.log(result)
}

const concat = data => result = result.concat(data)

const handleResponse = response => {
  response.setEncoding('utf8')

  response.on('data', concat)
  response.on('end', logResult)
}

http.get(process.argv[2], handleResponse)
