const crypto = require('crypto');

const combineSeed = function combineSeed(requester) {
  const now = new Date();
  const combinedSeed = requester + now.toISOString();
  return combinedSeed;
};

const hash = function hash(requester) {
  const seed = combineSeed(requester);
  const hashString = crypto.createHash('md5').update(seed).digest('hex');
  return hashString;
};

module.exports = function initFindId(dbServices) {
  return async (requester) => {
    let id = hash(requester);
    let isExisted = dbServices.findById('ids', id);
    while (!isExisted) {
      id = hash(requester);
      isExisted = dbServices.findById('ids', id);
    }
    return id;
  };
};
