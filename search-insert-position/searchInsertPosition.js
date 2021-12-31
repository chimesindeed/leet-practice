// Given a sorted array of distinct integers and a target value
// return the index if the target value is in the sorted array or
// if the target value is not in the array, return the index where it
// would be inserted in order

                  // p1  v   p2
const arr = [1, 2, 3, 4, 9, 32 ];  // length 5


const target = 6;

function searchInsertPoint(arr, target){
  let p1 = 0; let p2 = arr.length -1;
  while(p1 <= p2){
    const pivot = Math.floor((p1 + p2) / 2);
    console.log(pivot)

    const value = arr[pivot];
    if(value === target){return pivot}
    if(value < target){ p1 = pivot + 1}
    else { p2 = pivot - 1}
  }
  return p1

}

console.log(searchInsertPoint(arr, target))
