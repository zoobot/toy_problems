// Pony Farm
// A certain pony farm (cage-free) raises and keeps track of cowboys’ and cowgirls’ ponies. Each pony has a name, id, dietary allergies, and email address (the owner’s email address).

// Given an array of pony objects and an owner’s email address, return an alphabetically ordered array of all foods (without duplicates) that the owner should avoid feeding his/her ponies.

// NOTE: You are required to use at least one map and one filter. Pros can use reduce to make their code even more functional-style.
//
// Example use:
// [ [10,20], [30], [40,50,60] ].concatAll()
// => [10,20,30,40,50,60]

var ponyInfo = {
  ponies: [
    { "id": 427, "name": "Firefly", "allergies": ["gluten", "peanut"], "email": "cindy@ponymail.com" },
    { "id": 23, "name": "Black Lightning", "allergies": ["soy", "peanut"], "email": "sandy@hotmail.com" },
    { "id": 458, "name": "Picadilly", "allergies": ["corn", "gluten"], "email": "cindy@ponymail.com" },
    { "id": 142, "name": "Brad", "allergies": ["gluten", "chicken"], "email": "sandy@hotmail.com" },
    { "id": 184, "name": "Cahoot", "allergies": ["soy", "peanut", "gluten"], "email": "jimmy@ponymail.com" }
  ],
  "ownerEmail": "cindy@ponymail.com"
}

function getPonyAllergies(ponies, ownerEmail) {
  var obj = {};

  ponies.filter(i => {
      return ownerEmail === i.email })
    .map(i => {
      return i.allergies; })
    .concatAll()
    .sort()
    .forEach(p => { obj[p] = p; })

  return Object.keys(obj);
}

Array.prototype.concatAll = function() {
  return this.reduce(function(result, subArray) {
    return result.concat(subArray)
  })
}

console.log(getPonyAllergies(ponyInfo.ponies, ponyInfo.ownerEmail));
