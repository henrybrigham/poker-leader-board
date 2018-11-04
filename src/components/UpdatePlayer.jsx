import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { isEmpty, isNumeric } from 'validator';
import { options } from '../enumerations';
import style from '../App.css';


const propTypes = {
	player: PropTypes.object.isRequired,
	updatePlayer: PropTypes.func.isRequired,
	toggleOps: PropTypes.func.isRequired,
};

class UpdatePlayer extends React.Component {
	constructor(props) {
		super(props);

		const { 
			name, 
			winnings, 
			country, 
			imageUrl 
		} = props.player;

		this.state = {
			name: name,
			winnings: winnings,
			country: { 
				value: country, 
				label: country 
			},
			editing : false,
			errorMessage: '',
			file: imageUrl,
			upload: null
		}
	}
	
	updateCountry = (country) => {
		this.setState({country});
	}

	handleChange(event) {
    this.setState({
			file: URL.createObjectURL(event.target.files[0]),
			upload: event.target.files[0]
    });
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

		if (!this.state.upload) {
			this.setState({errorMessage: 'Please upload an image'});
  		return;
		}

    const data = {
      _id: this.props.player._id,
      name: this.state.name,
      winnings: this.state.winnings,
			country: this.state.country.value,
			imageUrl: this.state.imageUrl,
			upload: this.state.upload ? this.state.upload : null,
			fileName: this.state.upload ?this.state.upload.name : null
		}

		this.props.updatePlayer(data);
		this.props.toggleOps();
  }

  render() {
		const { name, winnings, country, errorMessage } = this.state;

		return (
			<div className="column editPlayer">
				<form>
					<h4>Update Player</h4>
					<div className="column center">
						<input
							type='text'
							placeholder="Name"						className="input"
							defaultValue={name}
							onChange={ (evt) => {
								this.setState({
									name: evt.target.value
								})
							} }
							/>
						<input
							type='text'
							placeholder="Winnings"				className="input"
							defaultValue={winnings}
							onChange={ (evt) => {
								this.setState({
									winnings: evt.target.value,
								})
							} }
							/>
						<Select
							className='countrySelector'
							value={country}
							onChange={this.updateCountry}
							options={options}
						/>
						<input type="file" onChange={ (event) => this.handleChange(event) }/>
						{ this.state.file ? 
							<img className="drop" alt="preview"
						src={this.state.file}/> : '' }
						<p className="error">{errorMessage}</p>
					</div>
				</form>
				<div className="center row">
					<div className="penBox"
						onClick={ (e) => {
							this.updatePlayer(e);
						}}
						>
						<i className="fa fa-telegram" aria-hidden="true"></i>
					</div>
					<div className="penBox"
						onClick={ () => {
							this.props.toggleOps();
						}}
						>
						<i className="fa fa-window-close" aria-hidden="true"></i>
					</div>
				</div>
			</div>
  	);
  }
}
UpdatePlayer.propTypes = propTypes;

export default UpdatePlayer;