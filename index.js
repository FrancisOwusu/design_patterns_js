const app = require("./patterns.js");
function looper() {
  var i = 0,
    myarray = ["4"],
    max = myarray.length;

  for (i = 0, max = myarray.length; i < max; i++) {
    // do something with myarray[i]
    console.log(myarray[i]);
  }
}
looper();
console.log(typeof looper);

// the object
var man = {
  hands: 2,
  heads: 1,
  legs: 2,
};
// 1.
// for-in loop
//objects
for (var i in man) {

  if (man.hasOwnProperty(i)) {
    // filter
    console.log(i, ":", man[i]);
  }
}
/*
    result in the console
    hands : 2
    legs : 2
    heads : 1
    */

