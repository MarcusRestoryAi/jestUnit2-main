function validatePassword(password) {
    //Kontroll med REGEX-Expression
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{8,})/;
    return passwordRegex.test(password);

    //Funktionen returnerar 'true' om password uppfyller Regex expression
}

module.exports = validatePassword;