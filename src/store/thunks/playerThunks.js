import axios from 'axios';
import { 
	createPlayerRequest, 
	createPlayerSuccess, 
	createPlayerFailure,
	deletePlayerRequest, 
	deletePlayerSuccess, 
	deletePlayerFailure,
	updatePlayerRequest, 
	updatePlayerSuccess, 
	updatePlayerFailure,
	fetchPlayersRequest,
	fetchPlayersSuccess,
	fetchPlayersFailure } from '../actions/playerActions';

const axiosPlayer = axios.create({
	baseURL: 'http://localhost:8000'
});

export function createPlayer(player) {
  return (dispatch) => {
		dispatch(createPlayerRequest());
		let formData = new FormData();
		formData.append('picture', player.file);
		formData.append('player', JSON.stringify(player));
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		};

    return axiosPlayer.post('/player', formData, config).then(
      payload => dispatch(createPlayerSuccess(payload.data)),
      error => dispatch(createPlayerFailure(error))
    );
  };
}

export function fetchPlayers() {
  return (dispatch) => {
		dispatch(fetchPlayersRequest());
    return axiosPlayer.get('/player').then(
      payload => dispatch(fetchPlayersSuccess(payload.data)),
      error => dispatch(fetchPlayersFailure(error))
    );
  };
}

export function updatePlayer(player) {
  return (dispatch) => {
		dispatch(updatePlayerRequest());
    return axiosPlayer.put(`/player/${player._id}`, player).then(
      payload => dispatch(updatePlayerSuccess(payload.data)),
      error => dispatch(updatePlayerFailure(error))
    );
  };
}

export function deletePlayer(playerId) {
  return (dispatch) => {
		dispatch(deletePlayerRequest());
    return axiosPlayer.delete(`/player/${playerId}`, playerId).then(
      () => dispatch(deletePlayerSuccess(playerId)),
      error => dispatch(deletePlayerFailure(error))
    );
  };
}