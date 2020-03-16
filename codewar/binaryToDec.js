(() => {
  let bi = "10011"
  let arrbi = [...bi].reduce((a,c,i,arr) => a + parseInt(c)*Math.pow(2, arr.length-1-i), 0)
  // let arrbi = [...bi]
  // let ans = 0
  // for(let i=0; i<arrbi.length; i++) {
  //   ans += parseInt(arrbi[i])*(2**((arrbi.length-1)-i))
  //   console.log(arrbi[i]*2**(i))
  //   console.log(ans)
  // }

  console.log(arrbi)
})()
