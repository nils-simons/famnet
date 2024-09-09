

exports.router = (app) => {
    require('./client').create(app);
    require('./client').delete(app);
    require('./client').get(app);
    require('./status').toggle(app);
    require('./status').status(app);
}