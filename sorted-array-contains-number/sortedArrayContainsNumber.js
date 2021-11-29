// Given a sorted array and a target number
// Write a function that returns the index of the first value that matches the target
// If no values match the target return -1

// The naive approach doesn't factor into the solution the fact that the
// array is sorted.  We iterate through the array checking if earch value is = to target.
// Time Complexity is O(n)

const arr = [1,2,3,4,5,6,7,8,9];
const target = 7;
function arrayContainsTarget(arr, target){
  for(let i = 0; i < arr.length; i++ ){
    const val = arr[i];
    if(val === target) {return i}
  }
  return -1

}
console.log(arrayContainsTarget(arr, target))
