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
