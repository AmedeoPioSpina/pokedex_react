export const firstLetterToUpperCaseFormatFunc = (text) => {
    let formattedText = text[0].toUpperCase() + text.slice(1);
    return formattedText;
}