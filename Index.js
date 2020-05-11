var geradenLetters = [" "];
var fouteLetterCount = 0;
$(".LetterB").click(function() {
    var letter = $(this).text();
    if(!geradenLetters.includes(letter)){
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
    if(noMatches){
      document.getElementById("wrongguesses").innerHTML += letter + ", ";
      fouteLetterCount++;
      if (fouteLetterCount == 5) {
        alert("Game Over.")
        location.href = "index.html";
      }
    }
};
