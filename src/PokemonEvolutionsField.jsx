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
        const urlsEvolutions = [];
        let curr = evolutionsData.species;
        let next = evolutionsData.evolves_to;

        do{
            urlsEvolutions.push(curr);
            if(Object.values(next).length!==0){
                curr = next.species;
                console.log(next.evolves_to)
                next = next.evolves_to
            }
        }while(Object.values(next).length!==0)

        console.log(urlsEvolutions)
    }

    useEffect(() => {
        (async()=>{
            await evolutionsAcquisition();
            
        })()
    },[pkData])

    return(
        <>
        </>
    )
}

export default PokemonEvolutionsField;