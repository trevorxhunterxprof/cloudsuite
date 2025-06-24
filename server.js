const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Hello from your Windows EC2 Node.js server!',
    timestamp: new Date().toISOString()
  }));
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
