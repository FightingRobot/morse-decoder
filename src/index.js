const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let chars = [];
    let words = [];

    for (let i = 0; i < expr.length; i += 2) {
        chars.push(expr.slice(i, i + 2));
    }

    for (let j = 0; j < chars.length; j++) {
        if (chars[j] == '10') {
            chars.splice(j, 1, '.')
        } else if (chars[j] == '11') {
            chars.splice(j, 1, '-')
        }
    }

    for (let i = 0; i < chars.length; i += 5) {
        words.push(chars.slice(i, i + 5).join(''))
    }

    for (let i = 0; i < words.length; i++) {
        if (words[i][0] === '*') continue
        words[i] = words[i].split('');
        words[i] = words[i].splice(words[i].lastIndexOf('0') + 1);
        words[i] = words[i].join('');
        words[i] = MORSE_TABLE[words[i]]
    }

    return words.join('').split('**********').join(' ')
}

module.exports = {
    decode
}