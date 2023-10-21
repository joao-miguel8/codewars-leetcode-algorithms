/*
Recursion: Length of a String
Write a function that returns the length of a string. Make your function recursive.

Examples
length("apple") ➞ 5
length("make") ➞ 4
length("a") ➞ 1
length("") ➞ 0

*/

const word1 = "alphabet";
const word2 = "athens";

function strLengthRecursiveCheck(str) {
	if (str === "") {
		return 0;
	}
	const restOfStr = str.slice(1);
	return 1 + strLengthRecursiveCheck(restOfStr);
}
console.log(strLengthRecursiveCheck(word1));
console.log(strLengthRecursiveCheck(word2));
