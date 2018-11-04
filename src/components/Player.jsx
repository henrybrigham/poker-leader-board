import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { isEmpty, isNumeric } from 'validator';
import UpdatePlayer from './UpdatePlayer';
import { images } from '../enumerations';
import style from '../App.css';

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
		const { name, winnings, country, imageUrl } = this.props.player;
		let editClass;
		let deleteClass;

		if(this.state.editing) {
			editClass = 'visible';
			deleteClass = 'invisible';
		} else {
			editClass = 'invisible';
			deleteClass = 'visible';
		}

		const source = images[country];
		return (
			<div className="column player">
				<div className={`row ${deleteClass}`}>
					<div className="index">{this.props.index + 1}.</div>
					{ imageUrl ? <img src={imageUrl}/> : ''}
					<div className="nameSpace">
						<p className="name">{name}</p>
					</div>
					<div className="otherSpace">
						<p>${winnings}M</p>
					</div>
					<div className="otherSpace">
						<img src={source} alt="flag" className="flag"/>
						<p className="country">{country}</p>
					</div>
					<div className="mLA row">
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