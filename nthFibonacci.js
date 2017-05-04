// nthFibonacci
// Suppose a newly-born pair of iguanas, one male, one female, are put in a large aquarium.
// Iguanas are able to mate at the age of one month so that at the end of its second month a female can produce another pair of iguanas.
// Suppose that our iguanas never die and that the female always produces one new pair (one male, one female) every month from the second month on.
// How many pairs of iguanas will there be after n months?
// For example, the iguana pair size for months zero through five are:
// 0 1 1 2 3 5
// If n were 4, your function should return 3; for 5, it should return 5.
// HINT: This iguana pattern is described exactly by the fibonacci sequence:
// https://en.wikipedia.org/wiki/Fibonacci_number
// Write a function that accepts a number n and returns the number of iguana pairs after n months.
// DO NOT use a recursive solution to this problem. Your solution must run in linear time.
// Note: Your solution may fail if you have a comment in your nthFibonacci function that contains the string literal “nthFibonacci” somewhere within it.

nthFibonacci = function(n) {
  // Psuedocode
  // n months
  // Fn = Fn-1 + Fn-2
  // add 0 1 1 to array.
  // as long as array length is less than n
  // keep pushing to array
  // return array length value

  var arr = [0, 1];
  for (var i = 2; i <= n; i++) {
    arr.push((arr[i - 1]) + (arr[i - 2]));
  }
  return arr[n];
};

console.log(nthFibonacci(12));

//recursive nthFibonacci - O(n^n) Exponential time complexity
// var nFib = function(n) {
//   return n < 2 ? n : nFib(n-1) + nFib(n-2);
// }

//recursive nthFibonacci - O(n) linear time complexity
// var nFib = function(n) {
//   var mem = [];
//   for (var i = 0;i <=n;i++) {
//     mem[i] = i < 2 ? i : mem[i-1] + mem[i-2]
//   }
//   return mem[n]
// }

//nthFibonacci)not recursive - O(n) linear time complexity
// var nFib = function(n) {
//   if (nFib.mem[n]) return nFib.mem[n];
//   var mem = [];
//   for (var i = 0;i <=n;i++) {
//      nFib.mem[i] = i < 2 ? i : nFib.mem[i-1] + nFib.mem[i-2];
//   }
//   return nFib.mem[n]
// }

// var nFib = function(n) {
//   var mem = [0,1];
//   for (;n > 1;i--) {
//      mem.push(mem.shift() +mem[0]);
//   }
//   return mem[n];
// }
