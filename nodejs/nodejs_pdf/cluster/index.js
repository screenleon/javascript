var cluster = require('cluster');

var numCPUS = require('os').cpus().length;

if(cluster.isMaster) {
    console.log('your server is working on ' + numCPUS + ' cores');

    for (var i = 0; i < numCPUS; i++) {
        cluster.fork();
    }

    cluster.on('disconnect', function(worker) {
        console.error('disconnect!');

        cluster.fork();
    });
}else {
    require('./app.js');
}