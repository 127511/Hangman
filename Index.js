var geradenLetters = [" "];
var fouteLetterCount = 5;

$(document).ready(function() {
    document.getElementById("chancesleft").innerHTML = fouteLetterCount + " kansen over.";

    $(".LetterButton").click(function() {
        var letter = $(this).text();
        if (!geradenLetters.includes(letter)) {
            geradenLetters.push(letter);
            onguess(letter)
        } else {
            alert("deze letter heb je al gebruikt.");
        }
    });

    function onguess(letter) {
        var noMatches = true
        for (i = 0; i < randomwoord.length; i++) {
            if (randomwoord.charAt(i).toUpperCase() == letter.toUpperCase()) {
                document.getElementById("letter_" + i).innerHTML = letter;
                noMatches = false;
            }

        }
        if (noMatches) {
            document.getElementById("wrongguesses").innerHTML += letter + ", ";
            fouteLetterCount--;
            document.getElementById("chancesleft").innerHTML = fouteLetterCount + " kansen over.";
            if (fouteLetterCount == 0) {
                alert("Game Over.")
                location.href = "index.html";
            }
        }
        getCurrentWord();
        if (currentWord.toUpperCase() == randomwoord.toUpperCase()) {
            alert("You win!");
        }
    };

    var currentWord

    function getCurrentWord() {
        currentWord = "";
        for (i = 0; i < randomwoord.length; i++) {
            currentWord += document.getElementById("letter_" + i).innerHTML;
        }
    }

    $("#rhw").click(function() {
        $("#raden").fadeTo("slow", 1);
    });

    $("#inputR").click(function() {
        if ($("#raadW").val().toUpperCase() == randomwoord.toUpperCase()) {
            alert("You win!");
        } else {
            document.getElementById("wrongguesses").innerHTML += $("#raadW").val() + ", ";
            fouteLetterCount--;
            document.getElementById("chancesleft").innerHTML = fouteLetterCount + " kansen over.";
            if (fouteLetterCount == 0) {
                alert("Game Over.")
                location.href = "index.html";
            }
        }
    });

});
