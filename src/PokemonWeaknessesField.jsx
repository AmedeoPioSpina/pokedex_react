import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { firstLetterToUpperCaseFormatFunc } from "./firstLetterToUpperCaseFormatFunc";

const PokemonWeaknessesField = ({pkData}) => {

    const [pkWeaknessesData, setPkWeaknessesData] = useState([]);

    const fetchType = async(url) => {
        const result = await axios.get(url)
        .then((res) => res.data.damage_relations.double_damage_from)
        .catch((err) => alert(err));
        return result;
    }

    const findClones = (pkWeaknessesDataArray) => {
        const indexClonesArray = [];
        pkWeaknessesDataArray.map((element, index) => {
            const clonesIndex = pkWeaknessesData.filter((el) => el === element)
            if(clonesIndex.length === 1){return}
            return indexClonesArray.push(element)
        })
        console.log(indexClonesArray)
    }

    const weaknessesAcquisition = async() => {
        const pkWeaknessesDataArray = [];

        const typeOneData = await fetchType(pkData.types[0].type.url)
        pkWeaknessesDataArray.push(...typeOneData);


        if(Object.values(pkData.types).length === 2){
            const typeTwoData = await fetchType(pkData.types[1].type.url)
            pkWeaknessesDataArray.push(...typeTwoData);
        }

        findClones(pkWeaknessesDataArray);

        console.log(pkWeaknessesDataArray)

        setPkWeaknessesData([...pkWeaknessesDataArray]);

    }

    useEffect(() => {
        (async() => {
                await weaknessesAcquisition();
            }
        )();
    },[pkData])

    useEffect(() => {
        console.log(pkWeaknessesData)
    },[pkWeaknessesData])

    return(
        <>
            {
                Object.values(pkWeaknessesData).length!==0 ? (
                    Object.values(pkWeaknessesData).map((element, index) => {
                        return <li key={index}>{element.name}</li>
                    })
                ) : (<li></li>)
            }
        </>
    )
}

export default PokemonWeaknessesField;