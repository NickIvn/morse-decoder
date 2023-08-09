const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodedString = '';

    for (let i = 0; i < expr.length; i += 10) {
        if (expr[i] === '*') {
            decodedString += ' ';
        } else {
            const morseCode = expr.substr(i, 10);
            let morseSymbol = '';
            for (let j = 0; j < morseCode.length; j += 2) {
                if (morseCode[j] + morseCode[j+1] === '10') {
                    morseSymbol += '.';
                } else if (morseCode[j] + morseCode[j+1] === '11') {
                    morseSymbol += '-';
                }
            }
            decodedString += MORSE_TABLE[morseSymbol];
        }
    }

    return decodedString;
}

module.exports = {
    decode
};