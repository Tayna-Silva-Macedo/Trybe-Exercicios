import React from 'react';

class PersonalInfo extends React.Component {
  render() {
    const states = [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espírito Santo',
      'Goiás',
      'Maranhão',
      'Mato Grosso',
      'Mato Grosso do Sul',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraima',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins',
    ];

    const { changeHandler, onBlurHandler, currentState } = this.props;

    return (
      <fieldset>
        <legend>Dados pessoais:</legend>
        <div className='container'>
          <label htmlFor='name'>
            Nome:
            <input
              type='text'
              name='name'
              id='name'
              maxLength='40'
              required
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className='container'>
          <label htmlFor='email'>
            Email:
            <input
              type='email'
              name='email'
              id='email'
              maxLength='50'
              required
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className='container'>
          <label htmlFor='cpf'>
            CPF:
            <input
              type='text'
              name='cpf'
              id='cpf'
              maxLength='11'
              required
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className='container'>
          <label htmlFor='address'>
            Endereço:
            <input
              type='text'
              name='address'
              id='address'
              maxLength='200'
              required
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className='container'>
          <label htmlFor='city'>
            Cidade:
            <input
              type='text'
              name='city'
              id='city'
              maxLength='28'
              required
              onChange={changeHandler}
              value={currentState.city}
              onBlur={onBlurHandler}
            />
          </label>
        </div>

        <div className='container'>
          <label htmlFor='countryState'>
            Estado:
            <select
              name='countryState'
              id='countryState'
              required
              onChange={changeHandler}
              defaultValue=''
            >
              <option value=''>Selecione</option>
              {states.map((state) => (
                <option key={state}>{state}</option>
              ))}
            </select>
          </label>
        </div>

        <div className='container'>
          <label htmlFor='house'>
            <input
              type='radio'
              name='addressType'
              id='house'
              value='house'
              required
              onChange={changeHandler}
            />
            Casa
          </label>

          <label htmlFor='apart'>
            <input
              type='radio'
              name='addressType'
              id='apart'
              value='apartment'
              required
              onChange={changeHandler}
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

export default PersonalInfo;
