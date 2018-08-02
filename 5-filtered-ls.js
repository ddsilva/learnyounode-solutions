const fs = require('fs')
const path = require('path')

const [, , dir, ext] = process.argv

const printNamesFiltered = (error, files) => {
  if (error) return console.error(error)

  const filtered = files.filter(name => path.extname(name) === `.${ext}`)

  console.log(filtered.join('\n'))
}

fs.readdir(dir, printNamesFiltered)
