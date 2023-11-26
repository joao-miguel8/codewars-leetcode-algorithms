/*
ALGO CHALLENGE BP:

--CHALLENGE NOTES--:

TITLE:
<<. Instant JAZZ >>


DESCRIPTION:
- Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.


OUTPUT: 
- Array of strings 


PARAMETERS:
- Array   


EDGE CASES:
- Ignore all chords which already end with 7.
- if empty array return empty array


EXAMPLES:
jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]
jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]
jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
jazzify([]) ➞ []


POSSIBLE HELPER FUNCTIONS:
- Check if existing array value has value of 7 already



POSSIBLE METHODS TO USE:
includes()  <— for string
search()  <— for string
map()  <— recreate new output (declartive)
reduce()  <— recreate new output (declartive)

PSEUDOCODE:
- Loop over with array 
if length of array is less than 0 then return [];
- check current index — —- if current index does not include 7  return the index and append the 7;
*/

// --- Declarative Way ---
function jazzify(arr) {
	return arr.map(chord => {
		if (!chord.includes("7")) {
			return chord + "7";
		} else {
			return chord;
		}
	});
}
console.log(jazzify(["B", "E7", "F", "B12", "C"]));
console.log(jazzify(["A", "E7", "E", "B12", "G"]));
console.log(jazzify([]));

// --- IMPERATIVE WAY ---
function jazzIt(arr) {
	const output = [];
	if (arr.length === 0) return [];
	arr.forEach((chord, i) => {
		if (!chord.includes("7")) {
			output.push(chord + "7");
		} else {
			output.push(chord);
		}
	});
	return output;
}
console.log(jazzIt(["G", "E7", "F7", "A", "B12"]));
console.log(jazzIt(["D7", "E", "B", "A", "D12"]));
console.log(jazzIt([]));
