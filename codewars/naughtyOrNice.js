// https://www.codewars.com/kata/585eaef9851516fcae00004d/train/javascript
/*
In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.

If there is an equal amount of bad and good actions, return 'naughty'

Examples:
bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug']
whatListAmIOn(bad_actions)
#-> 'naughty'
good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
what_list_am_i_on(good_actions)
#-> 'nice'
actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']
what_list_am_i_on(actions)
#-> 'naughty'


// -----NOTES-----
INPUT: Array of strings
OUTPUT: String

Create 2 COUNT(num) variables for naughty,nice
CHECKS:
Check if first letter of input array is === to provided letters to check for, increment our count variable by +1
Check if naughty and nice variables are === if so return "naughty"
check which count is higher return "naughty" or "nice" to higher count
*/

function whatListAmIOn(actions) {
	let naughtyCount = 0,
		niceCount = 0;
	actions.forEach(word => {
		if (["b", "f", "k"].includes(word[0])) {
			naughtyCount++;
		} else if (["g", "s", "n"].includes(word[0])) {
			niceCount++;
		}
	});
	if (naughtyCount === niceCount) return "naughty";
	return naughtyCount > niceCount ? "naughty" : "nice";
}
