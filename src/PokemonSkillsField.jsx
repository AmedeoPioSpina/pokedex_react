import { firstLetterToUpperCaseFormatFunc } from "./firstLetterToUpperCaseFormatFunc"

const PokemonSkillsField = ({pkData}) => {
    const pokemonAbilitiesList = pkData.abilities.map((element, index) =>{
        return <li key={index}>{firstLetterToUpperCaseFormatFunc(element.ability.name)}</li>
    })

    return(
        <>
            {pokemonAbilitiesList}
        </>
    )
}

export default PokemonSkillsField;