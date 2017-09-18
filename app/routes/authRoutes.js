const router = require('express').Router();
const definitions = require('./definitions');

module.exports = function init(middlewares, controllers) {
  // Middleware that is specific to this router
  const auth = middlewares.useless;
  router.use(auth);

  // Search APIs
  const search = controllers.idProvider;
  router.get(definitions.idProvider.provideId, idProvider.provideId);

  return router;
};