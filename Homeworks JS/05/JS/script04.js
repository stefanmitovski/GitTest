//Vezba4

var CountMs = (_word, _letter) => {
    var brojac = 0;
    var l=_word.length;
    for (var i = 0; i < l ; i++) {
        if (_word[i] === _letter) {
            brojac++;
        }
    }
    return brojac;
}

console.log(CountMs("MMMStefanMMMMMM", "M"));
document.write(CountMs("MMMStefanMMMMMM", "M"));
