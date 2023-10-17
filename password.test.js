const validatePassword = require("./password");

// Enhetstest med Jest
describe('Password Validation', () => {
    test('Ett giltigt lösenord', () => {
      const validPassword = 'P@ssw0rd';
      //fail("Test not implemented")
      expect(validatePassword(validPassword)).toBe(true);
    });
  
    test('Lösenord saknar stor bokstav', () => {
      const passwordWithoutUpperCase = 'p@ssw0rd';
      expect(validatePassword(passwordWithoutUpperCase)).toBe(false);
    });
  
    test('Lösenord saknar siffra', () => {
      const passwordWithoutNumber = 'P@ssword';
      expect(validatePassword(passwordWithoutNumber)).toBe(false);
    });
  
    test('Lösenord saknar specialtecken', () => {
      const passwordWithoutSpecialChar = 'Passw0rd';
      expect(validatePassword(passwordWithoutSpecialChar)).toBe(false);
    });
  
    test('Lösenord för kort', () => {
      const shortPassword = 'P@ss';
      expect(validatePassword(shortPassword)).toBe(false);
    });
  });