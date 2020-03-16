// [[30, 75]] ควรคืนค่า 1
// [[30, 75], [0, 50]] ควรคืนค่า 2
// [[30, 75], [80, 120]] ควรคืนค่า 1
// [[30, 75], [0, 50], [60, 150]] ควรคืนค่า 2
// [[30, 75], [0, 50], [60, 150], [45, 50]] ควรคืนค่า 3
// [[30, 75], [0, 50], [60, 150], [45, 50]] ควรคืนค่า 2
// [[30, 75], [0, 50], [60, 150], [45, 50], [90, 120]] ควรคืนค่า 3

//[start time, time end] -> 1 room for meeting
//

//selection sec
// for(let i=0 ; i<arrMain.length ;i++) {
//     for(let j=i+1; j<arrMain.length ; j++){
//         console.log(arrMain[i], arrMain[j]);//compare
//     }
// }

// let arrMain = [[0, 50], [60, 150]];
// let sum = 0;
// let arr1 = arrMain[0], arr2 = arrMain[1];

// for(let i=arr1[0], j=arr2[1] ; i<=arr1[1] && j>=arr2[0] ; i++, j--) {
//     if(i===j) {
//         sum +=1;
//         break;
//     }
//     console.log(i);
//     console.log(j);
// }
// console.log(sum);

let arrMain = [[90, 120], [60, 150], [0, 50], [30, 75], [45, 50]];
let room;

//if arr.length === 1
if(arrMain.length===1){
    room = 1;
}else{
    room = 1;
    for(let i=0, j=1 ; j<arrMain.length ;j++) {
        console.log(arrMain[i], arrMain[j]);//compare
        room += compares(arrMain[i], arrMain[j]);
    }
}
//starta <= endb && enda >= startb
//[ 30, 75 ] [ 60, 150 ]
function compares(arr1, arr2) {
    return arr1[0] <= arr2[1] && arr1[1] >= arr2[0] ? 1:0;
}
console.log("room: " +room);

//https://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
