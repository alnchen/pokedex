export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/pokemon/'
  })
}

export const fetchSinglePokemon = (id) => {
  return $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/pokemon/${id}`
  })
}
