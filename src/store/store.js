import { createStore, applyMiddleware, compose } from 'redux';
import LeaderBoardApp from './rootReducer';

const apiUrl = 'http://localhost:8000';
	
const middlewareEnhancer = applyMiddleware();
const storeEnhancers = [middlewareEnhancer];
const composedEnhancer = compose(...storeEnhancers);

const store = createStore(
	LeaderBoardApp,
	composedEnhancer
);

export default store;