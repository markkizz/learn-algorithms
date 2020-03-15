//  find longest char

/*---- psuedo
match freq to arr ['AAA', 'B', 'C', 'DD', ...]
find max length of char 2A1B1C2D->3B<-1E1A
add to obj {B: 3}
log obj
*/
let str = 'AABCDDBBBEA';
let objFreq = {};
let maxChar = null;
let maxLen = 0;
const arrFreq = str.match(/(.)\1*/g);//['AAA', 'B', 'C', 'DD', ...]

for(let ele of arrFreq){
    if(ele.length>maxLen){
        maxLen = ele.length;
        maxChar = ele[0];
    }
}
objFreq[maxChar] = maxLen;

console.log(objFreq);


// https://stackoverflow.com/questions/21997437/javascript-split-string-by-multiple-occurrences-of-letters
