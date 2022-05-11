import React from 'react';
import PersonalFieldset from './PersonalFieldset';
import DataFieldset from './DataFieldset';

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    age: '',
    anecdote: '',
    terms: false,
    formularioComErros: true,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.handleError();
      }
    );
  };

  handleError = () => {
    const { name, email, age, anecdote, terms } = this.state;

    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !age.length,
      !anecdote.length,
      !terms,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  };

  render() {
    const { name, email, age, anecdote, terms, formularioComErros } =
      this.state;

    return (
      <div>
        <h1>Para Fixar</h1>
        <form className='form'>
          <PersonalFieldset
            nameValue={name}
            emailValue={email}
            ageValue={age}
            handleChange={this.handleChange}
          />

          <DataFieldset
            anecdoteValue={anecdote}
            handleChange={this.handleChange}
          />

          <label htmlFor='terms'>
            <input
              id='terms'
              name='terms'
              type='checkbox'
              onChange={this.handleChange}
              value={terms}
            />
            Concordo com termos e acordos
          </label>
        </form>
        {formularioComErros ? (
          <span style={{ color: 'red' }}>Preencha todos os campos</span>
        ) : (
          <span style={{ color: 'green' }}>Todos campos foram preenchidos</span>
        )}
      </div>
    );
  }
}

export default Form;
