/*
This function should take one argument - an array of strings.
Your calculateMass function should use the array "reduce" function
to take every string in the input array, find out how long the string is,
and keep a running tally of the total length of all strings in the array.
Your function should then return this total length (the "mass" of the cargo).
*/
//NOTE use reduce instead of forEach
function calculateMass(freightItems) {
  // This is a placeholder for the total length in characters of all strings
  // in the freightItems array
  let totalMass = 0;
  (totalMass = freightItems.reduce(
    (acc,currentItem) => 
    return acc + currentItem.total;
  ));
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const mass = calculateMass(["dog", "donkey", "cat"]);
console.log("Total mass of items is " + mass); // should be 12
