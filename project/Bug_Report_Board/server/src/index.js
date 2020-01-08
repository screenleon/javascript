const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const users = require('./db/users')

const app = express();

var accessLogStream = fs.createWriteStream(path.join(__dirname, '../log/access.log'), { flags: 'a' });

app.use(morgan('combined', {stream: accessLogStream}));
app.use(cors());
app.use(body_parser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'full stack message board! '
    });
});

app.get('/users', (req, res) => {
    users.getAll().then((users) => {
        res.json(users);
    });
    res.setHeader("Access-Control-Allow-Origin", "*");
});

app.post('/signup', (req, res) => {
    console.log(req.body);
    users.create(req.body).then((user) => {
        res.json(user);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

const port = process.env.Port || 4300;
app.listen(port, () => {
    console.log(`listening on ${port}`);
})