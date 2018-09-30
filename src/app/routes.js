const routes = require('next-routes')();

routes
    .add('/vision_page', '/')
    .add('/vision_page/:uid', 'vision_page')
    //.add('starter_pack', '/starter_pack/:uid')
    //.add('eth_loan_pack', '/eth_loan_pack/:uid')
    //.add('form', '/form/:uid')
    //.add('wow', '/wow/:uid')
    .add('about_us')
    .add('contact_us')
    .add('faq')
    .add('how_to_buy_ether')
    .add('webinars')

module.exports = routes;