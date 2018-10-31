const mongoose = require('mongoose');

module.exports = mongoose.model('Player', {
	name: String,
	winnings: String,
	country: String,
}, 'player');