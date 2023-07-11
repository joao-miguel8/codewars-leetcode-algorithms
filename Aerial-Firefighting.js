/*
You are an aerial firefighter (someone who drops water on fires from above in order to extinguish them) and your goal is to work out the minimum amount of bombs you need to drop in order to fully extinguish the fire (the fire department has budgeting concerns and you can't just be dropping tons of bombs, they need that money for the annual christmas party).

The given string is a 2D plane of random length consisting of two characters:

x representing fire
Y representing buildings.
Water that you drop cannot go through buildings and therefore individual sections of fire must be addressed separately.

Your water bombs can only extinguish contiguous sections of fire up to a width (parameter w).

You must return the minimum number of waterbombs it would take to extinguish the fire in the string.

Note: all inputs will be valid.

Examples
"xxYxx" and w = 3      -->  2 waterbombs needed
"xxYxx" and w = 1      -->  4
"xxxxYxYx" and w = 5   -->  3
"xxxxxYxYx" and w = 2  -->  5

function waterbombs(fire, w) {
// code here
};
*/

function waterbombs(fire, w) {
//   split string to array of chars and removing any "Y" found
  const fireArr = fire.split("Y");
  //   initialize a value to store waterBombs needed
  let waterBombCount = 0;
  for(let i = 0; i < fireArr.length; i++) {
    // loop over the fireArr divide length of it by w round it up with Math.ceil and store it variable
    waterBombCount += Math.ceil(fireArr[i].length / w);
  }
return waterBombCount;
};

