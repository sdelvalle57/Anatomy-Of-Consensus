const functions = require('firebase-functions')
const next = require('next')
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir: 'next' } })
const handle = routes.getRequestHandler(app)

const server =  functions.https.onRequest(async (req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  await app.prepare();
  return handle(req, res);
})

exports.next = server;