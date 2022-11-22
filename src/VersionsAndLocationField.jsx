import { useEffect, useState } from "react"

const VersionsAndLocationField = ({versionsAndLocationArea}) => {

    const[personalizeClickInfo , setPersonalizeClickInfo] = useState([false]);

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