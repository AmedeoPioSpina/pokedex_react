import PokemonCard from "./PokemonCard";

const PokedexResult = ({pkData}) =>{
    if(Object.values(pkData).length===0){
        return ;
    }
    else{
        return <PokemonCard pkData={pkData}/>
    }
}

export default PokedexResult;