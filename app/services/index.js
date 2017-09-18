const initDbServices = require('./db');
const initCommonServices = require('./common');
const initIdProviderServices = require('./idProvider');

module.exports = function init(dbInstance) {
  const dbServices = initDbServices(dbInstance);
  const commonServices = initCommonServices(dbServices);
  const idProviderServices = initIdProviderServices(dbServices);

  // eslint-disable-next-line no-console
  console.log('Initialized services.');

  return {
    idProvider: idProviderServices,
  };
};