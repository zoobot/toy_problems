"use strict"
// Find the largest product of 3 numbers
// output is a number
// input array of numbers, yes negative numbers, mixed negative/positive, no fractions
// time complexity who cares
// example below
// find lowest number

function largestProductOfThree(array) {
  array.sort( (a, b) =>  a - b );

  var len = array.length,
    two = len - 2,
    three = len - 3,
    last = array[array.length - 1];

  array[0] * array[1] > array[three] * array[two] && array[two] > 0 ?
    array.splice(2, array.length, last) : array.splice(array[len], three);

  return array.reduce( (memo, ele) => memo * ele );
}


console.log(largestProductOfThree([-31, 41, 34, -37, -17, 29])) //47027
console.log(largestProductOfThree([0, 2, 3]))
console.log(largestProductOfThree([2, 1, 3, 7]))
console.log(largestProductOfThree([-5, -1, -3, -2, -4]))
  // [0, 2, 3] 0
  // [ 2, 1, 3, 7 ] 42
