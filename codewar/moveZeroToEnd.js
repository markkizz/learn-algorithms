/**
 * move zero to the end of array
 *
 * @param {Array<boolean | number | string>} arr
 * @example
 * input: [false,1,0,1,2,0,1,3,"a"]
 * return: [false,1,1,2,1,3,"a",0,0]
 */

function moveZeros(arr) {
  let zero = []
  let num = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      zero.push(arr[i])
    } else {
      num.push(arr[i])
    }
  }
  const ans = num.concat(zero)
  return ans
}

moveZeros([false,1,0,1,2,0,1,3,"a"])
