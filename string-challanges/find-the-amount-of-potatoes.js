/*
Find the Amount of Potatoes
Create a function to return the amount of potatoes there are in a string.

Examples:
potatoes("potato") ➞ 1
potatoes("potatopotato") ➞ 2
potatoes("potatoapple") ➞ 1
*/

function potatoFinder(str, searchWord) {
	const subStringArr = str.split(searchWord);
	console.log(subStringArr);
	return subStringArr.length - 1;
}

potatoFinder("wapotato2potatoBoBpotato", "potato"); // 3
potatoFinder("eaoKwalketRwctpotatowa", "potato"); // 1

function recursiveFindPotato(str, wordToSearch) {
	const index = str.indexOf(wordToSearch, 0);
	if (index === -1) {
		return 0;
	} else {
		// recursive approach it will keep splitting the str every time it finds wordToSearch removes it out of the str and adds 1 until the wordToSearch does not exist
		return 1 + recursiveFindPotato(str.split(index + wordToSearch.length), wordToSearch);
	}
}
recursiveFindPotato("bobRpotatoeapotrptato", "potato"); // 1
