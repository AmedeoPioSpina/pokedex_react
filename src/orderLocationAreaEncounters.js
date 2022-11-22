export const orderLocationAreaEncounters = (pkLocationAreaEncountersData) => {

    let dynamicVersionsList = [];
    let versionAndLocationAreaAry = [];
    
    pkLocationAreaEncountersData.map((element) => {

        element.version_details.map((el) => {

            let resultCheck = dynamicVersionsList.findIndex((item) => item === el.version.name)
            if(resultCheck!==-1){
                versionAndLocationAreaAry[resultCheck].push(element.location_area.name)
            }
            else{
                dynamicVersionsList.push(el.version.name);
                versionAndLocationAreaAry.push([el.version.name, element.location_area.name])
            }
        })
    })
    return versionAndLocationAreaAry;
}