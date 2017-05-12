import values from 'lodash/values';
//why selectors

const selectAllPokemon = (state) => {
  return values(state.pokemon)
};

const selectPokemonItem = (state, itemId) => {
  return state.pokemonDetail.items.find((item) => {
    (item.id === itemId)
  })
};

export default selectAllPokemon;
