const datPalindromeDoe = require('../index')

describe("isPalindrome with default settings", () => {

  const isPalindrome = datPalindromeDoe()

  test('"race car" is a palindrome', () => {
    expect(isPalindrome("race car")).toBeTruthy()
  })

  test('"not a isPalindrome" is not a palindrome', () => {
    expect(isPalindrome("not a isPalindrome")).toBeFalsy()
  })

  test('"A man, a plan, a canal. Panama" is a palindrome', () => {
    expect(isPalindrome("A man, a plan, a canal. Panama")).toBeTruthy()
  })

  test('"never odd or even" is a palindrome', () => {
    expect(isPalindrome("never odd or even")).toBeTruthy()
  })

  test('"never odd or even" is a palindrome', () => {
    expect(isPalindrome("never odd or even")).toBeTruthy()
  })

  test('"nope" is not a palindrome', () => {
    expect(isPalindrome("nope")).toBeFalsy()
  })

  test('"almostomla" is not a palindrome', () => {
    expect(isPalindrome("almostomla")).toBeFalsy()
  })

  test('"My age is 0, 0 si ega ym." is not a palindrome', () => {
    expect(isPalindrome("My age is 0, 0 si ega ym.")).toBeTruthy()
  })

  test('"1 eye for of 1 eye." is not a palindrome', () => {
    expect(isPalindrome("1 eye for of 1 eye.")).toBeFalsy()
  })

  test('"0_0 (: /-\ :) 0–0" is not a palindrome', () => {
    expect(isPalindrome("0_0 (: /-\ :) 0–0")).toBeTruthy()
  })

  test('"________bob" is not a palindrome', () => {
    expect(isPalindrome("________bob")).toBeTruthy()
  })

  test('"b________ob" is not a palindrome', () => {
    expect(isPalindrome("b________ob")).toBeTruthy()
  })

  test('"jared" is not a palindrome', () => {
    expect(isPalindrome('jared')).toBeFalsy()
  })

  test('an empty string is a palindrome', () => {
    expect(isPalindrome('')).toBeTruthy()
  })

  test('a single character is a palindrome', () => {
    expect(isPalindrome('a')).toBeTruthy()
  })

  test('two identical characters are a palindrome', () => {
    expect(isPalindrome('aa')).toBeTruthy()
  })
  
  test('two differing characters are not a palindrome', () => {
    expect(isPalindrome('ab')).toBeFalsy()
  })

  test('"racecar" is a palindrome', () => {
    expect(isPalindrome('racecar')).toBeTruthy()
  })
  
  test('"Amore Roma" is a palindrome', () => {
    expect(isPalindrome('Amore Roma')).toBeTruthy()
  })
  
  test('"A man, a plan, a canal: Panama" is a palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy()
  })
  
  test("\"No 'x' in 'Nixon'\" is a palindrome", () => {
    expect(isPalindrome("No 'x' in 'Nixon'")).toBeTruthy()
  })
  
  test('42 is not a palindrome', () => {
    expect(isPalindrome(42)).toBeFalsy()
  })
  
  test('1 is a palindrome', () => {
    expect(isPalindrome(1)).toBeTruthy()
  })
  
  test('11 is a palindrome', () => {
    expect(isPalindrome(11)).toBeTruthy()
  })
  
  test('121 is a palindrome', () => {
    expect(isPalindrome(121)).toBeTruthy()
  })
  
  test('0 is a palindrome', () => {
    expect(isPalindrome(0)).toBeTruthy()
  })
  
  test('1e10 + 1 is a palindrome', () => {
    expect(isPalindrome(1e10 + 1)).toBeTruthy()
  })
  
  test('true is not a palindrome', () => {
    expect(isPalindrome(true)).toBeFalsy()
  })
  
  test('false is not a palindrome', () => {
    expect(isPalindrome(false)).toBeFalsy()
  })
  
  test('null is not a palindrome', () => {
    expect(isPalindrome(null)).toBeFalsy()
  })
  
  test('undefined is not a palindrome', () => {
    expect(isPalindrome(undefined)).toBeFalsy()
  })
  
  test('NaN is not a palindrome', () => {
    expect(isPalindrome(NaN)).toBeFalsy()
  })
  
  test('-1 is not a palindrome', () => {
    expect(isPalindrome(-1)).toBeTruthy()
  })
  
  test('"!@#$" is not a palindrome', () => {
    expect(isPalindrome('!@#$', false)).toBeFalsy()
  })
  
  test('"!@#$#@!" is a palindrome', () => {
    expect(isPalindrome('!@#$#@!', false)).toBeFalsy()
  })
  
})