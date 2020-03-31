const a = [1, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const b = [0, 0, 0, 1, 0, 2, 3, 0, 0, 0, 0, 0];

const removeZero = arr => {
  if(arr[0]===0 ){
    for(let i=0; i<arr.length; i++){
      if(arr[i]===0 && arr[i+1]!==0){
        arr.splice(0,i+1)
        break;
      }
    }
  }
  if(arr[arr.length-1]===0){
    for(let i=arr.length-1; i>=0; i--){
      if(arr[i]===0 && arr[i-1]!==0){
        arr.splice(i, arr.length);
        break;
      }
    }
  }
}

removeZero(b);
