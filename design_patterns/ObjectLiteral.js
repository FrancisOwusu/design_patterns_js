//start with an empty object
var dog = {};
//add one property
dog.name = "Benji";

//now add a method;
dog.getName = function(){
    return dog.name;
}

//remove properties/methods completely
delete dog.name;

//add more properties and methods;
dog.say = function(){
    return "Woof!";
};
dog.flears = true;

console.log(Object.getOwnPropertyNames(dog));
//[ 'getName', 'say', 'flears' ]

//You can then use filter() to obtain only the methods:
console.log(Object.getOwnPropertyNames(dog).filter(function(p){
return typeof dog[p] === "function";
}));

//alternation to Object literal
var MPS = {
    name:"Francis",
    getName:function(){
        return this.name;
    }
}

// one way -- using a literal
var car = {goes: "far"};
// another way -- using a built-in constructor
// warning: this is an antipattern
var car = new Object();
car.goes = "far";