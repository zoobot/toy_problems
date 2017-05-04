function insertionSort (array) {
  for ( var i = 1; i < array.length; i++ ) {
    x = array[i];
    j = i - 1;
    while (j >= 0 && array[j].order > x.order) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    while (j >= 0 && array[j].value > x.value) {
      console.log('yes', array[j].value)
      array[j+1] = array[j];
      j = j - 1;
    }
    array[j + 1] = x;
  }
  console.log(array)
  return array;
}


var array = [3, 5, 7, 11, 13, 2, 9, 6];
// var array = [ { "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 } ];
var array = [ { "value": 0 }, { "value": 1}, { "value": -1} ];
insertionSort(array)