function replaceAlphabets(str, n) {
    if (!Number.isInteger(n) || n < 1) {
        return "Invalid value for n. Please provide a positive integer.";
    }
    function replaceAlphabet(char, isUpperCase) {
        const ACode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const charCode = char.charCodeAt(0);
        const newPosition = (charCode - ACode + n) % 26;
        const newChar = String.fromCharCode(newPosition + ACode);
        return newChar;
    }
    const result = str.replace(/[a-zA-Z]/g, (match) => {
        if (/[A-Z]/.test(match)) {
            return replaceAlphabet(match, true);
        } else {
            return replaceAlphabet(match, false);
        }
    });
    return result;
}
const inputString = "Hello World!";
const resultString = replaceAlphabets(inputString, 3);
console.log("Original String:", inputString);
console.log("Modified String:", resultString);
