function evenOccurrence(arr) {
  var obj = {};
  arr.forEach((ele) => {
    if (obj[ele] === undefined) {
      obj[ele] = 1;
    } else {
      obj[ele]++;
    }
  });

  var results = [];

  for (var key in obj) {
    if (!(obj[key] % 2 === 0)) {
      delete obj[key];
    }
  }

  if (Object.keys(obj).length === 0) {
    console.log('test null')
    return null;
  }

  for (var i = 0; i < arr.length; i++) {
    for (var key in obj) {
      if (key === arr[i]) {
        return key;
      } else if (parseInt(key) === arr[i]) {
        return arr[i];
      }
    }
  }
}

// arr = [1, 3, 3, 3, 2, 4, 4, 2, 5] //2
  arr = [ "cat", "dog", "dig", "cat" ]  //"cat"

console.log(evenOccurrence(arr))
