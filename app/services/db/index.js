// Common
const initInsertGenId = require('./insertGenId');

module.exports = function init(db) {
  return {
    insertGenId: initInsertGenId(db),
  };
};
