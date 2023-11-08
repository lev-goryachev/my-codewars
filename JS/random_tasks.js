`use strict`
////////////////////////////////////////
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
    // if 0
    if (number < 0) return 0;

    //
    return Array.from({ length: number }, (_, i) => i).reduce((acc, curr) => {
        if (curr % 3 === 0 || curr % 5 === 0) {
            return acc + curr;
        }
        return acc;
    }, 0);
}

console.log(solution(-1), 0)
console.log(solution(0), 0)
console.log(solution(3), 0)
console.log(solution(4), 3)
console.log(solution(5), 3)
console.log(solution(6), 8)
console.log(solution(10), 23)
console.log(solution(15), 45)
console.log(solution(16), 60)
console.log(solution(20), 78)
console.log(solution(200), 9168)



////////////////////////////////////////

////////////////////////////////////////
// function findNeedle(haystack) {
//     if (haystack.indexOf(`needle`) != -1) {
//         return `found the needle at position ${haystack.indexOf(`needle`)}`
//     }
//     else {
//         return `Your function didn't return anything`
//     }
    
// }


// function findNeedle(haystack) {
//     haystack.indexOf(`needle`) != -1 ? `found the needle at position ${haystack.indexOf(`needle`)}` : `Your function didn't return anything`;
// }


// // Tests
// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]), 'found the needle at position 5')
////////////////////////////////////////

////////////////////////////////////////
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     // create counter and vowels arr
//     let counter = 0
//     const arrVowels = [`a`, `e`, `i`, `o`, `u`]

//     //
//     const originalLength = str.length
//     const endLength = str.replaceAll(/a*e*i*o*u*/g, ``).length
//     const delta = originalLength - endLength

//     return delta;
//   }

// console.log(getCount("abracadabra"), 5)
////////////////////////////////////////