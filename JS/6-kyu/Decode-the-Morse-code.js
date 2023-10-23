`use strict`;

/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 20.10.2023
Description: codewars kata https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
Changes: 20.10.2023 - started
20.10.2023 - done

*/
/* Description

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice 
and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". 
For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. 
The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, 
a single space is used to separate the character codes and 3 spaces are used to separate words. 
For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it:

Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']

All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

Good luck!

*/
/* Tests

const { assert } = require('chai');

describe("Sample tests", function(){
  
  it("Example from description", () => {  
    assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  });
  
  it("Leading and trailing spaces", () => {  
    assert.strictEqual(decodeMorse('   .... . -.--   '), 'HEY');
  });
  
});


*/

const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  ".----.": "'",
  "-.-.--": "!",
  "-..-.": "/",
  "-.--.": "(",
  "-.--.-": ")",
  ".-...": "&",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  ".-.-.": "+",
  "-....-": "-",
  "..--.-": "_",
  ".-..-.": '"',
  "...-..-": "$",
  ".--.-": "@",
  "..-.-": "¿",
  "--...-": "¡",
};
// ///////
// // my solution
// decodeMorse = function (morseCode) {
//   //   console.log(`input morse sentence -->`, morseCode);
//   let arrWords = morseCode.trim().split(`   `); // cut spaces from begining and ending, split to words with `   `
//   //   console.log(`split to morse words -->`, arrWords);
//   for (let i = 0; i < arrWords.length; i++) {
//     // console.log(`arrWords[i] = ${arrWords[i]}`);
//     // console.log(`split = ${arrWords[i].split(` `)}`);
//     arrWords[i] = arrWords[i].split(` `); // split word to letters with ` `
//     for (let p = 0; p < arrWords[i].length; p++) {
//       arrWords[i][p] = MORSE_CODE[arrWords[i][p]]; // convert MORSE_CODE['letter'] to eng letter
//     }
//     arrWords[i] = arrWords[i].join(``);
//   }
//   arrWords = arrWords.join(` `);
//   //   console.log(`split words to letters -->`, arrWords);
//   return arrWords;
// };
// /////

///////
// best solution on codewars
function decodeMorseLetter(letter) {
  return MORSE_CODE[letter];
}

function decodeMorseWord(word) {
  return word.split(" ").map(decodeMorseLetter).join("");
}

decodeMorse = function (morseCode) {
  return morseCode.trim().split("   ").map(decodeMorseWord).join(" ");
};
//
///////

console.log(`   test    -->`, decodeMorse(".... . -.--   .--- ..- -.. ."));
console.log(
  `   test    -->`,
  decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..")
);
console.log(
  `   test    -->`,
  decodeMorse(
    "- .... .. ...   .. ...   .-   ... .. -- .--. .-.. .   -- . ... ... .- --. .   ..-. --- .-.   - . ... - .. -. --.   -- -.--   -.-. --- -.. ."
  )
);
console.log(
  `   test    -->`,
  decodeMorse(
    "- .... .. ...   .. ...   .-   ... .. -- .--. .-.. .   -- . ... ... .- --. .   ..-. --- .-.   - . ... - .. -. --.   -- -.--   -.-. --- -.. . .-.-.-   -.. ---   -.-- --- ..-   .-.. .. -.- .   .. - --..--   .... ..- .... ..--.."
  )
);

// ".... . .-.. .-.. --- .-- --- .-. .-.. -.." // This is a simple message for testing my code
// `- .... .. ...   .. ...   .-   ... .. -- .--. .-.. .   -- . ... ... .- --. .   ..-. --- .-.   - . ... - .. -. --.   -- -.--   -.-. --- -.. .` // This is a simple message for testing my code. Do you like it, huh?
// `- .... .. ...   .. ...   .-   ... .. -- .--. .-.. .   -- . ... ... .- --. .   ..-. --- .-.   - . ... - .. -. --.   -- -.--   -.-. --- -.. . .-.-.-   -.. ---   -.-- --- ..-   .-.. .. -.- .   .. - --..--   .... ..- .... ..--..`;
