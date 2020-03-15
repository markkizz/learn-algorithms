// ------------------------------
// Input - [ 4,4,4,7,2,2,2,5,3,3 ]
// Output - [ 7,5,3,4,2 ]
// ------------------------------
// Input - [ 1,1,1,2,2,2,2,3,3,4,4,5,5 ]
// Output - [ 5,4,3,1,2 ]
// ------------------------------
// Input - [ 9,9,7,7,6,6,7,7,7,9,1,2,3 ]
// Output - [ 3,2,1,6,9,7 ]
// ------------------------------
// Input - [ 1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3]
// Output - [ 3,2,1 ]
// ------------------------------
//เรียงลำดับความถี่จากน้อยไปมาก ถ้าความถี่เท่ากันให้เรียงจากมากไปน้อย

let arr = [ 1,1,1,2,2,2,2,3,3,4,4,5,5 ];
let objCount = {};
let arr2 = [];

for(let i=0 ; i<arr.length ; i++) {
    let arrValue = arr[i];
    objCount[arrValue] = (objCount[arrValue] || 0) + 1;
}
//for in -> key in obj

//convert obj value to str
let arrCount = Object.values(objCount).sort();    //[3, 2, 3, 1, 1]

let objectKeys = Object.keys(objCount);
let getKeyByValue = (obj, value) => objectKeys.find(key => obj[key] === value);

for(let i=0 ; i<arrCount.length ; i++){
    arr2[i] = parseInt(getKeyByValue(objCount, arrCount[i]));
}
objCount
objectKeys
arrCount
arr2
