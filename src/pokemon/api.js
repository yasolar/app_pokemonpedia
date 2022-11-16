
import { Alert } from 'react-native';


export default getPokemonData = (idPokemon, setPoke, setNum) =>  {

    setNum(idPokemon)
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`;

    fetch(endpoint)
    .then(resposta => resposta.json())
        .then( json => {
            const pokemon = {
                nome: json.name,
                img: json.sprites.other["official-artwork"].front_default,
                peso: json.weight,
                tipos: json.types,
            };

            setPoke(pokemon);
        })
    .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados do Pokémon');
    });
}