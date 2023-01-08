import PokemonCard from "./PokemonCard";
import PokemonPrevOrNext from "./PokemonPrevOrNext";

const PokedexResult = ({pkData, setPkData, pkDataPrev, setPkDataPrev, pkDataNext, setPkDataNext}) => {
    if(Object.values(pkData).length === 0){}
    else if(pkData.name === 'AxiosError'){
        return (
            <div className="pokedex-result">
                <p>{pkData.response.data}</p>
            </div>
        )
    }
    else{
        return (
            <div className="pokedex-result">
                <PokemonPrevOrNext pkData={pkData} setPkData={setPkData} pkDataPrev={pkDataPrev} setPkDataPrev={setPkDataPrev} pkDataNext={pkDataNext} setPkDataNext={setPkDataNext} />
                <PokemonCard pkData={pkData} />
            </div>
        )
    }
}

export default PokedexResult;