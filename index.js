// Write your solution in this file!
const employee = {
    name: 'Joey',
    streetAddress:'101 Pokemon St'
}



function updateEmployeeWithKeyAndValue(yo, what, up) {
    return {
        ...yo,
        [what]: up,
    };    
}

function destructivelyUpdateEmployeeWithKeyAndValue(testy, test, tester) {
    testy[test] = tester;
    return testy;
}

function deleteFromEmployeeByKey(peace, out) {
    const newObj = {...peace};
    delete newObj[out];
    return newObj; 
}

function destructivelyDeleteFromEmployeeByKey(he, gone) {
    delete he[gone];
    return he;
}