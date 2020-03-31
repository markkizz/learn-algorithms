const str = 'aaAabb dddDD hhcc';
let removeSpace = str.replace(/\s/g, '');
let newStrToArr = removeSpace.toLowerCase().split('');
// let matching = newStr.match(/(.)\1*/g)
let obj = {};
newStrToArr.forEach(ele => isNaN(obj[ele]) ? obj[ele]=1 : obj[ele]++)
let objtoarr = Object.keys(obj)
console.log(obj)
