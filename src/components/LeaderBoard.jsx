import React from 'react';
import PropTypes from 'prop-types';
import ScrollUpButton from "react-scroll-up-button";
import Loader from '../assets/loading.gif';
import BookOrder from './BookOrder';
import ExchangeHeader from './ExchangeHeader';
import MarketSelector from './MarketSelector'
import style from '../App.css';

const propTypes = {
	players: PropTypes.array,
	fetchPlayers: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired
};

const defaultProps = {
	players: []
}

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
  		</div>
  	);
  }
}
LeaderBoard.propTypes = propTypes;
LeaderBoard.defaultProps = defaultProps;

export default LeaderBoard;