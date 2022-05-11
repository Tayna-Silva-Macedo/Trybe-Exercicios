import React from 'react';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';

class Form extends React.Component {
  render() {
    const { changeHandler, onBlurHandler, currentState } = this.props;

    return (
      <form>
        <PersonalInfo
          changeHandler={changeHandler}
          onBlurHandler={onBlurHandler}
          currentState={currentState}
        />

        <ProfessionalInfo changeHandler={changeHandler} />
      </form>
    );
  }
}

export default Form;
