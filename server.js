import express from 'express';
import compression from 'compression';
import path from 'path';
import logger from './lib/logger';

const configWebpack = require('./webpack.config.js');
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Config Express
const app = express();
app.use(compression());
app.use('/dist', express.static('dist'));

// Config Webpack
const compiler = webpack(configWebpack);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: configWebpack.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

// send all requests to index.html so browserHistory in React Router works
app.get('*', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

// Start Server
app.listen(3000, (err) => {
  if (err) {
    logger.info('Error Starting Server');
  } else {
    logger.info('App Running at http://locahost:3000');
  }
});
