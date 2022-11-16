
import React, { useState } from 'react';
import { PokemonProvider } from '../contexts/pokemons';
import Pokemon from './pokemon/Pokemon'

export default props => {

    return (
        <PokemonProvider>
            <Pokemon />
        </PokemonProvider>
    );
}