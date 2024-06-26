var Person = function (name) {
  // create a new object
  // using the object literal
  // var this = {};
  // add properties and methods

  this.name = name;
  this.say = function () {
    return "I am " + this.name;
  };
};

Person.prototype.say = function(){
  return "I am " + this.name;
}

// constructor
function Waffle() {
  this.tastes = "yummy";
  }
  // a new object
  var good_morning = new Waffle();
  console.log(typeof good_morning); // "object"
  console.log(good_morning.tastes); // "yummy"
  // antipattern:
  // forgotten `new`
  var good_morning = Waffle();
  console.log(typeof good_morning); // "undefined"
  console.log(window.tastes); // "yummy"