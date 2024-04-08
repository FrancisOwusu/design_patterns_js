var reverse = function () {
  /**
   * Reverse a string
   *
   * @param {String} input String to reverse
   * @return {String} The reversed string
   */
  return output;
};

/**
 * My JavaScript application
 *
 * @module myapp
 */
var MYAPP = {};
/**
 * A math utility
 * @namespace MYAPP
 * @class math_staff
 */

MYAPP.math_stuff = {
  /**
   * sum two numbers
   *
   * @method sum
   * @param {Number} a First number
   * @param {Number} b The second number
   * @return {Number} The sum of the two inputs
   */
  sum: function (a, b) {
    return a + b;
  },
  /**
   * Multiplies two numbers
   *
   * @method multi
   * @param {Number} a First number
   * @param {Number} b The second number
   */
  multi: function (a, b) {
    return a * b;
  },
};

/**
 * Constructs Person objects
 * @class Person
 * @constructor
 * @namespace MYAPP
 * @param {String} first First name
 * @param {String} last Last name
 */
MYAPP.Person = function (first, last) {
  /**
   * Name of the person
   * @property first_name
   * @type String
   */
  this.first_name = first;
  /**
   * Last (family) name of the person
   * @property last_name
   * @type String
   */
  this.last_name = last;
};
/**
 * Returns the name of the person object
 *
 * @method getName
 * @return {String} The name of the person
 */
MYAPP.Person.prototype.getName = function () {
  return this.first_name + " " + this.last_name;
};
