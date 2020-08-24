import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/modules/item/actions';

import './card.scss'

function Card({ pokemon }) {
    const dispatch = useDispatch();

    function handleAdd(pokemon) {
        dispatch(addItem(pokemon));
    }

    return (
        <li key={pokemon.name}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <hr/>
            <strong>{pokemon.name}</strong> 
            <span>R$ {pokemon.weight.toFixed(3).slice(0, -1)}</span>

            <button className="btn-add" type="button" onClick={() => handleAdd(pokemon)}>
             ADCIONAR
             </button>
        </li>
    )
}

export default Card;