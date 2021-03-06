import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FilePond, File, registerPlugin } from 'react-filepond';
import { isEmpty, isNumeric } from 'validator';
import { options } from '../enumerations';
import style from '../App.css';
import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

const propTypes = {
  createPlayer: PropTypes.func.isRequired
};

class LeaderBoard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      winnings: '',
      country: {},
      errorMessage: '',
      file: '',
      upload: null
    };
  }

	updatePlayer = (value, field) => {
	  let state = {};
	  state[field] = value;
	  this.setState(state);
	}

	updateCountry = (selectedCountry) => {
	  this.setState({ country: selectedCountry });
	}

	handleChange(event) {
	  this.setState({
	    file: URL.createObjectURL(event.target.files[0]),
	    upload: event.target.files[0]
	  });
	}

	createPlayer = (e) => {
	  console.log('create');
	  e.preventDefault();
	  if (isEmpty(this.state.name.toString()) || !this.state.country.value) {
	    this.setState({ errorMessage: 'All fields must contain valid inputs' });
	    return;
	  }

	  if (!isNumeric(this.state.winnings.toString())) {
	    this.setState({ errorMessage: 'Winnings must be a number' });
	    return;
	  }


	  if (!this.state.upload) {
	    this.setState({ errorMessage: 'Please upload an image' });
	    return;
	  }
		
	  const newPlayer = {
	    name: this.state.name,
	    winnings: this.state.winnings,
	    country: this.state.country.value,
	    upload: this.state.upload,
	    fileName: this.state.upload.name
	  };

	  this.props.createPlayer(newPlayer);
	  this.setState({
	    errorMessage: '',
	    name: '',
	    winnings: '',
	    country: {},
	    file: '',
	    upload: null
	  });
	}

	render() {
	  return (
  <div className={ style.center }>
    <h4>Add Player</h4>
    <form onSubmit={ this.createPlayer }>
      <div className="column center">
        <input 
							type="text"
							className="updateName"
							placeholder="Name"
							value={ this.state.name } 
							onChange={ (evt) => { this.updatePlayer(evt.target.value, 'name'); } }/>
        <input 
							type="text"
							className="updateWinnings"
							placeholder="Winnings"
							value={ this.state.winnings } 
							onChange={ (evt) => { this.updatePlayer(evt.target.value, 'winnings'); } }/>
        <Select
							className="countrySelector"
							value={ this.state.country }
							onChange={ this.updateCountry }
							options={ options }
						/>
        <input type="file" onChange={ (event) => this.handleChange(event) }/>
        { this.state.file ? <img className="drop" alt="preview" src={ this.state.file }/> : '' }
      </div>
      <p className="error">{this.state.errorMessage}</p>
      <button type="submit" className="addPlayer penBox center">
        <i className="fa fa-2x fa-user-plus" aria-hidden="true"></i>
      </button>
    </form>
  </div>
	  );
	}
}
LeaderBoard.propTypes = propTypes;

export default LeaderBoard;