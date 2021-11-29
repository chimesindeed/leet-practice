// Given a string and a word as arguments, write a function
// that returns true if the string contains the word
// and returns false if it does not

let str = "Today I need to go and buy a cup of coffee."
const word = "coffee"
function stringContainsWord(str, word){
  let str2 = str.replace('.', ' ');
  let arr = str.split(' ')
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == word){ return true}
  }
  return false
}
console.log(stringContainsWord(str, word))

// O(n) space complexity - length of array grows according to length of input.
// O(n) time - 3 passes
