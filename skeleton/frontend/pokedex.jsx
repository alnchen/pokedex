import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions';
import { fetchAllPokemon, fetchSinglePokemon } from './util/api_util';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';
import Root from './components/root';


window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;
window.fetchSinglePokemon = fetchSinglePokemon;
window.requestSinglePokemon = requestSinglePokemon;



document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore()
  const rootEl = document.getElementById('root');
  window.store = store;
  ReactDOM.render(<Root store={store} />, rootEl);
});
