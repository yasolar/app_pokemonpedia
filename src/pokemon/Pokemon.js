
import React, { useContext } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { PokemonContext } from '../../contexts/pokemons';
import getPokemonData from './api';
// import img from '../imgs'
import {
    PokemonImg,
    CaixaPrincipal,
    CaixaTopo,
    TopoTitulo,
    TopoSubTitulo,
    CaixaPokemon,
    PokemonNumero,
    PokemonTitulo,
    CaixaPokeImg,
    PokemonTipo,
    CaixaBtn,
    BtnGerarPoke,
    BtnTitulo

} from './estilo';

export default props => {
    const {pokemonEscolhido, setPokemonEscolhido} = useContext(PokemonContext)
    const {numPokemon, setNumPokemon} = useContext(PokemonContext)
    const randomNumPokemon = Math.floor(Math.random() * 905) + 1;

    const setTypes = (tiposPokemon) => {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
              {tiposPokemon == null ?
                <>
                  <PokemonTipo style={{backgroundColor: setColorTypes('padrao1')}}>---</PokemonTipo>
                  <PokemonTipo style={{backgroundColor: setColorTypes('padrao2')}}>---</PokemonTipo>
                </>
              :
                tiposPokemon.map( pokemon => (
                  <PokemonTipo style={{backgroundColor: setColorTypes(pokemon.type.name)}} key={pokemon.slot}>{pokemon.type.name}</PokemonTipo>
                ))

              }
            </View>
        )
    }

    const setColorTypes = (type) => {
      if (type == 'padrao1') {
        return '#808080'
      } else if (type == 'padrao2') {
        return '#A9A9A9'
      } else {
        const obj = colorType.find( item => item.type == type)
        if (obj) {
          return obj.color
        } else {
          return '#808080'
        }
      }
    }

    return (
        <CaixaPrincipal>
          <ScrollView>
              <CaixaTopo>
                  <TopoTitulo>POKEMONPEDIA</TopoTitulo>
                  <TopoSubTitulo>Tenha informações dos pokémons de todas as gerações de forma aleatória</TopoSubTitulo>
              </CaixaTopo>

              
              <CaixaPokemon>
                <CaixaPokeImg>
                  <PokemonImg resizeMode="stretch" source={pokemonEscolhido == null ? require('../imgs/questionMark.png') : {uri:pokemonEscolhido.img}}/>
                </CaixaPokeImg>
                <PokemonNumero>Nº {pokemonEscolhido == null ? '???' : numPokemon}</PokemonNumero>
                <PokemonTitulo>{pokemonEscolhido == null ? '-  -  -' : pokemonEscolhido.nome}</PokemonTitulo>
                {setTypes(pokemonEscolhido == null ? pokemonEscolhido : pokemonEscolhido.tipos)}
              </CaixaPokemon>
              
              <CaixaBtn>
                  <BtnGerarPoke onPress={() => getPokemonData(randomNumPokemon, setPokemonEscolhido, setNumPokemon)}>
                    <BtnTitulo>GERAR POKÉMON</BtnTitulo>
                  </BtnGerarPoke>  
              </CaixaBtn>
          </ScrollView>
        </CaixaPrincipal>
    );
}

const colorType = [
  {
    "type": "bug",
    "color": "#97C32E",
  },
  {
    "type": "dark",
    "color": "#646375",
  },
  {
    "type": "dragon",
    "color": "#0873BF",
  },
  {
    "type": "electric",
    "color": "#F6D957",
  },
  {
    "type": "fairy",
    "color": "#EE99E1",
  },
  {
    "type": "fighting",
    "color": "#D7425E",
  },
  {
    "type": "fire",
    "color": "#FF9F3B",
  },
  {
    "type": "flying",
    "color": "#98B3E4",
  },
  {
    "type": "ghost",
    "color": "#626DBD",
  },
  {
    "type": "grass",
    "color": "#5EBC61",
  },
  {
    "type": "ground",
    "color": "#D78757",
  },
  {
    "type": "ice",
    "color": "#7AD2C7",
  },
  {
    "type": "normal",
    "color": "#9DA2A5",
  },
  {
    "type": "poison",
    "color": "#B869CF",
  },
  {
    "type": "psychic",
    "color": "#FA7A7B",
  },
  {
    "type": "rock",
    "color": "#CBBD8D",
  },
  {
    "type": "steel",
    "color": "#589DA9",
  },
  {
    "type": "water",
    "color": "#5CA6DC",
  },
]