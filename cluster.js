import cluster from 'cluster';
import logger from './lib/logger';
let numCPUs = require('os').cpus().length;

// Get args
const args = process.argv.slice(2);

// Set numCPUs from args
if (args && args > 0 && args <= numCPUs) {
  numCPUs = args;
}

if (cluster.isMaster) {
  // Fork workers.
  let i = 0;
  for (i = 0; i < numCPUs; i++) {
    cluster.fork();
  //  appLogger.info(`worker ${i} started`);
  }
  Object.keys(cluster.workers).forEach((id) => {
    logger.info(`creating process with id = ${cluster.workers[id].process.pid}`);
  });
  cluster.on('exit', (worker) => {
    logger.info(`worker ${worker.process.pid} / died`);
  });
} else {
  require('./server');
}
