import { useState } from "react";
import axios from "axios";

const ImageField = ({pkData}) => {

    const [pkImagesUrl, setPkImagesUrl] = useState(Object.values(pkData.sprites));

    if(pkImagesUrl[4]===null){
        return (
            <img src={pkImagesUrl[5]}/>
        )
    }

    return(
       <img src={pkImagesUrl[4]} />
    )
}

export default ImageField;