
import React, { useContext } from 'react';
import { View, ScrollView, Text, Image, Button, StyleSheet } from 'react-native';
import { PokemonContext } from '../../contexts/pokemons';
import getPokemonData from './api'
import {
    PokemonImg
} from './estilo'

export default props => {
    const {pokemonEscolhido, setPokemonEscolhido} = useContext(PokemonContext)
    const {numPokemon, setNumPokemon} = useContext(PokemonContext)
    const randomNumPokemon = Math.floor(Math.random() * 905) + 1;

    const getTypes = (tiposPokemon) => {
        return (
            <View>
                {tiposPokemon.map( pokemon => (
                    <Text style={styles.pokemonPeso} key={pokemon.slot}>Tipo: {pokemon.type.name}</Text>
                ))}
            </View>
        )
    }

    return (
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.topo}>
                <Text style={styles.topoTitulo}>POKEMONPEDIA</Text>
                <Text style={styles.topoSubTitulo}>Tenha informações dos pokemons de todas as gerações de forma aleatória</Text>
            </View>

            {pokemonEscolhido != null && (
                <View style={styles.pokemonBox}>
                    <Text style={styles.pokemonNome}>Nome: {pokemonEscolhido.nome} - {numPokemon}</Text>
                    <Text style={styles.pokemonPeso}>Peso: {pokemonEscolhido.peso}</Text>
                    {getTypes(pokemonEscolhido.tipos)}
                    <View style={styles.pokemonContainerImg}>
                        <PokemonImg resizeMode="stretch" source={{uri:pokemonEscolhido.img}}/>
                    </View>
                </View>
            )}
            
            <View style={styles.cardContainer}>
                <Button color={'#3d7dca'} title="GERAR POKEMON" onPress={() => getPokemonData(randomNumPokemon, setPokemonEscolhido, setNumPokemon)}/>
            </View>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
    },
  topo: { 
    height: 150,
    padding: 5,
    paddingTop: 40,
    marginBottom: 20,
    backgroundColor: '#ffcb05',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
    },
  topoTitulo: { 
    fontSize: 22, 
    marginBottom: 10, 
    fontWeight: 'bold', 
    color: '#003a70', 
    textAlign: 'center'
    },
  topoSubTitulo: { 
    fontSize: 16, 
    color: '#003a70', 
    textAlign: 'center'
    },
  cardContainer: { 
    borderWidth: 1, 
    borderColor: '#d5d5d5', 
    borderRadius: 4, 
    marginBottom: 10, 
    marginHorizontal: 20, 
    padding: 10 
    },
  cardTitle: { 
    fontSize: 22, 
    marginBottom: 20, 
    textAlign: 'center', 
    color: '#656565'
    },
  pokemonBox: { 
    alignItems: 'center' 
    },
  pokemonNome: { 
    fontSize: 22 
    },
  pokemonPeso: { 
    fontSize: 18 
    },
  pokemonContainerImg: {
    borderRadius: 5, 
    margin: 10, 
    backgroundColor: '#F2F2F2', 
    padding: 5
    }
});