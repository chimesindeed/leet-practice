You have versions in an array and you need to find the first bad one.
Each version is based on the previous version.
You need to query an api if such and such a version is bad which will return a boolean.
Implement a function to find the first bad version.

 Binary search can be used in this scenario
Being that the minute we find a bad version,
We can eliminate half of the array.
Logarithmic time as opposed to linear time
                        p1v p2
let arr = [1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]; length 10
                          ^
                 target = |

function findFirstBadVersion(arr){
  let p1 = 0; let p2 = arr.length -1;
  while(p1 < p2){
    const pivot = Math.floor((p1+p2)/2)
    let val = arr[pivot];
    if(isBadVersion(val){ p2 = pivot }
    else { p1 = pivot + 1}
  }
    return pivot
}
console.log(findFirstBadVersion(arr))
