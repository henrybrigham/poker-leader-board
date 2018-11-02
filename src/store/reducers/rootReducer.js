import { combineReducers } from 'redux';
import players from './playerReducer';

const rootReducer = combineReducers({
  players,
});

const LeaderBoardApp = (state, action) => {
  return rootReducer(state, action);
};

export default LeaderBoardApp;
