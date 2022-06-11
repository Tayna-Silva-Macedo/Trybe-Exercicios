import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRegisterAction } from '../redux/actions';

class Register extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  };

  handleClick = (event) => {
    const { addRegister } = this.props;
    event.preventDefault();
    addRegister(this.state);
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;
    return (
      <div>
        {!userLogin.email ? (
          <p>Login não efetuado!</p>
        ) : (
          <>
            <label htmlFor='name'>
              Nome:
              <input
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={this.handleInput}
              />
            </label>
            <label htmlFor='age'>
              Idade:
              <input
                type='number'
                name='age'
                id='age'
                value={age}
                onChange={this.handleInput}
              />
            </label>
            <label htmlFor='email'>
              E-mail:
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={this.handleInput}
              />
            </label>
            <button type='submit' onClick={this.handleClick}>
              Cadastrar
            </button>
            <Link to='/customers'>
              <button>Clientes cadastrados</button>
            </Link>
          </>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRegister: (state) => dispatch(addRegisterAction(state)),
});

const mapStateToProps = (state) => ({
  userLogin: state.loginReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
