const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 8000;
const user = 'admin';
const pwd = 'admin@123';

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/" , (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/login', (req, res) => {
    // check if username and password are valid
    const { username, password } = req.body;
    if (username === user && password === pwd) {
      res.send({ success: true });
    } else {
      res.status(401).send({ success: false, message: 'Invalid username or password' });
    }
  });

app.get("/success", (req, res) => {
    res.send("successfully Logged in");
})

app.get("/failure", (req, res) => {
    res.send("username or password incorrect");
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`)
);