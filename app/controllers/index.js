const initIdProviderController = require('./idProviderController');

module.exports = function init(services) {
  const idProvider = initIdProviderController(services);

  // eslint-disable-next-line no-console
  console.log('Initialized controllers.');

  return {
    idProvider
  };
};
