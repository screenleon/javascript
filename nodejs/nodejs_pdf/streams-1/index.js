var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    // if file has lots of data, it would use too much memory
    // fs.readFile(__dirname + '/test/data.txt', function( err, data) {
    //     res.end(data);
    // });

    var stream = fs.createReadStream(__dirname + '/test/data.txt');
    stream.pipe(res);
});

server.listen(8000);