import values from 'lodash/values';
//why selectors

const selectAllPokemon = (state) => {
  return values(state.pokemon)
};

export default selectAllPokemon;
