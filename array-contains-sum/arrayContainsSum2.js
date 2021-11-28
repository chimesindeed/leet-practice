// Given an array and a target sum as arguments
// Write a function that returns the indices of any two elements that add up to the sum
// Return false if no two elements add up to the sum
         // [:]
const arr = [1,2,3,4,5,6,7,8,9,10,11];
            // [:]
// const arr = [1,2,3,4,5,6,7,8,9,10,11];

const target = 21;

//

function addsToSum(arr, target){
  const obj = {}
  for(let i = 0; i < arr.length; i++){
    const currentValue = arr[i];
    const compliment = target - currentValue;
    if(obj.hasOwnProperty(compliment)){ return `${i},${obj[compliment]}`}
    else { obj[currentValue] = i}
  }
    return -1
}
console.log(addsToSum(arr, target))
// Single Pass O(n) time, number of iterations depends on size of input
// O(n) space size of object depends on size of array
