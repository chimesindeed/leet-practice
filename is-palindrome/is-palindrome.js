
                     // p1p2
const str = '1221'

  function isPalindrome(str){
  let p1 = 0;
  let p2 = str.length -1;
  while(p1 <= p2){
    let leftVal = str[p1];
    let rightVal = str[p2];
    console.log(`Left Val: ${leftVal} Right Val: ${rightVal}`)
    if(leftVal !== rightVal){return false;}
    else{p1++; p2--}
  }
  return true
}

console.log(isPalindrome(str))
