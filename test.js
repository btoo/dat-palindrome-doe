const datPalindromeDoe = require('./index')

describe("isPalindrome with default settings", () => {

  const isPalindrome = datPalindromeDoe()

  test('"race car" is a palindrome', () => {
    expect(isPalindrome("race car")).toBeTruthy()
  })

  // console.log(
  //   isPalindrome("race car") === true,
  //   isPalindrome("not a isPalindrome") === false,
  //   isPalindrome("A man, a plan, a canal. Panama") === true,
  //   isPalindrome("never odd or even") === true,
  //   isPalindrome("nope") === false,
  //   isPalindrome("almostomla") === false,
  //   isPalindrome("My age is 0, 0 si ega ym.") === true,
  //   isPalindrome("1 eye for of 1 eye.") === false,
  //   isPalindrome("0_0 (: /-\ :) 0–0") === true,
  //   isPalindrome("________bob") === true,
  //   isPalindrome("b________ob") === true
  // )

})