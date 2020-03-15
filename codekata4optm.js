let arr = [[90, 120], [60, 150], [0, 50], [30, 75], [45, 50]];
let arrStart = [];
let arrEnd = [];
let arrMerge = [];
let objStart = {};
let objEnd = {};
let room = 0;
let sumRoom = [];
let maxRoom = 0;

for(let i=0; i<arr.length; i++) {
    arrStart[i] = arr[i][0];
    arrEnd[i] = arr[i][1];
}

for(let i=0; i<arrStart.length; i++) {
    objStart[arrStart[i]] = true;
    objEnd[arrEnd[i]] = true;
}

arrMerge = arrStart.concat(arrEnd);
arrMerge = arrMerge.sort((a,b) => a - b);

for(let ele of arrMerge) {
    if(objStart[ele]){
        room++;
        // console.log('room++: ' +room);
    }
    else if(objEnd[ele]){
        room--;
        // console.log('room--: ' +room);
    }
    sumRoom.push(room);
}

for(let ele of sumRoom){
    if(ele > maxRoom){
        maxRoom = ele;
    }
}

console.log(arrMerge);
console.log(objStart);
console.log(objEnd);
console.log(room);
console.log(sumRoom);
console.log(maxRoom);


//sort array
function sorted(arrNotsort) {
    let length = arrNotsort.length;
    for(let i=0; i<length ; i++){
        for(let j=0,in1=0,in2=1 ; j<length ; j++,in1++,in2++) {
            if(arrNotsort[in1]>arrNotsort[in2]) {
                swap(arrNotsort, in1, in2);
                if(in2===length){
                    length--;
                }
            }
        }
    }
    return arrNotsort;
}

function swap(Arr, index1, index2) {
    let t = Arr[index1];
    Arr[index1] = Arr[index2];
    Arr[index2] = t;
}
