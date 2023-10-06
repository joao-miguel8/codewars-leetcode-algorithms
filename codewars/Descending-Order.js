/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/


// One Liner:
const descendingOrder = (n) => parseInt(n.toString().split('').sort((a,b)=> b-a).join(""));  


/*
Readable Version:
function descendingOrder(n){
// let numToString = n.toString();
return parseInt(n.toString().split('').sort((a,b)=> b-a).join(""));  
}

Steps:
// 1.  take any non-negative integer as an argument
// 2. return it with it's digits in descending order
// 3. basically rearrange the digits to create the highest possible number
*/