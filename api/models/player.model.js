const mongoose = require('mongoose');

module.exports = mongoose.model('Player', {
	name: {
    type: String,
    required: true
  },
	winnings: {
		type: Number,
		required: true
	},
	country: {
		type: String,
		required: true
	}
}, 'player');