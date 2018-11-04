import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { isEmpty, isNumeric } from 'validator';
import style from '../App.css';

const options = [
  { value: 'USA', label: 'USA' },
  { value: 'MX', label: 'MX' },
  { value: 'CA', label: 'CA' }
];

const propTypes = {
	player: PropTypes.object.isRequired,
	updatePlayer: PropTypes.func.isRequired,
	toggleOps: PropTypes.func.isRequired,
};

class UpdatePlayer extends React.Component {
	constructor(props) {
		super(props);

		const { name, winnings, country } = props.player;

		this.state = {
			name: name,
			winnings: winnings,
			country: { value: country, label: country },
			editing : false,
			errorMessage: ''
		}
	}
	
	updateCountry = (country) => {
		this.setState({country});
	}

  updatePlayer = (e) => {
		e.preventDefault();
		if (isEmpty(this.state.name.toString()) ||!this.state.country.value) {
			this.setState({errorMessage: 'All fields must contain valid inputs'});
  		return;
		}

		if (!isNumeric(this.state.winnings.toString())) {
			this.setState({errorMessage: 'Winnings must be a number'});
  		return;
		}

    const data = {
      _id: this.props.player._id,
      name: this.state.name,
      winnings: this.state.winnings,
      country: this.state.country.value,
		}
		console.log('data', data);
		this.props.updatePlayer(data);
		this.props.toggleOps();
  }

  render() {
		const { name, winnings, country, errorMessage } = this.state;

		return (
			<div className="column editPlayer">
				<div className="mLA row">
					<div className="penBox center point"
						onClick={ (e) => {
							this.updatePlayer(e);
						}}
						>
						<i className="fa fa-telegram" aria-hidden="true"></i>
					</div>
					<div className="penBox center point"
						onClick={ () => {
							this.props.toggleOps();
						}}
						>
						<i className="fa fa-window-close" aria-hidden="true"></i>
					</div>
				</div>
				<form>
					<input
						type='text'
						className="input"
						defaultValue={name}
						onChange={ (evt) => {
							this.setState({
								name: evt.target.value
							})
						} }
						/>
					<input
						type='text'
						className="input"
						defaultValue={winnings}
						onChange={ (evt) => {
							this.setState({
								winnings: evt.target.value,
							})
						} }
						/>
					<Select
						className='marketSelector'
						value={country}
						onChange={this.updateCountry}
						options={options}
					/>
					<p className="error">{errorMessage}</p>
				</form>
			</div>
  	);
  }
}
UpdatePlayer.propTypes = propTypes;

export default UpdatePlayer;