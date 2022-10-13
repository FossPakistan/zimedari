import update from 'immutability-helper';
import R from 'ramda';

import {
  SET_TODOS, ADD_TODO, TOGGLE_COMPLETE_TODO, UPDATE_TODO, REMOVE_TODO,
} from '_store/actions/issues';

import { LOGOUT_USER } from '_store/actions/user';

export function issue(state = {
  completed: false,
}, action) {
  switch (action.type) {
    case ADD_TODO:
      return update(state, {
        id: { $set: action.id },
        text: { $set: action.text },
        createdAt: { $set: action.createdAt },
      });
    case TOGGLE_COMPLETE_TODO:
      return update(state, {
        completed: { $apply: x => !x },
      });
    case UPDATE_TODO:
      return update(state, {
        text: { $set: action.text },
        updatedAt: { $set: action.updatedAt },
      });
    default:
      return state;
  }
}

export default function issues(state = [], action) {
  const index = R.findIndex(R.propEq('id', action.id), state);
  const updatedAtIndex = { $splice: [[index, 1, issue(state[index], action)]] };

  switch (action.type) {
    case SET_TODOS:
      return update(state, { $set: action.issues });
    case ADD_TODO:
      return update(state, { $push: [issue(undefined, action)] });
    case TOGGLE_COMPLETE_TODO:
      return update(state, updatedAtIndex);
    case UPDATE_TODO:
      return update(state, updatedAtIndex);
    case REMOVE_TODO:
      return update(state, { $splice: [[index, 1]] });
    case LOGOUT_USER:
      return [];
    default:
      return state;
  }
}
