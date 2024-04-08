var person = {
  getName: function () {
    return this._getFirst() + " " + this._getLast();
  },
  _getFirst: function () {
    console.log("getFirst");
  },
  _getLast: function () {
    console.log("getLast");
  },
};
console.log(person.getName());