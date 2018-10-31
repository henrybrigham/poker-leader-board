const express    = require('express');
const router     = express.Router();
const gar        = global.appRoot;
const multer     = require('multer');
const upload = multer({ dest: `${gar}/uploads/picture` }).single('picture');
const PlayerModel = require(`${gar}/models/player.model`);

router.get('/', function(req, res) {
	PlayerModel.find(
		{ }, // filter object - empty filter catches everything
		function(err, players) {
			if(err) {
				res.status(500).send({ msg: 'Error getting all players', err: err });
				return;
			} if(!players){
				res.status(200).send("[]");
				return;
			}
			else {
				res.status(200).send(players);
			}
		}
	);
});

router.get('/:playerId', function(req, res) {
	PlayerModel.findById(
		req.params.playerId,
		function(err, player) {
			if(err) {
				res.status(500).send({ msg: 'Error getting the player', err: err });
				return;
			}
			res.status(200).send(player);
		}
	);
});

router.post('/', upload,
function(req, res){
	const player = JSON.parse(req.body.player);
	
  new PlayerModel(newPlayer).save(function(err, createdPlayer){
		if (err) {
			res.status(500);
			res.send("Error creating player");
			return;
		}
		res.send(JSON.stringify(createdPlayer));
	});
});

router.put('/:playerId', upload, function(req, res){
	const player = JSON.parse(req.body.player);

  // if (req.file) {
  //   blog.image = '/uploads/blog/' + req.file.filename;
  // }

  PlayerModel.findByIdAndUpdate(
    req.params.playerId,
    {
      $set: {
				name: player.name,
        winnings: player.winnings,
				country: player.country,
      },
    },
    { new: true },
    function(err, updatedPlayer) {
      if (err) {
        res.status(500).send({ msg: 'error updating player', err: err });
        return;
      }
			res.status(200).send(updatedPlayer);
  	}
  );
});

router.delete('/:playerId', function(req, res){
	PlayerModel.findByIdAndRemove(
    req.params.playerId,
    function(err) {
      if (err) {
        res.status(500).send({ msg: 'error deleting player', err: err });
        return;
      }
			res.status(200).send(true);
    }
  );
});

module.exports = router;
