/*
Challenge:
Multiplying Numbers in a String

Description:
Given a string of numbers separated by a comma and space, return the product of the numbers.

Parameters:
String - string of numbers separated with ,

Edge cases:
n/a

Examples:
multiplyNums("2, 3") ➞ 6
multiplyNums("1, 2, 3, 4") ➞ 24
multiplyNums("54, 75, 453, 0") ➞ 0
multiplyNums("10, -2") ➞ -20

PseudoCode:
- split the string for every comma
- convert number strings to numbers
- loop over the array of numbers and multiply all to retrieve numbers
*/

// Helper function
const numsProduct = arr => {
	let result = 1;
	arr.forEach(num => {
		result *= parseInt(num);
	});
	return result;
};

function multiplyNums(nums) {
	const strConvertToArr = nums.split(",");
	return numsProduct(strConvertToArr);
}
// output:
console.log(multiplyNums("5, 20, 4"));
console.log(multiplyNums("2, 14, 4"));
console.log(multiplyNums("5, 5"));

// ---------------------------------

// with a reduce()
const multNums = nums => {
	return nums.split(",").reduce((acc, currentVal) => {
		return (acc *= parseInt(currentVal));
	}, 1);
};
// Output:
console.log(multNums("4, 2, 12"));
console.log(multNums("2, 2"));
console.log(multNums("9, 3"));
