const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');
const db = require('./db');
const initServices = require('./services');
const initControllers = require('./controllers');
const initMiddlewares = require('./middlewares');
const routes = require('./routes');

const app = express();

const init = async function init() {
  console.log('Initializing app...'); // eslint-disable-line no-console

  await db.connect(config.get('database'));

  app.use(bodyParser.json());
  app.use(morgan('dev'));

  app.get('/favicon.ico', (req, res) => res.sendStatus(204)); // 204 No Content - Prevent browser request icon

  const middlewares = initMiddlewares();
  const controllers = initControllers(initServices(db.getDbInstance()));
  const router = await routes.init(middlewares, controllers);

  app.use(router);
  console.log('Initialized app.'); // eslint-disable-line no-console

  // TODO: Proper error handling
  process.on('unhandledRejection', (reason, promise) => {
    console.log(reason);
    console.log(promise);
  });

  return app;
};

module.exports.init = init;
