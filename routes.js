const routes = require('next-routes')();

routes
    .add('./', '/home')
    .add('/token/view/:tokenAddress', '/token/view')

module.exports = routes;