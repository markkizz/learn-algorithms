((n) => {
  let bi = '';
  let num = n;
  while (n>0) {
    bi = n%2 + bi
    n = Math.floor(n/2)
  }
  console.log(bi)
})(10)
