const routes = require('next-routes')();

routes
    .add('vision_page', '/vision_page/:uid')

module.exports = routes;