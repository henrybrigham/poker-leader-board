import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { isEmpty, isNumeric } from 'validator';
import style from '../App.css';

const propTypes = {
	players: PropTypes.array,
	createPlayer: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired
};

const options = [
  { value: 'USA', label: 'USA' },
  { value: 'MX', label: 'MX' },
  { value: 'CA', label: 'CA' }
];

class LeaderBoard extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			winnings: 0,
			country: {},
			errorMessage: ''
		}
	}

	updatePlayer = (value, field) => {
		let state = {};
    state[field] = value;
    this.setState(state);
	}

	updateCountry = (selectedCountry) => {
		this.setState({country: selectedCountry});
	}

	createPlayer = (e) => {
		e.preventDefault();
		if (isEmpty(this.state.name.toString()) ||!this.state.country.value) {
			this.setState({errorMessage: 'All fields must contain valid inputs'});
  		return;
		}

		if (!isNumeric(this.state.winnings.toString())) {
			this.setState({errorMessage: 'Winnings must be a number'});
  		return;
		}
		
		const newPlayer = {
			name: this.state.name,
			winnings: this.state.winnings,
			country: this.state.country.value
		}
		this.props.createPlayer(newPlayer);
		this.setState({errorMessage: ''});
	}

  render() {
  	return (
			<div className={style.center}>
				<h4 className="pageHeader">Add Player</h4>
				<form>
					<div className="row">
						<input value={this.state.name} onChange={ (evt) => { this.updatePlayer(evt.target.value, 'name'); } }/>
						<input value={this.state.winnings} onChange={ (evt) => { this.updatePlayer(evt.target.value, 'winnings'); } }/>
						<Select
							className='marketSelector'
							value={this.state.country}
							onChange={this.updateCountry}
							options={options}
						/>
					</div>
					<p>{this.state.errorMessage}</p>
					<button onClick={(e) => this.createPlayer(e)}>Add</button>
				</form>
  		</div>
  	);
  }
}
LeaderBoard.propTypes = propTypes;

export default LeaderBoard;