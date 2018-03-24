// Setup Express App
let express = require('express');
let app = express();

// Middleware
const path = require('path');
const bodyParser = require('body-parser'); //bodyparser + json + urlencoder
const morgan  = require('morgan'); // logger

// Config
// var db = require('./server/configs/database'); // DB Config
// var passport = require('./server/configs/passport'); // User Auth Config
// var config = require('./api/config.js');

// Configuration
// app.set('port', process.env.PORT);
app.set('port', 8080);
app.listen(app.get('port'));

// Setup Post Validation Library
// app.use(validator());

// Setup User Authentication
// app.use(require('express-session')({
//    secret: config.secret,
//    resave: false,
//    saveUninitialized: false
// }));

// app.use(passport.initialize());
//
// // Session Setup
// app.use(passport.session());


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());

//Routes
var routes = require('./routes.js')(app);

console.log('[SERVER] React-App API started on port ' + app.get('port'));
