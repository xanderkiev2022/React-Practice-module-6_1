import { createStore } from 'redux';
import { usersReducer } from './users/usersReducers';

console.log(usersReducer);
export const store = createStore(usersReducer);
