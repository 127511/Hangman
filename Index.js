$(".LetterB").click(function() {
    var letter = $(this).text();
    onguess(letter)
});

function onguess(letter) {
    for (i = 0; i < randomwoord.length; i++) {
        if (randomwoord.charAt(i).toUpperCase() == letter.toUpperCase()) {
            document.getElementById("letter_" + i).innerHTML = letter;
        }
    }
};