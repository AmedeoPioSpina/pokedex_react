import axios from "axios";
import { useEffect, useState } from "react";
import { orderLocationAreaEncounters } from "./orderLocationAreaEncounters";
import VersionsAndLocationField from "./VersionsAndLocationField";

const PokemonCard = ({pkData}) => {
    
    const [pkLocationArea, setPkLocationArea] = useState([]);
    const [versionsAndLocationArea, setVersionsAndLocationArea] = useState([]);
    
    const pkTypeText = () =>{
        if(pkData.types.length===1){
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
                }, [pkData])
                
    useEffect(() => {
            console.log(versionsAndLocationArea)
            let versionList = [];
            versionsAndLocationArea.map((element) =>{
                element.map((el, index) => {
                        if(index===0){versionList.push(el)}
                    })
            })
            setPkLocationArea([...versionList]);
    },[versionsAndLocationArea])

    useEffect(()=>{
        console.log(pkLocationArea)
    },[pkLocationArea])
    
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
                            <VersionsAndLocationField versionsAndLocationArea={versionsAndLocationArea} />
                        </ul>
                </div>
            </div>
    )
}

export default PokemonCard;