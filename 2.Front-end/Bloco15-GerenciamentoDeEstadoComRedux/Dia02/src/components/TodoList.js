import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toogleTodoAction } from '../redux/actions';
import Item from '../Item';

const getTodos = (todos, filter) => {
  switch (filter) {
  case 'all':
    return todos;
  case 'done':
    return todos.filter((todo) => todo.completed);
  case 'progress':
    return todos.filter((todo) => !todo.completed);
  default:
    return todos;
  }
};

class TodoList extends React.Component {
  render() {
    const { listTodo, filter, toogle } = this.props;
    return (
      <ul>
        {getTodos(listTodo, filter).map((todo) => (
          <li
            key={ todo.id }
            onClick={ () => toogle(todo.id) }
            style={ {
              textDecoration: todo.completed ? 'line-through' : 'none',
            } }
            aria-hidden="true"
          >
            <Item content={ todo.text } />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  listTodo: state.reducer.listTodo,
  filter: state.reducer.filter,
});

const mapDispatchToProps = (dispatch) => ({
  toogle: (id) => dispatch(toogleTodoAction(id)),
});

TodoList.propTypes = {
  listTodo: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filter: PropTypes.string.isRequired,
  toogle: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
