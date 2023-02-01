import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import PokedexSearch from "./PokedexSearch";
import axios from "axios";
import PokedexResult from "./PokedexResult";
import "./style.css";

const Pokedex = () => {

    const [pkData, setPkData] = useState({});
    const [pkDataPrev, setPkDataPrev] = useState({});
    const [pkDataNext, setPkDataNext] = useState({});

    useEffect(()=>{
        console.log(pkData)
    },[pkData])

    return(
        <div className="pokedex">

            <h1>Pokédex</h1>

            <PokedexSearch pkData={pkData} setPkData={setPkData} setPkDataPrev={setPkDataPrev} setPkDataNext={setPkDataNext} />

            <PokedexResult pkData={pkData} setPkData={setPkData} pkDataPrev={pkDataPrev} setPkDataPrev={setPkDataPrev} pkDataNext={pkDataNext} setPkDataNext={setPkDataNext}/>

        </div>
    );

}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Pokedex/>);