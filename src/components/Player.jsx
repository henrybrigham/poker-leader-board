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
	deletePlayer: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired
};

class Player extends React.PureComponent {
	constructor(props) {
		super(props);

		const { name, winnings, country } = props.player;

		this.state = {
			name: name,
			winnings: winnings,
			country: { value: country, label: country },
			style : {
        edit : {
          display: 'none'
        },
        delete : {
          display: 'flex'
        },
        input : {
          display : 'none'
        }
      },
			editing : false,
			errorMessage: ''
		}
	}

	toggleOps = () => {
    if (!this.state.editing) {
      this.setState({
        style : {
          edit : {
            display: 'flex'
          },
          delete : {
            display: 'none'
          },
          input : {
            display : 'flex'
          }
        },
        editing : true
      })
    }
    else {
      this.setState({
        style : {
          edit : {
            display: 'none'
          },
          delete : {
            display : 'flex'
          },
          input : {
            display : 'none'
          }
        },
        editing : false
      })
    }
	}
	
	updateCountry = (country) => {
		this.setState({country});
	}

  updatePlayer = () => {
		if (isEmpty(this.state.name.toString()) ||!this.state.country.value) {
			this.setState({errorMessage: 'All fields must contain valid inputs'});
  		return;
		}

		if (!isNumeric(this.state.winnings)) {
			this.setState({errorMessage: 'Winnings must be a number'});
  		return;
		}

    const data = {
      _id: this.props.player._id,
      name: this.state.name,
      winnings: this.state.winnings,
      country: this.state.country.value,
    }
		this.props.updatePlayer(data);
		this.toggleOps();
  }

  render() {
		const { name, winnings, country } = this.props.player;

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
					<div className="mLA row" 
						style={this.state.style.delete}>
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
					<div className="mLA row" 
						style={this.state.style.edit}>
						<div className="penBox center point"
							onClick={ () => {
								this.updatePlayer();
							}}
							>
							<i className="fa fa-telegram" aria-hidden="true"></i>
						</div>
						<div className="penBox center point"
							onClick={ () => {
								this.toggleOps();
							}}
							>
							<i className="fa fa-window-close" aria-hidden="true"></i>
						</div>
					</div>
				</div>
				<div style={this.state.style.input} className="column editPlayer">
					<form>
						<input
							type='text'
							className="input"
							defaultValue={this.state.name}
							onChange={ (evt) => {
								this.setState({
									name: evt.target.value
								})
							} }
							/>
						<input
							type='text'
							className="input"
							defaultValue={this.state.winnings}
							onChange={ (evt) => {
								this.setState({
									winnings: evt.target.value,
								})
							} }
							/>
						<Select
							className='marketSelector'
							value={this.state.country}
							onChange={this.updateCountry}
							options={options}
						/>
						<p className="error">{this.state.errorMessage}</p>
					</form>
        </div>
  		</div>
  	);
  }
}
Player.propTypes = propTypes;

export default Player;