const http = require('http');
const fs = require('fs');

const [,, port, path] = process.argv;

const serverHandler = (req, res) => {
  res.writeHead(200, {'content-type': 'text/plain'});
  fs.createReadStream(path).pipe(res);
};

http.createServer(serverHandler).listen(port);
