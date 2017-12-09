const isAlphaNumeric = char => /^[a-z0-9]+$/i.test(char)
    , leftEqualsRightWhenBothLowercase = s => (a, b) => s[a].toLowerCase() === s[b].toLowerCase()

module.exports = (filter = isAlphaNumeric, comparator = leftEqualsRightWhenBothLowercase) => s => {
  
  const filter = isAlphaNumeric
      , compare = comparator(s)

  let left = 0
    , right = s.length - 1
  
  do {
    
    while(!filter(s[left])) left++
    
    while(!filter(s[right])) right--
    
    if(!compare(left, right)) return false
    
    left++
    right--

  } while(left < right)

  return true

}

const isPalindrome = module.exports()