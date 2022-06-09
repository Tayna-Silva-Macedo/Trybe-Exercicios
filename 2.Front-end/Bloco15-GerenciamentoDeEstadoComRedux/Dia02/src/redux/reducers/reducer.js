import { ADD_TODO, TOOGLE_TODOS, FILTER_TODOS } from '../actions';

const INITIAL_STATE = {
  listTodo: [],
  filter: 'all',
  id: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_TODO:
    return {
      ...state,
      listTodo: [
        ...state.listTodo,
        { text: action.payload, completed: false, id: state.id },
      ],
      id: state.id + 1,
    };
  case FILTER_TODOS:
    return { ...state, filter: action.filter };

  case TOOGLE_TODOS:
    return {
      ...state,
      listTodo: state.listTodo.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    };
  default:
    return state;
  }
};

export default reducer;
