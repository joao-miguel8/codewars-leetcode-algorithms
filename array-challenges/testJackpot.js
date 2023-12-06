/*
ALGO CHALLENGE BP:

--CHALLENGE NOTES--:

TITLE:
<< Hitting the Jackpot  >>


DESCRIPTION:
- Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.


OUTPUT: 
return an array of multiples of num until the array length reaches length.


PARAMETERS:
- Boolean   


EDGE CASES:
n/a


EXAMPLES:
testJackpot(["@", "@", "@", "@"]) ➞ true
testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false
testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false


POSSIBLE HELPER FUNCTIONS:




POSSIBLE METHODS TO USE:
every() –
Reduce()  <— declarative



PSEUDOCODE:
1. Loop over Array 
2. Use every() method to Check if every element of array is identical return true;
*/

const checkForEqualVals = arr => arr.every(val => val === arr[0]);

const testJackpot = result => checkForEqualVals(result);
