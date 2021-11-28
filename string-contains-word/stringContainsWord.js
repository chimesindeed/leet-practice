// Given a string and a word as arguments, write a function
// that returns true if the string contains the word
// and returns false if it does not

const str = "Today I need to go and buy a cup of coffee."
const word = "buy"
function stringContainsWord(str, word){
  let lowerBound = 0;
  for(let i = 0; i < str.length; i++){
    const value = str[i];

    if(value === ' ' ||
       value === '.' ||
       value === ',' ||
       value === '?' ||
       value === '!') {
      const tmp = str.slice(lowerBound, i);
      console.log(tmp)
      if (tmp === word) { return true}
      else { lowerBound = i + 1}
    }
  }
  return "word not found"

}



console.log(stringContainsWord(str, word))

// O(n) time complexity because the number of increments is proportional
// to the length of the string.
// O(1) space complexity
// space taken up is not dependent on size of array
