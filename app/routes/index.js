const router = require('express').Router();
const initAuthRoutes = require('./authRoutes');

const init = async function init(middlewares, controllers) {
  router.use(initAuthRoutes(middlewares, controllers));

  return router;
};

module.exports.init = init;