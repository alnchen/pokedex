import React from 'react';
import selectAllPokemon from '../../reducers/selectors';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.requestAllPokemon();

  }

  render(){
        console.log(this.props);
    return (
    <div>
      <ul>
        {this.props.pokemon.map((pokemon) => (
          <li>{pokemon.name}<img src={pokemon.image_url}></img></li>

        ))}
      </ul>
    </div>
  )
  }
}

export default PokemonIndex;
