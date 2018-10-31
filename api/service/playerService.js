import PlayerDao from ('./dao/playerDao');

class PlayerService {
	createPlayer = async (player) => {
		const player = await PlayerDao.createPlayer(player);
		return player;
	}
}

module.exports = PlayerService;
