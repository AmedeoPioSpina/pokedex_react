import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./reset.css";
import "./style.css";
import PokedexSearch from "./PokedexSearch";
import PokedexResult from "./PokedexResult";

const Pokedex = () => {

    const [pkData, setPkData] = useState({});

    useEffect(()=>{
        console.log(pkData)
    },[pkData])

    return(
        <div className="pokedex">

            <h1>Pokédex</h1>

            <PokedexSearch setPkData={setPkData} />

            <PokedexResult pkData={pkData} />
        </div>
    );

}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Pokedex/>);