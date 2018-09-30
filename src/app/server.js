const { createServer } = require('http')
const next = require('next')
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: './src/app', dev })
const handle = routes.getRequestHandler(app)
const port = parseInt(process.env.PORT, 10) || 3000

app.prepare().then(() => {
    const server = createServer((req, res) => {
        handle(req, res)
    })

    server.on('request', (request, response) => {
        const { method, url, headers } = request;
        let body = [];
        request.on('error', (err) => {
            console.error(err);
        }).on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
        
            // At this point, we have the headers, method, url and body, and can now
            // do whatever we need to in order to respond to this request.
        });
      });

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
      