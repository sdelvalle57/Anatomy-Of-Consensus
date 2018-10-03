const express = require('express');
const session = require('express-session');
const next = require('next');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const FileStore = require('session-file-store')(session);

const serviceAccount = require('./credentials/server.json');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dir: './src/app', dev });
const handle = routes.getRequestHandler(nextApp);
const port = parseInt(process.env.PORT, 10) || 3000;

const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://diary-e8b5f.firebaseio.com' 
  }, 'server');

nextApp.prepare().then(() => {
    const server = express();

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
        req.firebaseServer = firebase;
        next();
    });

    server.post('/api/login', (req, res) => {
        const token = req.body.userToken;

        firebase.auth().verifyIdToken(token)
        .then((decodedToken) => {
          req.session.decodedToken = decodedToken
          return decodedToken
        })
        .then((decodedToken) =>{
            res.json({ status: true, decodedToken })
        })
        .catch((error) =>{
            res.redirect('/')
        })
    })

    server.post('/api/logout', (req, res) => {
        console.log("logout");
        req.session.decodedToken = null
        res.redirect('/')
      })

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`>Server is Ready on http://localhost:${port}`);
    })
})
      