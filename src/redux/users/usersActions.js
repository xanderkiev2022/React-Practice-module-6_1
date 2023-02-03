import { USER_ADD, USER_DELETE } from './usersTypes';

export const addAction = user => ({
  type: USER_ADD,
  payload: user,
});
export const deleteAction = userId => ({
  type: USER_DELETE,
  payload: userId,
});
