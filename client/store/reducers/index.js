import { combineReducers } from 'redux';

import user from './user';
import issues from './issues';

const createRootReducer = routerReducer => combineReducers({
  router: routerReducer,
  user,
  issues,
});

export default createRootReducer;
