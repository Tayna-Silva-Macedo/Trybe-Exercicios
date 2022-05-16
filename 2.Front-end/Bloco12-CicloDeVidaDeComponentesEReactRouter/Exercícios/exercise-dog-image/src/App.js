import React from 'react';

class App extends React.Component {
  state = {
    data: '',
    name: '',
    array: [],
  };

  componentDidMount() {
    if (localStorage.namedDogURL) {
      const parseStorage = JSON.parse(localStorage.namedDogURL);
      const lastDog = parseStorage[parseStorage.length - 1];

      this.setState({
        array: parseStorage,
        data: lastDog.data,
      });
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.data.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate(_prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data !== data) {
      const dogBreed = data.split('/')[4];
      alert(dogBreed);
    }
  }

  fetchDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      data: data.message,
    });
  };

  handleChange = ({ target }) => {
    this.setState({
      name: target.value,
    });
  };

  saveData = () => {
    const { data, name, array } = this.state;

    const dogData = { data, name };
    const newArray = [...array, dogData];
    this.setState({
      array: newArray,
      name: '',
    });

    localStorage.setItem('namedDogURL', JSON.stringify(newArray));
  };

  deleteData = () => {
    this.setState({
      array: [],
    });
    localStorage.clear();
  }

  render() {
    const { data, name } = this.state;

    if (data === '') return 'Loading...';

    return (
      <div>
        <p>Doguinhos</p>
        <button type="button" onClick={ this.fetchDog }>
          Novo doguinho!
        </button>
        <div>
          <input
            type="text"
            value={ name }
            onChange={ this.handleChange }
            placeholder="Digite o nome do doguinho"
          />
          <button type="button" onClick={ this.saveData }>
            Salvar doguinho!
          </button>
        </div>
        <div>
          <button type="button" onClick={ this.deleteData }>Limpar lista!</button>
        </div>
        <div>
          <img src={ data } alt="Doguinho aleatório" />
        </div>
      </div>
    );
  }
}

export default App;
