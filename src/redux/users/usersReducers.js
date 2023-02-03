import { USER_ADD, USER_DELETE } from './usersTypes';
// import { addAction, deleteAction } from './usersActions';

export const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case USER_ADD:
      return [...state, payload];

    case USER_DELETE:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};
