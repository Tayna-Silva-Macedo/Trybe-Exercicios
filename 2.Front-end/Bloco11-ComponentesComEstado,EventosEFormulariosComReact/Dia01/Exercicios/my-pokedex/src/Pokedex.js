import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.proximoPokemon = this.proximoPokemon.bind(this);

    this.state = {
      indicePokemon: 0,
    };
  }

  proximoPokemon() {
    const qtdPokemons = this.props.pokemons.length;
    const { indicePokemon } = this.state;

    if (indicePokemon < qtdPokemons - 1) {
      this.setState((estadoAnterior) => ({
        indicePokemon: estadoAnterior.indicePokemon + 1,
      }));
    } else {
      this.setState({
        indicePokemon: 0,
      });
    }
  }

  render() {
    const arrayPokemons = this.props.pokemons;
    const pokemon = arrayPokemons[this.state.indicePokemon];
    console.log(pokemon);

    return (
      <div className='pokedex'>
        <Pokemon pokemon={pokemon} />
        <button onClick={this.proximoPokemon}>Próximo Pokemón</button>

        {/* {arrayPokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))} */}
      </div>
    );
  }
}

export default Pokedex;
