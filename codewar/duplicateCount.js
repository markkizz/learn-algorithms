function duplicateCount(text){
  //...
  let obj = [...(text.toLowerCase())].reduce((a, w) =>  (a[`${w}`] ? a[`${w}`]+=1 : a[`${w}`] = 1, a), {})
  let ans = 0
  for(let key in obj) obj[key]>1 ? ans+=1 : ''
  return ans
  //(text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
