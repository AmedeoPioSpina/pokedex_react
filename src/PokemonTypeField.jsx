import { firstLetterToUpperCaseFormatFunc } from "./firstLetterToUpperCaseFormatFunc";

const PokemonTypeField = ({pkData}) => {
    if(pkData.types.length === 1 ) {
        return (
                <li className={`type-one ${pkData.types[0].type.name}`}>
                    {firstLetterToUpperCaseFormatFunc(pkData.types[0].type.name)}
                </li>
        )
    }

    return(
        <>
            <li className={`type-one ${pkData.types[0].type.name}`} >
                {firstLetterToUpperCaseFormatFunc(pkData.types[0].type.name)}
            </li>
            <li className={`type-two ${pkData.types[1].type.name}`}>
                {firstLetterToUpperCaseFormatFunc(pkData.types[1].type.name)}
            </li>
        </>
    )
}

export default PokemonTypeField;