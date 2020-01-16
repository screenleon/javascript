var fs = require('fs');
var stream = require('stream').Writable;

stream.prototype._write = function(chunk, data) {
    console.log(data);
};

var customStream = new stream();

fs.createReadStream('../http-1/server.js').pipe(customStream);

const Writable = require('stream').Writable;

class MyWritable extends Writable {
    constructor(options) {
        super(options);
    }

    _write(chunk, encoding, callback) {
        console.log(chunk);
    }
}