deepEquals = function(a, b) {
  if (a === b) {
    return true
  }
  if (typeof a !== 'object' && typeof b === 'object') {
    return false;
  }
  if (!Array.isArray(a) && Array.isArray(b)) {
    return false;
  }
  if (!a === undefined && b === undefined) {
    return false
  }
  if (a === null && b !== null) {
    return false;
  }
  if (typeof a !== 'object' && typeof b === 'object') {
    return false;
  }
  if (typeof a !== 'object' && typeof b !== 'object') {
    if (a.length !== b.length) {
      return false
    }
  }
  var counta = 0
  var countb = 0
  for (var key in b) {
    countb++;
  }
  for (var key in a) {
    counta++;
  }
  if (counta !== countb) {
    return false;
  } else {
    for (var key in b) {
      if (a[key.length] !== b[key.length]) {
        return false
      }
      if (!deepEquals(a[key], b[key])) {
        return false;
      }
      if ((deepEquals(a[key], b[key]) === false) && (deepEquals(key, key) === false)) {
        return false;
      }
      if (b[key] === undefined) {
        return false;
      }
      if (deepEquals(key, key) !== true) {
        return false;
      }
    }
  }
  return true;
}

// var a = { foo: [2, { bar: {}}]}
// var b = { foo: [2, { test: {}}]}

//false
var a = { foo: 'bar', biz: 'baz' };
var b = { foo: 'bar' };

// var a = 2;
// var b = 2;

// false
// var a = { foo: 'bar' };
// var b = { foo: 'bar' };
// false
console.log(deepEquals(a, b))
  //      var a = { foo: 'bar' };
  //     var b = { foo: 'bar', biz: 'baz' };
  // false
  //     var a = { foo: 1, b: { c: 3 } };
  //     var b = { foo: 1, b: { c: 3 } };
  //     true

//     var a = { foo: 1, b: { c: 3 } };
//     var b = { foo: 1, b: { c:'potato' } };
//     false

// var a = { foo: 1, b: { c: { d: { e: 'potato' } } } };
// var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
//     true;


//     var a = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
//     var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
//     true;
