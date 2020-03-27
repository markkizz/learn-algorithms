(str => {
  let newStr = str.split("");
  let ans = newStr.splice(1, newStr.length - 2).join("");

  console.log(ans);
})("benefit")
