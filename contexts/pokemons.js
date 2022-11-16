import React, {createContext, useState} from 'react';

const PokemonContext = createContext({});

const PokemonProvider = ({children}) => {
    const [ pokemonEscolhido, setPokemonEscolhido ] = useState(null);
    const [ numPokemon, setNumPokemon ] = useState('');
    return(
        <PokemonContext.Provider value={{pokemonEscolhido, setPokemonEscolhido, numPokemon, setNumPokemon}}>
            {children}
        </PokemonContext.Provider>
    )
}

export { PokemonContext, PokemonProvider }