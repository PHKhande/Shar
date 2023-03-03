const http = require('http');

const server = http.createServer( (req, res) => {
    console.log('Prathviraj Khande')
});

server.listen(4000, (res) => console.log(res))
