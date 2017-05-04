function characterFrequency (string) {
  var obj = {}, result = [];

  string.split('').forEach(i => {
    (!obj[i]) ? obj[i] = 1 : obj[i]++;
  });

  for (var key in obj) {
    result.push([key, obj[key]])
  }

  result.sort((a, b) => {
    if (a[1] > b[1] ) return -1;
    else if (a[1] < b[1]) return 1;
    else if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    return 0;
  });
  return result;
}
console.log(characterFrequency ("supercalifragilisticexpialidocious"));