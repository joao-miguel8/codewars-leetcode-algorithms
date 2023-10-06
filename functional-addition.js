/*
Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6

function add(n) {
  // code here
}

*/


const add = (n1) => (n2) =>  n1 + n2;

/*
A closure is being used to encapsulate our first parameter that ultimately gets passed into our inner function to do the following returned equation
*/