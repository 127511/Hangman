var woordarray = ["huis", "hond", "toetsenbord", "asfalt", "cola", "bankpas", "computer", "tuin", "bloem", "pan",
    "telefoon", "oplader", "toetje", "cd", "ijsje", "lamp", "baby", "muziek", "gieter", "elastiekje",
    "bed", "gas", "auto", "nintendo", "bord", "water", "papier", "glas", "plant", "ganzenbord",
];
var randomwoord;

function pickRandom() {
    randomwoord = woordarray[Math.floor(Math.random() * woordarray.length)];
    console.log(randomwoord);
    printRandom();
}

function printRandom() {
    for (var i = 0; i < randomwoord.length; i++) {
        var parent = document.getElementById("word");
        var newEle = document.createElement('div');
        newEle.setAttribute("id", "letter_" + i);
        newEle.setAttribute("class", "letterdiv");
        parent.appendChild(newEle);
    }

}
