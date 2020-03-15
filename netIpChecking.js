const q = "123.456.789.0"

function isValidIP(str) {
  let arrIp = str.split('.')
  if(arrIp.length !== 4)
    return false
  let isValid = false
  for (let i = 0; i < arrIp.length; i++) {
    let NumIp = Number(arrIp[i])
    if(arrIp[i] !== NumIp.toString()) {
      isValid = false
      break;
    }
    if(NumIp >= 0 && NumIp <=255) {
        isValid = true
    } else {
        isValid = false
        break;
    }
  }
  return isValid
}

console.log(isValidIP(q))
