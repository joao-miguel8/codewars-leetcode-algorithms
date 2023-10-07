/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

 

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 

Constraints:

The given address is a valid IPv4 address.
Accepted
568.8K

*/

/**
 * @param {string} address
 * @return {string}
 */

function replaceAndAlter(str, deletedVal, replacedVal) {
	return str
		.split("")
		.map(letter => {
			if (letter === deletedVal) {
				return replacedVal;
			} else {
				return letter;
			}
		})
		.join("");
}

var defangIPaddr = function (address) {
	return replaceAndAlter(address, ".", "[.]");
};

// or without a helper function
// return address.replaceAll(".", "[.]")
