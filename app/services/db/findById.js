const debug = require('debug')('nomadary:app:service:db:findById');
const { ObjectID } = require('mongodb');

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
  return async (dbCollection, id) => {
    debug(`running with dbCollection: ${dbCollection}, id: ${id}`);

    if (!ObjectID.isValid(id)) {
      return null;
    }

    return db.collection(dbCollection).findOne({ _id: ObjectID(id) });
  };
};