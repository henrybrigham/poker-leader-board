import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../assets/loading.gif';
import AddPlayer from './AddPlayer';
import style from '../App.css';

const propTypes = {
	players: PropTypes.array.isRequired,
	fetchPlayers: PropTypes.func.isRequired,
	createPlayer: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired
};

class LeaderBoard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchPlayers();
	}

  render() {
  	return (
			<div className={style.center}>
				<h2 className="pageHeader">Poker Leaderboard</h2>
				<AddPlayer createPlayer={this.props.createPlayer} />
  		</div>
  	);
  }
}
LeaderBoard.propTypes = propTypes;

export default LeaderBoard;