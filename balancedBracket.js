function isBalanced (str) {
  var str = str.replace(/[^\{\[\(\)\]\}]/gi, '')
  if (str.length % 2 !== 0) {return false;}
  var spl = str.split('');
  var len = spl.length;
  var result = []
  var brackets = {'(':')','{':'}','[':']'}
    for (var i = 0;i < len;i++) {
      var cms = spl[i];
      if (brackets[cms]) {
        result.push(cms);
      } else if ( cms === ')' || cms === '}' || cms === ']') {
        if (brackets[result.pop()] !== cms) {
          return false
        }
      }
    }
    return result.length === 0;
}
// const str = "(x + y) - (4)" //true
const str = "(x + y) - (4)" //true
// const str = "(((10 ) ()) ((?)(:)))" //true
// const str = "[{()}]"  //true
// const str = "(50)(" //false
// const str = "[{]}"  //false
console.log(isBalanced(str));