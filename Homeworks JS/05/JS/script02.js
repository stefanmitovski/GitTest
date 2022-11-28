var book= [

    {Title:"Elon Mask", Author:"Ashlee Vance", Price:100},
    {Title:"Onward", Author:"Elena Aguilar", Price:200},
    {Title:"Power of Body Language", Author:"Tonya Reiman", Price:300},
    {Title:"Steve Jobs", Author:"Walter Isaacson", Price:400},
    {Title:"Afterlives", Author:"Abdulrazak Gurnah", Price:500}

]

var filteredBooks=[];
var brojac=0;

for(var i=0; i<book.length; i++){
    if(book[i].Price<400){
        filteredBooks[brojac]=book[i].Title;
        brojac++;
    }
}

console.log(filteredBooks);
document.write(filteredBooks);
