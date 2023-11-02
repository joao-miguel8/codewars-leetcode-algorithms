// https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a/train/javascript

/*
ACTUAL PROBLEM: find the minimum number of RGB

INPUTS: String that contains a random amount of "RGB"

OUTPUTS: a number representing how many stones removed in each pair of

adjacent stones have different stones

PSEUDOCODE:
0. Declare a stoneCounter to track stones to remove
1. Convert STRING TO an ARRAY
2. LOOP THROUGH ARRAY CHECK the current value against the next value
3. IF values are same add +1 to stoneCounter
4 RETURN stoneCounter

EDGE CASES: N/A

POSSIBLE METHODS:
Reduce() --> using reduce() the stoneCounter is not needed

POSSIBLE HELPER FUNCTIONS: N/A
*/

const solve = stones => stones.split("").reduce((acc, stone, i) => (stone === stones[i + 1] ? acc + 1 : acc), 0);
