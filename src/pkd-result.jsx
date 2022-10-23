import { useState } from "react";

const PkdResult = (props) => {
    
    let {pkData} = props;
    
    if(pkData===""){return}
    return <PkdResultFound pkData={pkData}/>
}

export default PkdResult;

const PkdResultFound = (props) => {

    let {pkData} = props;
    const [pkImg, setPkImg] = useState(pkData.sprites.front_default)
    const [pkImgsLinks, setPkImgsLinks] = useState(Object.values(pkData.sprites).splice(0,8))
    const [pkImgGender, setPkImgGender] = useState("default")
    const [pkImgShinyState, setPkImgShinyState] = useState(false)

    let t = pkData.sprites;

    return(
        <>
                <div className="pkd-number">
                    <div className="field">
                        N°
                        <p>
                            {pkData.id}
                        </p>
                    </div>
                </div>

                <div className="pk-name">
                    <div className="field">
                        NAME:
                        <p>
                            {pkData.name}
                        </p>
                    </div>
                </div>

                <div className="pk-imgs">
                    <img src={pkImg} alt="" />
                    <div className="imgs-btns-choose">
                        <button onClick={() => {}}>shiny</button>
                        <button onClick={() => {}}>male</button>
                        <button onClick={() => {}}>female</button>
                        <button onClick={() => {}}>front</button>
                        <button onClick={() => {}}>back</button>
                    </div>
                </div>

                <div className="pk-type">

                </div>
            </>
    );
}
