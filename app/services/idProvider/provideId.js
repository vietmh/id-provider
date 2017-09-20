// const Promise = require('bluebird');
// const { ID } = require('../../constants/schema');

module.exports = function initFindId(dbServices) {
  return async (id) => {
    // return dbServices.findById(id);
    console.log(id, dbServices);
  };
};
