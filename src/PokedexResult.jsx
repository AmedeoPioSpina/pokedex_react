import PokemonCard from "./PokemonCard";

const PokedexResult = ({pkData}) =>{
    console.log(pkData.length)
    if(pkData.length===0){
        return ;
    }
    else{
        return <PokemonCard pkData={pkData}/>
    }
}

export default PokedexResult;