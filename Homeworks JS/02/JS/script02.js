//Vezba 2

var programLan = [

    "JS", "ReactJS", "PHP", "Java", "Pyton", "AngularJS", "C", "C++", "VisualBasic", "SeeSharp"
]

console.log(programLan);
console.log(programLan.length);
var program=programLan.slice(0,9);
console.log(program);
console.log(program.length);
program.splice(2,1,"NodeJS");
console.log(program);