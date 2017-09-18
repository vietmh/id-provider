const Route = require('route-parser');

const buildUrl = function buildUrl(template, params) {
  const url = new Route(template).reverse(params);
  return url;
};

const idProvider = {
  provideId: '/:userId/provideId',
};

module.exports = {
  buildUrl,
  idProvider
};