import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { postsReducer } from './postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
});

export default rootReducer;
