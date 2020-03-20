function isPangram(string){
  //...
  let alp = {};
  string.toLowerCase().match(/[a-zA-Z]/g).forEach(str => alp[str] ? alp[str]+=1 : alp[str] = 1)

  return Object.keys(alp).length === 26 ? true : false;
}
