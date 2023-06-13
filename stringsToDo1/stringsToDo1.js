// Remove Blanks --------------------------------------------------------------
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// function removeBlanks(str){
//     var newStr = "";
//     for(var i = 0; i < str.length; i++){
//         if(str[i] != " "){
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }
// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
// console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));


// Get Digits --------------------------------------------------------------
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// function getDigits(str){
//     var newStr = "";
//     for(var i = 0; i < str.length; i++){
//         if(!isNaN(str[i])){
//             newStr += str[i];
//         }
//     }
//     return Number(newStr);
// }
// console.log(getDigits("abc8c0d1ngd0j0!8"));
// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));


// Acronyms --------------------------------------------------------------
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

// function acronym(str){
//     var newStr = "";
//     var arr = str.split(" ");
//     for(var i = 0; i < arr.length; i++){
//         newStr += arr[i][0].toUpperCase();
//     }
//     return newStr;
// }

// this one works ----------------------
// function acronym(str) {
//     // Split the string into an array of words
//     const words = str.trim().split(/\s+/);

//     // Map each word to its first letter (capitalized)
//     const acronym = words.map(word => word.charAt(0).toUpperCase());

//     // Join the acronym letters together and return the result
//     return acronym.join('');
// }

// console.log(acronym(" there's no free lunch - gotta pay yer way. "));
// console.log(acronym("Live from New York, it's Saturday Night!"));


// Count Non-Spaces--------------------------------------------------------------
// Create a function that, given a string, returns the number of non-space characters found in the string.

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

// function countNonSpaces(str){
//     var count = 0;
//     for(var i = 0; i < str.length; i++){
//         if(str[i] != " "){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countNonSpaces("Honey pie, you are driving me crazy"));
// console.log(countNonSpaces("Hello world !"));



// Remove Shorter Strings--------------------------------------------------------------
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

// function removeShorterStrings(arr, num){
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i].length >= num){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
// console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
