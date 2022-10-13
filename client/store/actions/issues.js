export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const INCREMENT_TODO_ID = 'INCREMENT_TODO_ID';

export const setIssues = issues => ({
  type: SET_TODOS,
  issues,
});

export const addIssue = ({ id, text, createdAt }) => ({
  type: ADD_TODO,
  createdAt,
  id,
  text,
});

export const toggleCompleteIssue = id => ({
  type: TOGGLE_COMPLETE_TODO,
  id,
});

export const updateIssue = ({ id, text, updatedAt }) => ({
  type: UPDATE_TODO,
  updatedAt,
  id,
  text,
});

export const removeIssue = id => ({
  type: REMOVE_TODO,
  id,
});
