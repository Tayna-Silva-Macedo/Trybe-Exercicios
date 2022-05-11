import React from 'react';
import Form from './Form';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    countryState: '',
    addressType: '',
  };

  changeHandler = ({ target }) => {
    let { name, value } = target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  };

  validateAddress = (address) => {
    return address.replace(/[^\w\s]/gi, '');
  };

  updateState = (name, value) => {
    this.setState((state) => ({
      [name]: value,
    }));
  };

  onBlurHandler = ({ target }) => {
    let { name, value } = target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  };

  render() {
    return (
      <main>
        <Form
          changeHandler={this.changeHandler}
          onBlurHandler={this.onBlurHandler}
          currentState={this.state}
        />
      </main>
    );
  }
}

export default App;
