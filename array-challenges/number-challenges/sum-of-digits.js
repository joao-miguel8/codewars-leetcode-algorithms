// www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

/*
ALGO CHALLENGE BP:

--CHALLENGE NOTES--:

TITLE:
<< Sum of Digits / Digital Root >>

DESCRIPTION:

-   Digital root is the recursive sum of all the digits in a number.
-   Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

OUTPUT:

-   return sum of all digits in a number

PARAMETERS:

-   a non negative number

EDGE CASES:n
n/a

EXAMPLES:
16 --> 1 + 6 = 7
942 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6
132189 --> 1 + 3 + 2 + 1 + 8 + 9 = 24 --> 2 + 4 = 6
493193 --> 4 + 9 + 3 + 1 + 9 + 3 = 29 --> 2 + 9 = 11 --> 1 + 1 = 2

POSSIBLE HELPER FUNCTIONS:
n/a

POSSIBLE METHODS TO USE:
reduce() <— declartive way to get our result
toString <— to convert the number into string
parseInt() <— to convert the string back to number
split() <— to be able to use the reduce method

PSEUDOCODE:

1. convert n parameter into string
2. check n.length if === 1, if true convert string back to num and return num
3. else store a reduce method split the parameter and add the accumlator with the currentValue, return the function and pass the variable holding the reduce.
*/

// CODE:
// Using Recursion:
const digitalRoot = n => {
	const nStr = n.toString();
	if (nStr.length === 1) {
		return parseInt(n, 10);
	} else {
		const total = nStr.split("").reduce((acc, currVal) => acc + parseInt(currVal, 10), 0);
		return digitalRoot(total);
	}
};

console.log(digitalRoot(16)); // 1 + 6 = 7
console.log(digitalRoot(942)); // 9 + 4 + 2 = 6
console.log(digitalRoot(54)); // 5 + 4 = 9
console.log(digitalRoot(3298)); // 3 + 2 + 9 + 8 = 4
