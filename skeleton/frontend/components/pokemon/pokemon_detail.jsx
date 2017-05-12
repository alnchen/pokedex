import React from 'react';


class PokemonDetail extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId)
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId){
    this.props.requestSinglePokemon(newProps.match.params.pokemonId);
  }}


  render() {
    let moves = ""
    if (this.props.pokemonDetail.moves){
      moves = this.props.pokemonDetail.moves.join(" ")
    }

    let items = ""
    if (this.props.pokemonDetail.items){
      items = this.props.pokemonDetail.items.map((item) => {
      return <img src={item.image_url}/>
    }
  )}
    // console.log(this.props.pokemonDetail.moves instanceof Array);
    return (
      <div className="onePokemon">
        <img src={this.props.pokemonDetail.image_url}></img>
        <h1>Name: {this.props.pokemonDetail.name}</h1>
        <h1>Attack: {this.props.pokemonDetail.attack}</h1>
        <h1>Defense: {this.props.pokemonDetail.defense}</h1>
        <h1>Moves: {moves}</h1>
        <h1>Type: {this.props.pokemonDetail.poke_type}</h1>
        {items}
      </div>
    )
  }
}

export default PokemonDetail;


// :id, :name, :attack, :defense, :moves, :poke_type
