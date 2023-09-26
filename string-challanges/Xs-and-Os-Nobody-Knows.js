/*
Xs and Os, Nobody Knows
Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

Return a boolean value (true or false).
Return true if the amount of x's and o's are the same.
Return false if they aren't the same amount.
The string can contain any character.
When "x" and "o" are not in the string, return true.

Examples:
XO("ooxx") ➞ true
XO("xooxx") ➞ false
XO("ooxXm") ➞ true
// Case insensitive.
XO("zpzpzpp") ➞ true
// Returns true if no x and o.
XO("zzoo") ➞ false
Notes
Remember to return true if there aren't any x's or o's.
Must be case insensitive.
*/

const XO = str => {
	let xCount = 0,
		oCount = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "x" || str[i] === "X") {
			xCount++;
		} else if (str[i] === "o" || str[i] === "O") {
			oCount++;
		}
	}
	return xCount === oCount;
};

console.log(XO("xxor")); // false
console.log(XO("xoox")); // true
console.log(XO("prprpr")); // true
