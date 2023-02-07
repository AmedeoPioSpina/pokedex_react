import { firstLetterToUpperCaseFormatFunc } from "./firstLetterToUpperCaseFormatFunc";
import PokemonEvolutionsField from "./PokemonEvolutionsField";
import PokemonGenderField from "./PokemonGenderField";
import PokemonSkillsField from "./PokemonSkillsField";
import PokemonTypeField from "./PokemonTypeField";
import PokemonWeaknessesField from "./PokemonWeaknessesField";

const PokemonCard = ({pkData}) => {

    const pokemonGenderImageSelect = () => {
        
        if(pkData.sprites.front_default === null){
            return pkData.sprites.front_female
        }
        return pkData.sprites.front_default
    }

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

            <div className="pokemon-image">
                <img src={pokemonGenderImageSelect()} alt="PokemonImage" />
            </div>

            <div className="characteristics">

                <div className="height-field">
                    <p className="field-name">
                        Height
                    </p>
                    <p>
                        {pkData.height/10 + " m"}
                    </p>
                </div>

                <div className="weight-field">
                    <p className="field-name">
                        Weight
                    </p>
                    <p>
                        {pkData.weight/10 + " kg"}
                    </p>
                </div>

                <div className="skills-field">
                    <p className="field-name">
                        Skills
                    </p>
                    <ul>
                        <PokemonSkillsField pkData={pkData}/>
                    </ul>
                </div>

                <div className="gender-field">
                    <p className="field-name">
                        Gender
                    </p>
                    <div className="gender-icons">
                        <PokemonGenderField pkData={pkData} />
                    </div>
                </div>       
            </div>

            <div className="type-field">
                <p>Type</p>
                <ul>
                    <PokemonTypeField pkData={pkData}/>
                </ul>
            </div>

            <div className="weaknesses-field">
                <p>Weaknesses</p>
                <ul>
                    <PokemonWeaknessesField pkData={pkData}/>
                </ul>
            </div>

            <div className="evolutios-field">
                <p>Evolutios</p>
                <ul>
                    <PokemonEvolutionsField pkData={pkData}/>
                </ul>
            </div>
        </div>
    )
}

export default PokemonCard;