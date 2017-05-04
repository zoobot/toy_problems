var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];
  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });
  return deck;
};
var deck = orderedDeck();
// console.log(deck);

var shuffleDeck = function(deck) {
  var results = [];
  while (results.length < 52) {
    var indexDeck = Math.floor(Math.random() * deck.length);
    var card = deck[indexDeck];
    results.push(card);
    deck.splice(indexDeck, 1);
  }
  return results;
}


var shuffleDeck = function(deck) {
  //Your code here
  var arr = [];
  while(deck.length > 0) {
    var temp = Math.floor(Math.random() * deck.length);
    arr.push(deck[temp]);
    deck.splice(temp, 1);
  }
  deck = arr;
  return deck;
}

shuffleDeck(deck);

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
