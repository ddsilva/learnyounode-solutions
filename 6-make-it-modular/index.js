const filterByExt = require('./filter-by-ext')

const [, , dir, ext] = process.argv

filterByExt(dir, ext, (error, names) => {
  if(error) return console.log(error)

  console.log(names.join('\n'))
})
