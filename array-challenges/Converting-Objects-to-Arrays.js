/*
--CHALLENGE NOTES--:

TITLE:
-Converting Objects to Arrays-

DESCRIPTION:
- Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

OUTPUT:
- Array


PARAMETERS:
array  - array of boolean values

EDGE CASES:
Return an empty array if the object is empty.

EXAMPLES:
toArray({ a: 1, b: 2 })  // [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 })  // [[“shrimp", 15], ["tots", 12]]
toArray({})  // []

PSEUDOCODE:
use Object.entries Object static method to obtain both key,value as array for each object entry
*/

function toArr(obj) {
	let objToArr = [];
	for ([key, value] of Object.entries(obj)) {
		objToArr.push([key, value]);
	}
	return objToArr;
}
console.log(toArr({ a: "I am A", b: "I am B" }));
console.log(toArr({ animal01: "tiger", animal02: "bear" }));

// Declarative Approach:

const toArray = obj => Object.entries(obj);
console.log(toArray({ city01: "prague", city02: "budapest" }));
console.log(toArray({ activity01: "swimming", activity02: "tennis" }));
