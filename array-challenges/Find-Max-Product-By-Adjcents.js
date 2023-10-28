/*


ALGO CHALLENGE BP:

--CHALLENGE NOTES--:

TITLE:
-Maximum Product-

DESCRIPTION:
- Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
etc - The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

OUTPUT: 
- Number


PARAMETERS:
 - Array/list of numbers size is at least 2.
- Array/list numbers could be a mixture of positives, negatives also zeroes .

EDGE CASES:
N/A

EXAMPLES:
adjacentElementsProduct([1, 2, 3]); ==> return 6
adjacentElementsProduct([10, 3, 4, 2]); ==> return 30
adjacentElementsProduct([4, 5, -3, 2]); ==> return 20


PSEUDOCODE:
let productValues = [20, -15, -6] = 20
- Loop Over array
- Get current index of value and multiply it to the follow indexing value
*/

function adjElementsProduct(arr) {
	const outputArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (i < arr.length - 1) {
			outputArr.push(arr[i] * arr[i + 1]);
		}
	}
	return Math.max(...outputArr);
}

console.log(adjElementsProduct([2, 2, 1, -9, 5])); // 4
console.log(adjElementsProduct([0, 2, 1, 4, 44])); // 176
console.log(adjElementsProduct([5, 2, 10, -4, 3])); // 20

const findMaxProductByAdj = arr => {
	const product = arr.reduce((acc, currentVal, index, array) => {
		if (index < arr.length - 1) {
			const output = currentVal * array[index + 1];
			return Math.max(acc, output);
		}
		return acc;
	});
	return product;
};
console.log(findMaxProductByAdj([4, 10, 10, -1, 20])); // 100
console.log(findMaxProductByAdj([5, 2, 2, -5, 9])); // 5
console.log(findMaxProductByAdj([1, 9, 1, 4, 3])); // 12
