// https://github.com/indexzero/nconf
const nconf = require('nconf');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

// Overriding order: The upper configs replace the under
nconf.file('envFile', path.join(__dirname, `/config.${env}.json`));
nconf.file('defaults', path.join(__dirname, '/config.defaults.json'));

// Manually set config to overide configs loaded from files
nconf.set('env', env);

// Allow some configs from env var to override loaded configs from files
const dbUriFromEnv = process.env.DB_URI;
if (dbUriFromEnv) {
  nconf.set('database:uri', dbUriFromEnv);
}

module.exports = nconf;