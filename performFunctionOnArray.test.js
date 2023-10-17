const performOperationOnArray = require("./performFunctionOnArray");

// Enhetstest med Jest
describe('Advanced Unit Test', () => {
    // Förbered testdata
    const inputArray = [1, 2, 3, 4, 5];

    // Ett testfall som testar om funktionen korrekt adderar +2 till värdena i arrayen
    test('Addera värden i array', () => {
        const expectedArray = [3, 4, 5, 6, 7];
        const operation = (x) =>  x + 2 
        const results = performOperationOnArray(inputArray, operation);
        expect(results).toEqual(expectedArray);
      });
    
    // Ett testfall som testar om funktionen korrekt dubblar värdena i arrayen
    test('Dubbla värden i array', () => {
      const expectedArray = [2, 4, 6, 8, 10];
      const operation = (x) => x * 2
      const results = performOperationOnArray(inputArray, operation);
      expect(results).toEqual(expectedArray);
    });
  
    // Ett testfall som testar om funktionen korrekt kvadrerar värdena i arrayen
    test('Kvadrera värden i array', () => {
      const expectedArray = [1, 4, 9, 16, 25];
      const operation = (x) => x * x
      const results = performOperationOnArray(inputArray, operation);
      expect(results).toEqual(expectedArray);
    });
  });