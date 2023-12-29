class Encrypt {
    static string(input, key, isEncrypt) {
        const specialChars = "!@#$%^&*";
        const newKey = key % specialChars.length;
        const charArray = input.split('');

        for (let i = 0; i < charArray.length; i++) {
            let position = charArray[i].charCodeAt(0) + (isEncrypt ? newKey : -newKey);

            if (position >= 32 && position <= 126) {
                charArray[i] = String.fromCharCode(position);
            } else {
                charArray[i] = charArray[i];
            }
        }

        return charArray.join('');
    }
}


const input = 'abc';
const enc = Encrypt.string(input, 2, true);
console.log('Encrypted:', enc);


const dec = Encrypt.string(enc, 2, false);
console.log('Decrypted:', dec);
