import React from 'react';
import PropTypes from 'prop-types';
import style from '../App.css';

const propTypes = {
	player: PropTypes.object.isRequired
};

class Player extends React.PureComponent {
	constructor(props) {
		super(props);
	}

  render() {
		const { name, winnings, country } = this.props.player;
  	return (
			<div className="row">
				<p>{name}</p>
				<p>{winnings}</p>
				<p>{country}</p>
  		</div>
  	);
  }
}
Player.propTypes = propTypes;

export default Player;