const fs = require('fs');

function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        fs.readFile('message.txt', 'utf8', (err, data) => {
                res.write(`<html><head><title>Enter User Details</title></head><body><header><div><h2>${data}<h2></div></header><form action="/message" method="POST"><input type="text" name="valueMessage"></input><button type="submit">Submit</button></form></body></html>`);
                res.end();
        });
    }
    
    if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            //Above line will return valueMessage=whole message we write, therefore we split it
            const message = parsedBody.split('=')[1]
            fs.writeFile("message.txt", message, err => {
                //If any error occurs, then it will return an error(err)
                res.statusCode = 302
                res.setHeader("Location" , '/')
                res.end()
            }); 
        });
    }

}

// module.exports = requestHandler

// module.exports = {
//     handler : requestHandler,
//     someText : "Hard Coded Text"
// };

// module.exports.handler = requestHandler
// module.exports.someText = "Hard Coded Text"

exports.handler = requestHandler
exports.someText = "Hard Coded Text"