import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletRegisterAction } from '../redux/actions';

class Customers extends React.Component {
  state = {
    ordened: false,
  };

  generateRegisters = (array) =>
    array.map((customer, index) => (
      <div key={index}>
        <p>Nome: {customer.name}</p>
        <p>Idade: {customer.age}</p>
        <p>E-mail: {customer.email}</p>
        <button onClick={() => this.props.deleteCustomer(customer)}>X</button>
      </div>
    ));

  orderCustumers = () => {
    const { customers } = this.props;
    const ordened = [...customers];
    ordened.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;

      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    });
    return ordened;
  };

  render() {
    const {
      customers,
      login: { email },
    } = this.props;
    const { ordened } = this.state;

    if (!email) return <p>Login não efetuado!</p>;

    if (customers.length === 0) {
      return (
        <div>
          <p>Nenhum cliente cadastrado</p>
          <Link to='/register'>Cadastre agora!</Link>
        </div>
      );
    }
    return (
      <div>
        <Link to='/register'>Cadastre outros!</Link>
        <button
          onClick={() =>
            this.setState((state) => ({ ordened: !state.ordened }))
          }
        >
          Ordenar
        </button>
        <div>
          {this.generateRegisters(ordened ? this.orderCustumers() : customers)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.registerReducer,
  login: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCustomer: (event) => dispatch(deletRegisterAction(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
