let arrMain = [[30, 75], [0, 50], [60, 150], [45, 50], [90, 120]];
let room = 0;
for(let i=0 ; i<arrMain.length ;i++) {
    for(let j=i+1; j<arrMain.length ; j++){
        console.log(arrMain[i], arrMain[j]);//compare
        room = compares(arrMain[i], arrMain[j]);
    }
}

function compares(arr1, arr2) {
    let count = 0;
    let arr1 = arrMain[0], arr2 = arrMain[1];

    for (let i = arr1[0], j = arr2[1]; i <= arr1[1] || j >= arr2[0]; i++, j--) {
        if (i === j) {
            count += 1;
            break;
        }
    }
    return count;
}
