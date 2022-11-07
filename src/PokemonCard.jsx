import axios from "axios";
import { useEffect, useState } from "react";
import { orderLocationAreaEncounters } from "./orderLocationAreaEncounters";

const PokemonCard = ({pkData}) => {
    
    const [pkLocationArea, setPkLocationArea] = useState([]);
    const [versionsAndLocationArea, setVersionsAndLocationArea] = useState([]);
    
    const pkTypeText = () =>{
        if(pkData.types.length==1){
            return pkData.types[0].type.name;
        }
        return pkData.types[0].type.name + " / " + pkData.types[1].type.name 
    };

    
    const fetchLocationAreaEncounters = async() => {
        const result = await axios.get(pkData.location_area_encounters)
        .then((res) => res.data)
        .catch((err) => alert(err));
        return result;
    }
    
    useEffect(async() => {
            const pkLocationAreaEncountersData = await fetchLocationAreaEncounters();
            setVersionsAndLocationArea([...orderLocationAreaEncounters(pkLocationAreaEncountersData)]);
            console.log(versionsAndLocationArea)
            versionsAndLocationArea.map((element) =>{
                element.map((el, index) => {
                    if(index===0){setPkLocationArea(prev => prev.push(<p>{el}</p>))}
                })
            })
        }, [pkData])
    
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
                        <button onClick={() => {}}>shiny</button>
                        <button onClick={() => {}}>male</button>
                        <button onClick={() => {}}>female</button>
                        <button onClick={() => {}}>front</button>
                        <button onClick={() => {}}>back</button>
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
                            {
                                pkLocationArea.map(element =>{
                                    return element
                                })
                            }
                        </ul>
                </div>
            </div>
    )
}

export default PokemonCard;