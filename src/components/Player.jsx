import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { isEmpty, isNumeric } from 'validator';
import UpdatePlayer from './UpdatePlayer';
import style from '../App.css';

const options = [
  { value: 'USA', label: 'USA' },
  { value: 'MX', label: 'MX' },
  { value: 'CA', label: 'CA' }
];

const propTypes = {
	player: PropTypes.object.isRequired,
	updatePlayer: PropTypes.func.isRequired,
	deletePlayer: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired
};

class Player extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editing : false
		}
	}

	toggleOps = () => {
    this.setState({
			editing : !this.state.editing
		});
	}
	
	renderUpdatePlayer = () => {
		let updatePlayer;
		if(this.state.editing) {
			updatePlayer = <UpdatePlayer toggleOps={this.toggleOps} {...this.props}/>
		} 
		return updatePlayer;
	}

  render() {
		const { name, winnings, country } = this.props.player;
		let editClass;
		let deleteClass;

		if(this.state.editing) {
			editClass = 'visible';
			deleteClass = 'invisible';
		} else {
			editClass = 'invisible';
			deleteClass = 'visible';
		}

		return (
			<div className="column">
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
					<div className={`mLA row ${deleteClass}`}>
						<div className="penBox center point"
							onClick={ () => {
								this.toggleOps();
							}}
							>
							<i className="fa fa-pencil" aria-hidden="true"></i>
						</div>
						<div className="penBox center point"
							onClick={ () => {
								this.props.deletePlayer(this.props.player._id);
							}}
							>
							<i className="fa fa-minus-square" aria-hidden="true"></i>
						</div>
					</div>
				</div>
				{ this.renderUpdatePlayer() }
  		</div>
  	);
  }
}
Player.propTypes = propTypes;

export default Player;