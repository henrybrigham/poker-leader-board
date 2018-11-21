import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import LeaderBoardApp from './reducers/rootReducer';

function configureStore(preloadedState) {
  const store = createStore(LeaderBoardApp, preloadedState, applyMiddleware(thunk));

  return store;
}

export default configureStore;