function arrayception (array, final = 0) {
  function sub(array,depth) {
    array.map(i => {
      (Array.isArray(i))
        ? sub(i,depth+1)
        : final = Math.max(depth, final)
    })
  }
  sub(array,1)
  return final
}

arr = [ [ 5 ], [ [ ] ] ]  //2
// arr = [ 10, 20, 30, 40 ]  //1
arr = [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]  //4
// arr = [ ] //0
// arr = [ [ [ ] ] ] //0
arr = [[[[[[5]]]]]] //6

console.log(arrayception(arr))