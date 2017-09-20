const Promise = require('bluebird');
const { MongoClient } = require('mongodb');

let nomadaryDb = null;

const onConnectionClosed = function onConnectionClosed() {
  console.log('DB connection closed.'); // eslint-disable-line no-console
};

const onDbError = function onDbError() {
  console.log('Error occurs on DB.'); // eslint-disable-line no-console
};

const onConnectSuccess = async function onConnectSuccess(db) {
  console.log('Connecting to MongoDB: Success!'); // eslint-disable-line no-console

  // Bind event handlers
  db.on('close', onConnectionClosed);
  db.on('error', onDbError);

  nomadaryDb = db;
  return nomadaryDb;
};

const onConnectFail = async function onConnectFail(err) {
  console.log('Connecting to MongoDB: Failed!'); // eslint-disable-line no-console
  throw err;
};

module.exports.connect = async function connect(dbConfig) {
  try {
    const options = {
      poolSize: dbConfig.poolSize,
      connectTimeoutMS: dbConfig.connectTimeoutMS,
      socketTimeoutMS: dbConfig.socketTimeoutMS,
      promiseLibrary: Promise,
    };

    const db = await MongoClient.connect(dbConfig.uri, options);
    return onConnectSuccess(db);
  } catch (error) {
    return onConnectFail(error);
  }
};

const closeDbOnAppTerminated = async function closeDbOnAppTerminated() {
  await nomadaryDb.close();

  // eslint-disable-next-line no-console
  console.log('DB connection closed on app termination');
  process.exit();
};

// If the Node process ends, close the MongoDB connection
process.on('SIGINT', closeDbOnAppTerminated)
  .on('SIGTERM', closeDbOnAppTerminated)
  .on('exit', closeDbOnAppTerminated);

module.exports.getDbInstance = () => nomadaryDb;
