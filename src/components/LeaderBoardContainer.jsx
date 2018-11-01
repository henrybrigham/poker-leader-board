import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPlayer, fetchPlayers } from '../store/thunks/playerThunks';
import { fetchPlayersRequest } from '../store/actions/playerActions';
import LeaderBoard from './LeaderBoard';

const propTypes = {
	players: PropTypes.array.isRequired,
	fetchPlayers: PropTypes.func.isRequired,
	createPlayer: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired
};

const LeaderBoardContainer = ({ players, fetchPlayers, createPlayer, isFetching, error }) => {
	console.log('container', isFetching, error);
	return <LeaderBoard players={players}
	fetchPlayers={fetchPlayers}
	createPlayer={createPlayer}
	isFetching={isFetching}
	error={error}
	/>
};

function mapStateToProps(state) {
  return {
		players: state.players.players,
		isFetching: state.players.isFetching,
		error: state.players.error
	}
}


function mapDispatchToProps(dispatch) {
  return {
    fetchPlayers: () => {
			dispatch(fetchPlayers());
		},
		createPlayer: (player) => {
			dispatch(createPlayer(player));
		}
  }
}

LeaderBoardContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardContainer);
export {LeaderBoardContainer as TestableLeaderBoardContainer};