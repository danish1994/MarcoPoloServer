const cluster = require('cluster');
const {server} = require('./server');

if (cluster.isMaster) {
    const cpuCount = require('os').cpus().length;
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }
} else {
    server();
}

cluster.on('fork', function (worker) {
    console.log(`Worker Added - ${worker.id}`);
});