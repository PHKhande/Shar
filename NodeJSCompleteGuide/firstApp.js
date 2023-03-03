const http = require('http');

const server = http.createServer( (req, res) => {
    if (req.url == '/home'){
        res.write('<html><body><h2>Welcome home</h2></body></html>')
        res.end()
    }
    else if (req.url == '/about'){
        res.write('<html><body><h2>Welcome to About Us page</h2></body></html>')
        res.end()
    }
    else if (req.url == '/node'){
        res.write('<html><body><h2>Welcome to my Node Js project</h2></body></html>')
        res.end()
    }
});

server.listen(4000)
