const http = require('http');
const concat = require('concat-stream')

const [,, port] = process.argv;

const serverHandler = (req, res) => {
  if (req.method !== 'POST') return res.writeHead(500);

  const writableStream = concat(
    { encoding: 'string' },
    data => res.end(data.toUpperCase())
  );

  req.pipe(writableStream);
};

http.createServer(serverHandler).listen(port);
