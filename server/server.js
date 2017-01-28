var loopback = require('loopback');
var boot = require('loopback-boot');

var port = process.env.PORT || 3000;

var app = module.exports = loopback();

app.start = function () {
    // start the web server
    return app.listen(port, function () {
        app.emit('started');
        console.log('Web server listening at: %s', app.get('url'));
    });
};

User.Event.link({id:userId, fk: eventId}, userEvent,  function(value, header) {
    //success
});

User.Place.link({id:userId, fk: placeId}, userPlace,  function(value, header) {
    //success
});

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module)
        app.start();
});
