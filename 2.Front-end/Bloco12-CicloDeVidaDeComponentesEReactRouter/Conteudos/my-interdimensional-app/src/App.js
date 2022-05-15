import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    characters: [],
  };

  fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();

    this.setState({
      characters: data.results,
    });
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;

    return (
      <div className='App'>
        <h1>Ricky and Morty Characters:</h1>
        <div className='body'>
          {characters.map(({ name, image }) => {
            return (
              <div key={name} className='container'>
                <h3>{name}</h3>
                <img src={image} alt={name} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
