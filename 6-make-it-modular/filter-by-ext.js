const fs = require('fs')
const path = require('path')

module.exports = (dir, ext, cb) => {
  fs.readdir(dir, (error, files) => {
    if (error) return cb(error)

    const filtered = files.filter(name => (
      path.extname(name) === `.${ext}`
    ))

    return cb(null, filtered)
  })
}
