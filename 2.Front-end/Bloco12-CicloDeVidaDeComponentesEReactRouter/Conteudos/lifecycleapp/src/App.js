// src/App.js
import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Connections from './components/Connections';

class App extends React.Component {
  constructor() {
    // 💡 me preencha!
  }

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    // 💡 está faltando algo aqui!
  }
}

export default App;
