import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
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
			country: ''
		}
	}

	updatePlayer = (value, field) => {
		let state = {};
    state[field] = value;
    this.setState(state);
	}

	updateCountry = (selectedCountry) => {
		this.setState({country: selectedCountry.value});
	}

  render() {
  	return (
			<div className={style.center}>
				<h4 className="pageHeader">Add Player</h4>
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
				<button onClick={() => this.props.createPlayer(this.state)}>Add</button>
  		</div>
  	);
  }
}
LeaderBoard.propTypes = propTypes;

export default LeaderBoard;