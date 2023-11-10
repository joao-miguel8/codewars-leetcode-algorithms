/*
--CHALLENGE NOTES--:

—How Much is True?—

DESCRIPTION:
- Create a function which returns the number of true values there are in an array.

OUTPUT: 
Number of true values in array

PARAMETERS:
array  - array of boolean values 

EDGE CASES:
Return 0 if given an empty array
all array items are of the type bool (true or false)

EXAMPLES:
- countTrue([true, false, false, true, false]) ➞ 2
- countTrue([false, false, false, false]) ➞ 0
- countTrue([]) ➞ 0

PSEUDOCODE:
let trueBoolCount = 0;
- LOOP OVER ARRAY
- IF currentValue true return result += 1 (check for true values)
*/

function countTrue(arr) {
	let trueBoolCount = 0;
	arr.forEach(boolean => {
		if (boolean === true) trueBoolCount += 1;
	});
	return trueBoolCount;
}
console.log(countTrue([true, false, false, true, false])); // 2
console.log(countTrue([false, false, false, false])); // 0
console.log(countTrue([])); // 0

// Declarative approach with reduce();

const boolCountReducer = arr => arr.reduce((acc, currentVal) => (currentVal === true ? acc + 1 : acc), 0);
console.log(boolCountReducer([true, false, false])); // 1
console.log(boolCountReducer([true, true, true, false])); // 3
console.log(boolCountReducer([false, false])); // 0
