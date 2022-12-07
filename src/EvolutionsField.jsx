import axios from "axios";
import { useEffect } from "react";

const EvolutionsField = ({pkData}) => {

    const evolutionChainFetch = async() => {
        const result = await axios.get(pkData.species.url)
        .then((res) => res.data.evolution_chain.url)
        .then(async (url) => await axios.get(url).then((res) => res.data))
        .catch((err) => alert(err));
        return result;
    }

    useEffect(() => {
        console.log(evolutionChainFetch());    
    },[pkData])

    return
        
}

export default EvolutionsField;