/*
ALGO CHALLENGE BP:

--CHALLENGE NOTES--:

TITLE:
<<Is it Time for Milk and Cookies??>>


DESCRIPTION:
- Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.



OUTPUT:
-  returns boolean if it’s december 24th


PARAMETERS:
- date object


EDGE CASES:
- Dates are zero based (see resources).
- All test cases contain valid dates.



EXAMPLES:
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true

POSSIBLE HELPER FUNCTIONS:



POSSIBLE METHODS TO USE:



PSEUDOCODE:
1. get month and get day Dates from Date object
2. compare if the date is december 24th if is return true

*/
// CODE:

const timeForMilkAndCookies = date => {
	const currentDate = new Date(date);
	return currentDate.getMonth() === 11 && currentDate.getDate() === 24;
};

console.log(timeForMilkAndCookies(new Date(2015, 11, 24))); // ➞ true
console.log(timeForMilkAndCookies(new Date(2050, 4, 10))); // ➞ false
