const fs = require('fs')

const printLineCount = (error, content) => {
  if (error) return console.error(error)

  const lines = content.toString().match(/\n/g).length
  console.log(lines)
}

fs.readFile(process.argv[2], 'utf8', printLineCount)


