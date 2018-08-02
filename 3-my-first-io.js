const fs = require('fs')

const content = fs.readFileSync(process.argv[2])
const lines = content.toString().match(/\n/g).length

console.log(lines)
