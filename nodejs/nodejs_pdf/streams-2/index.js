var fs = require('fs');
var zlib = require('zlib');

// var readable = fs.createReadStream('./test/data.txt');
// readable.pipe(zlib.createGzip()).pipe(fs.createWriteStream('./test/output.txt.gz'));
// readable.pipe(fs.createWriteStream('./test/output.txt'));

var readable = fs.createReadStream('../streams-1/data.txt');
var writable = fs.createWriteStream('./file2.txt');
readable.pipe(writable);
readable.on('error', console.error);
writable.on('error', console.error);

// fs.createReadStream('./file2.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('./data.txt.gz'));