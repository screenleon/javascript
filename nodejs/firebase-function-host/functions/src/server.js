const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const controller = require('./lib/languages/controller');
const app        = express();

app.use(cors({origin: true}))
   .use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: false}))
   .get('/all', (req, res) => controller.getAllLanguages(req, res))
   .get('/:language', (req, res) => controller.getLanguage(req, res))
   .get('*', (_, res) => res.status(404)
                            .json({success: false, data: "Endpoint not found"}));


 module.exports = app;
//app.listen(3000);

// const controller = require('./controller');