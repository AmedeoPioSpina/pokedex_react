import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { firstLetterToUpperCaseFormatFunc } from "./firstLetterToUpperCaseFormatFunc";

const PokemonWeaknessesField = ({pkData}) => {

    const [pkWeaknessesData, setPkWeaknessesData] = useState([]);

    const fetchType = async(url) => {
        const result = await axios.get(url)
        .then((res) => res.data.damage_relations)
        .catch((err) => alert(err));
        return result;
    }

    const weaknessesAcquisition = async() => {
        const pkWeaknessesDataArray = [];
        const pkImmunityDataArray = [];
        

        const typeOneData = await fetchType(pkData.types[0].type.url)
        pkWeaknessesDataArray.push(...typeOneData.double_damage_from);
        if(typeOneData.no_damage_from.length !== 0){
            pkImmunityDataArray.push(...typeOneData.no_damage_from)
        }


        if(Object.values(pkData.types).length === 2){
            const typeTwoData = await fetchType(pkData.types[1].type.url)
            pkWeaknessesDataArray.push(...typeTwoData.double_damage_from);
            if(typeTwoData.no_damage_from.length !== 0){
                pkImmunityDataArray.push(...typeTwoData.no_damage_from)
            }
        }

        const indexClonesArray = [];

        pkWeaknessesDataArray.map((element, index) => {
            pkWeaknessesDataArray.filter((el, ind) => {
                if(el.name === element.name && index < ind){
                    return indexClonesArray.push([index, ind, element.name + " x4"])
                }
                return false;
            })
        })

        indexClonesArray.map((element) => {
            pkWeaknessesDataArray.splice(element[1], 1)
            return pkWeaknessesDataArray[element[0]].name = element[2]
        })

        let modifiedPkWeaknessesDataArray = [...pkWeaknessesDataArray]

        pkImmunityDataArray.map((element) => {
            const result = modifiedPkWeaknessesDataArray.filter((el) => el.name !== element.name)
            return modifiedPkWeaknessesDataArray = [...result];
        })

        setPkWeaknessesData([...modifiedPkWeaknessesDataArray]);

    }

    useEffect(() => {
        (async() => {
                await weaknessesAcquisition();
            }
        )();
    },[pkData])

    return(
        <>
            {
                Object.values(pkWeaknessesData).length!==0 ? (
                    Object.values(pkWeaknessesData).map((element, index) => {
                        return <li className={element.name} key={index}>{firstLetterToUpperCaseFormatFunc(element.name)}</li>
                    })
                ) : (<li></li>)
            }
        </>
    )
}

export default PokemonWeaknessesField;