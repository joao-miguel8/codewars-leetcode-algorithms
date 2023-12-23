/*

ALGO CHALLENGE BP:

--CHALLENGE NOTES--:

TITLE:
<<What's Hiding Amongst the Crowd?>>


DESCRIPTION:
- A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:



OUTPUT: 
-  returns every lowercase letter found


PARAMETERS:
- string


EDGE CASES:n
- The wanted word is in lowercase.
- The crowd of letters is all in uppercase.
- Note that the word will be spread out amongst the random letters, but their letters remain in the same order.



EXAMPLES:
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"


POSSIBLE HELPER FUNCTIONS:
n/a


POSSIBLE METHODS TO USE:
reduce()
forEach()
map()


PSEUDOCODE:
1. loop over string and check if current letter is lowercase, if true add letter to result variable
*/

// CODE:

const detectWord = str => {
	return str.split("").reduce((acc, currentVal) => {
		return currentVal === currentVal.toLowerCase() ? acc + currentVal : acc;
	}, "");
};
console.log(detectWord("GfGRoLAwXIOaVVXrCOd")); // forward
console.log(detectWord("EdSSRaJAy")); // day

// imperative way:
const detectWordV2 = str => {
	const result = [];
	str.split("").forEach(lttr => {
		if (lttr === lttr.toLowerCase()) {
			result.push(lttr);
		}
	});
	return result.join("");
};
console.log(detectWordV2("GLjEEWunRLAgTTRlVe")); // jungle
console.log(detectWordV2("HALsREtKLaCDSKKrOPwXZAaMMNrCLs")); // starwars
