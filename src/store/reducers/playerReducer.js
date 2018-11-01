import { updateObject, createReducer } from '../utilities';
import { 
	GET_PLAYERS_REQUEST, 
	GET_PLAYERS_SUCCESS, 
	GET_PLAYERS_FAILURE,
	CREATE_PLAYER_REQUEST,
	CREATE_PLAYER_SUCCESS,
	CREATE_PLAYER_FAILURE,
	UPDATE_PLAYER_REQUEST,
	UPDATE_PLAYER_SUCCESS,
	UPDATE_PLAYER_FAILURE,
	DELETE_PLAYER_REQUEST,
	DELETE_PLAYER_SUCCESS,
	DELETE_PLAYER_FAILURE
} from '../actions/playerActions';

const initialState = {
	players: [],
	isFetching: false,
	error: false
}

const actionHandlers = {
  [GET_PLAYERS_REQUEST]: state => (
    updateObject(state, {
      players: state.players,
			isFetching: true,
			error: false
		})
	),
		
  [GET_PLAYERS_SUCCESS]: (state, action) => (
		updateObject(state, {
      players: action.players,
			isFetching: false,
			error: false
		})
	),

  [GET_PLAYERS_FAILURE]: state =>
    updateObject(state, {
      players: state.players,
			isFetching: false,
			error: true
    }),
};

export default createReducer(initialState, actionHandlers);