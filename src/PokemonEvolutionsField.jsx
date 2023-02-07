import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { firstLetterToUpperCaseFormatFunc } from "./firstLetterToUpperCaseFormatFunc";

const PokemonEvolutionsField = ({pkData}) => {

    const [pkEvolutionsData, setPkEvolutionsData] = useState([]);

    const fetchEvolutionChain = async() => {
        const result = await axios.get(pkData.species.url)
        .then(async(res) => 
            await axios.get(res.data.evolution_chain.url)
            .then((resp) => resp.data.chain)
            .catch((err) => alert(err))    
        )
        .catch((err) => alert(err));
        return result;
    }

    const fetchPokemon = async(url) => {
        const result = await axios.get(url)
        .then((res) => res.data)
        .catch((err) => alert(err));
        return result;
    }

    const evolutionsAcquisition = async() => {
        const evolutionsData = await fetchEvolutionChain();
        console.log(evolutionsData);
        const evolutions = [];
        let curr = evolutionsData.species;
        let next = evolutionsData.evolves_to;

        evolutions.push(curr.name);
        if(next.length!==0){
            evolutions.push([]);
            next.map((element) => {
                evolutions[1].push(element.species.name);
                if(element.evolves_to.length!==0){
                    evolutions.push([]);
                    element.evolves_to.map((el) => evolutions[2].push(el.species.name))
                }
            })

        }
        console.log(evolutions)
        setPkEvolutionsData([...evolutions]);
        
    }

    useEffect(() => {
        (async()=>{
            await evolutionsAcquisition();
            
        })()
    },[pkData])

    useEffect(() => {
        console.log(pkEvolutionsData)
    },[pkEvolutionsData])

    return(
        <>
            {
                pkEvolutionsData.length!==0 ? (
                    Object.values(pkEvolutionsData).map((element, index) => {
                        if(index===1 && element.length!==0){
                            return  (
                                <>
                                    <img src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="" />
                                    {element.map((el) => <li key={el}>{firstLetterToUpperCaseFormatFunc(el)}</li>)}
                                </>
                            )
                        }
                        else if(index===2 && element.length!==0){
                            return  (
                                <>
                                    <img src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="" />
                                    {element.map((el) => <li key={el}>{firstLetterToUpperCaseFormatFunc(el)}</li>)}
                                </>
                            )
                        }
                        return <li key={element}>{firstLetterToUpperCaseFormatFunc(element)}</li>
                    })
                ) : (<li></li>)
            }
        </>
    )

}

export default PokemonEvolutionsField;