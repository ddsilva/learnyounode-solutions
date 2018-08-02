const http = require('http')
const bl = require('bl')

const logResult = (error, result) => {
  if (error) return console.log(error)

  const str = result.toString();

  console.log(str.length)
  console.log(str)
}

const handleResponse = response => {
  response.setEncoding('utf8')
  response.pipe(bl(logResult))
}

http.get(process.argv[2], handleResponse)
