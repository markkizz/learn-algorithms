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
