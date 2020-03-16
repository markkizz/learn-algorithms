const strDistance = ((str, target) => {
  let arr = [...str];
  let indexTarget = [];
  arr.forEach((ele, i) => ele === target && indexTarget.push(i));
  let base = arr.indexOf(target);
  let ans = arr.map((ele, i) => {
    return Math.min(indexTarget.map(cIndex => i - cIndex));
  });
  console.log(ans);
  console.log(indexTarget);
})("lovelove", "l");
let strr = "lovelove";
let tar = "l";
console.log([...strr]);
let red = [...strr].reduce((a, c, i) => (c === tar ? a.concat(i) : a), []);
console.log(red);
/*

 */

function appendArr(...argv) {
  let ans = [];
  for (let col = 0; col < argv[0].length; col++) {
    for (let i = 0; i < argv.length; i++) {
      ans.push(argv[i][col] ? argv[i][col] : null);
    }
  }
  return argv === [] ? [] : ans;
}

((arr1, arr2) => {
  arr1.includes();
})(
  ["xyz", "live", "strong"],
  ["lively", "alive", "harp", "sharp", "armstrong"]
);
