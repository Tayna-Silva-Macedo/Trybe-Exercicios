import React, { Component } from 'react';
import AddTodo from './AddTodo';
import FilterTodos from './components/FilterTodos';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <main className="App">
        <AddTodo />
        <FilterTodos />
        <TodoList />
      </main>
    );
  }
}

export default App;
