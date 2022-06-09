import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodoAction } from './redux/actions';

class AddTodo extends Component {
  render() {
    const { addTodo } = this.props;
    let input;
    return (
      <form
        className="InputTodo"
        onSubmit={ (e) => {
          e.preventDefault();
          addTodo(input.value);
          input.value = '';
        } }
      >
        <label htmlFor="inputTodo">
          Tarefa:
          <input
            ref={ (node) => {
              input = node;
            } }
            id="inputTodo"
            type="text"
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

// export default AddTodo;

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodoAction(todo)),
});

export default connect(null, mapDispatchToProps)(AddTodo);
