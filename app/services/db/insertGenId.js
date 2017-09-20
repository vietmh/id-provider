const debug = require('debug')('nomadary:app:service:db:insertGenId');

module.exports = function initInsertGenId(db) {
  /**
   * Find record in collection by id
   * @async
   * @param {!string} dbCollection - Collection name
   * @param {!(string|ObjectID)} id - Id of record, can be hex string or ObjectID
   * @param {Object} [fields=null] - The fields to return in the query. Object of fields to include or exclude (not both), {'a':1}
   *
   * @return {Promise.<Object>} - Promise resolve found record object
   */
  return async (dbCollection, id) => {
    debug(`running with dbCollection: ${dbCollection}, id: ${id}`);
    return db.collection(dbCollection).insert({ genId: id });
  };
};
