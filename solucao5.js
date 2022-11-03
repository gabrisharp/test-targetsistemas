let str = `leirbaG`;
let newStr = [];

for(let i in str){
   const max = str.length -1;
   newStr[max-i] = str[i];
}
const reversed = newStr.join('');

console.log(reversed);