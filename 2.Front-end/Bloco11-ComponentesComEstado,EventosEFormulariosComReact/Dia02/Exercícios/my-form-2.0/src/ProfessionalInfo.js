import React from 'react';

class ProfessionalInfo extends React.Component {
  render() {
    const { changeHandler } = this.props;

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
              required
              onChange={changeHandler}
              onMouseEnter={() => {
                alert('Preencha com cuidado esta informação.');
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
