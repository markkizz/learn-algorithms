//input: 'AAAABBBCCDAA'
//output: '4A3B2C1D2A'
const str = 'AAAABBBCCDAA';

//const engText = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let textInput = str.split('');
let textArr = [];
let countChar = 0;
let textOutput = '';
for(let i=0 ; i<str.length ; i++){
    let currentChar = str.charAt(i);
    let nextChar = str.charAt(i+1);
    countChar++;
    if(currentChar !== nextChar) {
        countChar = 1;
        text += `${countChar}${currentChar}`;
        if(nextChar === ''){
            break;
        }
    }
}
