const useless = require('./useless');

module.exports = function init() {
  // eslint-disable-next-line no-console
  console.log('Initialized middlewares.');

  return {
    useless,
  };
};