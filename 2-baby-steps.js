const [ , , ...values ] = process.argv

console.log(values.reduce((a, b) => (+a) + (+b)))
