const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname + '/public')); // Serve public folder

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
