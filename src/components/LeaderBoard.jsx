import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../assets/loading.gif';
import AddPlayer from './AddPlayer';
import Player from './Player';
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

	renderPlayers = () => {
		const { players } = this.props;
		const sortedPlayers = players.sort((a, b) => b - a);

		const mappedPlayers = sortedPlayers.map((player, i) => <Player key={i} player={player} index={i}/>
		);
		return mappedPlayers;
	}

  render() {
		const { players } = this.props;
  	return (
			<div className="column leaderBoard">
				<h2 className="pageHeader">ALL-TIME TOURNAMENT EARNINGS</h2>
				<div className="boardHeader row">
					<div className="nameSpace">
						<span>Player</span>
					</div>
					<div className="otherSpace">
						<span>Winnings</span>
					</div>
					<div className="otherSpace">
						<span>Native Of</span>
					</div>
				</div>
				<div className="playerContainer">
					{ Object.keys(players).length > 0 ?this.renderPlayers() : '' }
				</div>
				<AddPlayer createPlayer={this.props.createPlayer} />
  		</div>
  	);
  }
}
LeaderBoard.propTypes = propTypes;

export default LeaderBoard;