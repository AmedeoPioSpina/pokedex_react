import { useEffect, useState } from "react"
import axios from "axios";
import { orderLocationAreaEncounters } from "./orderLocationAreaEncounters";
import { textFormatFunc } from "./textFormatFunc";

const VersionsAndLocationField = ({pkData}) => {

    const [versionsAndLocationArea, setVersionsAndLocationArea] = useState([]);
    const [personalizeClickInfo , setPersonalizeClickInfo] = useState([false]);

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
    },[versionsAndLocationArea])

    if(versionsAndLocationArea.length===0){
        return <li>none</li>

    }

    else if(personalizeClickInfo[0]===true){
        return ( 
            versionsAndLocationArea[personalizeClickInfo[2]].map((element, index) => {
                if(index===0){
                    return <li key={index} onClick={(e) => {setPersonalizeClickInfo([false])}}>{textFormatFunc(element, "upperCase") + ":"}</li>
                }
                else if(index === versionsAndLocationArea[personalizeClickInfo[2]].length - 1){ 
                    return <li key={index}>{textFormatFunc(element, "upperCase") + "."}</li>
                }
                return <li key={index}>{textFormatFunc(element, "upperCase") + ","}</li>
            })
        )
    }

    return (
        versionsAndLocationArea.map((element, index) => {
            if(index === versionsAndLocationArea.length - 1){ 
                return <li key={index} onClick={(e) => {setPersonalizeClickInfo([true, textFormatFunc( e.target.textContent, "lowerCase"), versionsAndLocationArea.findIndex((el) => el[0] === e.target.textContent.charAt(0).toLowerCase() + e.target.textContent.slice(1, e.target.textContent.length -1))])}}>{textFormatFunc(element[0], "upperCase") + "."}</li> 
            }
            return <li key={index} onClick={(e) => {setPersonalizeClickInfo([true, textFormatFunc( e.target.textContent, "lowerCase"), versionsAndLocationArea.findIndex((el) => el[0] === textFormatFunc( e.target.textContent, "lowerCase"))])}}>{textFormatFunc(element[0], "upperCase") + ","}</li>
        })
    )
}

export default VersionsAndLocationField;