const uuid = require('uuid/v5');

const combineSeed = function combineSeed(requester) {
  const now = new Date();
  const combinedSeed = requester + now.toISOString();
  return combinedSeed;
};

module.exports = function initFindId(dbServices) {
  return async (requester) => {
    const id = uuid(combineSeed(requester), uuid.DNS);
    dbServices.insertGenId(requester, id);
    return id;
  };
};
