import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Bem-vindo ao sistema de cadastramento!</p>
        <Link to='/login'>Faça seu login</Link>
      </div>
    );
  }
}

export default Home;
