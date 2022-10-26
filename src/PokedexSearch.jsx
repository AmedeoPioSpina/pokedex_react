import { useState } from "react";
import axios from "axios";

const PokedexSearch = ({setPkData}) => {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const inputFetch = async() => {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then((res) => res.data)
            .catch((e) => alert(e));
        return result
    }

    const handleClick = async() => {
        await setPkData(await inputFetch());
        console.log(await inputFetch())
        setInputValue("");
    }

    return(
        <div className="pokedex-search">
                <input onChange={(e) => {handleChange(e)}} value={inputValue}/>
                <button onClick={async() => {await handleClick()}}>search</button>
        </div>
    )
}

export default PokedexSearch;