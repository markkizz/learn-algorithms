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
