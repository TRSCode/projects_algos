// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// function pushFront(arr, val){
//     for(var i = arr.length; i > 0; i--){
//         arr[i] = arr[i-1];
//     }
//     arr[0] = val;
//     return arr;
// }

// console.log(pushFront([5,7,2,3], 8))
// console.log(pushFront([99], 7))


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// function popFront(arr){
//     var temp = arr[0];
//     for(var i = 0; i < arr.length; i++){
//         arr[i] = arr[i+1];
//     }
//     arr.length = arr.length-1;
//     console.log(arr)
//     return temp;
// } 

// console.log(popFront([0,5,10,15]))
// console.log(popFront([4,5,7,9]))


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// function insertAt(arr, index, val){
//     for(var i = arr.length; i > index; i--){
//         arr[i] = arr[i-1];
//     }
//     arr[index] = val;
//     return arr;
// }

// console.log(insertAt([100,200,5], 2, 311))
// console.log(insertAt([9,33,7], 1, 42))


// Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// function removeAt(arr, index){
//     var temp = arr[index];
//     for(var i = index; i < arr.length; i++){
//         arr[i] = arr[i+1];
//     }
//     arr.length = arr.length-1;
//     console.log(arr)
//     return temp;
// }

// console.log(removeAt([1000,3,204,77], 1))
// console.log(removeAt([8,20,55,44,98], 3))


// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

// function swapPairs(arr){
//     for(var i = 0; i < arr.length; i+=2){
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
//     return arr;
// }

// console.log(swapPairs([1,2,3,4]))
// console.log(swapPairs(["Brendan",true,42])) //need if else statement to check if odd or even



// Remove Duplicates
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

function removeDuplicates(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] != arr[i+1]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDuplicates([-2,-2,3.14,5,5,10]))
console.log(removeDuplicates([9,19,19,19,19,19,29]))