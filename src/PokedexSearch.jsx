import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const PokedexSearch = ({pkData, setPkData, setPkDataPrev, setPkDataNext}) => {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = async() => {
        setPkData(await fetchInput());
        setInputValue("");
    }
    
    const fetchInput = async() => {
        const lowerCaseInput = inputValue.toLowerCase();
        const resutl = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lowerCaseInput}`)
        .then((res) => res.data)
        .catch((err) => err);
        return resutl;
    }

    return (
        <div className="pokedex-input">
            <input onChange={(e) => {handleChange(e)}} value={inputValue}/>
            <button onClick={() => {handleClick()}}>search</button>
        </div>
    )
}

export default PokedexSearch;