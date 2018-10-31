import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlayersRequest } from '../store/playerActions';
import LeaderBoard from './LeaderBoard';

const propTypes = {
	players: PropTypes.array,
	fetchPlayers: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired
};

const defaultProps = {
	players: []
}

const LeaderBoardContainer = ({ players, fetchPlayers, isFetching, error }) => (
	<LeaderBoard players={Players}
	fetchPlayers={fetchPlayers}
	isFetching={isFetching}
	error={error}
	/>
);

function mapStateToProps(state) {
  return {
		players: state.players.players || [],
		isFetching: state.players.isFetching,
		error: state.players.error
	}
}


function mapDispatchToProps(dispatch) {
  return {
    fetchPlayers: () => {
			dispatch(fetchPlayersRequest());
		}
  }
}

LeaderBoardContainer.propTypes = propTypes;
LeaderBoardContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardContainer);
export {LeaderBoardContainer as TestableLeaderBoardContainer};