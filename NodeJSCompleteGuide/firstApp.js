const http = require('http');

const routesPage = require('./routes');

console.log(routesPage.someText)
const server = http.createServer(routesPage.handler);

server.listen(4000)