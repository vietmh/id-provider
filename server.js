const http = require('http');

const initApp = require('./app').init;

const port = process.env.PORT || '18080';
const host = process.env.HOST || '127.0.0.1';

const startServer = async function startServer() {
  try {
    const app = await initApp();
    const httpServer = http.createServer(app);

    httpServer.listen(port, host);
    httpServer.on('listening', () => console.log(`Listening on ${host}:${port}`)); // eslint-disable-line no-console
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
};

startServer();
