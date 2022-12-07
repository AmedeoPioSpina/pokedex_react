export const textFormatFunc = (text, textState) => {
    if(textState === "upperCase"){
        return text.charAt(0).toUpperCase() + text.slice(1).replaceAll("-", " ");
    }
    else if(textState === "lowerCase"){
        return text.charAt(0).toLowerCase() + text.slice(1).replaceAll(" ", "-").replaceAll(",", "").replaceAll(".", "");
    }
}