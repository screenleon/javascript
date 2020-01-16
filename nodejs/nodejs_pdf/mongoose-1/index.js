var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
var Schema = mongoose.Schema;

var app = express();

var schemaName = new Schema({
    request: String,
    time: Number
}, {
    collection: 'collectionName'
});
schemaName.index({ request: 'text' });

var Model = mongoose.model('Model', schemaName);
mongoose.connect('mongodb://localhost:27017/dbName');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('We\'re connected');
})

var port = process.env.PORT || 8080;

app.get('/find/:query', cors(), function(req, res) {
    var query = req.params.query;
    Model.find({
        $text: {
            $search: query
        }
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            res.json(result);
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }));
        };
    });
})

app.get('/save/:query', cors(), function(req, res) {
    var query = req.params.query;
    
    var savedata = new Model({
        'request': query,
        'time': Math.floor(Date.now() / 1000)
    }).save(function(err, result) {
        if(err) throw err;

        if(result) {
            res.json(result);
        }
    });
});

app.listen(port, function() {
    console.log('Node.js is listening on port ' + port );
});

