// ---------------------------1-----------------------------
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;  // The number is even
//   } else {
//     return false; // The number is odd
//   }
// }

// console.log(isEven(4));  // Output: true
// console.log(isEven(7));  // Output: false
// console.log(isEven(10)); // Output: true

// If divisible by 3 console log("Fizz")
// If divisible by 5 console log("Buzz")
// If divisible by both console log("FizzBuzz")

// function fizzBuzz(list){
//   for(let i = 0 ; i < list.length ; i++){
//       // console.log(list[i])
//       if(list[i] % 3 == 0 && list[i] % 5 == 0){
//           console.log(list[i] +"-" +  "fizzBuzz")
//       }
//       else if(list[i] % 3  == 0 ){
//           console.log(list[i] + "-" + "fizz")
//       }
//       else if( list[i] % 5 == 0){
//           console.log(list[i] + "-" + "buzz")
//       }
//       // else {
//       //     console.log(list[i])
//       // }
//   }
// }

// fizzBuzz([1,5,8,2,"hello",879,93.42,"Fizz",true])

// ---------------------------2-----------------------------

// function indexOfMinVal(nums) {
//     if (nums.length === 0) {
//         return -1; // Array is empty, return -1
//     }

//     let minVal = nums[0]; // Assume first element is the smallest
//     let minIndex = 0; // Index of the current minimum value

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < minVal) {
//             minVal = nums[i];
//             minIndex = i;
//         }
//     }

//     return minIndex;
// }

// const nums1 = [5, 2, 3]
// console.log(indexOfMinVal(nums1));

// const nums2 = [5, 7, 2, 3]
// console.log(indexOfMinVal(nums2));

// const nums3 = []
// console.log(indexOfMinVal(nums3));

// ------------------------------3--------------------------

function secondLargest(nums) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] < largest && nums[i] > secondLargest) {
            secondLargest = nums[i];
        }
    }

    return secondLargest !== -Infinity ? secondLargest : null;
}

// Test cases
const nums4 = [2, 3, 1, 4, 5];
console.log(secondLargest(nums4)); // Output: 4

const nums5 = [3, 3];
console.log(secondLargest(nums5)); // Output: null

const nums6 = [2];
console.log(secondLargest(nums6)); // Output: null

const nums7 = [];
console.log(secondLargest(nums7)); // Output: null