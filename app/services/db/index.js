// Common
const initFindById = require('./findById');
const initInsertGenId = require('./insertGenId');

module.exports = function init(db) {
  return {
    findById: initFindById(db),
    insertGenId: initInsertGenId(db),
  };
};
