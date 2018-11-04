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
	DELETE_PLAYER_FAILURE,
	fetchPlayersRequest,
	fetchPlayersSuccess,
	fetchPlayersFailure,
	createPlayerRequest,
	createPlayerSuccess,
	createPlayerFailure,
	updatePlayerRequest,
	updatePlayerSuccess,
	updatePlayerFailure,
	deletePlayerRequest,
	deletePlayerSuccess,
	deletePlayerFailure
} from '../actions/playerActions';

describe('player Actions', () => {
	const players = [
		{
			name: 'Hank',
			winnings: 2,
			country: 'USA',
			imageUrl: 'blob'
		},
		{
			name: 'John',
			winnings: 3,
			country: 'MX',
			imageUrl: 'blob'
		}
	];

	const player = {
		name: 'Hank',
		winnings: 2,
		country: 'USA',
		imageUrl: 'blob'
	};

	const playerId = 'djfadsjkf3232';

  test('fetchPlayersRequest returns object', () => {
    const result = fetchPlayersRequest();
    expect(result.type).toEqual(GET_PLAYERS_REQUEST);
  });

  test('fetchPlayersSuccess returns object', () => {
    const result = fetchPlayersSuccess(players);
    expect(result.type).toEqual(GET_PLAYERS_SUCCESS);
    expect(result.players).toEqual(players);
  });

  test('fetchPlayersFailure returns object', () => {
    const result = fetchPlayersFailure();
    expect(result.type).toEqual(GET_PLAYERS_FAILURE);
	});
	
	test('createPlayerRequest returns object', () => {
    const result = createPlayerRequest();
    expect(result.type).toEqual(CREATE_PLAYER_REQUEST);
  });

  test('createPlayerSuccess returns object', () => {
    const result = createPlayerSuccess(player);
    expect(result.type).toEqual(CREATE_PLAYER_SUCCESS);
    expect(result.player).toEqual(player);
  });

  test('createPlayerFailure returns object', () => {
    const result = createPlayerFailure();
    expect(result.type).toEqual(CREATE_PLAYER_FAILURE);
	});
	
	test('updatePlayerRequest returns object', () => {
    const result = updatePlayerRequest();
    expect(result.type).toEqual(UPDATE_PLAYER_REQUEST);
  });

  test('updatePlayerSuccess returns object', () => {
    const result = updatePlayerSuccess(player);
    expect(result.type).toEqual(UPDATE_PLAYER_SUCCESS);
    expect(result.player).toEqual(player);
  });

  test('updatePlayerFailure returns object', () => {
    const result = updatePlayerFailure();
    expect(result.type).toEqual(UPDATE_PLAYER_FAILURE);
	});
	
	test('deletePlayerRequest returns object', () => {
    const result = deletePlayerRequest();
    expect(result.type).toEqual(DELETE_PLAYER_REQUEST);
  });

  test('deletePlayerSuccess returns object', () => {
    const result = deletePlayerSuccess(playerId);
    expect(result.type).toEqual(DELETE_PLAYER_SUCCESS);
    expect(result.playerId).toEqual(playerId);
  });

  test('deletePlayerFailure returns object', () => {
    const result = deletePlayerFailure();
    expect(result.type).toEqual(DELETE_PLAYER_FAILURE);
  });
});