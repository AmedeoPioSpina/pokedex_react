import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

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
                            return  
                                <li key={"ev1"}>
                                    <ul key={"ev1list"}>
                                        {element.map((el) => <li key={el.name}>{el.name}</li>)}
                                    </ul>
                                </li>
                        }
                        else if(index===2 && element.length!==0){
                            return  
                                <li key={"ev2"}>
                                    <ul key={"ev2list"}>
                                        {element.map((el) => <li key={el.name}>{el.name}</li>)}
                                    </ul>
                                </li>
                        }
                        return <li key={element}>{element}</li>
                    })
                ) : (<li>ciao</li>)
            }
        </>
    )

}

export default PokemonEvolutionsField;