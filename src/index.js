import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store/store';

ReactDOM.render(
	<Provider store={ configureStore() }>
		<App />
	</Provider>,
	document.getElementById('root')
);

module.hot.accept();