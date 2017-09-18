// Common
const initFindById = require('./findById');

module.exports = function init(db) {
  return {
    findById: initFindById(db),
  };
};