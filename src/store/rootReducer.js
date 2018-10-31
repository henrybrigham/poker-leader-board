import { combineReducers } from 'redux';
import players from './playerReducer';

const rootReducer = combineReducers({
  players,
});

const CryptoApp = (state, action) => {
  return rootReducer(state, action);
};

export default CryptoApp;
