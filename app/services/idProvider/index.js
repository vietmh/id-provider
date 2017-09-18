const initProvideId = require('provideId');

module.exports = function init(dbServices) {
  return {
    provideId: initProvideId(dbServices),
  };
};