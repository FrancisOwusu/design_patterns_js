function switchP(inspect_me=0){

var result = '';
switch(inspect_me){
    case 0:
        result = "zero";
        break;
    case 1:
        result= "one";
        break;
    default:
        result = "unkown";
}
}
console.log(switchP(0))

//Avoiding Implied Typecasting
//best practice
var zero = 0;
if (zero === false) {
// not executing because zero is 0, not false
}
// antipattern
if (zero == false) {
// this block is executed...
}