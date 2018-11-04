//////////////////
// Dependencies //
//////////////////
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const cors       = require('cors');
const http       = require('http');
const helmet     = require('helmet');
const mongoose = require("mongoose");
const app        = module.exports = express();
const axios 	   = require("axios");
const Helpers = require('./helpers');
const session    = require('client-sessions');

////////////////
// Misc Setup //
////////////////
app.use('/uploads/', express.static(__dirname+'/uploads'));

app.locals.basedir = __dirname;
const gar = global.appRoot = app.locals.basedir;

try {
  app.secret = require(`${gar}/secrets`);
} catch (err) {
  app.secret = {
    appSecret: '4b7b78a47825bfbd0d58a7851f73450197b779fd446cef73196a7063c9e4a150'
  };
}

/////////////
// Session //
/////////////
app.use(session({
  cookieName: 'leaderBoard',
  requestKey: 'session',
  secret: app.secret.appSecret, // should be a large unguessable string
  duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
  activeDuration: 1000 * 60 * 5, // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
  cookie: {
    httpOnly: false,
    secure: false
  }
}));

////////////////
// Middleware //
////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(helmet());

app.use(cors({
	origin: true,
	credentials: true
}));

app.use(function(req, res, next) {
	console.log(req.url);
	next();
});

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'))
});

app.use(express.static(path.resolve(__dirname + '/../src/')))

///////////////////////
// Import/Use Routes //
///////////////////////
const player = require('./routes/player');
app.use('/player', player);

//////////////
// Mongoose //
//////////////
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/leaderBoard', { useNewUrlParser: true });
const PlayerModel = require('./models/player.model')(mongoose);

mongoose.set('debug', true);

////////////
// Server //
////////////
app.use(function(req, res, next) {
  console.log(req.METHOD, req.url);
  next();
});

app.use(function(req, res, next) {
	res.status(404);
	res.send("no");
});

app.listen(8000, () => {
	console.log('listening, 8000');
});