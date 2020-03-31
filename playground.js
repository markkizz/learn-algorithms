(str => {
  let newStr = str.split("");
  let ans = newStr.splice(1, newStr.length - 2).join("");

  console.log(ans);
})("benefit")

const leetCode = (((nums) => {
  let max = Math.max(...nums)
  console.log(nums.length)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1, sum; j < nums.length; j++) {
      if (j === i + 1){
        sum = nums[i] + nums[j];
        if (sum > max) max = sum;
        continue;
      }
      sum = sum + nums[j];
      if (sum > max) max = sum;
      console.log(sum)
    }
    console.log('max>'+i, max);
  }
}))([2,1]);


let arr = [1, 100, 50, -51, 1, 1];
// let reverseArr = arr.map(e => e).reverse();
// let left = 0;
// let right = 0;
// let sumLeft = arr.reduce((a, c, i) => a.concat((left += c)), []);
// let sumRight = reverseArr.reduce((a, c, i) => a.concat((right += c)), []);
// console.log(sumLeft);
// console.log(sumRight);
let left = 0;
let right = arr.reduce((s, n) => s + n, 0);
console.log(right);
for (let i = 0; i < arr.length; i++) {
  right -= arr[i];
  console.log(right);
  // if (left === right) return i;
  left += arr[i];
  console.log(left);
}
const myCart = [
  { name: "Oreo", unitPrice: 5, quantity: 10 },
  { name: "Pocky", unitPrice: 18, quantity: 2 },
  { name: "Magnum", unitPrice: 45, quantity: 3 }
];

const sumOfCartBy = f => cart => cart.map(f).reduce((x, y) => x + y, 0);
const subtotalOfItem = item => item.quantity * item.unitPrice;
const quantityOfItem = item => item.quantity;
const subtotalOfCart = sumOfCartBy(subtotalOfItem);
const numberOfItemsInCart = sumOfCartBy(quantityOfItem);

console.log(subtotalOfCart(myCart));

const data = [{ a: "a", b: [{ c: [{ d: "want " }, { f: "f" }], e: "e" }] }];
let dataB = data.b.map(e => e)
function name(params) {
}
