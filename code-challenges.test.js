// // ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { expect } = require("@jest/globals");
 const { describe } = require("yargs");

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Add appropriate dependencies to the repository:
// // $ yarn add jest

// // Use test driven development to complete the following questions
// // Run the file with the following command:
// // $ yarn jest

// // Reminder: The test will call your function


// // --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.



// // iterate through the array backwards 
// //create a new, empty array to store all the words that are shuffled


// // shuffle the words
// // use a conditional to check if the array is shuffled
// // return the new originally blank array
// // call my function


// let arry1 = ["purple", "blue", "green", "yellow", "pink"]
// let arrayShuffle = function(arr) {
//    for (let i = arr.length -1; i> 0; i--){
//    let newPos = Math.floor(Math.random() * (i + 1));//
//        temp = arr[i]; // declare a variable. temp is equal to arr[i].
//        arr[i] = arr[newPos]; // place the new pos 
//        arr[newPos] = temp; // place what he have in temp, swap which is what the loop is doing
//     }
//    return arr;// returning array
// }
//  let newArray = arrayShuffle(arry1);// testing array to see if the array will shuffle
// console.log(newArray)

 
 
 
 
 
 
// // // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// //var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
//  let arry2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//  let arrayShuffle = function(arr) {
//    for (let i = arr.length -1; i> 0; i--){
//    let newPos = Math.floor(Math.random() * (i + 1));
//        temp = arr[i];
//        arr[i] = arr[newPos];
//        arr[newPos] = temp;
//     }
//    return arr;
// }
//  let newArray = arrayShuffle(arry2);
// console.log(newArray)



// // b) Create the function that makes the test pass.
 // --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// // a) Create a test with expect statements for each of the variables provided.

 var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
 var nums2 = [109, 5, 9, -59, 8, 24]
// // Expected output: [-59, 109]

 describe("minMAx",() =>{
   test("takes in an array and returns min and max numbers",() =>{
     expect(minMax(nums1)).toEqual([-8, 90])
   })
 })
  // want to take the array and look at each number and figure out what the maximum numbers in that order
 const minMax = (array)=> {

    array.sort((a, b) => a - b);
     // sort the array from least to greatest.-- Look up .sort syntax. 
     // [-8,0,3,6,23,56,90]
     let min = array[0]
     let max = array[array.length-1]
     // return minimum and maximum numbers in our array
     return [min,max]
 }
console.log(minMax(nums1))
console.log(minMax(nums2))

 // When i test this I recieve 109 from my index. I'm not sure how to extract -59. I will bring this problem to office hours to see how to get retrieve the minimum and maximum.
// // b) Create the function that makes the test pass.
// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.

// let array1 = [3, 7, 10, 5, 4, 3, 3]
//  array2 = [7, 8, 2, 3, 1, 5, 4]
// // // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
// // Create a function
// // Combine the arrays first. 
// //let array3 = [].concat(array1, array2);
// //Then remove the duplicates by converting the array to a set.
// //let newArray = [...array1, ...array2];
// let set = new Set([...array1, ...array2]); // pass in new array and this will convery array to sey
// // Then convert the set back to an array.

// let newArray = [...set];
// console.log(newArray)// output: 3, 7, 10, 5, 4, 8, 2, 1
// // // b) Create the function that makes the test pass.
