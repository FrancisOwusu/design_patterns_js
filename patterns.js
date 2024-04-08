var global = (function () {
  return this;
})();

var updateElement = function () {
  var el = document.getElementById("result"),
    style = el.style;
  // do something with el and style...
};
// sub-optimal loop
let myarray  = [];
for (var i = 0; i < myarray.length; i++) {
  // do something with myarray[i]
}

//best option for loops
for (var i = 0, max = myarray.length; i < max; i++) {
  // do something with myarray[i]
}

function looper() {
  var i = 0,
    max=myarray.length,
    myarray = ["4"];
  // ...
  for (i = 0, max = myarray.length; i < max; i++) {
    // do something with myarray[i]
    console.log(myarray[i]);
  }
}
