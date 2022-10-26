import axios from "axios";
import { useEffect, useState } from "react";
import { version } from "react-dom";
import { checkTrg } from "./checkTrg";

const PkdResult = (props) => {
    
    let {pkData} = props;
    
    if(pkData===""){return}
    return <PkdResultFound pkData={pkData}/>
}

export default PkdResult;

const PkdResultFound = (props) => {

    let {pkData} = props;
  
    const setPkTypeText = () =>{
        if(pkData.types.length==1){
            return pkData.types[0].type.name;
        }
        return pkData.types[0].type.name + " / " + pkData.types[1].type.name 
    };

    const [pkLocationArea, setPkLocationArea] = useState([]);

    const pkLocationAreaFetch = async() => {
        const result = await axios({
            method: "get",
            url: pkData.location_area_encounters,
            responseType: "json"
        })
        .then((res) => res.data)
        .catch((err) => alert(err));
        return result;
    }

    const getVersionsAndLocation = async() =>{
        console.log("inizio")
        const pkLocationData = await pkLocationAreaFetch()
        let dynamicVersionsList = [];

        pkLocationData.map((element) => {

            console.log(element)
            element.version_details.map((el) => {

                let resultCheck = checkTrg(dynamicVersionsList, el.version.name)
                if(resultCheck!==-1){
                    setPkLocationArea(prev => {prev[resultCheck].push(element.location_area.name)})
                }
                else{
                    dynamicVersionsList.push(el.version.name);
                    setPkLocationArea(prev => {prev.push([el.version.name, element.location_area.name])})
                }
            })
        })
        console.log(pkLocationArea)
        console.log("fine")
    }

    return(
        <>
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
                    <img src={pkData.sprites.front_default} alt="" />
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
                            {setPkTypeText()}
                        </p>
                    </div>
                </div>

                <div className="location-area">
                    LOCATION AERA:
                    <button onClick={async() => { await getVersionsAndLocation()}}>X</button>
                        {
                            
                        }
                </div>
            </>
    );
}