export const ADD_TODO = 'ADD_TODO';
export const FILTER_TODOS = 'FILTER_TODOS';
export const TOOGLE_TODOS = 'TOOGLE_TODOS';

export const addTodoAction = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const filterAction = (filter) => {
  return {
    type: FILTER_TODOS,
    filter,
  };
};

export const toogleTodoAction = (id) => {
  return {
    type: TOOGLE_TODOS,
    id,
  };
};
