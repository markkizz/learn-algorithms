/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive.
  Implement a function that determines whether a string that contains only letters is an isogram.
  Assume the empty string is an isogram. Ignore letter case.
 * @example
 * isIsogram("Dermatoglyphics") == true
 * isIsogram("aba") == false
 * isIsogram("moOse") == false // -- ignore letter case
 */

function isIsogram(str: string) {
  const parseStr = str.toLowerCase()
  let obj: object = {}
  let ans: boolean = true
  for (let i = 0; i < parseStr.length; i++) {
    let currentLetter = parseStr[i]
    console.log(obj[currentLetter])
    if(obj[currentLetter]) {
      ans = false
      break;
      // let num: number = obj[currentLetter]!
      // num += 1
      // obj[currentLetter] = num
    } else {
      // if undefined doInit in obj
      obj[currentLetter] = 1
    }
  }
  console.log(obj)
  return ans
}

console.log("isIsogram", isIsogram("Dermatoglyphics"))