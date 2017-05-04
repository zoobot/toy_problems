commonCharacters = function(string1, string2) {
  var arr = [],
    results = [],
    obj = {};
  if (str1 === '' || str2 === '') {
    return ''; }
  for (var i = 0; i < string1.length; i++) {
    if (string2.indexOf(string1[i]) !== -1 && string2[i] !== ' ') {
      arr.push(string1[i]);
    }
  }
  for (var key in arr) {
    obj[arr[key]] = arr[key];
  }
  for (var key in obj) {
    results.push(obj[key])
  }
  return results.join('').replace(/\s+/g, '');
}

console.log(commonCharacters('asdfasdf', 'asdfwer'))
console.log(commonCharacters('abc', 'abc'))
console.log(commonCharacters("What is love?", "Baby don't hurt me"))
console.log(commonCharacters('Riding on a buffalo makes me more approachable', 'so what'))
console.log(commonCharacters('', 'No more'))
console.log(commonCharacters('No more', ''))
console.log(commonCharacters('', ''))