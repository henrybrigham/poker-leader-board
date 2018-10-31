const gar = global.appRoot;
const PlayerModel = require(`${gar}/models/player.model`);

class PlayerDao {
	createPlayer(player) {
		const newPlayer = {
			name: player.name,
			winnings: player.winnings,
			country: player.country,
		}
	
		new PlayerModel(newPlayer).save(function(err, createdPlayer){
			if (err) {
				res.status(500);
				res.send("Error creating player");
				return;
			}
			res.send(JSON.stringify(createdPlayer));
		});
	}
}

module.exports = PlayerDao;
