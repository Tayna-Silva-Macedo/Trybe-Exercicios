import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './Pokedex.css';

class Pokedex extends React.Component {
  state = {
    indicePokemon: 0,
    tipoFiltrado: 'all',
  };

  proximoPokemon = (numeroDePokemons) => {
    this.setState((estadoAnterior) => ({
      indicePokemon: (estadoAnterior.indicePokemon + 1) % numeroDePokemons,
    }));
  };

  filtrarPokemons = (tipoFiltrado) => {
    this.setState({
      indicePokemon: 0,
      tipoFiltrado,
    });
  };

  buscarPokemonsFiltrados = () => {
    const { pokemons } = this.props;
    const { tipoFiltrado } = this.state;

    return pokemons.filter((pokemon) => {
      if (tipoFiltrado === 'all') {
        return true;
      }
      return pokemon.type === tipoFiltrado;
    });
  };

  buscarTiposPokemon = () => {
    const { pokemons } = this.props;

    return [...new Set(pokemons.reduce((acc, { type }) => [...acc, type], []))];
  };

  render() {
    const pokemonsFiltrados = this.buscarPokemonsFiltrados();
    const tiposPokemon = this.buscarTiposPokemon();
    const pokemon = pokemonsFiltrados[this.state.indicePokemon];

    return (
      <div className='pokedex'>
        <Pokemon pokemon={pokemon} />
        <div className='pokedex-buttons-panel'>
          <Button
            onClick={() => this.filtrarPokemons('all')}
            className='filter-button'
          >
            All
          </Button>
          {tiposPokemon.map((tipo) => (
            <Button
              key={tipo}
              onClick={() => this.filtrarPokemons(tipo)}
              className='filter-button'
            >
              {tipo}
            </Button>
          ))}
        </div>
        <Button
          className='pokedex-button'
          onClick={() => this.proximoPokemon(pokemonsFiltrados.length)}
          disabled={pokemonsFiltrados.length <= 1}
        >
          Próximo Pokémon
        </Button>
      </div>
    );
  }
}

export default Pokedex;
