export const ADD_REGISTER = 'ADD_REGISTER';
export const DELETE_REGISTER = 'DELETE_REGISTER'
export const LOGIN = 'LOGIN';

export const addRegisterAction = (payload) => ({
  type: ADD_REGISTER,
  payload,
});

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const deletRegisterAction = (payload) => ({
  type: DELETE_REGISTER,
  payload,
});
