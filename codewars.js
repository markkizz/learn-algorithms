function digPow(n, p) {
  // start with p
  //split n and pow /n = k
  let k;
  let sum = 0;
  let numArr = [...(n + "")];
  numArr.forEach((num, i) => (sum += num ** (p + i)));
  k = Math.floor(sum / n);
  console.log(k);
  console.log(k * n === sum);
}

digPow(695, 2);

// (function tribonacci(signature, n) {
//   //your code here
//   // an = a-1 + a-2 + a-3
//   let ans = []
//   for(let i=0; i<n; i++ ) ans.push(i<3 ? signature[i] : ans[i-1]+ans[i-2]+ans[i-3])

//   console.log(ans)
// })([0,1,1],10)


// (() => {
//   let bi = "10011"
//   let arrbi = [...bi].reduce((a,c,i,arr) => a + parseInt(c)*Math.pow(2, arr.length-1-i), 0)
//   // let arrbi = [...bi]
//   // let ans = 0
//   // for(let i=0; i<arrbi.length; i++) {
//   //   ans += parseInt(arrbi[i])*(2**((arrbi.length-1)-i))
//   //   console.log(arrbi[i]*2**(i))
//   //   console.log(ans)
//   // }

//   console.log(arrbi)
// })()

// ((n) => {
//   let bi = '';
//   let num = n;
//   while (n>0) {
//     bi = n%2 + bi
//     n = Math.floor(n/2)
//   }
//   console.log(bi)
// })(10)


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

const nbYear = (p0, percent, aug, p) => {
  let i = 0;
  for(let sum=0; sum<=p; i++) {
    if(sum===0) {
      sum = p0+p0*percent+aug
      console.log(sum)
    } else {
      sum = sum+sum*percent+aug
      console.log(sum)
    }
  }
  console.log(i)
}
nbYear(1000, 0.02 , 50, 1200)

function isPangram(string){
  //...
  let alp = {};
  string.toLowerCase().match(/[a-zA-Z]/g).forEach(str => alp[`${str}`] ? alp[`${str}`]+=1 : alp[`${str}`] = 1)

  return Object.keys(alp).length === 26 ? true : false;
}


function duplicateCount(text){
  //...
  let obj = [...(text.toLowerCase())].reduce((a, w) =>  (a[`${w}`] ? a[`${w}`]+=1 : a[`${w}`] = 1, a), {})
  let ans = 0
  for(let key in obj) obj[key]>1 ? ans+=1 : ''
  return ans
  //(text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

function dirReduc(arr){
  // ...
  //["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
  //change arr to num [0, 1], ...numarr
  //arr.shift -> N
  //shift for arr
  let opposite = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST"
  }

  let ans ;
  let temp = arr.map(e => e)
  arr.forEach((dir, i) => {
    temp.shift()
    console.log(temp)
    let value = opposite[dir]
    let findI = temp.findIndex(e => e===value);
    if(findI !== -1){
    console.log(i, findI+i+1)
      ans = arr.filter((e, indx) => indx!==i || (findI+i+1)!==indx)
      console.log("ans", ans)
    }
  })
//   let numArr = arr.map(str => str==="NORTH" ? [0, 1] : str==="SOUTH" ? [0, -1] : str==="EAST" ? [1, 0] : [-1, 0])
//   for(let baseP=0; baseP<numArr.length; baseP++){
//     for(let nextP=baseP+1; nextP<numArr.length; nextP++) {
//       numArr[baseP] - numb
//     }
//   }
}
