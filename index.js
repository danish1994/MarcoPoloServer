const cluster = require('cluster');
const os = require('os');
const {server} = require('./server');

if (cluster.isMaster) {
    const cpuCount = os.cpus().length;
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }
} else {
    server();
}

cluster.on('fork', function (worker) {
    console.log(`Worker Added - ${worker.id}`);
});