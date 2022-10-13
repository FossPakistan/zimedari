import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const postIssue = info =>
  request.post('/api/issues')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const getIssues = () =>
  request.get('/api/issues')
    .then(handleSuccess)
    .catch(handleError);

export const putToggleCompleteIssue = info =>
  request.put('/api/issues/complete')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const putIssue = info =>
  request.put('/api/issues')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const deleteIssue = info =>
  request.delete('/api/issues')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);
