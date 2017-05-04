var findPivot = function (array, start, end) {
  // TODO: Implement
  // if first letter of first word is before the first letter of the last word, there is a pivot.
  // otherwise no pivot
  // if there is a pivot, go divide array in half, return index of first in second half.
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  var index = null;
  var len = array.length - 1;
  console.log(array[len].charAt(0))
  console.log(array[0].charAt(0))
  if ( alphabet.indexOf(array[len].charAt(0)) > alphabet.indexOf(array[0].charAt(0))) {
    console.log('there is not pivot', array.indexOf(array[len].charAt(0)));
    return null;
  } else {
    console.log('there is pivot', array.length/2)
    return array.length/2;
  }
};

var array = ['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat']
// var array = ['apple', 'bear', 'cat', 'dog', 'eagle', 'falcon']
// returns 3
findPivot(array)