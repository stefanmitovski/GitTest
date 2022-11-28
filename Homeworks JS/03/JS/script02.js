//Vezba 2

var month = prompt("Enter Month in the Year");

if (month === "September" || month === "October" || month === "November") {
    document.write("The season is Autumn");
} else if (month === "December" || month === "January" || month === "February") {
    document.write("The season is Winter");
} else if (month === "March" || month === "April" || month === "May") {
    document.write("The season is Spring");
} else if (month === "June" || month === "July" || month === "August") {
    document.write("The season is Summer");
}else{
    document.write("You made mistake in spelling");
}

