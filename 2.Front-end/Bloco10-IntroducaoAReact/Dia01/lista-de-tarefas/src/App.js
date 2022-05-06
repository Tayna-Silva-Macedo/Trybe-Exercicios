import React from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const compromissos = ['Estudar', 'Lavar a louça', 'Fazer o projeto', 'Lavar a roupa', 'Ir ao mercado']

class App extends React.Component {
  render() {
    return (
      <ul>{compromissos.map((compromisso) => Task(compromisso))}</ul>
    )
  }
}

export default App;
