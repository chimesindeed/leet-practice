// Given an array and a target sum as arguments
// Write a function that returns the indices of any two elements that add up to the sum
// Return false if no two elements add up to the sum
                // [:]
const arr = [1,2,3,4,5,6,7,8,9,10,11];
            // [:]
// const arr = [1,2,3,4,5,6,7,8,9,10,11];

const target = 21;

// naive brute force approach

function addsToSum(arr, target){
  for (let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === target) { return `${i},${j}`}
    } // INNER LOOP
  } // OUTER LOOP
  return -1
}
console.log(addsToSum(arr, target))

// Quadratic time complexity because of nested for loops
//O (1) space complexity - no extra space taken up depending on input
