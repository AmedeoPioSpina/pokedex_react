import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./reset.css";
import "./style.css";
import PkdResult from "./pkd-result";
import axios from "axios";

const Pokedex = () => {

    const [inputValue, setInputValue] = useState("");
    const [pkData, setPkData] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const inputFetch = async() => {
        const result = await axios({
            method: 'get',
            url: `https://pokeapi.co/api/v2/pokemon/${inputValue}`,
            responseType: 'json'
          })
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
        <div className="pokedex">

            <h1>Pokédex</h1>

            <div className="pkd-search">
                <input onChange={(e) => {handleChange(e)}} value={inputValue}/>
                <button onClick={async() => {await handleClick()}}>search</button>
            </div>

            <div className="pkd-result">
                <PkdResult pkData={pkData} />
            </div>
        </div>
    );

}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Pokedex/>);