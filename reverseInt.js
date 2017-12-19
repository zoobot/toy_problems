// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output:  321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


/**
 * @param {number} x
 * @returx {number}
 */


//explanation
// function reverseInt(x){
//       var sign = 1
//       if (x < 0) {
//         sign = -1
//       }
//       x = Math.abs(x)
//       var r=0;
//       while(x!=0){
//         r *=10;
//         r += x%10;
//         x=Math.floor(x/10);

        // r *=10;
        // 0 = 0 * 10
        // r = r + x%10;
        // 3 = 0 + (remaixeder of 123/10)
        // 3 = 0 + (3)
        // x=Math.floor(x/10);
        // 12 = Math.floor(12.3)

        // r = 3
        // x = 12
        // r *=10;
        // 30 = 3 * 10
        // r+=x%10;
        // r =  30 + (remaixder of 12/10)
        // 32 = 30 + 2
        // x=Math.floor(x/10);
        // 1 = Math.floor(1.2)

        // r = 32
        // x = 1
        // r *=10;
        // 320 = 32 * 10
        // r+=x%10;
        // r =  320 + (remaixder of 1/10)
        // 321 = 320 + 1
        // x=Math.floor(x/10);
        // .0 = Math.floor(1/10)

// }

// return sign * r;
// }
// console.log(reverseInt(-123))

// signed 32bit Int before overflow
var a = 2147483647
// Rare prime type 2^n -1
var b = Math.pow(2, 31) - 1


console.log(a)
console.log(b)

var reverse = function(x, limit) {

  var sign = 1
  if (x < 0) sign = -1

  x = Math.abs(x)
  var r = 0;

  while (x != 0) {
    r *= 10;
    r += x % 10;
    x = Math.floor(x / 10)
  }
  if (r > limit) return 0

  return sign * r;
};
console.log(reverse(123,a))