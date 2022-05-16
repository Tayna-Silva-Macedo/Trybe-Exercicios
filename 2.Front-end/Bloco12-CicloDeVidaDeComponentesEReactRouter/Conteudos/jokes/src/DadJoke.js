import React from 'react';
import Joke from './Joke';

class DadJoke extends React.Component {
  state = {
    jokeObj: undefined,
    loading: true,
    storedJokes: [],
  };

  fetchJoke = async () => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } };
        const requestReturn = await fetch(
          'https://icanhazdadjoke.com/',
          requestHeaders
        );
        const requestObject = await requestReturn.json();
        this.setState({
          jokeObj: requestObject,
          loading: false,
        });
      }
    );
  };

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke = () => {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }));

    this.fetchJoke();
  };

  render() {
    const { storedJokes, loading, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (
            <p key={id}>{joke}</p>
          ))}
        </span>

        <p>
          {loading ? (
            loadingElement
          ) : (
            <Joke jokeObj={jokeObj} saveJoke={this.saveJoke} />
          )}
        </p>
      </div>
    );
  }
}

export default DadJoke;
