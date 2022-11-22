import { useEffect, useState } from "react"
import axios from "axios";
import { orderLocationAreaEncounters } from "./orderLocationAreaEncounters";

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
        return 

    }

    else if(personalizeClickInfo[0]===true){
        return ( 
            versionsAndLocationArea[personalizeClickInfo[2]].map((element, index) => {
                if(index===0){
                    return <li key={index} onClick={(e) => {setPersonalizeClickInfo([false])}}>{element}</li>
                }
                return<li key={index}>{element}</li>
            })
        )
    }

    return (
        versionsAndLocationArea.map((element, index) => {
            return <li key={index} onClick={(e) => {setPersonalizeClickInfo([true, e.target.textContent, versionsAndLocationArea.findIndex((el) => el[0] === e.target.textContent)])}}>{element[0]}</li>
        })
    )
}

export default VersionsAndLocationField;