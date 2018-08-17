const http = require('http');
const url = require('url');
const API_SUFFIX = '/api';

const [,, port] = process.argv;

const parseTime = date => JSON.stringify({
  hour: date.getHours(),
  minute: date.getMinutes(),
  second: date.getSeconds()
});

const unixTime = date => JSON.stringify({ unixtime: date.getTime() });

const serverHandler = (req, res) => {
  const parsed = url.parse(req.url, true);
  const date = new Date(parsed.query && parsed.query.iso);

  res.writeHead(200, { 'Content-Type': 'application/json' })

  if (parsed.pathname === `${API_SUFFIX}/parsetime`)
    return res.end(parseTime(date));

  if (parsed.pathname === `${API_SUFFIX}/unixtime`)
    return res.end(unixTime(date));

  res.writeHead(404);
  res.end();
};

http.createServer(serverHandler).listen(port);
