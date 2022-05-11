import React from 'react';

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    age: '',
    anecdote: '',
    terms: false,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, email, age, anecdote, terms } = this.state;

    return (
      <div>
        <h1>Para Fixar</h1>
        <form className='form'>
          <fieldset>
            <legend>Informações pessoais</legend>

            <label htmlFor='name'>
              Nome:
              <input
                id='name'
                name='name'
                type='text'
                onChange={this.handleChange}
                value={name}
              />
            </label>

            <label htmlFor='email'>
              Email:
              <input
                id='email'
                name='email'
                type='email'
                onChange={this.handleChange}
                value={email}
              />
            </label>

            <label htmlFor='age'>
              Idade:
              <select
                id='age'
                name='age'
                onChange={this.handleChange}
                value={age}
              >
                <option value=''>Selecione</option>
                <option value='adult'>Maior que 18</option>
                <option value='underage'>Menor que 18</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>Texto e arquivos</legend>

            <label htmlFor='anecdote'>
              Anedota:
              <textarea
                id='anecdote'
                name='anecdote'
                onChange={this.handleChange}
                value={anecdote}
              />
            </label>

            <input type='file' />
          </fieldset>

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
      </div>
    );
  }
}

export default Form;
