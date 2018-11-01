import React from 'react';
import PropTypes from 'prop-types';
import style from '../App.css';

const propTypes = {
	player: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired
};

class Player extends React.PureComponent {
	constructor(props) {
		super(props);
	}

  render() {
		const { name, winnings, country } = this.props.player;
  	return (
			<div className="row">
				<div className="index">{this.props.index}</div>
				<div className="nameSpace">
					<p>{name}</p>
				</div>
				<div className="otherSpace">
					<p>{winnings}</p>
				</div>
				<div className="otherSpace">
					<p>{country}</p>
				</div>
  		</div>
  	);
  }
}
Player.propTypes = propTypes;

export default Player;