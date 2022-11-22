import axios from "axios";
import { useEffect, useState } from "react";
import ImageField from "./ImageField";
import { orderLocationAreaEncounters } from "./orderLocationAreaEncounters";
import VersionsAndLocationField from "./VersionsAndLocationField";

const PokemonCard = ({pkData}) => {
    
    const pkTypeText = () =>{
        if(pkData.types.length===1){
            return pkData.types[0].type.name;
        }
        return pkData.types[0].type.name + " / " + pkData.types[1].type.name 
    };
    
    return(
        <div className="pokemon-card">
                <div className="pkd-number">
                    <div className="field">
                        N°
                        <p>
                            {pkData.id}
                        </p>
                    </div>
                </div>

                <div className="pk-name">
                    <div className="field">
                        NAME:
                        <p>
                            {pkData.name}
                        </p>
                    </div>
                </div>

                <div className="pk-imgs">
                    <img src="" alt="" />
                    <div className="imgs-btns-choose">
                        <ImageField pkData={pkData}/>
                    </div>
                </div>

                <div className="pk-type">
                    <div className="field">
                        TYPE:
                        <p>
                            {pkTypeText()}
                        </p>
                    </div>
                </div>

                <div className="location-area">
                    LOCATION AERA:
                        <ul>
                            <VersionsAndLocationField pkData={pkData} />
                        </ul>
                </div>
            </div>
    )
}

export default PokemonCard;