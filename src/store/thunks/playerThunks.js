import axios from 'axios';
import { 
	createPlayerRequest, 
	createPlayerSuccess, 
	createPlayerFailure,
	fetchPlayersRequest,
	fetchPlayersSuccess,
	fetchPlayersFailure } from '../actions/playerActions';

const axiosPlayer = axios.create({
	baseURL: 'http://localhost:8000'
});

export function createPlayer(player) {
  return (dispatch) => {
		dispatch(createPlayerRequest());
		console.log('create', dispatch, createPlayerRequest);
    return axiosPlayer.post('/player', player).then(
      createdPlayer => dispatch(createPlayerSuccess(createdPlayer)),
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