//Vezba3

var CountMs = (_word) => {
    var brojac = 0;
    var l=_word.length;
    for (var i = 0; i < l ; i++) {
        if (_word[i] === "M") {
            brojac++;
        }
    }
    return brojac;
}

console.log(CountMs("MMMStefanMM"));
document.write(CountMs("MMMStefanMM"));
