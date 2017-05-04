function rotatedArraySearch (rotated, target) {
  result = rotated.indexOf(target)
  return result;
}

console.log(rotatedArraySearch([ 4, 5, 6, 0, 1, 2, 3 ],2)); //5
console.log(rotatedArraySearch([ 4, 5, 6, 0, 1, 2, 3 ],100)); //-1
