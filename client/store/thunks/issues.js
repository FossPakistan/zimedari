import { snakeToCamelCase } from 'json-style-converter/es5';
import R from 'ramda';

import { getIssues, postIssue, putToggleCompleteIssue, putIssue, deleteIssue } from '_api/issues';
import { setIssues, addIssue, toggleCompleteIssue, updateIssue, removeIssue } from '_store/actions/issues';

import { dispatchError } from '_utils/api';

export const attemptGetIssues = () => dispatch =>
  getIssues()
    .then(data => {
      const issues = R.map(issue =>
        R.omit(['Id'], R.assoc('id', issue._id, snakeToCamelCase(issue))), data.issues);

      dispatch(setIssues(issues));
      return data.issues;
    })
    .catch(dispatchError(dispatch));

export const attemptAddIssue = text => dispatch =>
  postIssue({ text })
    .then(data => {
      const issue = R.omit(['Id'], R.assoc('id', data.issue._id, snakeToCamelCase(data.issue)));

      dispatch(addIssue(issue));
      return data.user;
    })
    .catch(dispatchError(dispatch));

export const attemptToggleCompleteIssue = id => dispatch =>
  putToggleCompleteIssue({ id })
    .then(data => {
      dispatch(toggleCompleteIssue(id));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptUpdateIssue = (id, text) => dispatch =>
  putIssue({ id, text })
    .then(data => {
      dispatch(updateIssue({ id, text, updatedAt: data.issue.updated_at }));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptDeleteIssue = id => dispatch =>
  deleteIssue({ id })
    .then(data => {
      dispatch(removeIssue(id));
      return data;
    })
    .catch(dispatchError(dispatch));
