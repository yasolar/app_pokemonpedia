import styled from "styled-components/native"


export const CaixaPrincipal = styled.View`
    flex: 1; 
    background-color: #eee;
`;
export const CaixaTopo = styled.View`
    height: 150px;
    padding: 5px;
    padding-top: 40px;
    margin-bottom: 20px;
    background-color: #ffcb05;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;
export const TopoTitulo = styled.Text`
    font-size: 25px; 
    margin-bottom: 10px; 
    font-weight: bold; 
    color: #003a70; 
    text-align: center;
`;
export const TopoSubTitulo = styled.Text`
    font-size: 18px;
    color: #003a70; 
    text-align: center;
    margin-horizontal: 20px;
`;
export const CaixaPokemon = styled.View`
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;
`;
export const CaixaPokeImg = styled.View`
    borderRadius: 5px;
    margin: 10px;
    backgroundColor: #ddd;
    width: 190px; 
    height: 190px;
    align-items: center;
    justify-content: center;
`;
export const PokemonImg = styled.Image`
    width: 160px; 
    height: 160px;
`;
export const PokemonNumero = styled.Text`
    font-size: 15px;
`;
export const PokemonTitulo = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 10px;
`;
export const PokemonTipo = styled.Text`
    color: #fff;
    margin-horizontal: 5px;
    padding: 5px;
    border-radius: 5px;
    width: 80px;
    text-align: center;
    background-color: #808080;
    text-transform: capitalize;
    font-weight: bold;
`;


export const CaixaBtn = styled.View` 
    margin-bottom: 10px;
    margin-horizontal: 10px;
    padding: 10px; 
`;
export const BtnGerarPoke = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    background-color: #3d7dca;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;
export const BtnTitulo = styled.Text`
    color: #fff;
    font-weight: bold;
`;