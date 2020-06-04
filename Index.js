var geradenLetters = [" "];
var fouteLetterCount = 5;
$(".win").hide();
$(".lose").hide();

var currentWord

function getCurrentWord() {
    currentWord = "";
    for (i = 0; i < randomwoord.length; i++) {
        currentWord += document.getElementById("letter_" + i).innerHTML;
    }
}

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
            $('.imgbox').css("background-image", "url(image/" + fouteLetterCount +".png)");
            document.getElementById("chancesleft").innerHTML = fouteLetterCount + " kansen over.";
            if (fouteLetterCount == 0) {
                $("#PArea").fadeOut().promise().done(function() {
                    $('#lose').fadeIn();
                });
              }
            }

                getCurrentWord();
                if (currentWord.toUpperCase() == randomwoord.toUpperCase()) {
                  $("#PArea").fadeOut().promise().done(function() {
                      $('#win').fadeIn();
                  });
                }

          }


            $("#rhw").click(function() {
                $("#raden").fadeTo("slow", 1);
            });

            $("#inputR").click(function() {
                if ($("#raadW").val().toUpperCase() == randomwoord.toUpperCase()) {
                  $("#PArea").fadeOut().promise().done(function() {
                      $('#win').fadeIn();
                  });
                } else {
                    document.getElementById("wrongguesses").innerHTML += $("#raadW").val() + ", ";
                    fouteLetterCount--;
                    $('.imgbox').css("background-image", "url(image/" + fouteLetterCount +".png)");
                    document.getElementById("chancesleft").innerHTML = fouteLetterCount + " kansen over.";
                    if (fouteLetterCount == 0) {
                      $("#PArea").fadeOut().promise().done(function() {
                          $('#lose').fadeIn();
                      });
                    }
                }
            });
          });
