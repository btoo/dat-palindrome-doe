const defaultConfig = {

  // first deal with special cases
  specialIs: value => value === 0 || value === '',
  specialIsNot: value => !value || value === true,

  // then validate input
  validateInput: value => typeof value === "string" || typeof value === "number",

  // algorithm functions
  filter: char => /^[a-z0-9]+$/i.test(char), // isAlphaNumeric
  compare: (a, b) => !!a && !!b && a.toLowerCase() === b.toLowerCase(), // leftEqualsRightWhenBothLowercase
  
}

module.exports = config => {

  const {
    validateInput,
    specialIs,
    specialIsNot,
    filter,
    compare,
  } = { ...defaultConfig, ...config }

  return v => {
    
    if(specialIs(v)) return true
    if(specialIsNot(v) || !validateInput(v)) return false

    const value = v.toString()

    let left = 0
      , right = value.length - 1
    
    while(left < right) {
      
      while(!filter(value[left])) left++
      while(!filter(value[right])) right--

      if(!compare(value[left], value[right])) return false
      
      left++
      right--
    }

    return true
  }
}
