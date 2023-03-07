const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
    res.send(
    `<html>
        <head>
        <title>Login Page</title>
        </head>
        <body>
            <form 
                onsubmit="localStorage.setItem('username', document.getElementById('username').value)" 
                action="/message">
                <input type="text" id= "username" name="username"></input>
                <br><br>
                <button type="submit">Enter ChatApp</button>
            </form>
        </body>
    </html>`);
});

module.exports = router