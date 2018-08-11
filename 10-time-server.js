const net = require('net');

const [,, port] = process.argv;

const pad = n => (n + '').padStart(2, '0');

const dateStr = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const date = pad(now.getDate());
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());

  return `${year}-${month}-${date} ${hours}:${minutes}\n`;
}

net
  .createServer(socket => socket.end(dateStr()))
  .listen(port);
