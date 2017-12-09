# dat-palindrome-doe
determine if given string is a palindrome or not

configure the algorithm with custom options. the default configuration is this (merged with custom configs when provided)
```js
const defaultConfig = {

  // first deal with special cases (assessed before validation of input)
  specialIs: value => value === 0 || value === '',
  specialIsNot: value => !value || value === true,

  // then validate input
  validateInput: value => typeof value === "string" || typeof value === "number",

  // algorithm functions
  filter: char => /^[a-z0-9]+$/i.test(char), // isAlphaNumeric
  compare: (a, b) => !!a && !!b && a.toLowerCase() === b.toLowerCase(), // leftEqualsRightWhenBothLowercase
  
}
```
