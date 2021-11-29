// Given a sorted array and a target number
// Write a function that returns the index of the first value that matches the target
// If no values match the target return -1

// Binary Search approach creates a middle pivot and a lower and upper bound.
// Each iteration we are searching half of the prior iterations length,
// dividing the arrays length in half, thus decreasing the amount of steps in
// iteration taken to find our target. This is O(log(n)) time


const arr = [1,2,3,4,5,6,7,8,9];
const target = 7;
function arrayContainsTarget(arr, target){
  let p1 = 0; let p2 = arr.length -1; // LOWER AND UPPER BOUNDS OF ARRAY
  while( p1 <= p2){
    const pivot = Math.floor((p2+p1)/2); // MIDDLE INDEX BASED ON p1 & p2
    if(arr[pivot] == target) { return pivot }
    if(arr[pivot] < target) {p1 = pivot + 1}
    else { p2 = pivot -1}
    console.log( `${p1},${pivot},${p2}`)
  }
  return -1

}
console.log(arrayContainsTarget(arr, target))
