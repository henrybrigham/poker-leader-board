import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPlayer, updatePlayer, deletePlayer, fetchPlayers } from '../store/thunks/playerThunks';
import LeaderBoard from './LeaderBoard';

const propTypes = {
	players: PropTypes.array.isRequired,
	fetchPlayers: PropTypes.func.isRequired,
	createPlayer: PropTypes.func.isRequired,
	updatePlayer: PropTypes.func.isRequired,
	deletePlayer: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired
};

const LeaderBoardContainer = (props) =>		<LeaderBoard {...props}/>


function mapStateToProps(state) {
  return {
		players: state.players.players,
		isFetching: state.players.isFetching,
		error: state.players.error
	}
}


function mapDispatchToProps(dispatch) {
  return {
		createPlayer: (player) => {
			dispatch(createPlayer(player));
		},
		fetchPlayers: () => {
			dispatch(fetchPlayers());
		},
		updatePlayer: (player) => {
			dispatch(updatePlayer(player));
		},
		deletePlayer: (playerId) => {
			dispatch(deletePlayer(playerId));
		}
  }
}

LeaderBoardContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardContainer);
export {LeaderBoardContainer as TestableLeaderBoardContainer};