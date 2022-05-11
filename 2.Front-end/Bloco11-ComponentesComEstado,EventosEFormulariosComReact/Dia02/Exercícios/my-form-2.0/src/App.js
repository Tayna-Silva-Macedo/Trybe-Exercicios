import React from 'react';
import Form from './Form';
import FormDataDisplay from './FormDataDisplay';
import FormError from './FormError';
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
    resume: '',
    role: '',
    roleDescription: '',
    formError: {},
    submitted: false,
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
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value),
      },
    }));
  };

  validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
        return isValid ? '' : 'is invalid';
      default:
        break;
    }
    return '';
  };

  onBlurHandler = ({ target }) => {
    let { name, value } = target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  };

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
      formError: {},
      submitted: false,
    });
  };

  sendForm = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    const { submitted } = this.state;

    return (
      <main>
        <Form
          changeHandler={this.changeHandler}
          onBlurHandler={this.onBlurHandler}
          currentState={this.state}
          sendForm={this.sendForm}
          resetForm={this.resetForm}
        />
        <div className='container'>
          <FormError formError={this.state.formError} />
        </div>
        {submitted && <FormDataDisplay currentState={this.state} />}
      </main>
    );
  }
}

export default App;
