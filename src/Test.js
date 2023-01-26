
export const test = (pkWeaknessesDataArray) =>{
    const indexClonesArray = [];
    pkWeaknessesDataArray.map((element, index) => {
        const clonesIndex = pkWeaknessesData.filter((el) => el === element)
        if(clonesIndex.length === 1){return}
        return indexClonesArray.push(element)
    })
}