import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);

    this.state = {
      numeroDeCliquesBotao1: 0,
      numeroDeCliquesBotao2: 0,
      numeroDeCliquesBotao3: 0,
    };
  }

  handleClickOne() {
    this.setState(
      (estadoAnterior) => ({
        numeroDeCliquesBotao1: estadoAnterior.numeroDeCliquesBotao1 + 1,
      }),
      () =>
        console.log(
          `Botão 1 ${this.buttonColor(this.state.numeroDeCliquesBotao1)}`
        )
    );
  }

  handleClickTwo() {
    this.setState(
      (estadoAnterior) => ({
        numeroDeCliquesBotao2: estadoAnterior.numeroDeCliquesBotao2 + 1,
      }),
      () =>
        console.log(
          `Botão 2 ${this.buttonColor(this.state.numeroDeCliquesBotao2)}`
        )
    );
  }

  handleClickThree() {
    this.setState(
      (estadoAnterior) => ({
        numeroDeCliquesBotao3: estadoAnterior.numeroDeCliquesBotao3 + 1,
      }),
      () =>
        console.log(
          `Botão 3 ${this.buttonColor(this.state.numeroDeCliquesBotao3)}`
        )
    );
  }

  buttonColor(number) {
    return number % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const {
      numeroDeCliquesBotao1,
      numeroDeCliquesBotao2,
      numeroDeCliquesBotao3,
    } = this.state;

    return (
      <div>
        <button
          onClick={this.handleClickOne}
          style={{
            backgroundColor: this.buttonColor(numeroDeCliquesBotao1),
          }}
        >
          Botão 1 | Contador = {numeroDeCliquesBotao1}
        </button>
        <button
          onClick={this.handleClickTwo}
          style={{
            backgroundColor: this.buttonColor(numeroDeCliquesBotao2),
          }}
        >
          Botão 2 | Contador = {numeroDeCliquesBotao2}
        </button>
        <button
          onClick={this.handleClickThree}
          style={{
            backgroundColor: this.buttonColor(numeroDeCliquesBotao3),
          }}
        >
          Botão 3 | Contador = {numeroDeCliquesBotao3}
        </button>
      </div>
    );
  }
}

export default App;
