import { firstLetterToUpperCaseFormatFunc } from "./firstLetterToUpperCaseFormatFunc";

const PokemonCard = ({pkData}) => {

    return (
        <div className="pokemon-card">
            <div className="identifier-section">
                <div className="name-field">
                    <p>{firstLetterToUpperCaseFormatFunc(pkData.name)}</p>
                </div>

                <div className="identification-number-field">
                    <p>{`N° ${pkData.id}`}</p>
                </div>
            </div>


        </div>
    )
}

export default PokemonCard;