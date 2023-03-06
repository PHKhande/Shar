const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));


app.get('/login', (req, res) => {
    res.send('<html><head><title>Login Page</title></head><body><form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/message"><input type="text" id= "username" name="username"></input><br><br><button type="submit">Enter ChatApp</button></form></body></html>');

});


app.get('/message', (req, res) => {
    fs.readFile('message.txt','utf8', (err, data) => {
        let post = ''
        if(data == ''){
            post = 'undefined'
        }else{
            post = data 
        }
        res.write(
        `<html><body><header><div><h2>${post}<h2></div></header><form onsubmit="document.getElementById('username').value = localStorage.getItem('username')" action="/message", method="POST"><input type="text" id= "message" name="message"></input><input type="hidden" id= "username" name="username"></input><br><br><button type="submit">Send</button></form></body></html>`); 
        res.end();
    })
});

app.use('/message', (req, res) => {
    const data = `${req.body.username}: ${req.body.message} `;
    if(req.body.username && req.body.message){
        fs.appendFile('message.txt', data, (err) => {
            if (err) {
              console.log(err);
            }
        });
        res.redirect('/message');
    }
    
  });

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use(loginRoutes);

app.use( (req, res, next) => {
    res.status(404).send('<h1> Page Not Found </h1>')
})

app.listen(4000);