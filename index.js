// code your solution here

//function satudayfun

function saturdayFun(activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun(`bathe my dog`));

//fuction mondaywork

function mondayWork(action = `go to the office` ){
    return `This Monday, I will ${action}.`

}
console.log(mondayWork());
console.log(mondayWork(`work from home`));


//fuction wrapadjective

// function wrapAdjective(adjective = "*"){
//     let result = wrapAdjective(adjective)
//     let emphatic ="a hard worker"
//     return `You are ${adjective}${emphatic}${adjective}!`
// }

function wrapAdjective(special = "*"){
    function emphatic(comp = "a hard worker"){
        let result = `${special}${comp}${special}`
        return `You are ${result}!`

    }
    return emphatic
}
console.log(wrapAdjective('*'))