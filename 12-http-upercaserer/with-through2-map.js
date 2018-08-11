const http = require('http');
const through2Map = require('through2-map')

const [,, port] = process.argv;

const upper = data => data.toString().toUpperCase();

const serverHandler = (req, res) => {
  if (req.method !== 'POST') return res.writeHead(500);
  req.pipe(through2Map(upper)).pipe(res);
};

http.createServer(serverHandler).listen(port);
