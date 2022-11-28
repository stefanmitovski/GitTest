//Vezba 1
var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];

var x=JohnFollowers.length;
var y=JaneFollowers.length;
var sameFollowers=[];
var brojac=0;

for(var i=0; i<x; i++){
    for(var j=0; j<y; j++){
        if(JohnFollowers[i]==JaneFollowers[j]){
            sameFollowers[brojac]=JohnFollowers[i];
            brojac++;
        }
    }
}

console.log(sameFollowers);

