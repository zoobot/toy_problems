var bubbleSort = function(array) {
    var swapped = false;
    while (swapped === false) {
      for (var i = 0;i < array.length - 1;i++) {
          current = array[i]
          if (array[i] > array[i + 1]){
            var temp = array[i];
            array[i] = array[i + 1]
            array[i + 1] = temp;
            swapped = true;
          }
      }
    }
  return array;
}


var array = [1,2,3,7,3,2,3,7,8,99,11];
console.log(bubbleSort(array))