import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleClick = (event) => {
    event.preventDefault();
    const { history, login } = this.props;
    login(this.state);
    history.push('/customers');
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <label htmlFor='email'>
            E-mail:
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={this.handleInput}
            />
          </label>
        </div>
        <div>
          <label htmlFor='password'>
            Senha:
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={this.handleInput}
            />
          </label>
        </div>
        <button type='submit' onClick={this.handleClick}>
          Login
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (event) => dispatch(loginAction(event)),
});

export default connect(null, mapDispatchToProps)(Login);
