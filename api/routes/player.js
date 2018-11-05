const express    = require('express');
const router     = express.Router();
const gar        = global.appRoot;
const multer     = require('multer');

const PlayerModel = require(`${gar}/models/player.model`);

// create the multer instance that will be used to upload/save the file
const upload = multer({ dest: `${gar}/uploads` });

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

router.post('/', upload.single('picture'), function(req, res){
	let newPlayer = JSON.parse(req.body.player);
	let apiUrl;

	if(process.env.NODE_ENV === 'development') {
		apiUrl = 'http://localhost:8000';
	} else {
		apiUrl = 'http://68.183.110.66:8000';
	}

	newPlayer.imageUrl = apiUrl + req.file.filename;
	
  new PlayerModel(newPlayer).save(function(err, createdPlayer){
		if (err) {
			console.log('**error', err);
			res.status(500);
			res.send("Error creating player", error);
			return;
		}
		res.send(JSON.stringify(createdPlayer));
	});
});

router.put('/:playerId', upload.single('picture'), function(req, res){
	console.log('****player', req.body);
	let updatedPlayer = JSON.parse(req.body.player);
	
	if (req.file) {
		updatedPlayer.imageUrl = 'http://localhost:8000/uploads/' + req.file.filename;
	}

	PlayerModel.findOneAndUpdate(
    {_id: req.params.playerId},
    updatedPlayer,
		{new: true},
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
	PlayerModel.findOneAndDelete(
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
