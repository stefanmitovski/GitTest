//Vezba5

var LargestNumber = (arrey=[]) => {
    var max = -1000000000000000;
    var l = arrey.length;
    for (var i = 0; i < l; i++) {
        if (arrey[i] > max) {
            max = arrey[i];
        }
    }
    return max;
}

console.log(LargestNumber([100, 2, 300, 4, 5]));
document.write(LargestNumber([100, 2, 300, 4, 5]));