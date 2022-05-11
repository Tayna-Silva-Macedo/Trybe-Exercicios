import React from 'react';

let primeiraVez = true;

class ProfessionalInfo extends React.Component {
  render() {
    const { changeHandler, currentState } = this.props;

    return (
      <fieldset>
        <legend>Dados profissionais:</legend>

        <div className='container'>
          <label htmlFor='resume'>
            Resumo do currículo:
            <textarea
              name='resume'
              id='resume'
              maxLength='1000'
              value={currentState.resume}
              required
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className='container'>
          <label htmlFor='role'>
            Cargo:
            <input
              type='text'
              name='role'
              id='role'
              maxLength='40'
              value={currentState.role}
              required
              onChange={changeHandler}
              onMouseEnter={() => {
                if (primeiraVez) {
                  alert('Preencha com cuidado esta informação!');
                  primeiraVez = false;
                }
              }}
            />
          </label>
        </div>

        <div className='container'>
          <label htmlFor='roleDescription'>
            Descrição do cargo:
            <textarea
              name='roleDescription'
              id='roleDescription'
              maxLength='500'
              value={currentState.roleDescription}
              required
              onChange={changeHandler}
            />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default ProfessionalInfo;
