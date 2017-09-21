const debug = require('debug')('nomadary:app:service:db:findById');
const { ID } = require('../../constants/schema');

module.exports = function initFindById(db) {
  /**
   * Find record in collection by id
   * @async
   * @param {!string} dbCollection - Collection name
   * @param {!(string|ObjectID)} id - Id of record, can be hex string or ObjectID
   * @param {Object} [fields=null] - The fields to return in the query. Object of fields to include or exclude (not both), {'a':1}
   *
   * @return {Promise.<Object>} - Promise resolve found record object
   */
  return async (id) => {
    debug(`running with dbCollection: ${ID.dbCollection}, id: ${id}`);
    return db.collection(ID.dbCollection).findOne({ genId: id });
  };
};
