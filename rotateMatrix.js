function rotateMatrix (matrix) {
  var len = matrix.length;
  var counter = matrix.length;
  var results = [];
  for (var i = 0;i < len;i++) {
    results.push([]);
    for (var j = matrix[i].length - 1;j >= 0;j--) {
      results[i].push(matrix[j][i]);
    }
  }
  return results;
}


var matrix = [ [ 1, 2, 3, 4],[ 5, 6, 7, 8],[ 9,'A','B','C'],['D','E','F','G']];
//[ [ 'D', 9, 5, 1 ], [ 'E', 'A', 6, 2 ], [ 'F', 'B', 7, 3 ], [ 'G', 'C', 8, 4 ] ]
console.log(rotateMatrix (matrix));
// var matrix = [ [1, 2], [3, 4] ]; //[ [ 3, 1 ], [ 4, 2 ] ]

// var matrix = [ [ 1 ] ] //[ [ 1 ] ]

// var matrix =
// [
// [ 1, 2 ],
// [ 3, 4 ] ]
//[
// [ 3, 1 ],
// [ 4, 2 ] ]

// var matrix =
// [
// [ 1, 2, 3 ],
// [ 4, 5, 6 ],
// [ 7, 8, 9 ] ]
//[
// [ 7, 4, 1 ],
// [ 8, 5, 2 ],
// [ 9, 6, 3 ] ]

// OICE
// Output should be another matrix
// input is a matrix with numbers or chars or arrays
// check the outer array length
// create that many empty arrays
// starting from the last array, put each item in slot one of each array
// for the next array to the left, put the numbers in slot two of the arrays