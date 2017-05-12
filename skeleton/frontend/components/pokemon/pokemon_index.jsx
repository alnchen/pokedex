import React from 'react';
import selectAllPokemon from '../../reducers/selectors';
import PokemonIndexItem from "./pokemon_index_item";
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container'

class PokemonIndex extends React.Component{
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }


  render(){
    const pokemonItems = this.props.pokemon.map( poke =>
      <PokemonIndexItem key={poke.id} pokemonId = {poke.id} pokemon={poke} />);
    return (
    <div className="main">
      <ul className="pokemonList">
        <li className="pokeListItem">{pokemonItems}</li>
      </ul>
      <Route path="/pokemon/:pokemonId" component={ PokemonDetailContainer }/>
    </div>
  )
  }
}

export default PokemonIndex;
