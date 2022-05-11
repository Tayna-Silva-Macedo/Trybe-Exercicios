import React from 'react';
import PersonalInfo from './PersonalInfo';

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
      </form>
    );
  }
}

export default Form;
