// Write a program which will check whether a letter is a vowel or not. 
// If the letter is vowel then print true else print false.



//This one is in a array
// function isVowel(letter) {

//     const vow = ['a', 'e', 'i', 'o', 'u'];
//     if (vow.includes(letter)) {
//         return true;}

//     return false;

// }

// console.log(isVowel("b"))


function isVowel(letter) {
    // const array = letter.split(' ').reverse().join();
    let returnArray = [];
    const array = letter.split('');
    // Array = ["h", "e", "l", "l", "o"]
    const vow = ['a', 'e', 'i', 'o', 'u'];
    for (i = 0; i < array.length; i++) {
        if (vow.includes(array[i])) {
            
            returnArray.push('true')

        } else {

            returnArray.push('false')
        }
        
    }
    return returnArray;
}

console.log(isVowel('Hello'));

// function isVowel(array) {

//     // const array = ['a', 'b', 'c', 'd', 'e']

// if letter ===

// }

// console.log('a', 'b', 'c', 'd', 'e')



// function vowels(str) {
//     let counter = 0;
//     const checker = ["a", "e", "i", "o", "u"];
//     for(let char of str) {
//         if (checker.includes(char)) {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(vowels('hello'));
