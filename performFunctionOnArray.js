//Funktionen tar emot en array och en funktion, och sedan returnerar resultatet av funktionen med arrayen's element som parameter
function performOperationOnArray(arr, operation) {
    return arr.map(operation);
}

module.exports = performOperationOnArray;