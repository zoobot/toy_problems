var rockPaperPermutation = function(round) {
  var results = [];
  if (!round) return outcomes;

  var rps = ['r', 'p', 's'];

  var sub = function(roundLeft, played) {
    if (roundLeft === 0) {
      return results.push(played.join(''));
    }
    rps.forEach(function(i) {
      sub(roundLeft - 1, played.concat(i));
    });
  }
  sub(round, []);
  return results;
}

console.log(rockPaperPermutation(2));

