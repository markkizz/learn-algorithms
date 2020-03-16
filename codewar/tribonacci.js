(function tribonacci(signature, n) {
  //your code here
  // an = a-1 + a-2 + a-3
  let ans = []
  for(let i=0; i<n; i++ ) ans.push(i<3 ? signature[i] : ans[i-1]+ans[i-2]+ans[i-3])

  console.log(ans)
})([0,1,1],10)
