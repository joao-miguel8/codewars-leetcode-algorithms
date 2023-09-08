/*
ALGO CHALLENGE BP:

--CHALLENGE NOTES--:

TITLE:
<< Matchstick Houses  >>


DESCRIPTION:
This challenge will help you interpret mathematical relationships both algebraically and geometrically, Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.


OUTPUT: 
return number (number of match sticks value)


PARAMETERS:
- number (step always will be a non-negative number)


EDGE CASES:
- Step 0 returns 0 matchsticks.
- The input (step) will always be a non-negative integer.
- Think of the input (step) as the total number of houses that have been connected together.

— STEP IS ACTUALLY FULL HOUSE —

1 STEP = 6 MATCHSTICKS


EXAMPLES:
matchHouses(1) ➞ 6    <—  = 6
matchHouses(4) ➞ 21 =  <— 21 
matchHouses(87) ➞ 436 <— 436

POSSIBLE HELPER FUNCTIONS:




POSSIBLE METHODS TO USE:


1house= 6 
2houses = 10
3houses = 15

+1 for final house

PSEUDOCODE:
IF STEP = 0 return 0;
IF STEP = 1 return 6;
return number * 5 + 1

*/

function matchHouses(h) {
	if (h === 0) return 0;
	if (h === 1) return 6;
	return h * 5 + 1;
}
