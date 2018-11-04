import {makeActionCreator} from '../utilities';
export const GET_PLAYERS_REQUEST = 'GET_PLAYERS_REQUEST';
export const GET_PLAYERS_SUCCESS = 'GET_PLAYERS_SUCCESS';
export const GET_PLAYERS_FAILURE = 'GET_PLAYERS_FAILURE';
export const CREATE_PLAYER_REQUEST = 'CREATE_PLAYER_REQUEST';
export const CREATE_PLAYER_SUCCESS = 'CREATE_PLAYER_SUCCESS';
export const CREATE_PLAYER_FAILURE = 'CREATE_PLAYER_FAILURE';
export const UPDATE_PLAYER_REQUEST = 'UPDATE_PLAYER_REQUEST';
export const UPDATE_PLAYER_SUCCESS = 'UPDATE_PLAYER_SUCCESS';
export const UPDATE_PLAYER_FAILURE = 'UPDATE_PLAYER_FAILURE';
export const DELETE_PLAYER_REQUEST = 'DELETE_PLAYER_REQUEST';
export const DELETE_PLAYER_SUCCESS = 'DELETE_PLAYER_SUCCESS';
export const DELETE_PLAYER_FAILURE = 'DELETE_PLAYER_FAILURE';

export const fetchPlayersRequest = () => (
{
	type: GET_PLAYERS_REQUEST
});

export const fetchPlayersSuccess = (players) => ({
	type: GET_PLAYERS_SUCCESS, 
	players
});

export const fetchPlayersFailure = (error) => ({
	type: GET_PLAYERS_FAILURE,
	error
});

export const createPlayerRequest = () => ({
	type: CREATE_PLAYER_REQUEST
});

export const createPlayerSuccess = (player) => ({
	type: CREATE_PLAYER_SUCCESS, player
});

export const createPlayerFailure = (error) => ({
	type: CREATE_PLAYER_FAILURE,
	error
});

export const updatePlayerRequest = () => ({
	type: UPDATE_PLAYER_REQUEST
});

export const updatePlayerSuccess = (player) => ({
	type: UPDATE_PLAYER_SUCCESS, player
});

export const updatePlayerFailure = (error) => ({
	type: UPDATE_PLAYER_FAILURE,
	error
});

export const deletePlayerRequest = () => ({
	type: DELETE_PLAYER_REQUEST
});

export const deletePlayerSuccess = (playerId) => ({
	type: DELETE_PLAYER_SUCCESS, playerId
});

export const deletePlayerFailure = () => ({
	type: DELETE_PLAYER_FAILURE
});