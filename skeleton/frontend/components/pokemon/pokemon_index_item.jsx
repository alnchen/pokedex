import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => (
    <li>
      <Link to={`/pokemon/${props.pokemonId}`}>
        <img width="100px"  src={props.pokemon.image_url}></img>
        {props.pokemon.name}
      </Link>
    </li>
)


export default PokemonIndexItem;
