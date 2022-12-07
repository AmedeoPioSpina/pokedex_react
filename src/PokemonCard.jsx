import axios from "axios";
import { useEffect, useState } from "react";
import EvolutionsField from "./EvolutionsField";
import ImageField from "./ImageField";
import { orderLocationAreaEncounters } from "./orderLocationAreaEncounters";
import { textFormatFunc } from "./textFormatFunc";
import VersionsAndLocationField from "./VersionsAndLocationField";

const PokemonCard = ({pkData}) => {
    
    const pkTypeText = () =>{
        if(pkData.types.length===1){
            return textFormatFunc(pkData.types[0].type.name, "upperCase");
        }
        return textFormatFunc(pkData.types[0].type.name, "upperCase") + " / " + textFormatFunc(pkData.types[1].type.name, "upperCase")
    }
    
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
                            {textFormatFunc(pkData.name, "upperCase")}
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

                <div className="evolutionary-chain">
                    EVOLUTIONARY CHAIN:
                    <EvolutionsField pkData={pkData}/>
                </div>
            </div>
    )
}

export default PokemonCard;