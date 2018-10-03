
const functions = require('firebase-functions')
const express = require('express');
const session = require('express-session');
const next = require('next');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const FileStore = require('session-file-store')(session);

const serviceAccount = require('./credentials/server.json');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, conf: { distDir: 'next' } })
const handle = routes.getRequestHandler(nextApp)

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://diary-e8b5f.firebaseio.com' // TODO database URL goes here
}, 'server')

const server = express();
server.disable('x-powered-by');
server.use(bodyParser.json());

server.use(session({
  secret: 'anat_omy',
  saveUninitialized: true,
  store: new FileStore({path: '/tmp/sessions', secret: 'anat_omy'}),
  resave: false,
  rolling: true,
  httpOnly: true,
  cookie: { maxAge: 604800000 } // week
}))

server.use((req, res, next) => {
  req.firebaseServer = firebase
  next()
})

server.get('*', (req, res) => handle(req, res));

exports.next = functions.https.onRequest(async (req, res) => {
  await nextApp.prepare();
  return server(req, res);
});

