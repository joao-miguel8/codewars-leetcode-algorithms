/*
---Move Capital Letters to the Front---
* Create a function that moves all capital
letters to the front of a word.

--CHALLENGE NOTES--:

PARAMETERS:
String  - there will be a mix of lowercase and uppercase chars

EDGE CASES:
keep original order of the uppercase chars and lowercase chars

EXAMPLES:
- capToFront("WeLCome") -- "WLCeome"
- capToFront("bOOk") -- "OObk"
- capToFront("leTtErS") -- "TESletr"

PSEUDOCODE:
let output = "",
		replacedChar = "";
The loop over string
- check if current letter is equal to upperCase
- if (true) remove letter and add to capitalLetters string variable
- return letter if current letter is not uppercase
- after all loop iterations join capitalLetters to stringOutput
*/

// helper function
function isCapitalizedChar(char) {
	return char === char.toUpperCase();
}

function capToFront(s) {
	let output = "",
		replaceChar = "";
	for (let i = 0; i < s.length; i++) {
		isCapitalizedChar(s[i]) ? (output += s[i]) : (replaceChar += s[i]);
	}
	return output + replaceChar;
}

// tests:
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
console.log(capToFront("tRAInRide"));
