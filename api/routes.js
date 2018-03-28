module.exports = function(app) {

	// Define Exports
	var exports = {
		blockchain : require('./routes/blockchain.js')
	};

	// Catch All
	app.all('*', function(req, res, next) {
		res.set('Access-Control-Allow-Origin', '*');
		res.set('Access-Control-Allow-Credentials', true);
		res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
		res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

		console.log('Method: ' + req.method);
		console.log(req.params);
		console.log('Body: ');
		console.log(req.body);
		console.log(req.path)
		// if ('POST' == req.method) req.session.returnURI = req.path;
		if ('OPTIONS' == req.method) return res.send(200);
		next();
	});

	// Restrict All Post Requests to JSON
	app.post('*', function(req, res, next) {
		// Restrict Request to JSON
		req.accepts('application/json');
		next();
	})

	// Define All Other Routes Here
	app.use( '/api/blockchain', exports.blockchain );

  // Handle 404 - Last Route
	app.use(function(req, res, next) {
		res.status(404).send('404');
	});

	return exports;
};
