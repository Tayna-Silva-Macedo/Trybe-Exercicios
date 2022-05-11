import React from 'react';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';

class Form extends React.Component {
  render() {
    const { changeHandler, onBlurHandler, currentState, sendForm, resetForm } =
      this.props;

    return (
      <form>
        <PersonalInfo
          changeHandler={changeHandler}
          onBlurHandler={onBlurHandler}
          currentState={currentState}
        />

        <ProfessionalInfo changeHandler={changeHandler} />

        <button type='submit' onClick={sendForm}>
          Enviar
        </button>

        <button type='reset' onClick={resetForm}>
          Limpar
        </button>
      </form>
    );
  }
}

export default Form;
