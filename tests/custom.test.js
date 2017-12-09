const datPalindromeDoe = require('../index')

describe("isPalindrome with custom filter", () => {
  
  const isPalindrome = datPalindromeDoe({
    filter: char => /[\w!@#\$%\^\&*\)\(+=._-]/i.test(char)
  })

  test('"jared" is not a palindrome', () => expect(isPalindrome('jared')).toBeFalsy())

  test('an empty string is a palindrome', () => expect(isPalindrome('')).toBeTruthy())
  
  test('a single character is a palindrome', () => expect(isPalindrome('a')).toBeTruthy())

  test('two identical characters are a palindrome', () => expect(isPalindrome('aa')).toBeTruthy())
  
  test('two differing characters are not a palindrome', () => expect(isPalindrome('ab')).toBeFalsy())

  test('"racecar" is a palindrome', () => expect(isPalindrome('racecar')).toBeTruthy())
  
  test('"Amore Roma" is a palindrome', () => expect(isPalindrome('Amore Roma')).toBeTruthy())
  
  test('"A man, a plan, a canal: Panama" is a palindrome', () => expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy())
  
  test("\"No 'x' in 'Nixon'\" is a palindrome", () => expect(isPalindrome("No 'x' in 'Nixon'")).toBeTruthy())
  
  test('42 is not a palindrome', () => expect(isPalindrome(42)).toBeFalsy())
  
  test('1 is a palindrome', () => expect(isPalindrome(1)).toBeTruthy())
  
  test('11 is a palindrome', () => expect(isPalindrome(11)).toBeTruthy())
  
  test('121 is a palindrome', () => expect(isPalindrome(121)).toBeTruthy())
  
  test('0 is a palindrome', () => expect(isPalindrome(0)).toBeTruthy())
  
  test('1e10 + 1 is a palindrome', () => expect(isPalindrome(1e10 + 1)).toBeTruthy())
  
  test('true is not a palindrome', () => expect(isPalindrome(true)).toBeFalsy())
  
  test('false is not a palindrome', () => expect(isPalindrome(false)).toBeFalsy())
  
  test('null is not a palindrome', () => expect(isPalindrome(null)).toBeFalsy())
  
  test('undefined is not a palindrome', () => expect(isPalindrome(undefined)).toBeFalsy())
  
  test('NaN is not a palindrome', () => expect(isPalindrome(NaN)).toBeFalsy())
  
  test('-1 is not a palindrome', () => expect(isPalindrome(-1)).toBeFalsy())
  
  test('"!@#$" is not a palindrome', () => expect(isPalindrome('!@#$')).toBeFalsy())
  
  test('"!@#$#@!" is a palindrome', () => expect(isPalindrome('!@#$#@!')).toBeTruthy())

})


describe("isPalindrome with custom comparator", () => {

  const isPalindrome = datPalindromeDoe({
    compare: (a, b) => !!a && !!b && a === b
  })

  test('"abcd_ABCD" is a palindrome', () => expect(isPalindrome("abcd_DCBA")).toBeFalsy())

})