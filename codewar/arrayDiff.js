((a, b) => {
  let uArr1 = [...new Set(a)]
  let uArr2 = [...new Set(b)]
  console.log(uArr1)
  console.log(uArr2)
  // let ans = a.filter(function(x) { return b.indexOf(x) == -1; })
  // let ans = uArr1.filter(num => !uArr2.find(num2 => num===num2))
  let ans = a.filter(num => !b.includes(num))
  console.log(ans)
})([-20,-11,17,5,0,17,-3,-16,-12,-13,7,7,-6],[-20,-3,-11,7,7,0,5,17,-16,-13])
//[-12, -6]
// array_diff([-11,-11,13,1,-16,-13,-17,-15,-18,3,10,-20,-3,-3],[-16,-17,3,-13,13,-3,-11,-3,-18,1,10,-20])
